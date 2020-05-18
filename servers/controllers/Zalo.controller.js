
const Core = require('../functions/M_Core.function');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');
const fetch = require('node-fetch');
const Config = require('../models/Config.model');
const config = require('../../config');
const zalo = 'zalo';

exports.webhook = async function (req, res) {
    try {

        var zaloTemp = req.body;
        const con = await Config.findOne({ botId: req.params.botId });
        var _token = con.zalo_token;
        if (zaloTemp.event_name == 'user_send_text') {
            let chechText = zaloTemp.message.text.search('{');
            if (chechText != -1)
                await Core.handlePostback(zaloTemp.sender.id, zaloTemp.message.text, zalo, _token, req.params.botId);
            else
                await Core.handleMessage(zaloTemp.sender.id, zaloTemp.message.text, zalo, _token, req.params.botId);
            return sR.sendResponse(res, 200, null, message.getSuccess);
        }
        return sR.sendResponse(res, 200, null, message.getSuccess);
    } catch (error) {
        console.log('Error[Zalo:webhook]: ' + error);
        return sR.sendResponse(res, 200, null, error);
    }
};


// get by id
exports.sendMessage = async function (senderId, temp_message, access_token) {
    try {
        //console.log(temp_message);
        var sendObject = null;
        switch (temp_message.template_type) {
            case "text":
                sendObject = text_template(senderId, temp_message);
                break;
            case "list":
                sendObject = list_template(senderId, temp_message);
                break;
            case "list_product": {
                //console.log(temp_message)
                if (temp_message.elememts != undefined)
                    for (let i = 0; i < temp_message['elememts'].length; i++) {
                        let el = temp_message.elememts[i];
                        sendObject = list_product_template(senderId, el);
                        await fetch("https://openapi.zalo.me/v2.0/oa/message?access_token=" + access_token, {
                            method: "POST",
                            body: JSON.stringify(
                                sendObject
                            )
                        });
                        await new Promise(resolve => setTimeout(resolve, 800));
                    }
                return;
            }
            //break;
            case "media":
                sendObject = media_template(senderId, temp_message);
                break;

            default:
                sendObject = request_user_info_template(senderId, temp_message);
                break;
        }
        //console.log(sendObject);
        const response = await fetch("https://openapi.zalo.me/v2.0/oa/message?access_token=" + access_token, {
            method: "POST",
            body: JSON.stringify(
                sendObject
            )
        });
        //console.log(sendObject)
        const json = await response.json();
        //console.log(json)
        await new Promise(resolve => setTimeout(resolve, 800));
        return;

    } catch (error) {

        console.log('Error[Zalo:sendMessage]: ' + error);
        return sR.sendResponse(res, 400, null, error);
    }
};

text_template = function (senderId, temp_message) {
    let sendObject = {
        recipient: {
            user_id: "",
        },
        message: {
            text: "",
            attachment: {
                type: "template",
                payload: {
                    buttons: [
                    ]
                }
            }
        },
    };
    sendObject.recipient.user_id = senderId;
    sendObject.message.text = temp_message.content;
    if (temp_message.button.length > 0)
        sendObject.message.attachment.payload.buttons = add_button(temp_message.button)

    return sendObject;
}

list_template = function (senderId, temp_message) {
    let sendObject = {
        recipient: {
            user_id: "",
        },
        message: {
            attachment: {
                type: "template",
                payload: {
                    template_type: "list",
                    elements: [
                    ],
                    buttons: [

                    ]
                }
            }
        }
    };
    sendObject.recipient.user_id = senderId;
    sendObject.message.attachment.payload.elements = add_element(temp_message.elememts);
    sendObject.message.attachment.payload.buttons = add_button(temp_message.button);
    return sendObject;

}

list_product_template = function (senderId, temp_message) {
    let sendObject = {
        recipient: {
            user_id: "",
        },
        message: {
            attachment: {
                type: "template",
                payload: {
                    template_type: "list",
                    elements: [{
                        title: "",
                        subtitle: "",
                        image_url: "",
                    }
                    ],
                    buttons: [

                    ]
                }
            }
        }
    };
    sendObject.recipient.user_id = senderId;
    sendObject.message.attachment.payload.elements[0] = { title: temp_message.title, subtitle: temp_message.subtitle == null ? ' ' : temp_message.subtitle == ''? ' ': temp_message.subtitle, image_url: config.server_url + temp_message.image_url };
    sendObject.message.attachment.payload.buttons = add_button(temp_message.button);
    return sendObject;

}

media_template = function (senderId, temp_message) {
    let sendObject = {
        recipient: {
            user_id: "",
        },
        message: {
            text: "",
            attachment: {
                type: "template",
                payload: {
                    template_type: "media",
                    elements: [{
                        media_type: "image",
                        url: ""
                    }
                    ],
                    buttons: [

                    ]
                }
            }
        }
    };
    sendObject.recipient.user_id = senderId;
    sendObject.message.text = temp_message.title
    sendObject.message.attachment.payload.elements[0].url = config.server_url + temp_message.image_url;
    sendObject.message.attachment.payload.buttons = add_button(temp_message.button);
    return sendObject;

}

request_user_info_template = async function (senderId, temp_message) {

}

add_button = function (button) {
    try {

        let buttons = [];
        for (let ibtn = 0; ibtn < button.length; ibtn++) {
            switch (button[ibtn].type) {
                case "url":
                    {
                        let elbtn = {
                            title: "",
                            payload: {
                                url: ""
                            },
                            type: "oa.open.url"
                        };
                        elbtn.title = button[ibtn].title;
                        elbtn.payload.url = button[ibtn].url;
                        buttons.push(elbtn);

                    }
                    break;
                case "phone":
                    {
                        let elbtn = {
                            title: "",
                            payload: {
                                phone_code: ""
                            },
                            type: "oa.open.phone"
                        };
                        elbtn.title = button[ibtn].title;
                        elbtn.payload.phone_code = button[ibtn].phone;
                        buttons.push(elbtn);

                    }
                    break;
                case "callback":
                    {
                        let elbtn = {
                            title: "",
                            payload: "",
                            type: "oa.query.hide"
                        };
                        elbtn.title = button[ibtn].title;
                        if (button[ibtn].redirectToBlock == undefined || button[ibtn].redirectToBlock == '')
                            button[ibtn].redirectToBlock = null;
                        if (button[ibtn].value == undefined || button[ibtn].value == '')
                            button[ibtn].value = null;
                        let payData = {
                            redirectToBlock: button[ibtn].redirectToBlock,
                            value: button[ibtn].value
                        }
                        elbtn.payload = JSON.stringify(payData);
                        buttons.push(elbtn);
                    }
                    break;

                default:
                    break;
            }

        }
        return buttons;
    } catch (error) {
        console.log('Error[Zalo:addbutton]: ' + error);
        return [];
    }

}

add_default_action = function (action) {
    try {
        if (action) {
            switch (action.type) {
                case "url":
                    {
                        let el = {
                            url: "",
                            type: "oa.open.url"
                        };
                        el.url = action.url;
                        return el;
                    }
                case "phone":
                    {
                        let el = {
                            payload: {
                                phone_code: ""
                            },
                            type: "oa.open.phone"
                        };
                        el.payload.phone_code = action.phone;

                        return el;
                    }
                case "callback":
                    {
                        let el = {
                            payload: "",
                            type: "oa.query.hide"
                        };

                        if (action.value == undefined || action.value == '')
                            action.value = null;
                        let payData = {
                            redirectToBlock: action.redirectToBlock == undefined ? null : action.redirectToBlock,
                            value: action.value
                        }
                        el.payload = JSON.stringify(payData);
                        return el;
                    }

                default:
                    break;
            }
        }
    } catch (error) {
        console.log('Error[Zalo:adddefautaction]: ' + error);
        return [];
    }

}

add_element = function (elememts) {
    try {
        let items = [];
        for (let it = 0; it < elememts.length; it++) {
            let elit = {
            };

            elit.title = elememts[it].title;
            elit.subtitle = elememts[it].subtitle == null ? ' ' : elememts[it].subtitle == ''? ' ': elememts[it].subtitle;
            elit.image_url = config.server_url + elememts[it].image_url;
            elit.default_action = add_default_action(elememts[it].default_action);
            items.push(elit);
        }
        return items;
    } catch (error) {
        console.log('Error[Zalo:addElement]: ' + error);
        return [];
    }

}
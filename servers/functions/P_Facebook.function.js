var Config = require('../models/Config.model');
var sR = require('../functions/M_SendResponse.function');
var message = require('../functions/C_String.function');
const request = require('request');
const Core = require('../functions/M_Core.function');
const M_Message_handling = require('./M_Message_handling.function');
const config = require('../../config');
const C_String = require('./C_String.function');


exports.webhookVerify = async (req, res) => {

    // Your verify token. Should be a random string.
    var currConfig = await Config.findOne({ botId: req.params.botId });
    // Parse the query params
    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];

    // Checks if a token and mode is in the query string of the request
    if (mode && token) {

        // Checks the mode and token sent is correct
        if (mode === 'subscribe' && token === currConfig.fa_verify_token) {

            // Responds with the challenge token from the request
            //console.log('WEBHOOK_VERIFIED');
            res.status(200).send(challenge);

        } else {
            // Responds with '403 Forbidden' if verify tokens do not match
            res.sendStatus(403);
        }
    }
};

// get script by botid method
exports.webhook = async (req, res) => {
    try {
        // Parse the request body from the POST
        var body = req.body;

        const currConfig = await Config.findOne({ botId: req.params.botId });
        // Check the webhook event is from a Page subscription
        if (body.object === 'page') {

            // Iterate over each entry - there may be multiple if batched
            body.entry.forEach(function (entry) {

                // Gets the body of the webhook event
                var webhook_event = entry.messaging[0];
                //console.log(webhook_event);

                // Get the sender PSID
                var sender_psid = webhook_event.sender.id;
                //console.log('Sender PSID: ' + sender_psid);

                // Check if the event is a message or postback and
                // pass the event to the appropriate handler function
                if (webhook_event.message) {
                    handleMessage(req.params.botId, currConfig.fa_page_token, sender_psid, webhook_event.message);
                } else if (webhook_event.postback) {
                    handlePostback(req.params.botId, currConfig.fa_page_token, sender_psid, webhook_event.postback);
                }

            });

            // Return a '200 OK' response to all events
            res.status(200).send('EVENT_RECEIVED');

        } else {
            // Return a '404 Not Found' if event is not from a page subscription
            res.sendStatus(404);
        }
    } catch (error) {
        console.log(error);
    }
};

// Sends response messages via the Send API
exports.sendMessage = async (senderId, temp_message, PAGE_ACCESS_TOKEN, botId) => {
    // Construct the message body
    var sendObject = null;
    switch (temp_message.template_type) {
        case "text":
            sendObject = face_text_template(senderId, temp_message);
            break;
        case "list":
            sendObject = face_list_template(senderId, temp_message);
            break;
        case "list_product":
            sendObject = face_list_product_template(senderId, temp_message);
            break;
        case "media":
            sendObject = face_media_template(senderId, temp_message);
            break;
        case "suggest":
            sendObject = face_quick_replies(senderId, temp_message);
            break;
        default:
            break;
    }

    await M_Message_handling.handleLiveChat(temp_message, senderId, false, temp_message.template_type, botId);
    face_typing("typing_on", senderId, PAGE_ACCESS_TOKEN);
    await new Promise(resolve => setTimeout(resolve, 1000));
    face_typing("typing_off", senderId, PAGE_ACCESS_TOKEN);
    await new Promise(resolve => setTimeout(resolve, 800));
    // Send the HTTP request to the Messenger Platform
    request({
        "uri": "https://graph.facebook.com/v2.6/me/messages",
        "qs": { "access_token": PAGE_ACCESS_TOKEN },
        "method": "POST",
        "json": sendObject
    }, (err, res, body) => {
        if (!err) {
            //
        } else {
            console.error("Unable to send message:" + err);
        }
    });



    return;
};




// Handles messages events
handleMessage = async (botId, PAGE_ACCESS_TOKEN, sender_psid, received_message) => {
    // Check if the message contains text
    if (received_message.text) {
        if (received_message.is_echo == undefined) {
            await M_Message_handling.handleCustomer(sender_psid, C_String.face, PAGE_ACCESS_TOKEN, botId);
            let isActive = await M_Message_handling.handleSupport(sender_psid, botId);
            await M_Message_handling.handleLiveChat(received_message.text, sender_psid, true, 'text', botId);
            if (isActive)
                await Core.handleText(sender_psid, received_message.text, C_String.face, PAGE_ACCESS_TOKEN, botId);

        }

    }
}

// Handles messaging_postbacks events
handlePostback = async (botId, PAGE_ACCESS_TOKEN, sender_psid, received_postback) => {
    await M_Message_handling.handleCustomer(sender_psid, C_String.face, PAGE_ACCESS_TOKEN, botId);
    await M_Message_handling.handleLiveChat(received_postback.payload, sender_psid, true, 'btn', botId);
    let isActive = await M_Message_handling.handleSupport(sender_psid, botId);
    if (isActive)
        await Core.handlePostback(sender_psid, received_postback.payload, C_String.face, PAGE_ACCESS_TOKEN, botId);
}


face_text_template = (senderId, temp_message) => {
    if (temp_message.button.length == 0) {
        let sendObject = {
            recipient: {
                id: "",
            },
            message: {
                text: "",
            },
        };
        sendObject.recipient.id = senderId;
        sendObject.message.text = temp_message.content;
        return sendObject;
    } else {
        let sendObject = {
            recipient: {
                id: "",
            },
            message: {
                attachment: {
                    type: "template",
                    payload: {
                        template_type: "button",
                        text: null,
                        buttons: [
                        ]
                    }
                }
            },
        };
        sendObject.recipient.id = senderId;
        sendObject.message.attachment.payload.text = temp_message.content;
        sendObject.message.attachment.payload.buttons = face_add_button(temp_message.button);
        return sendObject;
    }


}

face_list_template = (senderId, temp_message) => {
    let sendObject = {
        recipient: {
            id: "",
        },
        message: {
            attachment: {
                type: "template",
                payload: {
                    template_type: "generic",
                    elements: [
                    ],
                }
            }
        }
    };
    sendObject.recipient.id = senderId;
    sendObject.message.attachment.payload.elements = face_add_element(temp_message.elememts);
    return sendObject;

}

face_list_product_template = (senderId, temp_message) => {
    let sendObject = {
        recipient: {
            id: "",
        },
        message: {
            attachment: {
                type: "template",
                payload: {
                    template_type: "generic",
                    elements: [
                    ],
                }
            }
        }
    };
    sendObject.recipient.id = senderId;
    sendObject.message.attachment.payload.elements = face_add_element_product(temp_message.elememts);
    return sendObject;

}

face_media_template = (senderId, temp_message) => {
    let sendObject = {
        recipient: {
            id: "",
        },
        message: {
            attachment: {
                type: "template",
                payload: {
                    template_type: "generic",
                    elements: [
                        {
                            image_url: "",
                        }
                    ],
                }
            }
        }
    };
    sendObject.recipient.id = senderId;
    sendObject.message.attachment.payload.elements[0].title = temp_message.title;
    sendObject.message.attachment.payload.elements[0].image_url = config.server_url + temp_message.image_url;
    if (temp_message.button.length > 0)
        sendObject.message.attachment.payload.elements[0].buttons = face_add_button(temp_message.button);
    return sendObject;

}

face_add_button = (button) => {
    try {

        let buttons = [];
        for (let ibtn = 0; ibtn < button.length; ibtn++) {
            switch (button[ibtn].type) {
                case "url":
                    {
                        let elbtn = {
                            title: "",
                            url: "",
                            type: "web_url"
                        };
                        elbtn.title = button[ibtn].title;
                        elbtn.url = button[ibtn].url;
                        buttons.push(elbtn);

                    }
                    break;
                case "phone":
                    {
                        let elbtn = {
                            title: "",
                            payload: "",
                            type: "phone_number"
                        };
                        elbtn.title = button[ibtn].title;
                        elbtn.payload = '+84' + button[ibtn].phone;
                        buttons.push(elbtn);

                    }
                    break;
                case "callback":
                    {
                        let elbtn = {
                            title: "",
                            payload: "",
                            type: "postback"
                        };
                        elbtn.title = button[ibtn].title;
                        if (button[ibtn].redirectToBlock == undefined || button[ibtn].redirectToBlock == '')
                            button[ibtn].redirectToBlock = null;
                        if (button[ibtn].value == undefined || button[ibtn].value == '')
                            button[ibtn].value = null;
                        let payData = {
                            redirectToBlock: button[ibtn].redirectToBlock,
                            key: button[ibtn].key,
                            value: button[ibtn].value,
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
        console.log('Error[Facebook:addbutton]: ' + error);
        return [];
    }

}

face_add_element_product = (elememts) => {
    try {

        let items = [];
        for (let it = 0; it < elememts.length; it++) {
            let elit = {
            };

            elit.title = elememts[it].title;
            elit.subtitle = elememts[it].subtitle == null ? '' : elememts[it].subtitle;
            elit.image_url = config.server_url + elememts[it].image_url;
            if (elememts[it].button.length > 0)
                elit.buttons = face_add_button(elememts[it].button);
            items.push(elit);
        }

        return items;
    } catch (error) {
        console.log('Error[Facebook:addElement]: ' + error);
        return [];
    }

}

face_add_element = (elememts) => {
    try {
        let items = [];
        for (let it = 0; it < elememts.length; it++) {
            let elit = {
            };

            elit.title = elememts[it].title;
            elit.subtitle = elememts[it].subtitle == null ? '' : elememts[it].subtitle;
            elit.image_url = config.server_url + elememts[it].image_url;
            if (elememts[it].button.length > 0)
                elit.buttons = face_add_button(elememts[it].button);
            items.push(elit);
        }
        return items;
    } catch (error) {
        console.log('Error[Facebook:addElement]: ' + error);
        return [];
    }

}

face_typing = (typing, senderId, PAGE_ACCESS_TOKEN) => {
    try {
        let sendObject = {
            recipient: {
                id: senderId
            },
            sender_action: typing
        }

        request({
            "uri": "https://graph.facebook.com/v2.6/me/messages",
            "qs": { "access_token": PAGE_ACCESS_TOKEN },
            "method": "POST",
            "json": sendObject
        }, (err, res, body) => {
            if (!err) {
                //console.log('message sent!')
            } else {
                console.error("Unable to send message:" + err);
            }
        });

    } catch (error) {
        console.log('Error[FaceBook:face_typing]: ' + error);
        return null;
    }
}
// comming soon
face_quick_replies = () => {
    try {

    } catch (error) {
        console.log('Error[FaceBook:face_quick_replies]: ' + error);
        return;
    }

}
const Memory = require('../models/Memory,model');
const Block = require('../models/Block.model');
const Step = require('../models/Step.model');
const Intent = require('../models/Intent.model');
const Entity = require('../models/Entity.model');
const Zalo = require('../controllers/Zalo.controller');
const fetch = require('node-fetch');
const config = require('../../config');

const zalo = 'zalo';
const face = 'facebook'
const default_answer = '$default_answer';
const text_card = 'text-card';
const form_card = 'form-card';
const info_card = 'info-card';
const product_card = 'product-card';
const go_to_card = 'go-to-card';
const image_card = 'image-card';
const memory_card = 'memory-card';
const api_card = 'api-card';
const not_found = 'Không có kết quả phù hợp với yêu cầu của bạn!';

exports.getAnswer = async function (sender_id, botId, text, platForm, platForm_token) {

    try {
        if (text != null) {
            let mem = await getMemmory(sender_id, platForm, botId);
            let chechText = text.search('{');
            let works = mem.works;
            let works2 = await getWorks(default_answer, botId);
            if (chechText != -1) {

                let obj = JSON.parse(text);
                if (obj.redirectToBlock != null) {
                    works = await getWorks(obj.redirectToBlock, botId);
                    if (obj.value != null) {
                        let json = await getWit(text, botId);
                        if (json != null && Object.keys(json.entities).length != 0) {
                            await setVariables(mem._id, json);
                        }
                        else {

                            works = mergeArray(works2, works);
                        }
                    }
                }
            }
            else {

                let json = await getWit(text, botId);
                if (json != null && Object.keys(json.entities).length != 0) {
                    if (json.entities['intent'])
                        works = await getWorks(json.entities['intent'][0].value, botId);
                    await setVariables(mem._id, json);
                }
                else {
                    works = mergeArray(works2, works);
                }
            }

            mem.works = works;
            await mem.save();
            return await findData(sender_id, mem._id, platForm_token);
        }
        return null;
    } catch (error) {
        console.log('Error[M_Core:getAnswer]: ' + error);
        return null;
    }
};


findData = async function (sender_id, memoryId, platForm_token) {

    try {
        let mem = await Memory.findById(memoryId);
        while (mem.works[0] != undefined) {
            switch (mem.works[0].type) {
                case form_card:
                    {

                        let obj = mem.variables.find(o => o.entityName === mem.works[0].variable);
                        if (obj != undefined) {
                            mem.works.shift();
                            //await mem.save();
                        } else {
                            await mem.save()
                            await sendMessage(sender_id, mem.works[0], mem.platForm, platForm_token);
                            return;
                        }

                    }
                    break;
                case text_card:
                    {
                        await sendMessage(sender_id, mem.works[0], mem.platForm, platForm_token);
                        mem.works.shift();
                        //await mem.save();
                    }
                    break;
                case info_card:
                    {

                        await sendMessage(sender_id, mem.works[0], mem.platForm, platForm_token);
                        mem.works.shift();
                        //await mem.save();
                    }
                    break;
                case product_card:
                    {
                        let pro = mem.works[0];
                        for (let i = 0; i < mem.variables.length; i++) {
                            let el = mem.variables[i];
                            if (el.entityName == pro.variable) {
                                let res = pro.elememts.find(o => o.value.toLowerCase() === el.value.toLowerCase());
                                if (res) {
                                    let obj_pro = {};
                                    obj_pro['elememts'] = [{ title: res.title, subtitle: res.subtitle, image_url: res.image_url, default_action: null }];
                                    obj_pro['button'] = res.button;
                                    obj_pro['template_type'] = 'list';
                                    obj_pro['type'] = 'product-card';
                                    await sendMessage(sender_id, obj_pro, mem.platForm, platForm_token);
                                } else{
                                    let obj_pro = {};
                                    //obj_pro['elememts'] = [{ title: res.title, subtitle: res.subtitle, image_url: res.image_url, default_action: null }];
                                    obj_pro['content'] = not_found;
                                    obj_pro['button'] = [];
                                    obj_pro['template_type'] = 'text';
                                    obj_pro['type'] = 'product-card';
                                    await sendMessage(sender_id, obj_pro, mem.platForm, platForm_token);
                                }
                            }
                        }
                        mem.works.shift();
                        //await mem.save();
                    }
                    break;
                case image_card:
                    {
                        await sendMessage(sender_id, mem.works[0], mem.platForm, platForm_token);
                        mem.works.shift();
                        // let mem_temp = await Memory.findById(memoryId);
                        // mem_temp.works = mem.works;
                        // await mem_temp.save();

                    }
                    break;
                case go_to_card:
                    {
                        works = await getWorks(mem.works[0].blockName, mem.botId);
                        mem.works = works;
                        //mem.works.shift();
                        // let mem_temp = await Memory.findById(memoryId);
                        // mem_temp.works = works;
                        // await mem_temp.save();
                    }
                    break;
                case memory_card:
                    {
                        await removetVariable(memoryId, mem.works[0]);
                        mem.works.shift();
                        // let mem_temp = await Memory.findById(memoryId);
                        // mem_temp.works = mem.works;
                        // await mem_temp.save();

                    }
                    break;
                case api_card:
                    {
                    }
                    break;

                default:
                    return;
            }
        }
        await mem.save();
        return;
    } catch (error) {
        console.log('Error[M_Core:FindData]: ' + error);
        return;
    }
};


getMemmory = async function (sender_id, platForm, botId) {
    let mem = await Memory.findOne({ senderId: sender_id, botId: botId });
    if (!mem) {
        var obj = {};
        obj.senderId = sender_id;
        obj.botId = botId;
        obj.variables = [];
        obj.works = [];
        obj.platForm = platForm;

        let curr = await Memory.create(obj);
        return curr;

    }
    return mem;
}

setVariables = async function (memoryId, json) {
    try {
        let mem = await Memory.findById(memoryId);
        if (mem) {
            let ent = await Entity.find({ botId: mem.botId });
            if (ent) {
                for (let i = 0; i < ent.length; i++) {
                    let el = ent[i];
                    if (json.entities[el.name]) {
                        let obj = mem.variables.find(o => o.entityName === el.name);
                        if (obj) {
                            let index = mem.variables.indexOf(obj);
                            if (index != -1) {
                                mem.variables[index] = { entityName: el.name, value: json.entities[el.name][0].value };
                            }
                        } else
                            mem.variables.push({ entityName: el.name, value: json.entities[el.name][0].value });
                    }
                }
            }
            await mem.save();
            return;
        }
        return;
    } catch (error) {
        console.log('Error[M_Core:setVariables]: ' + error);
        return;
    }
}

// return json of wit
getWit = async function (text, botId) {
    try {
        let response = await fetch('https://api.wit.ai/message' + config.version + '&q=' + encodeURI(text), {
            method: "GET",
            headers: { Authorization: config.auth + botId },
        });

        let json = await response.json();
        if (json.error == undefined) {
            return json;
        }
        return null;
    } catch (error) {
        console.log('Error[M_Core:getWit]: ' + error);
        return null;
    }
}
// return list work
getWorks = async function (intentName, botId) {
    try {
        let works = [];
        let bloc = await Block.findOne({ intentName: intentName, botId: botId });

        if (bloc) {
            let step = await Step.find({ blockId: bloc._id }).sort({ position : 1})
            if (step)
                for (let i = 0; i < step.length; i++) {
                    let el = step[i];
                    switch (el.type) {
                        case "form-card":
                            {
                                if (el.items.length > 0) {
                                    for (let i1 = 0; i1 < el.items.length; i1++) {
                                        let el1 = el.items[i1];
                                        if (el1.variable)
                                            works.push(el1);
                                    }
                                }
                            }
                            break;
                        case "text-card":
                            {
                                works.push(el.items[0]);
                            }
                            break;
                        case "go-to-card":
                            {
                                if (el.items[0].blockName)
                                    works.push(el.items[0]);
                            }
                            break;
                        default:
                            {
                                works.push(el.items[0]);
                            }
                            break;
                    }
                }
        }
        return works;
    } catch (error) {
        console.log('Error[M_Core:getWorks]: ' + error);
        return [];
    }
}
// return merger arr = arr1 + arr2
mergeArray = function (arr1, arr2) {
    try {
        let arr = [];
        arr = arr1.concat(arr2);
        //console.log(arr);
        return arr;
    } catch (error) {
        console.log('Error[M_Core:mergeArray]: ' + error);
        return [];
    }
}


// removetVariable
removetVariable = async function (memoryId, obj) {
    try {
        let mem = await Memory.findById(memoryId);
        if (obj.isRemoveAll)
            mem.variables = [];
        else {
            if (obj.removeVariables.length > 0) {
                for (let i1 = 0; i1 < obj.removeVariables.length; i1++) {
                    let el1 = obj.removeVariables[i1];
                    let temp = mem.variables.find(o => o.entityName === el1);
                    if (temp) {
                        let index = mem.variables.indexOf(temp);
                        mem.variables.splice(index, 1);
                    }
                }
            }
        }

        if (obj.setVariables.length > 0) {
            for (let i2 = 0; i2 < obj.setVariables.length; i2++) {
                const el2 = obj.setVariables[i2];

                let temp2 = mem.variables.find(o => o.entityName === el2.variable);
                if (temp2) {
                    let index2 = mem.variables.indexOf(temp2);
                    mem.variables[index2].value = el2.value;
                } else {
                    mem.variables.push({ entityName: el2.variable, value: el2.value });
                }

            }
        }
        await mem.save();
        return;

    } catch (error) {
        console.log('Error[M_Core:removetVariable]: ' + error);
        return;
    }
}


sendMessage = async function (sender_id, data, platForm, platForm_token) {
    if (platForm == zalo)
        await Zalo.sendMessage(sender_id, data, platForm_token);
    else if (mem.platForm == face)
        await Zalo.sendMessage(sender_id, data, platForm_token);
}
const Memory = require('../models/Memory,model');
const Block = require('../models/Block.model');
const Step = require('../models/Step.model');
const SupportRequest = require('../models/SupportRequest.model');
const Customer = require('../models/Customer.model');
const Entity = require('../models/Entity.model');
const Config = require('../models/Config.model');
const Zalo = require('../functions/P_Zalo.function');
const FaceBook = require('../functions/P_Facebook.function');
const Notification = require('../controllers/Notification.controller');
const M_Message_handling = require('./M_Message_handling.function');
const P_Wit = require('./P_Wit.function');
const M_Condition = require('../functions/M_Condition.function');
const fetch = require('node-fetch');
const config = require('../../config');
const sever = require('../../server');
const { find } = require('../models/Memory,model');

const zalo = 'zalo';
const face = 'facebook';
const default_answer = '$default_answer';
const text_card = 'text-card';
const form_card = 'form-card';
const info_card = 'info-card';
const product_card = 'product-card';
const go_to_card = 'go-to-card';
const image_card = 'image-card';
const memory_card = 'memory-card';
const api_card = 'api-card';
const support_card = 'support-card';
const phone_card = 'phone-card';
const survey_card = 'survey-card';
const not_found = 'Không có kết quả phù hợp với yêu cầu của bạn!';

// ***main function***

// handle message type  text
exports.handleText = async (sender_id, message, channel, channel_token, botId) => {

    try {
        let mem = await getMemmory(sender_id, channel, botId);
        let works = mem.works;
        let is_mapping = false;
        let wit_object = await wit_understanding(message, botId);
        let conf = await Config.findOne({ botId: botId });
        let works_default = await getWorks(default_answer, null, botId);
        await M_Message_handling.handleCustomer(sender_id, channel.channel_token, botId);

        if (wit_object != null) {
            if (wit_object.intents.length != 0) {
                let intents = await intents_invalid(wit_object.intents, conf);
                if (intents.length == 1) {
                    works = await getWorks(intents[0].name, null, botId);
                    if (Object.keys(wit_object.entities).length != 0)
                        await saveVariable(mem._id, wit_object.entities, true);
                    await M_Message_handling.handleHistory(sender_id, message, intents[0].name, 1, intents[0].confidence, botId);

                }
                //
                if (intents.length == 0) {
                    await M_Message_handling.handleUnknowRequest(message, sender_id, botId);
                    await M_Message_handling.handleHistory(sender_id, message, null, 0, null, botId);
                    works = mergeArray(works_default, works);
                }
                // bot suggest
                if (intents.length > 1) {
                    await M_Message_handling.handleHistory(sender_id, message, null, 3, null, botId);
                    if (conf.isSuggest)
                        return await bot_suggest(sender_id, intents, channel, channel_token, botId);
                    else {
                        works = await getWorks(intents[0].name, null, botId);
                        if (Object.keys(wit_object.entities).length != 0)
                            await saveVariable(mem._id, wit_object.entities, true);
                        await M_Message_handling.handleHistory(sender_id, message, intents[0].name, 1, intents[0].confidence, botId);
                    }
                }

            } else {
                if (works.length == 0) {
                    await M_Message_handling.handleUnknowRequest(message, sender_id, botId);
                    await M_Message_handling.handleHistory(sender_id, message, null, 0, null, botId);
                    works = mergeArray(works_default, works);
                } else {
                    is_mapping = true;
                    await M_Message_handling.handleHistory(sender_id, message, null, 4, null, botId);
                }
            }

            mem.works = works;
            await mem.save();
            return await bot_brain(message, sender_id, mem._id, is_mapping, channel, channel_token, botId);
        }
        return null;
    } catch (error) {
        console.log('Error[M_Core:handleText]: ' + error);
        return null;
    }
};

// handle message type  postback
exports.handlePostback = async (sender_id, message, channel, channel_token, botId) => {

    try {
        let mem = await getMemmory(sender_id, channel, botId);
        let works = mem.works;
        let obj = JSON.parse(message);

        if (obj.redirectToBlock != null) {

            works = await getWorks(null, obj.redirectToBlock, botId);
            await M_Message_handling.handleHistory(sender_id, message, null, 2, null, botId);

            if (obj.key != null && obj.value != null)
                await saveVariable(mem._id, [{ key: obj.key, value: obj.value }], false);

            mem.works = works;
            await mem.save();
            return await bot_brain(message, sender_id, mem._id, false, channel, channel_token, botId);
        }
        return null;
    } catch (error) {
        console.log('Error[M_Core:handlePostback]: ' + error);
        return null;
    }
}

// ***end main function***

// ***AI function***
// mapping template for steps
bot_brain = async (message, sender_id, memoryId, is_mapping, channel, channel_token, botId) => {
    try {
        let mem = await Memory.findById(memoryId);
        let ent = await Entity.find({ botId: botId });

        while (mem.works[0] != undefined) {
            if (!M_Condition.condition_checking(mem.works[0].conditions, ent, mem))
                mem.works.shift();
            else
                switch (mem.works[0].type) {
                    case text_card:
                        {
                            await bot_send(sender_id, mem.works[0].items[0], channel, channel_token, botId);
                            mem.works.shift();
                        }
                        break;
                    case image_card:
                        {
                            await bot_send(sender_id, mem.works[0].items[0], channel, channel_token, botId);
                            mem.works.shift();
                        }
                        break;
                    case info_card:
                        {
                            await bot_send(sender_id, mem.works[0].items[0], channel, channel_token, botId);
                            mem.works.shift();
                        }
                        break;
                    case product_card:
                        {
                            let pros = mem.works[0].items[0];
                            let variable_search = mem.variables.filter(o => o.name === pros.variable);
                            let result = [];
                            if (variable_search.length > 0)
                                pros.elememts.forEach(pro => {
                                    if (variable_search[0].value.toLowerCase() == pro.value.toLowerCase()) {
                                        result.push(pro);
                                    }
                                });

                            if (result.length > 0) {
                                let obj_pro = {};
                                obj_pro['elememts'] = result;
                                obj_pro['template_type'] = 'list_product';
                                await bot_send(sender_id, obj_pro, channel, channel_token, botId);
                            } else {
                                let obj_pro = {};
                                obj_pro['content'] = not_found;
                                obj_pro['button'] = [];
                                obj_pro['template_type'] = 'text';
                                await bot_send(sender_id, obj_pro, channel, channel_token, botId);
                            }

                            mem.works.shift();
                        }
                        break;
                    case go_to_card:
                        {
                            works = await getWorks(null, mem.works[0].items[0].blockId, botId);
                            mem.works = works;

                        }
                        break;
                    case form_card:
                        {

                            if (is_mapping) {
                                if (Validate(mem.works[0].validation, message)) {
                                    let value = await wit_value_checking(mem.works[0].validation, mem.works[0].name, message.replace(/\s/g, ''), botId)
                                    mem.variables.push({ name: mem.works[0].name, value: value });
                                    mem.works.shift();
                                }
                                else {
                                    await bot_send(sender_id, mem.works[0], channel, channel_token, botId);
                                    await mem.save();
                                    return;
                                }
                            } else {
                                let variable_check = mem.variables.find(o => o.name === mem.works[0].name);
                                if (variable_check) {
                                    mem.works.shift();
                                } else {
                                    await bot_send(sender_id, mem.works[0], channel, channel_token, botId);
                                    await mem.save();
                                    return;
                                }
                            }

                        }
                        break;
                    case memory_card:
                        {
                            if (mem.works[0].items[0].isRemoveAll) {
                                let cus = await Customer.findOne({ senderId: sender_id, botId: botId });
                                let default_variables = [
                                    { name: 'sender_id', value: sender_id },
                                    { name: 'sender_name', value: cus.name },
                                    { name: 'sender_input', value: null },
                                    { name: 'nlp_predict', value: null },
                                    { name: 'channel', value: channel }
                                ];
                                mem.variables = default_variables;
                            }
                            else {
                                if (mem.works[0].items[0].removeVariables.length > 0) {
                                    for (let i1 = 0; i1 < mem.works[0].items[0].removeVariables.length; i1++) {
                                        let el1 = mem.works[0].items[0].removeVariables[i1];
                                        let temp = mem.variables.find(o => o.name === el1);
                                        if (temp) {
                                            let index = mem.variables.indexOf(temp);
                                            mem.variables.splice(index, 1);

                                        }
                                    }
                                }
                            }

                            if (mem.works[0].items[0].setVariables.length > 0) {
                                for (let i2 = 0; i2 < mem.works[0].items[0].setVariables.length; i2++) {
                                    const el2 = mem.works[0].items[0].setVariables[i2];

                                    let temp2 = mem.variables.find(o => o.name === el2.name);
                                    if (temp2) {
                                        let index2 = mem.variables.indexOf(temp2);
                                        mem.variables[index2].value = el2.value;
                                    } else {
                                        mem.variables.push({ name: el2.name, value: el2.value });
                                    }

                                }
                            }
                            mem.works.shift();

                        }
                        break;
                    case api_card:
                        {
                            await apifunc(memoryId, mem.works[0].items[0]);
                            mem.works.shift();
                        }
                        break;
                    case support_card:
                        {
                            await supportfunc(memoryId, mem.works[0].items[0], channel_token);
                            mem.works.shift();
                        }
                        break;
                    case phone_card:
                        {

                            if (Validate(mem.works[0].items[0].validation, message)) {
                                if (mem.works[0].items[0].saveToVariable) {
                                    saveVariable(memoryId, [{ key: mem.works[0].items[0].saveToVariable, value: message.replace(/\s/g, '') }], false);
                                }
                                mem.works.shift();
                                let cus = await Customer.findOne({ senderId: sender_id, botId: botId });
                                if (cus) {
                                    cus.phone = message.replace(/\s/g, '');
                                    await cus.save();
                                }
                                message = null;
                            }
                            else {
                                await mem.save()
                                await bot_send(sender_id, mem.works[0].items[0], channel, channel_token, botId);
                                return;
                            }
                        }
                        break;
                    case survey_card:
                        {
                            let data = mem.works[0].items[0];
                            data.button = [{
                                title: "Đi đến Khảo sát",
                                type: "url",
                                url: config.server_url + '/surveys?id=' + data.surveyId + '&sender_id=' + sender_id,
                                //url: config.server_url,
                            }];
                            mem.works.shift();
                            await bot_send(sender_id, data, channel, channel_token, botId);
                        }
                        break;
                    default:
                        return;
                }
        }
        await mem.save();
        return;
    } catch (error) {
        console.log('Error[M_Core:bot_brain]: ' + error);
        return;
    }
};
// suggest intent
bot_suggest = async (sender_id, intents, channel, channel_token, botId) => {
    try {

        let data = {};
        data['template_type'] = 'list';
        data['elememts'] = [{
            title: "Gợi ý",
            subtitle: 'Ý định của bạn là?',
            image_url: config.server_url + config.suggest_image,
            button: []
        }];

        intents.forEach(item => {
            let element = {};
            element.subtitle = item.name;
            element.subtitle = '';
            element.image_url = config.server_url + config.suggest_image;
            element.button = [{
                title: "",
                type: "callback",
                redirectToBlock: "item.name",
                blockId: null,
                key: null,
                value: null,
            }];
            data['elememts'].push(element);
        });

        return await bot_send(sender_id, data, channel, channel_token, botId);
    } catch (error) {
        console.log('Error[M_Core:bot_suggest]: ' + error);
        return;
    }
}
// call send message fuction of channel 
bot_send = async (sender_id, data, channel, channel_token, botId) => {
    try {
        if (channel == zalo)
            await Zalo.sendMessage(sender_id, data, channel_token, botId);
        else if (channel == face)
            await FaceBook.sendMessage(sender_id, data, channel_token, botId);
    } catch (error) {
        console.log('Error[M_Core:bot_send]: ' + error);
        return;
    }
}
// ***end AI function***

// ***sub function***

// get current mem for sender_id
getMemmory = async (sender_id, channel, botId) => {
    let mem = await Memory.findOne({ senderId: sender_id, botId: botId });
    if (!mem) {
        let obj = {};
        let cus = await Customer.findOne({ senderId: sender_id, botId: botId });
        let default_variables = [
            { name: 'sender_id', value: sender_id },
            { name: 'sender_name', value: cus.name },
            { name: 'sender_input', value: null },
            { name: 'nlp_predict', value: null },
            { name: 'channel', value: channel }
        ];
        obj.senderId = sender_id;
        obj.botId = botId;
        obj.variables = default_variables;
        obj.works = [];
        obj.channel = channel;
        let curr = await Memory.create(obj);
        return curr;

    }
    return mem;
}
// save variable in  message
saveVariable = async (memoryId, variables, isCheck) => {
    try {

        let mem = await Memory.findById(memoryId);
        let ent = await Entity.find({ botId: mem.botId });
        if (isCheck) {
            ent.forEach(item => {
                let ent_role = item.name + ':' + item.role;
                if (variables[ent_role] != undefined) {
                    let obj = mem.variables.find(o => o.name === item.name);
                    if (obj) {
                        let index = mem.variables.indexOf(obj);
                        mem.variables[index] = { name: item.name, value: variables[ent_role][0].value };
                    }
                    else
                        mem.variables.push({ name: item.name, value: variables[ent_role][0].value });
                }
            });
        }
        else {
            let obj = mem.variables.find(o => o.name === variables[0].key);
            if (obj) {
                let index = mem.variables.indexOf(obj);
                mem.variables[index] = { name: variables[0].key, value: variables[0].value };
            }
            else
                mem.variables.push({ name: variables[0].key, value: variables[0].value });
        }
        await mem.save();
        return;
    } catch (error) {
        console.log('Error[M_Core:saveVariable]: ' + error);
        return;
    }
}
// get value of Variable
getVariable = (key, mem) => {
    try {
        let temp = mem.variables.find(o => o.name === key);
        if (temp) {
            return temp.value;
        }
        return null;
    } catch (error) {
        console.log('Error[M_Core:getVariable]: ' + error);
        return null;
    }
}
// return json of wit
wit_understanding = async (text, botId) => {
    try {
        let json = await P_Wit.getMessage(text, botId)
        if (json.error == undefined)
            return json;
        return null;
    } catch (error) {
        console.log('Error[M_Core:wit_understanding]: ' + error);
        return null;
    }
}

// return value of wit entities with lookup is keywords
wit_value_checking = async (type, key, value, botId) => {
    try {
        let ent = await Entity.findOne({ name: key });
        if (ent && ent.lookups == 1 && type == null) {
            let wit_object = await wit_understanding(value, botId);
            if (Object.keys(wit_object.entities).length != 0) {
                let ent_fullname = ent.name + ':' + ent.role;
                if (wit_object.entities[ent_fullname] != undefined)
                    return wit_object.entities[ent_fullname][0].value;
            }
        }
        return value;
    } catch (error) {
        console.log('Error[M_Core:wit_value_checking]: ' + error);
        return null;
    }
}
// return list intent invalid
intents_invalid = async (intents, conf) => {
    try {
        let confidence = conf.confidence * 0.01;
        return intents.filter(item => item.confidence >= confidence);
    } catch (error) {
        console.log('Error[M_Core:intents_invalid]: ' + error);
        return [];
    }
}

// return list work
getWorks = async (intentName, blocId, botId) => {
    try {

        let works = [];
        let bloc = null;
        let work_temp = [];
        if (intentName != null)
            bloc = await Block.findOne({ intentName: intentName, botId: botId, isActive: true });
        else
            bloc = await Block.findOne({ _id: blocId, isActive: true });

        if (bloc)
            work_temp = await Step.find({ blockId: bloc._id, isActive: true }).sort({ position: 1 })

        work_temp.forEach(item => {
            switch (item.type) {
                case text_card:
                    {
                        if (!(item.items[0].content == null || item.items[0].content == '')) {
                            works.push(item);
                        }
                    }
                    break;
                case info_card:
                    {
                        if (item.items[0].elememts.length > 0) {
                            let el = item.items[0].elememts;
                            let count = 0;
                            el.forEach(i => {
                                if (i.title == null || i.title == '')
                                    item.items[0].elememts.splice(count, 1);
                                count++;
                            });
                        }
                        works.push(item);
                    }
                    break;
                case product_card:
                    {
                        if (item.items[0].elememts.length > 0) {
                            let el = item.items[0].elememts;
                            let count = 0;
                            el.forEach(i => {
                                if (i.title == null || i.title == '')
                                    item.items[0].elememts.splice(count, 1);
                                count++;
                            });
                        }
                        works.push(item);
                    }
                    break;
                case image_card:
                    {
                        if (!(item.items[0].title == null || item.items[0].title == ''))
                            works.push(item);
                    }
                    break;
                case form_card:
                    {
                        item.items.forEach(f => {
                            if (!(f.name == null || f.content == null || f.content == ''))
                                f.type = form_card;
                            f.conditions = item.conditions;
                            works.push(f);
                        });

                    }
                    break;
                case go_to_card:
                    {
                        if (!(item.items[0].blockId == null))
                            works.push(item);
                    }
                    break;
                case memory_card:
                    {
                        works.push(item);
                    }
                    break;
                case phone_card:
                    {
                        if (!(item.items[0].content == null || item.items[0].content == ''))
                            works.push(item);
                    }
                    break;
                case support_card:
                    {
                        // if (!(item.items[0].content == null || item.items[0].content == ''))
                        works.push(item);
                    }
                    break;
                case api_card:
                    {
                        works.push(item);
                    }
                    break;
                case survey_card:
                    {
                        if (!(item.items[0].content == null || item.items[0].content == '' || item.items[0].surveyId == null)) {
                            works.push(item);
                        }

                    }
                    break;
                default:
                    break;
            }
        });
        return works;
    } catch (error) {
        console.log('Error[M_Core:getWorks]: ' + error);
        return [];
    }
}

// return merger arr = arr1 + arr2
mergeArray = (arr1, arr2) => {
    try {
        let arr = [];
        arr = arr1.concat(arr2);
        return arr;
    } catch (error) {
        console.log('Error[M_Core:mergeArray]: ' + error);
        return [];
    }
}
// api process
apifunc = async (memoryId, obj) => {
    try {
        let mem = await Memory.findById(memoryId);
        let myHeaders = {};
        if (obj.headers.length > 0) {
            for (let i = 0; i < obj.headers.length; i++) {
                let el = obj.headers[i];
                myHeaders[el.name] = el.value;
            }
        }
        if (obj.method == 'GET') {

            let getRes = await fetch(obj.url, {
                method: "GET",
                headers: myHeaders
            });
            let jsong = await getRes.json();
            //console.log(jsong);
            if (jsong) {
                //do something
            }
        }
        if (obj.method == 'POST') {
            let obj_temp = {};
            if (obj.body.length > 0) {
                for (let i2 = 0; i2 < obj.body.length; i2++) {
                    let el2 = obj.body[i2];
                    obj_temp[el2] = getVariable(el2, mem);
                }
            }
            let postRes = await fetch(obj.url, {
                method: "POST",
                headers: myHeaders,
                body: JSON.stringify(obj_temp)
            });
            let jsonp = await postRes.json();
            if (jsonp) {
                //do something
            }

        }
        //await mem.save();
        return;

    } catch (error) {
        console.log('Error[M_Core:apifunc]: ' + error);
        return;
    }
}
// support process
supportfunc = async (memoryId, obj, channel_token) => {
    try {
        let mem = await Memory.findById(memoryId);
        if (mem) {
            let cus = await Customer.findOne({ senderId: mem.senderId, botId: mem.botId });
            let temp = {};
            temp.senderId = mem.senderId;
            temp.name = cus.name;
            temp.phone = cus.phone;
            temp.botId = mem.botId;
            temp.items = mem.variables;
            temp.gender = cus.gender;
            temp.channel = cus.channel;
            temp.intentName = obj.intentName;

            if (obj.content != null || obj.console != '') {
                let obj_pro = {};
                obj_pro['content'] = obj.content;
                obj_pro['button'] = [];
                obj_pro['template_type'] = 'text';
                await bot_send(mem.senderId, obj_pro, mem.channel, channel_token, mem.botId);
            }
            await SupportRequest.create(temp);
            sever.callsocket('support_request', { senderId: mem.senderId, botId: mem.botId });
            await Notification.create(mem.botId, 'Yêu cầu hỗ trợ', 'support_request', { senderId: mem.senderId, botId: mem.botId })
        }

        return;

    } catch (error) {
        console.log('Error[M_Core:supportfunc]: ' + error);
        return;
    }
}
// validate for data type
Validate = (type, text) => {

    try {
        let phoneno = /^\d{10}$/;
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let numbers = /^[0-9]+$/;

        if (text)
            switch (type) {
                case null:
                    {
                        return true;
                    }
                case 'phone':
                    {
                        if (text.replace(/\s/g, '').match(phoneno))
                            return true;
                        return false;
                    }
                //break;
                case 'email':
                    {
                        if (text.replace(/\s/g, '').match(mailformat))
                            return true;
                        return false;
                    }
                // break;
                case 'number':
                    {
                        if (text.replace(/\s/g, '').match(numbers))
                            return true;
                        return false;
                    }
                // break;
                default:
                    return false;
            }

        return false
    } catch (error) {
        console.log('Error[M_Core:Validate]: ' + error);
        return false;
    }
}
// ***end sub function***

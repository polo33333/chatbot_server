const History = require('../models/History.model');
const UnknowRequest = require('../models/UnknowRequest.model');
const Customer = require('../models/Customer.model');
const LiveChat = require('../models/LiveChat.model');
const Reminder = require('../models/Reminder.model');
const Config = require('../models/Config.model');
const fetch = require('node-fetch');
const zalo = 'zalo';
const face = 'facebook';
const sever = require('../../server');


module.exports = {

    handleUnknowRequest: async (text, senderId, botId) => {

        try {
            var unk = {};
            unk.text = text;
            unk.senderId = senderId;
            unk.botId = botId;
            await UnknowRequest.create(unk);
            return;
        } catch (error) {
            console.log('Error[M_Message_handling:handleUnknowRequest]: ' + error);
            return;
        }
    },

    handleCustomer: async (senderId, channel, _token, botId) => {

        try {
            let ctm = await Customer.findOne({ senderId: senderId });
            if (ctm == null || ctm == undefined) {
                let obj = {};
                obj.botId = botId;
                obj.channel = channel;
                obj.senderId = senderId;
                if (channel == zalo) {
                    let resFetch = await fetch('https://openapi.zalo.me/v2.0/oa/getprofile?data={"user_id":' + senderId + '}&access_token=' + _token, {
                        method: "GET",
                    });
                    let json = await resFetch.json();
                    obj.name = json.data.display_name;
                    obj.gender = json.data.user_gender;
                }

                if (channel == face) {
                    let resFetch = await fetch('https://graph.facebook.com/' + senderId + '?fields=name,gender&access_token=' + _token, {
                        method: "GET",
                    });
                    let json = await resFetch.json();
                    obj.name = json.name;
                    obj.gender = json.gender == 'male' ? 1 : 0
                }
                return await Customer.create(obj);
            }
            return ctm;
        } catch (error) {
            console.log('Error[M_Message_handling:handleCustomer]: ' + error);
            return null;
        }
    },

    handleHistory: async (senderId, sender_answer, bot_detected, way_handling, confidence, botId) => {

        try {
            let his = {};
            his.senderId = senderId;
            his.sender_answer = sender_answer;
            his.bot_detected = bot_detected;
            his.way_handling = way_handling;
            his.confidence = confidence;
            his.botId = botId;
            return await History.create(his);
        } catch (error) {
            console.log('Error[M_Message_handling:handleHistory]: ' + error);
            return null;
        }
    },

    handleLiveChat: async (message, senderId, isSender, template_type, botId) => {

        try {
            let lc = {};
            lc.senderId = senderId;
            lc.isSender = isSender;
            lc.items = [message];
            lc.template_type = template_type;
            lc.botId = botId;
            let conf = await Config.findOne({ botId: botId })
            if (isSender && conf.isReminder) {
                let remind = await Reminder.findOne({ senderId: senderId, botId: botId });
                if (remind) {
                    remind.timeOut = conf.reminder_timeout;
                    await remind.save()
                } else {
                    await Reminder.create({ senderId: senderId, botId: botId, timeOut: conf.reminder_timeout })
                }

            }
            sever.callsocket('live_chat', { senderId: senderId, botId: botId, data: lc });
            return await LiveChat.create(lc);
        } catch (error) {
            console.log('Error[M_Message_handling:handleLiveChat]: ' + error);
            return null;
        }
    },

    handleSupport: async (senderId, botId) => {

        try {
            let cus = await Customer.findOne({ senderId: senderId, botId: botId });
            let conf = await Config.findOne({ botId: botId });
            let isAllow = false;

            if (cus.isSupport)
                isAllow = false;
            else isAllow = true;

            if (conf.isActive) {
                if (cus.channel == face)
                    if (conf.isFacebook)
                        isAllow = true;
                    else isAllow = false;

                if (cus.channel == zalo)
                    if (conf.isZalo)
                        isAllow = true;
                    else isAllow = false;
            }
            else
                isAllow = false;

            return isAllow;
        } catch (error) {
            console.log('Error[M_Message_handling:handleSupport]: ' + error);
            return false;
        }
    }
}

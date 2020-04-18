
const Article = require('../models/Article.model');
const BroadCast = require('../models/BroadCast.model');
const Config = require('../models/Config.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');
const fetch = require('node-fetch');
const config = require('../../config');


module.exports = {

    // get histrory
    getHistrory: async (req, res) => {
        try {

            const { botId } = req.params;
            const ans = await BroadCast.find({ 'isSchedule': false, botId: botId}).sort({ createdAt: -1 });
            return sR.sendResponse(res, 200, ans, message.getSuccess);

        } catch (error) {

            console.log('Error[BroadCast:getHistrory]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // get Schedule
    getSchedule: async (req, res) => {
        try {
            const { botId } = req.params;
            const ans = await BroadCast.find({ 'isSchedule': true,botId: botId}).sort({ createdAt: -1 });
            return sR.sendResponse(res, 200, ans, message.getSuccess);

        } catch (error) {

            console.log('Error[BroadCast:getSchedule]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // create
    create: async (req, res) => {
        try {

            const { botId } = req.params;
            const con = await Config.findOne({ botId: botId });
            var obj = req.body;
            if (!obj.isSchedule) {
                sendBroadCast(obj.attachment_id, con.zalo_token);
            }
            await BroadCast.create(obj);
            return sR.sendResponse(res, 200, null, message.createSuccess);

        } catch (error) {

            console.log('Error[BroadCast:create]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },
    // update method with id
    update: async (req, res) => {
        try {
            return sR.sendResponse(res, 400, null, error);

        } catch (error) {

            console.log('Error[BroadCast:update]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // remove method with id
    remove: async (req, res) => {
        try {

            const { broadCastId } = req.params;
            await BroadCast.findByIdAndRemove(broadCastId);
            return sR.sendResponse(res, 200, null, message.deleteSuccess);

        } catch (error) {

            console.log('Error[BroadCast:remove]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }

    }
}


sendBroadCast = async (attachment_id, _token) => {

    try {
        var send = {
            recipient: {
                target: {
                    gender: "0",
                    cities: "4"
                }
            },
            message: {
                attachment: {
                    type: "template",
                    payload: {
                        template_type: "media",
                        elements: [
                            {
                                media_type: "article",
                                attachment_id: attachment_id
                            }
                        ] 
                    }
                    
                }
            }
        }

        const resWit = await fetch('https://openapi.zalo.me/v2.0/oa/message?access_token=' + _token, {
            method: "POST",
            body: JSON.stringify(
                send
            )
        });
        const json = await resWit.json();
        //console.log(json);
        if (json.error == 0)
            return true;
        return false;

    }
    catch (error) {
        console.log('Error[BroadCast:send]: ' + error);
        return false;
    }
}
const Bot = require('../models/Bot.model');
const Config = require('../models/Config.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');
const fetch = require('node-fetch');
const config = require('../../config');

module.exports = {

    // get all
    getAll: async (req, res, next) => {
        try {
            const result = await Bot.find();
            return sR.sendResponse(res, 200, result, message.getSuccess);

        } catch (error) {

            console.log('Error[Bot:getAll]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // get by id
    getById: async (req, res) => {
        try {

            const { botId } = req.params;
            const result = await Bot.findOne({ botId: botId });
            return sR.sendResponse(res, 200, result, message.getSuccess);

        } catch (error) {

            console.log('Error[Bot:getById]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // create
    create: async (req, res) => {

        try {

            var obj = req.body;
            // create app in wit.ai
            let resWit = await fetch('https://api.wit.ai/apps' + config.version, {
                method: "POST",
                headers: { Authorization: config.auth + config.access_token },
                body: JSON.stringify({
                    name: obj.name,
                    lang: obj.lang,
                    private: "true",
                    desc: obj.desc,
                    timezone: "Asia/Ho_Chi_Minh"
                })
            });
            let json = await resWit.json();
            // create bot in bd when wit.ai create app success
            if (json.error == undefined) {
                obj.appId = json.app_id;
                obj.botId = json.access_token;
                let bot = await Bot.create(obj);
                if (bot)
                    await Config.create(
                        {
                            botId: bot.botId, zalo_webhook: config.server_url + '/' + bot.botId + '/Zalo/Webhook',
                            fa_webhook: config.server_url + '/' + bot.botId + '/Facebook/Webhook',
                            fa_verify_token: Date.now().toString()
                        }
                    );

                return sR.sendResponse(res, 200, bot, message.createSuccess);
            }
            return sR.sendResponse(res, 400, null, message.createFail);


        } catch (error) {

            console.log('Error[Bot:create]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },
    // update method with id
    update: async (req, res) => {
        return sR.sendResponse(res, 400, null, message.updateFail);
    },

    // remove method with id
    remove: async (req, res) => {
        try {

            const { botId } = req.params;
            const bots = await Bot.findOne({ botId: botId });
            const response = await fetch('https://api.wit.ai/apps/' + bots.appId + config.version, {
                method: "DELETE",
                headers: { Authorization: 'Bearer ' + botId }
            });
            const json = await response.json();

            if (json.error == undefined) {
                let bot = await Bot.findOneAndDelete({ botId: botId });
                return sR.sendResponse(res, 200, bot, message.deleteSuccess);
            }

            return sR.sendResponse(res, 400, null, message.deleteFail);

        } catch (error) {

            console.log('Error[Bot:remove]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }

    }
}
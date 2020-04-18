
const Intent = require('../models/Intent.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');
const fetch = require('node-fetch');
const config = require('../../config');


module.exports = {

    // get all with botId
    getAll: async (req, res) => {
        try {

            const { botId } = req.params;
            const int = await Intent.find({ botId: botId });
            return sR.sendResponse(res, 200, int, message.getSuccess);

        } catch (error) {

            console.log('Error[Intent:getAll]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // get by id
    getById: async (req, res) => {
        try {
            const { intentId } = req.params;
            const int = await Intent.findById(intentId);
            return sR.sendResponse(res, 200, int, message.getSuccess);

        } catch (error) {

            console.log('Error[Intent:getById]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // create
    create: async (req, res) => {

        try {

            const { botId } = req.params;
            var obj = req.body;
            obj.botId = botId;
            const resWit = await fetch('https://api.wit.ai/entities/intent/values' + config.version, {
                method: "POST",
                headers: { Authorization: config.auth + botId },
                body: JSON.stringify({
                    value: obj.name,
                })
            });
            const json = await resWit.json();
            //console.log(json);
            if (json.error == undefined) {
                const intent = await Intent.create(obj);
                return sR.sendResponse(res, 200, intent, message.createSuccess);
            }


        } catch (error) {

            console.log('Error[Intent:create]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },
    // update method with id
    update: async (req, res) => {
        try {

            const { botId, intentId } = req.params;
            var obj = req.body;
            var int = await Intent.findById(intentId);
            var ojw = {};
            var intentName = int.name;
            if (obj.name != undefined) {
                ojw.id = obj.name;
                int.name = obj.name;
            }
            if (obj.desc != undefined) {
                ojw.doc = obj.desc;
                int.desc = obj.desc;
            }
            console.log(obj)
            const resWit = await fetch('https://api.wit.ai/entities/intent/values' + intentName + config.version, {
                method: "PUT",
                headers: { Authorization: config.auth + botId },
                body: JSON.stringify(ojw)

            });
            const json = await resWit.json();
            if (json.error == undefined) {
                let int1 = await Ịntent.updateOne({ _id: int._id }, int);
                return sR.sendResponse(res, 200, int1, message.createSuccess);
            }

            return sR.sendResponse(res, 400, null, message.createFail);

        } catch (error) {

            console.log('Error[Intent:update]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // remove method with id
    remove: async (req, res) => {
        try {

            const { botId, intentId } = req.params;
            const intent = await Intent.findByIdAndRemove(intentId);
            if (intent) {
                const resWit = await fetch('https://api.wit.ai/entities/intent/values/' + intent.name + config.version, {
                    method: "DELETE",
                    headers: { Authorization: 'Bearer ' + botId }
                });
                const json = await resWit.json();

                if (json.success == true || json.code != 'bad-request') {
                    return sR.sendResponse(res, 200, null, message.deleteSuccess);
                }
                else {
                    return sR.sendResponse(res, 400, null, message.deleteFail);
                }
            }
            return sR.sendResponse(res, 200, null, null);

        } catch (error) {

            console.log('Error[Intent:remove]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }

    }
}
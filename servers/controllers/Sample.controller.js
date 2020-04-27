const Bot = require('../models/Bot.model');
const Intent = require('../models/Intent.model');
const Entity = require('../models/Entity.model');
const Sample = require('../models/Sample.model');
const UnknowRequest = require('../models/UnknowRequest.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');
const fetch = require('node-fetch');
const config = require('../../config');


module.exports = {

    // get by IntentId
    getByIntentId: async (req, res) => {
        try {

            const { botId, intentId } = req.params;
            const result = await Intent.findById(intentId);
            if (result) {
                const response = await fetch('https://api.wit.ai/samples?entity_ids=intent&entity_values=' + result.name + '&limit=20', {
                    method: "GET",
                    headers: { Authorization: config.auth + botId },
                });
                const json = await response.json();
                //console.log(json)
                if (json.error == undefined) {
                    return sR.sendResponse(res, 200, json, message.getSuccess);
                }

                return sR.sendResponse(res, 404, null, message.getFail);
            }
            return sR.sendResponse(res, 404, null, message.getFail);

        } catch (error) {

            console.log('Error[Sample:getByIntentId]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    getUnderStrand: async (req, res) => {
        try {

            const { botId } = req.params;
            var object = req.body;
            var arr = [];
            //const bot = await Bot.find({botId: botId});
            //const currentEntity = await Entity.find({ botId: botId });
            const response = await fetch('https://api.wit.ai/message' + config.version + '&q=' + encodeURI(object.text), {
                method: "GET",
                headers: { Authorization: config.auth + botId },
            });

            const json = await response.json();
            //console.log(json)
            if (json) {
                var arrKeys = Object.keys(json.entities);
                arrKeys.reverse().forEach(element => {
                    const object1 = {};
                    if (json.entities[element]) {
                        object1.entity = element;
                        object1.value = json.entities[element][0].value;
                        object1.confidence = json.entities[element][0].confidence;
                        arr.push(object1);
                    }
                });
                //console.log(arr);
                json.entityList = arr;
                return sR.sendResponse(res, 200, json, message.getSuccess);
            }
            else {
                return sR.sendResponse(res, 400, null, message.getFail);
            }


        } catch (error) {

            console.log('Error[Sample:getUnderStrand]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // create
    create: async (req, res) => {

        try {
            const { botId } = req.params;
            var object = req.body;

            //console.log(object);
            const response = await fetch('https://api.wit.ai/samples' + config.version, {
                method: "POST",
                headers: { Authorization: config.auth + botId },
                body: JSON.stringify([object])
            });


            const json = await response.json();
            //console.log(json);
            if (json.sent == true) {
                await UnknowRequest.findOneAndDelete({text: object.text, botId: botId});
                return sR.sendResponse(res, 200, null, message.createSuccess);
            }
            else {
                return sR.sendResponse(res, 400, null, message.createFail);
            }

            return sR.sendResponse(res, 404, null, message.notFound);


        } catch (error) {

            console.log('Error[Sample:create]: ' + error);
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
            var obj = req.body;
            //const sam = await Sample.findById(sampleId);

            const response = await fetch('https://api.wit.ai/samples' + config.version, {
                method: "DELETE",
                headers: { Authorization: 'Bearer ' + botId },
                body: JSON.stringify([{
                    text: obj.text,
                }])
            });
            const json = await response.json();
            console.log(json);
            if (json.error == undefined) {
                return sR.sendResponse(res, 200, null, message.deleteSuccess);
            }
            else {
                return sR.sendResponse(res, 400, null, message.deleteFail);
            }


        } catch (error) {

            console.log('Error[Sample:remove]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }

    }
}
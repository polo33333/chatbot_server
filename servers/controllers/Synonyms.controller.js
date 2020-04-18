const Entity = require('../models/Entity.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');
const fetch = require('node-fetch');
const config = require('../../config');


module.exports = {


    // add  Synonyms to entity
    create: async (req, res) => {
        try {

            const { botId, entityId } = req.params;
            var obj = req.body;
            const ent = await Entity.findById(entityId);
            if (ent) {
                const resWit = await fetch('https://api.wit.ai/entities/' + ent.name + '/values/' + encodeURI(obj.value) + config.version, {
                    method: "POST",
                    headers: { Authorization: config.auth + botId },
                    body: JSON.stringify({
                        expression: obj.expression,
                    })
                });
                const json = await resWit.json();
                if (json.error == undefined) {
                    return sR.sendResponse(res, 200, json, message.createSuccess);
                }
                return sR.sendResponse(res, 400, null, message.createSuccess);
            }

            return sR.sendResponse(res, 400, null, message.createFail);
        } catch (error) {

            console.log('Error[Synonyms:create]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },
    // remove  Synonyms of entity
    remove: async (req, res) => {
        try {


            const { botId, entityId } = req.params;
            var obj = req.body;
            const ent = await Entity.findById(entityId);
            if (ent) {
                const resWit = await fetch('https://api.wit.ai/entities/' + ent.name + '/values/' + encodeURI(obj.value) + '/expressions/' + encodeURI(obj.expression) + config.version, {
                    method: "DELETE",
                    headers: { Authorization: 'Bearer ' + botId }
                });
                const json = await resWit.json();
                if (json.error == undefined) {

                    return sR.sendResponse(res, 200, null, message.deleteSuccess);
                }
                else {
                    return sR.sendResponse(res, 400, null, message.deleteFail);
                }
            }
            return sR.sendResponse(res, 400, null, null);
        } catch (error) {

            console.log('Error[Synonyms:remove]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }

    }
}
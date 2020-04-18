const Entity = require('../models/Entity.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');
const fetch = require('node-fetch');
const config = require('../../config');


module.exports = {

    // get all with botId
    getAll: async (req, res) => {
        try {

            const { botId } = req.params;
            const result = await Entity.find({ botId: botId });
            return sR.sendResponse(res, 200, result, message.getSuccess);

        } catch (error) {

            console.log('Error[Entity:getAll]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // get by id
    getById: async (req, res) => {
        try {

            const { botId, entityId } = req.params;
            const result = await Entity.findById(entityId);
            if (result) {
                const resWit = await fetch('https://api.wit.ai/entities/' + result.name + config.version, {
                    method: "GET",
                    headers: { Authorization: config.auth + botId },
                });
                const json = await resWit.json();
                return sR.sendResponse(res, 200, json, message.getSuccess);
            }

            return sR.sendResponse(res, 200, null, message.getFail);
        } catch (error) {

            console.log('Error[Entity:getById]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },


    // get by id
    search: async (req, res) => {
        try {
            const { entityId, searchText } = req.params;
            const result = await Entity.find({ 'name': { '$regex': searchText, '$options': 'i' } });
            //console.log(searchText);
            return sR.sendResponse(res, 200, result, message.getSuccess);

        } catch (error) {

            console.log('Error[Entity:search]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // create
    create: async (req, res) => {

        try {

            const { botId } = req.params;
            var obj = req.body;
            obj.botId = botId;

            const resWit = await fetch('https://api.wit.ai/entities' + config.version, {
                method: "POST",
                headers: { Authorization: config.auth + botId },
                body: JSON.stringify({
                    id: obj.name,
                    lookups: ["keywords"]
                })
            });
            const json = await resWit.json();
            if (json.error == undefined) {
                let entity = await Entity.create(obj);
                return sR.sendResponse(res, 200, entity, message.createSuccess);
            }

            return sR.sendResponse(res, 400, null, message.createFail);

        } catch (error) {

            console.log('Error[Entity:create]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // update method with id
    update: async (req, res) => {
        try {

            const { botId, entityId } = req.params;
            var obj = req.body;
            var ent = await Entity.findById(entityId);
            var ojw = {};
            var entityName = ent.name;
            if (obj.name != undefined) {
                ojw.id = obj.name;
                ent.name = obj.name;
            }
            if (obj.doc != undefined) {
                ojw.doc = obj.doc;
                ent.desc = obj.doc;
            }
            if (obj.lookups != undefined) {
                switch(obj.lookups) {
                    case 'free-text':
                        ojw.lookups = [obj.lookups]
                      break;
                    case 'keywords':
                        ojw.lookups = [obj.lookups]
                      break;
                    default:
                        ojw.lookups = ["free-text", "keywords"]
                  }
                
            }

            const resWit = await fetch('https://api.wit.ai/entities/' + entityName + config.version, {
                method: "PUT",
                headers: { Authorization: config.auth + botId },
                body: JSON.stringify(ojw)

            });
            const json = await resWit.json();

            if (json.error == undefined) {
                let entity = await Entity.updateOne({ _id: ent._id }, ent);
                return sR.sendResponse(res, 200, entity, message.createSuccess);
            }

            return sR.sendResponse(res, 400, null, message.createFail);

        } catch (error) {

            console.log('Error[Entity:update]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // remove method with id
    remove: async (req, res) => {
        try {


            const { botId, entityId } = req.params;
            const currEntity = await Entity.findByIdAndDelete(entityId);
            if (currEntity) {
                const resWit = await fetch('https://api.wit.ai/entities/' + currEntity.name + config.version, {
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

            console.log('Error[Entity:remove]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }

    }
}

const Intent = require('../models/Intent.model');
const Answer = require('../models/Answer.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');
const fetch = require('node-fetch');
const config = require('../../config');


module.exports = {

    // get all with intentId
    getAll: async (req, res) => {
        try {

            const { intentId } = req.params;
            const ans = await Answer.find({ intentId: intentId });
            return sR.sendResponse(res, 200, ans, message.getSuccess);

        } catch (error) {

            console.log('Error[Answer:getAll]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // get by id
    getById: async (req, res) => {
        try {
            const { answerId } = req.params;
            const ans = await Answer.findById(answerId);
            return sR.sendResponse(res, 200, ans, message.getSuccess);

        } catch (error) {

            console.log('Error[Answer:getById]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // create
    create: async (req, res) => {

        try {

            const { intentId } = req.params;
            var obj = req.body;
            obj.intentId = intentId;
            obj.type = 'text';
            if(obj.entity == undefined){
                obj.condition = [];
            }
            else{
                obj.condition ={
                    entity: obj.entity,
                    keyword: obj.keyword
                };
            }
            
            const ans = await Answer.create(obj);
            if(ans)
            return sR.sendResponse(res, 200, ans, message.createSuccess);
            return sR.sendResponse(res, 400, null, message.createFail);

        } catch (error) {

            console.log('Error[Answer:create]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },
    // update method with id
    update: async (req, res) => {
        try {

            const { intentId, answerId } = req.params;
            var obj = req.body;
            var ascurr = await Answer.findById(answerId);
            ascurr.contentDisplay = obj.contentDisplay;
            if(obj.entity == undefined || obj.entity ==''){
                ascurr.condition = [];
            }
            else{
                ascurr.condition[0] ={
                    entity: obj.entity,
                    keyword: obj.keyword
                };
            }
            
            const ans = await ascurr.save(ascurr);
            if(ans)
            return sR.sendResponse(res, 200, ans, message.updateSuccess);
            return sR.sendResponse(res, 400, null, message.updateFail);

        } catch (error) {

            console.log('Error[Answer:update]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // remove method with id
    remove: async (req, res) => {
        try {

            const { botId, intentId, answerId } = req.params;
            const intent = await Answer.findByIdAndRemove(answerId);
            if (intent) {
                return sR.sendResponse(res, 200, null, message.deleteSuccess);
            }
            return sR.sendResponse(res, 400, null, message.deleteFail);

        } catch (error) {

            console.log('Error[Answer:remove]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }

    }
}
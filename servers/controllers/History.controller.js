
const Config = require('../models/Config.model');
const History = require('../models/History.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');
const fetch = require('node-fetch');

module.exports = {

    // get all with intentId
    getAll: async (req, res) => {
        try {

            const { botId } = req.params;
            const his = await History.find({ botId: botId}).sort({createdAt: -1}).limit(500);                    
            return sR.sendResponse(res, 200, his, message.getSuccess);

        } catch (error) {

            console.log('Error[Answer:getAll]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // get by id
    getById: async (req, res) => {
        try {
            const { historyId } = req.params;
            const his = await History.findById(historyId);            
            return sR.sendResponse(res, 200, his, message.getSuccess);

        } catch (error) {

            console.log('Error[History:getById]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },


    // remove method with id
    remove: async (req, res) => {
        try {

            const { historyId } = req.params;
            const his = await History.findByIdAndRemove(historyId);
            if (his) {
                return sR.sendResponse(res, 200, null, message.deleteSuccess);
            }
            return sR.sendResponse(res, 400, null, message.deleteFail);

        } catch (error) {

            console.log('Error[History:remove]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }

    }
};

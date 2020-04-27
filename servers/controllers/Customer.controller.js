
const Customer = require('../models/Customer.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');


module.exports = {

    // get all with intentId
    getAll: async (req, res) => {
        try {

            const { botId } = req.params;
            const cus = await Customer.find({ botId: botId}).sort({createdAt: -1});                    
            return sR.sendResponse(res, 200, cus, message.getSuccess);

        } catch (error) {

            console.log('Error[Customer:getAll]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // get by id
    getById: async (req, res) => {
        try {
            const { customerId } = req.params;
            const cus = await Customer.findById(customerId);            
            return sR.sendResponse(res, 200, cus, message.getSuccess);

        } catch (error) {

            console.log('Error[Customer:getById]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // remove method with id
    remove: async (req, res) => {
        try {

            const { customerId } = req.params;
            const his = await Customer.findByIdAndRemove(customerId);
            if (his) {
                return sR.sendResponse(res, 200, null, message.deleteSuccess);
            }
            return sR.sendResponse(res, 400, null, message.deleteFail);

        } catch (error) {

            console.log('Error[Customer:remove]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }

    }
};

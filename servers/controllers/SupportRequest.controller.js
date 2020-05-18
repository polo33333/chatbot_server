

const SupportRequest = require('../models/SupportRequest.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');


module.exports = {

    // get all with intentId
    getAll: async (req, res) => {
        try {

            const { botId } = req.params;
            
            const r = await SupportRequest.find({ botId: botId});
            return sR.sendResponse(res, 200, r, message.getSuccess);

        } catch (error) {

            console.log('Error[SupportRequest:getAll]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // get by id
    getById: async (req, res) => {
        try {
            const { requestId } = req.params;
            const r = await SupportRequest.findById(requestId);

            return sR.sendResponse(res, 200, r, message.getSuccess);

        } catch (error) {

            console.log('Error[SupportRequest:getById]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },
    // create
    // create: async (req, res) => {

    //     try {
    //         const { botId } = req.params;
    //         var object = req.body;

    //         const intent = await Intent.create(obj);
    //         return sR.sendResponse(res, 404, null, message.notFound);


    //     } catch (error) {

    //         console.log('Error[UnknowRequest:create]: ' + error);
    //         return sR.sendResponse(res, 400, null, error);
    //     }
    // },



    // remove method with id
    remove: async (req, res) => {
        try {

            const { requestId } = req.params;
            const r = await SupportRequest.findByIdAndRemove(requestId);
            if (r) {
                return sR.sendResponse(res, 200, null, message.deleteSuccess);
            }
            return sR.sendResponse(res, 400, null, message.deleteFail);

        } catch (error) {

            console.log('Error[SupportRequest:remove]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }

    }
}
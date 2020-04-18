
const Block = require('../models/Block.model');
const Intent = require('../models/Intent.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');


module.exports = {

    // get all with botId
    getAll: async (req, res) => {
        try {

            const { botId } = req.params;
            const bloc = await Block.find({ botId: botId });
            return sR.sendResponse(res, 200, bloc, message.getSuccess);

        } catch (error) {

            console.log('Error[Block:getAll]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },
    // get defaut with botId
    getDefaut: async (req, res) => {
        try {

            const { botId } = req.params;
            let bloc = await Block.findOne({ isDefaut: true });
            return sR.sendResponse(res, 200, bloc, message.getSuccess);

        } catch (error) {

            console.log('Error[Block:getDefaut]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },


    // get by id
    getById: async (req, res) => {
        try {
            const { blockId } = req.params;
            let bloc = await Block.findById(blockId);
            if (bloc)
                return sR.sendResponse(res, 200, bloc, message.getSuccess);
            return sR.sendResponse(res, 400, null, message.getFail);

        } catch (error) {

            console.log('Error[Block:getById]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // create
    create: async (req, res) => {

        try {

            const { botId } = req.params;
            var obj = req.body;
            obj.botId = botId;
            const bloc = await Block.create(obj);
            if (bloc)
                return sR.sendResponse(res, 200, bloc, message.createSuccess);
            return sR.sendResponse(res, 400, null, message.createFail);

        } catch (error) {

            console.log('Error[Block:create]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },
    // update method with id
    update: async (req, res) => {
        try {

            const { botId, blockId } = req.params;
            var obj = req.body;
            var bloc_curr = await Block.findById(blockId);
            bloc_curr.name = obj.name;
            const bloc = await bloc_curr.save(bloc_curr);
            if (bloc)
                return sR.sendResponse(res, 200, bloc, message.updateSuccess);
            return sR.sendResponse(res, 400, null, message.updateFail);

        } catch (error) {

            console.log('Error[Block:update]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // remove method with id
    remove: async (req, res) => {
        try {

            const { blockId } = req.params;
            const bloc = await Block.findByIdAndRemove(blockId);
            if (bloc) {
                return sR.sendResponse(res, 200, null, message.deleteSuccess);
            }
            return sR.sendResponse(res, 400, null, message.deleteFail);

        } catch (error) {

            console.log('Error[Block:remove]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }

    }
}
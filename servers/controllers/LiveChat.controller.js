

const LiveChat = require('../models/LiveChat.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');
const Zalo = require('../controllers/Zalo.controller');
const FaceBook = require('../controllers/Facebook.controller');
const M_Message_handling = require('../functions/M_Message_handling.function');
const config = require('../../config');
const Config = require('../models/Config.model');

const zalo = 'zalo';
const face = 'facebook';

module.exports = {


    // get with botId
    getById: async (req, res) => {
        try {

            const { botId, customerId } = req.params;
            let chat = await LiveChat.find({ senderId: customerId }).sort({ createdAt: -1 }).limit(50);
            if (chat)
                return sR.sendResponse(res, 200, chat.reverse(), message.getSuccess);
            return sR.sendResponse(res, 400, null, message.getFail);

        } catch (error) {

            console.log('Error[LiveChat:getById]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // create
    create: async (req, res) => {

        try {
            const { botId } = req.params;
            var obj = req.body;
            let con = await Config.findOne({botId: botId})
            if (obj.platForm == zalo)
                await Zalo.sendMessage(obj.senderId, obj, con.zalo_token);
            else if (obj.platForm == face)
                await FaceBook.sendMessage(obj.senderId, obj, con.fa_page_token);
            await M_Message_handling.handleLiveChat([obj], obj.senderId, false, null, botId);

            return sR.sendResponse(res, 200, null, message.getSuccess);

        } catch (error) {

            console.log('Error[Live:create]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // remove method with id
    remove: async (req, res) => {
        try {

            const { LiveChatId } = req.params;
            const chat = await LiveChat.findByIdAndRemove(LiveChatId);
            if (chat) {
                return sR.sendResponse(res, 200, null, message.deleteSuccess);
            }
            return sR.sendResponse(res, 400, null, message.deleteFail);

        } catch (error) {

            console.log('Error[LiveChat:remove]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }

    }
}
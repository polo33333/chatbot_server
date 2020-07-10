
var Config = require('../models/Config.model');
var sR = require('../functions/M_SendResponse.function');
var message = require('../functions/C_String.function');



// get script by botid method
exports.getAll = async function (req, res) {
    try {
        let result = await Config.findOne({ botId: req.params.botId });
        if (result) {
            return sR.sendResponse(res, 200, result, message.getSuccess);
        }
        return sR.sendResponse(res, 404, null, message.notFound);
    }
    catch (error) {
        console.log('Error[Config:getAll]: ' + error);
        return sR.sendResponse(res, 400, null, message.getFail);
    }
}

// update script method

exports.update = async function (req, res) {

    try {
        let object = req.body;
        let currentConfig = await Config.findOne({ botId: req.params.botId });

        currentConfig.zalo_token = object.zalo_token;
        currentConfig.zalo_webhook = object.zalo_webhook;
        currentConfig.fa_page_token = object.fa_page_token;
        currentConfig.fa_verify_token = object.fa_verify_token;
        currentConfig.fa_webhook = object.fa_webhook;
        currentConfig.isReminder = object.isReminder;
        currentConfig.reminder_content = object.reminder_content;
        currentConfig.reminder_timeout = object.reminder_timeout;
        currentConfig.isSuggest = object.isSuggest;
        currentConfig.confidence = object.confidence;
        currentConfig.isActive = object.isActive;
        currentConfig.isFacebook = object.isFacebook;
        currentConfig.isZalo = object.isZalo;

        let result = await Config.findOneAndUpdate({ _id: currentConfig._id }, currentConfig, { new: true });
        return sR.sendResponse(res, 200, result, message.updateSuccess);

    } catch (error) {
        console.log('Error[Config:update]: ' + error);
        return sR.sendResponse(res, 400, null, message.updateFail);
    }
}


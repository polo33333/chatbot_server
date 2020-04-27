const Customer = require('../models/Customer.model');
const Facebook = require('../controllers/Facebook.controller');
const Zalo = require('../controllers/Zalo.controller');
const Config = require('../models/Config.model');
const Step = require('../models/Step.model');
const config = require('../../config');
const zalo = 'zalo';
const face = 'facebook';

exports.handleFaceBroadCast = async function (blockId,botId) {

    try {
        let cus = await getUserOfPlatForm(face,botId);
        let conf = await Config.findOne({botId: botId})
        let stp = await Step.find({blockId: blockId}).sort({ position: 1 });
        if(cus && stp)
        for (let i = 0; i < cus.length; i++) {
            let el = cus[i];
            await new Promise(resolve => setTimeout(resolve, 100));
            await Facebook.sendMessage(el.senderId,stp[0].items[0],conf.fa_page_token);
            
        }
        return;
    } catch (error) {
        console.log('Error[M_BroadCast_handling:handleFaceBroadCast]: ' + error);
        return;
    }
};


exports.handleZaloBroadCast = async function (blockId,botId) {

    try {
        let cus = await getUserOfPlatForm(zalo,botId);
        let conf = await Config.findOne({botId: botId})
        let stp = await Step.find({blockId: blockId}).sort({ position: 1 });
        if(cus && stp)
        for (let i = 0; i < cus.length; i++) {
            let el = cus[i];
            await new Promise(resolve => setTimeout(resolve, 100));
            await Zalo.sendMessage(el.senderId,stp[0].items[0],conf.zalo_token);
            
        }
        return;
    } catch (error) {
        console.log('Error[M_BroadCast_handling:handleZaloBroadCast]: ' + error);
        return;
    }
};

async function getUserOfPlatForm(platForm, botId) {

    try {
        let arr_customer = await Customer.find({ botId: botId, platForm: platForm })
        return arr_customer;

    } catch (error) {
        console.log('Error[M_BroadCast_handling:getUserOfPlatForm]: ' + error);
        return null;
    }
}
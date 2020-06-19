

const Survey = require('../models/Survey.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');
const Customer = require('../models/Customer.model');


module.exports = {

    // get all with intentId
    getAll: async (req, res) => {
        try {

            let { botId } = req.params;

            let sur = await Survey.find({ botId: botId });
            if (sur)
                return sR.sendResponse(res, 200, sur, message.getSuccess);
            return sR.sendResponse(res, 400, null, message.getFail);

        } catch (error) {

            console.log('Error[Survey:getAll]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // get all with Is Design
    getByIsDesign: async (req, res) => {
        try {

            let { botId } = req.params;

            let sur = await Survey.find({ botId: botId, isDesign: true });
            if (sur)
                return sR.sendResponse(res, 200, sur, message.getSuccess);
            return sR.sendResponse(res, 400, null, message.getFail);

        } catch (error) {

            console.log('Error[Survey:getByIsDesign]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // get all with Is User
    getByIsUser: async (req, res) => {
        try {

            let { botId } = req.params;

            let sur = await Survey.find({ botId: botId, isDesign: false });
            if (sur)
                return sR.sendResponse(res, 200, sur, message.getSuccess);
            return sR.sendResponse(res, 400, null, message.getFail);

        } catch (error) {

            console.log('Error[Survey:getByIsUser]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // get by id
    getById: async (req, res) => {
        try {
            let { surveyId } = req.params;
            let sur = await Survey.findById(surveyId);
            if (sur)
                return sR.sendResponse(res, 200, sur, message.getSuccess);
            return sR.sendResponse(res, 400, null, message.getFail);

        } catch (error) {

            console.log('Error[Survey:getById]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },
    // create
    create: async (req, res) => {

        try {
            //let { botId } = req.params;
            let obj = req.body;
            if(!obj.isDesign)
            
            {
                let cus = await Customer.findOne({ senderId: obj.sender_id});
               
                if(cus){
                    obj.sender_name = cus.name;
                    obj.botId = cus.botId;
                    obj.senderId = cus.senderId;
                }
                
                for (let i = 0; i < obj.items.length; i++) {
                    let el = obj.items[i];
                    if(obj.data[el.variable] == undefined || obj.data[el.variable] == '' )
                    obj.items[i].value = null;
                    else
                    obj.items[i].value = obj.data[el.variable];
                }
                
            }
            let sur = await Survey.create(obj);
            if (sur)
                return sR.sendResponse(res, 200, sur, message.createSuccess);
            return sR.sendResponse(res, 400, null, message.createFail);

        } catch (error) {

            console.log('Error[Survey:create]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // update
    update: async (req, res) => {

        try {
            let { botId, surveyId } = req.params;
            let object = req.body;

            let sur = await Survey.findById(surveyId);
            sur.name = object.name;
            sur.items = object.items;
            await sur.save();
            return sR.sendResponse(res, 200, sur, message.updateSuccess);
        } catch (error) {

            console.log('Error[Survey:update]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },


    // remove method with id
    remove: async (req, res) => {
        try {

            let { surveyId } = req.params;
            let r = await Survey.findByIdAndRemove(surveyId);
            if (r) {
                return sR.sendResponse(res, 200, null, message.deleteSuccess);
            }
            return sR.sendResponse(res, 400, null, message.deleteFail);

        } catch (error) {

            console.log('Error[Survey:remove]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }

    }
}
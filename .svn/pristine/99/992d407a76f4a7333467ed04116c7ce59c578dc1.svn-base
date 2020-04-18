
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
            const his = await History.find({ botId: botId,"name":{ $ne: null } }).sort({createdAt: -1});                    
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

    getUserFollower: async (req, res) => {
        try {            
            const { botId} = req.params;            
            const conf = await Config.findOne({botId: botId});
            const resWit = await fetch('https://openapi.zalo.me/v2.0/oa/getfollowers?data={"offset":0,"count":1}&access_token='+ conf.zalo_token, {
                method: "GET",
            });            
            const json = await resWit.json();            
            var total = json.data.total;
            for (let i = 0; i < total/50; i++) {
                const resWit_info = await fetch('https://openapi.zalo.me/v2.0/oa/getfollowers?data={"offset":'+ i*50 +',"count":50}&access_token='+ conf.zalo_token, {
                method: "GET",
            });            
            const json_info = await resWit_info.json();
            var user = json_info.data.followers;            
            user.forEach(async element => {
            //console.log(element.user_id);
            await create_UserInFor(botId, element.user_id);
            });                
            }           

            return sR.sendResponse(res, 200, json, message.getSuccess);

        } catch (error) {

            console.log('Error[History:getUserFollowers]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },
    
    getUserInFor: async (req, res) => {
        try {
            const { botId, senderId } = req.params;
            const conf = await Config.findOne({botId: botId});
            const resWit = await fetch('https://openapi.zalo.me/v2.0/oa/getprofile?data={"user_id":'+senderId+'}&access_token='+ conf.zalo_token, {
                method: "GET",
            });
            const json = await resWit.json();
            console.log(json)
            return sR.sendResponse(res, 200, json, message.getSuccess);

        } catch (error) {

            console.log('Error[History:getUserInFor]: ' + error);
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

create_UserInFor = async function (botId,senderId) {
    try {   
            
            const conf = await Config.findOne({botId: botId});            
            const resWit =  await  fetch('https://openapi.zalo.me/v2.0/oa/getprofile?data={"user_id":'+senderId+'}&access_token='+ conf.zalo_token, {
                method: "GET",
                
            });             
            const json = await resWit.json();
            const his = await History.findOne({ senderId: senderId });                      
            if (his == false || his == null)
                {
                    var obj ={};
                    obj.name = json.data.display_name;
                    obj.gender = json.data.user_gender; 
                    obj.phone = "";
                    obj.senderId = json.data.user_id;
                    obj.platForm = "Zalo";
                    obj.botId = botId;
                    // obj.message ={
                    //     //text: message,
                    //     //isSender: isSender
                    // };                     
                    await History.create(obj);
                }       

    } catch (error) {
        console.log('Error[History:create_UserInFor]: ' + error);        
    }    
}
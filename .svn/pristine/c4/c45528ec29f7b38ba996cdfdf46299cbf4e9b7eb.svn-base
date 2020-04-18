const History = require('../models/History.model');
const UnknowRequest = require('../models/UnknowRequest.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');
const fetch = require('node-fetch');


exports.addHistory  = async function (message,_token,platForm,senderId,isSender,botId,isUnKnow,unknowText) {

    try {
        var his = await History.findOne({senderId: senderId});
        if(isUnKnow){
            var unk = {};
            unk.text = unknowText;
            unk.platForm = platForm;
            unk.senderId = senderId;
            unk.botId = botId;
            await UnknowRequest.create(unk);
        }
        //console.log(senderId)
        if(his){
            his.message.push({
                text: message,
                isSender: isSender
            });
            his.save(his);

        } else{
            var obj ={};
            if(platForm =='Zalo'){
                const resWit = await fetch('https://openapi.zalo.me/v2.0/oa/getprofile?data={"user_id":'+senderId+'}&access_token='+ _token, {
                    method: "GET",
                });
                const json = await resWit.json();
                obj.name = json.data.display_name;
                obj.gender = json.data.user_gender;
            }

            if(platForm == 'Facebook'){
                const resWit = await fetch('https://graph.facebook.com/'+ senderId+'?fields=name,gender&access_token='+_token, {
                    method: "GET",
                });
                const json = await resWit.json();
                obj.name =json.name;
                obj.gender = json.gender == 'male'? 1:0
               // obj.gender = json.data.user_gender;
            }

            
           
            
            obj.senderId = senderId;
            obj.platForm = platForm;
            obj.botId = botId;
            obj.message ={
                text: message,
                isSender: isSender
            };
            if(isSender)
            await History.create(obj);
        }
        return;
        
    } catch (error) {
        console.log('Error[M_History:addHistory]: ' + error);
        return;
    }
};
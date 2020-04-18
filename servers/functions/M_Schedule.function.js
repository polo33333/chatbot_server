var schedule = require('node-schedule');
const BroadCast = require('../models/BroadCast.model');
const Config = require('../models/Config.model');
const fetch = require('node-fetch');

var scheduler = {
     scheduleJob:  function(text) {
        var job =  schedule.scheduleJob('* * * * *', async function(){
            var bro = await BroadCast.find({ 'isSchedule': true});
            let currDate = new Date();
            //console.log(currDate.getDate() +'/'+currDate.getMonth()+'/' +currDate.getHours()+':'+currDate.getMinutes() )
            bro.forEach(async el => {
                if(
                    el.sendingTime.day == currDate.getDate() 
                    && el.sendingTime.month == currDate.getMonth()+1 
                    && el.sendingTime.year == currDate.getFullYear() 
                    && el.sendingTime.hour == currDate.getHours() 
                    && el.sendingTime.minute == currDate.getMinutes() 
                ){
                    let con = await Config.findOne({ botId: el.botId});
                    let x = sendBroadCast(el.attachment_id,con.zalo_token);
                    if(x){
                        el.isSchedule = false;
                        el.save(el);
                    }
                }
            });

        });
        return job;
    }
}

sendBroadCast = async (attachment_id, _token) => {

    try {
        var send = {
            recipient: {
                target: {
                    gender: "0",
                    cities: "4"
                }
            },
            message: {
                attachment: {
                    type: "template",
                    payload: {
                        template_type: "media",
                        elements: [
                            {
                                media_type: "article",
                                attachment_id: attachment_id
                            }
                        ] 
                    }
                    
                }
            }
        }

        const resWit = await fetch('https://openapi.zalo.me/v2.0/oa/message?access_token=' + _token, {
            method: "POST",
            body: JSON.stringify(
                send
            )
        });
        const json = await resWit.json();
        console.log(json);
        if (json.error == 0)
            return true;
        return false;

    }
    catch (error) {
        console.log('Error[BroadCast:send]: ' + error);
        return false;
    }
}

module.exports = scheduler;
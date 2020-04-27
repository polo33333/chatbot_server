var schedule = require('node-schedule');
const BroadCast = require('../models/BroadCast.model');
const Config = require('../models/Config.model');
const fetch = require('node-fetch');
const config = require('../../config');
const M_BroadCast_handling = require('../functions/M_BroadCast_handling.function');
const zalo = 'zalo';
const face = 'facebook';

var scheduler = {
    scheduleJob: function () {
        var job = schedule.scheduleJob('* * * * *', async function () {
            var bro = await BroadCast.find({ 'isSchedule': true });
            let currDate = new Date();
            //console.log(currDate.getDate() +'/'+currDate.getMonth()+'/' +currDate.getHours()+':'+currDate.getMinutes() )
            bro.forEach(async el => {
                if (
                    el.sendingTime.day == currDate.getDate()
                    && el.sendingTime.month == currDate.getMonth() + 1
                    && el.sendingTime.year == currDate.getFullYear()
                    && el.sendingTime.hour == currDate.getHours()
                    && el.sendingTime.minute == currDate.getMinutes()
                ) {
 
                    switch (bro.platForm) {
                        case zalo:
                            {

                                await M_BroadCast_handling.handleZaloBroadCast(el.blockId, el.botId);
                            }
                            break;
                        case face:
                            {
    
                                await M_BroadCast_handling.handleFaceBroadCast(el.blockId, el.botId);
                            }
                            break;

                        default: {
                            await M_BroadCast_handling.handleFaceBroadCast(el.blockId, el.botId);
                            await M_BroadCast_handling.handleZaloBroadCast(el.blockId, el.botId);
                        }
                            break;
                    }
                    el.isSchedule = false;
                    el.save(el);

                }
            });

        });
        return job;
    }
}


module.exports = scheduler;
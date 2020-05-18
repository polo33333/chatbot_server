var schedule = require('node-schedule');
const BroadCast = require('../models/BroadCast.model');
const Config = require('../models/Config.model');
const Memory = require('../models/Memory,model');
const Reminder = require('../models/Reminder.model');
const fetch = require('node-fetch');
const config = require('../../config');
const M_BroadCast_handling = require('../functions/M_BroadCast_handling.function');
const Zalo = require('../controllers/Zalo.controller');
const FaceBook = require('../controllers/Facebook.controller');
const Customer = require('../models/Customer.model');
const M_Message_handling = require('../functions/M_Message_handling.function');
const zalo = 'zalo';
const face = 'facebook';

var scheduler = {
    scheduleJob: function () {
        var job = schedule.scheduleJob('* * * * *', async function () {
            var bro = await BroadCast.find({ 'isSchedule': true });
            let currDate = new Date();
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

            await reminder();

        });
        return job;
    }
}

reminder = async () => {

    let arrReminder = await Reminder.find();
    for (let i = 0; i < arrReminder.length; i++) {
        let el = arrReminder[i];
        if (el.timeOut != 0) {
            el.timeOut--;
            await el.save();

        } else {
            let conf = await Config.findOne({botId:el.botId});
            let cus = await Customer.findOne({senderId: el.senderId, botId: el.botId});
            let obj_pro = {};
            obj_pro['content'] = (conf.reminder_content).replace("{{reminder_timeout}}", conf.reminder_timeout);
            obj_pro['button'] = [];
            obj_pro['template_type'] = 'text';
            obj_pro['type'] = 'text-card';
            if (cus.platForm == zalo)
                await Zalo.sendMessage(el.senderId, obj_pro, conf.zalo_token);
            else if (cus.platForm == face)
                await FaceBook.sendMessage(sel.senderId, obj_pro, conf.fa_page_token);
            await M_Message_handling.handleLiveChat([obj_pro], el.senderId, false, null, el.botId);
            await Reminder.deleteOne({ senderId: el.senderId, botId: el.botId })
        }


    }

    return;
}


module.exports = scheduler;
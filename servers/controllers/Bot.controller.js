const Bot = require('../models/Bot.model');
const Intent = require('../models/Intent.model');
const Entity = require('../models/Entity.model');
const Block = require('../models/Block.model');
const Config = require('../models/Config.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');
const fetch = require('node-fetch');
const config = require('../../config');
const P_Wit = require('../functions/P_Wit.function');
const data_botdefault = {
    bots: {

    },
    intents: [
        {
            name: 'chao_hoi',
            isSystem: true,
        },
        {
            name: 'tam_biet',
            isSystem: true,
        },
    ],
    entites: [
        {
            name: '$sender_id',
            roles: 'sender_id',
            type: 'String',
            desc: '[Biến hệ thống]: Id người gửi',
            isSystem: true,
            isActive: true,
            isEntity: false,
        },
        {
            name: '$sender_name',
            roles: 'sender_name',
            type: 'String',
            desc: '[Biến hệ thống]: Tên người gửi',
            isSystem: true,
            isActive: true,
            isEntity: false,
        },
        {
            name: '$gender',
            roles: 'gender',
            type: 'String',
            desc: '[Biến hệ thống]: Giới tính người gửi',
            isSystem: true,
            isActive: true,
            isEntity: false,
        },
        {
            name: '$channel',
            roles: 'channel',
            type: 'String',
            desc: '[Biến hệ thống]: Kênh trao đổi',
            isSystem: true,
            isActive: true,
            isEntity: false,
        },
        {
            name: '$last_chat',
            roles: 'last_chat',
            type: 'String',
            desc: '[Biến hệ thống]: Thời gian chat cuối cùng',
            isSystem: true,
            isActive: true,
            isEntity: false,
        },
        {
            name: '$last_intent',
            roles: 'last_intent',
            type: 'String',
            desc: '[Biến hệ thống]: Ý định cuối cùng',
            isSystem: true,
            isActive: true,
            isEntity: false,
        },



    ],
    blocks: [
        {

            isActive: true,
            isDefaut: true,
            isParent: false,
            name: "Trả lời mặc định",
            intentName: "$default_answer",
            position: 0
        },
        {

            isDefaut: true,
            isActive: true,
            isParent: false,
            name: "Welcome",
            intentName: "chao_hoi",
            position: 0
        }

    ],
    steps: [
    ],
    configs: [
        {
            fa_verify_token: Date.now().toString(),
        }
    ]

}


// const data_botdefault_test = {
//     bots: {

//     },
//     intents: [
//         {
//             name: 'chao_hoi',
//             isSystem: true,
//         },
//         {
//             name: 'tam_biet',
//             isSystem: true,
//         },
//         {
//             name: 'ask_exchange_rate',
//             isSystem: false,
//         },
//         {
//             name: 'contact',
//             isSystem: false,
//         },
//         {
//             name: 'history',
//             isSystem: false,
//         },
//         {
//             name: 'menu',
//             isSystem: false,
//         },
//         {
//             name: 'product',
//             isSystem: false,
//         },
//         {
//             name: 'product_company',
//             isSystem: false,
//         },
//         {
//             name: 'product_personal',
//             isSystem: false,
//         },

//         {
//             name: 'promotion',
//             isSystem: false,
//         },
//         {
//             name: 'saving_rate',
//             isSystem: false,
//         },
//         {
//             name: 'transfer_money',
//             isSystem: false,
//         },
//     ],
//     entites: [
//         {
//             name: '$sender_id',
//             roles: 'sender_id',
//             type: 'String',
//             desc: '[Biến hệ thống]: Id người gửi',
//             isSystem: true,
//             isActive: true,
//             isEntity: false,
//         },
//         {
//             name: '$sender_name',
//             roles: 'sender_name',
//             type: 'String',
//             desc: '[Biến hệ thống]: Tên người gửi',
//             isSystem: true,
//             isActive: true,
//             isEntity: false,
//         },
//         {
//             name: '$gender',
//             roles: 'gender',
//             type: 'String',
//             desc: '[Biến hệ thống]: Giới tính người gửi',
//             isSystem: true,
//             isActive: true,
//             isEntity: false,
//         },
//         {
//             name: '$channel',
//             roles: 'channel',
//             type: 'String',
//             desc: '[Biến hệ thống]: Kênh trao đổi',
//             isSystem: true,
//             isActive: true,
//             isEntity: false,
//         },
//         {
//             name: '$last_chat',
//             roles: 'last_chat',
//             type: 'String',
//             desc: '[Biến hệ thống]: Thời gian chat cuối cùng',
//             isSystem: true,
//             isActive: true,
//             isEntity: false,
//         },
//         {
//             name: '$last_intent',
//             roles: 'last_intent',
//             type: 'String',
//             desc: '[Biến hệ thống]: Ý định cuối cùng',
//             isSystem: true,
//             isActive: true,
//             isEntity: false,
//         },
//         {
//             name: 'product',
//             roles: 'product',
//             type: 'String',
//             desc: '[Biến nguoi dung]: Thực thể người dùng tự định nghĩa',
//             isSystem: true,
//             isActive: true,
//             isEntity: false,
//         },

//         {
//             name: 'transfer_amount',
//             roles: 'transfer_amount',
//             type: 'String',
//             desc: '[Biến nguoi dung]: Thực thể người dùng tự định nghĩa',
//             isSystem: true,
//             isActive: true,
//             isEntity: false,
//         },

//         {
//             name: 'transfer_toaccount',
//             roles: 'transfer_toaccount',
//             type: 'String',
//             desc: '[Biến nguoi dung]: Thực thể người dùng tự định nghĩa',
//             isSystem: true,
//             isActive: true,
//             isEntity: false,
//         },




//     ],
//     blocks: [
//         {

//             isActive: true,
//             isDefaut: true,
//             isParent: false,
//             name: "Trả lời mặc định",
//             intentName: "$default_answer",
//             position: 0
//         },
//         {

//             isDefaut: true,
//             isActive: true,
//             isParent: false,
//             name: "Welcome",
//             intentName: "chao_hoi",
//             position: 0
//         }

//     ],
//     steps: [
//     ],
//     configs: [
//         {
//             fa_verify_token: Date.now().toString(),
//         }
//     ]

// }


module.exports = {

    // get all
    getAll: async (req, res, next) => {
        try {
            let result = await Bot.find();
            return sR.sendResponse(res, 200, result, message.getSuccess);

        } catch (error) {

            console.log('Error[Bot:getAll]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // get by id
    getById: async (req, res) => {
        try {

            let { botId } = req.params;
            let result = await Bot.findOne({ botId: botId });
            return sR.sendResponse(res, 200, result, message.getSuccess);

        } catch (error) {

            console.log('Error[Bot:getById]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // create
    create: async (req, res) => {

        try {

            let obj = req.body;
            let json = await P_Wit.import(obj.name,'./wit_resource/bot_v2-2020-07-11-07-29-06.zip',config.access_token);
            //let json = await P_Wit.import(obj.name,'./wit_resource/bot_v3-2020-07-26-02-18-25.zip',config.access_token);
           // console.log(json)
            if (json.error == undefined) {
                obj.appId = json.app_id;
                obj.botId = json.access_token;
                let bot = await Bot.create(obj);
                if (bot) {
                    let item = data_botdefault;
                    //let item = data_botdefault_test;
                    if (item['intents'].length > 0)
                        for (let i = 0; i < item['intents'].length; i++) {
                            let temp = item['intents'][i];
                            temp.botId = bot.botId;
                            await Intent.create(temp);
                        }
                    if (item['entites'].length > 0)
                        for (let i = 0; i < item['entites'].length; i++) {
                            let temp = item['entites'][i];
                            temp.botId = bot.botId;
                            await Entity.create(temp);

                        }
                    if (item['blocks'].length > 0)
                        for (let i = 0; i < item['blocks'].length; i++) {
                            let temp = item['blocks'][i];
                            temp.botId = bot.botId;
                            await Block.create(temp);

                        }

                    if (item['configs'].length > 0)
                        for (let i = 0; i < item['configs'].length; i++) {
                            let temp = item['configs'][i];
                            temp.botId = bot.botId;
                            temp.zalo_webhook = config.server_url + '/' + bot.botId + '/Zalo/Webhook';
                            temp.fa_webhook = config.server_url + '/' + bot.botId + '/Facebook/Webhook';
                            await Config.create(temp);

                        }


                    return sR.sendResponse(res, 200, bot, message.createSuccess);
                }

                return sR.sendResponse(res, 400, bot, message.createFail);
            }
            return sR.sendResponse(res, 400, null, message.createFail);


        } catch (error) {

            console.log('Error[Bot:create]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },
    // update method with id
    update: async (req, res) => {
        return sR.sendResponse(res, 400, null, message.updateFail);
    },

    // remove method with id
    remove: async (req, res) => {
        try {

            let { botId } = req.params;
            let bots = await Bot.findOne({ botId: botId });
            let response = await fetch('https://api.wit.ai/apps/' + bots.appId + config.version, {
                method: "DELETE",
                headers: { Authorization: 'Bearer ' + botId }
            });
            let json = await response.json();

            if (json.error == undefined) {
                let bot = await Bot.findOneAndDelete({ botId: botId });
                return sR.sendResponse(res, 200, bot, message.deleteSuccess);
            }

            return sR.sendResponse(res, 400, null, message.deleteFail);

        } catch (error) {

            console.log('Error[Bot:remove]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }

    }
}
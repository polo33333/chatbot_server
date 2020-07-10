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
        // {
        //     name: 'wit/number',
        //     roles: 'number',
        //     desc: 'Ngoại suy số từ văn bản. Ví dụ: sáu, 23K.',
        //     isSystem: true,
        //     isActive: false,
        //     isEntity: true,
        // },
        // {
        //     name: 'wit/age_of_person',
        //     roles: 'age_of_person',
        //     desc: 'Nắm bắt tuổi của một người, vật nuôi hoặc đồ vật, như 22 tuổi.Thực thể trả về một số nguyên, đại diện cho năm. Nó không hỗ trợ độ chi tiết nhỏ hơn (tháng, tuần, v.v.).',
        //     isSystem: true,
        //     isActive: false,
        //     isEntity: true,
        // },
        // {
        //     name: 'wit/agenda_entry',
        //     roles: 'agenda_entry',
        //     desc: 'Ngoại suy các mục chương trình nghị sự điển hình từ văn bản.',
        //     isSystem: true,
        //     isActive: false,
        //     isEntity: true,
        // },
        // {
        //     name: 'wit/amount_of_money',
        //     roles: 'amount_of_money',
        //     desc: 'Đo một số tiền như $ 20, 30 euro.',
        //     isSystem: true,
        //     isActive: false,
        //     isEntity: true,
        // },
        // {
        //     name: 'wit/bye',
        //     roles: 'bye',
        //     desc: 'Thực thể hệ thống',
        //     isSystem: true,
        //     isActive: false,
        //     isEntity: true,
        // },
        // {
        //     name: 'wit/contact',
        //     roles: 'contact',
        //     desc: 'Thông tin liên lạc',
        //     isSystem: true,
        //     isActive: false,
        //     isEntity: true,
        // },
        // {
        //     name: 'wit/creative_work',
        //     roles: 'creative_work',
        //     desc: 'Thực thể hệ thống',
        //     isSystem: true,
        //     isActive: false,
        //     isEntity: true,
        // },
        // {
        //     name: 'wit/datetime',
        //     roles: 'datetime',
        //     desc: 'Thực thể hệ thống',
        //     isSystem: true,
        //     isActive: false,
        //     isEntity: true,
        // },
        // {
        //     name: 'wit/distance',
        //     roles: 'distance',
        //     desc: 'Thực thể hệ thống',
        //     isSystem: true,
        //     isActive: false,
        //     isEntity: true,
        // },
        // {
        //     name: 'wit/duration',
        //     roles: 'duration',
        //     desc: 'Thực thể hệ thống',
        //     isSystem: true,
        //     isActive: false,
        //     isEntity: true,
        // },
        // {
        //     name: 'wit/email',
        //     roles: 'email',
        //     desc: 'Thực thể hệ thống',
        //     isSystem: true,
        //     isActive: false,
        //     isEntity: true,
        // },
        // {
        //     name: 'wit/greetings',
        //     roles: 'greetings',
        //     desc: 'Thực thể hệ thống',
        //     isSystem: true,
        //     isActive: false,
        //     isEntity: true,
        // },
        // {
        //     name: 'wit/local_search_query',
        //     roles: 'local_search_query',
        //     desc: 'Thực thể hệ thống',
        //     isSystem: true,
        //     isActive: false,
        //     isEntity: true,
        // },
        // {
        //     name: 'wit/location',
        //     roles: 'location',
        //     desc: 'Thực thể hệ thống',
        //     isSystem: true,
        //     isActive: false,
        //     isEntity: true,
        // },

        // {
        //     name: 'wit/math_expression',
        //     roles: 'math_expression',
        //     desc: 'Nhận diện các biểu thức tính toán',
        //     isSystem: true,
        //     isActive: false,
        //     isEntity: true,
        // },
        // {
        //     name: 'wit/on_off',
        //     roles: 'on_off',
        //     desc: 'Nhận diện trạng thái bật tắt',
        //     isSystem: true,
        //     isActive: false,
        //     isEntity: true,
        // },
        // {
        //     name: 'wit/ordinal',
        //     roles: 'ordinal',
        //     desc: 'Nhận diện số đo của một số thứ tự, chẳng hạn như thứ nhất, thứ hai, thứ ba',
        //     isSystem: true,
        //     isActive: false,
        //     isEntity: true,
        // },
        // {
        //     name: 'wit/phone_number',
        //     roles: 'phone_number',
        //     desc: 'Nhận diện số điện thoại, nhưng không cố kiểm tra tính hợp lệ của số',
        //     isSystem: true,
        //     isActive: false,
        //     isEntity: true,
        // },
        // {
        //     name: 'wit/phrase_to_translate',
        //     roles: 'phrase_to_translate',
        //     desc: 'Dịch đôi tượng sang ngôn ngữ cần',
        //     isSystem: true,
        //     isActive: false,
        //     isEntity: true,
        // },
        // {
        //     name: 'wit/quantity',
        //     roles: 'quantity',
        //     desc: 'Nhận diện số lượng',
        //     isSystem: true,
        //     isActive: false,
        //     isEntity: true,
        // },
        // {
        //     name: 'wit/sentiment',
        //     roles: 'sentiment',
        //     desc: 'Nắm bắt tình cảm của câu và trả về tích cực, trung tính hoặc tiêu cực.',
        //     isSystem: true,
        //     isActive: false,
        //     isEntity: true,
        // },
        // {
        //     name: 'wit/temperature',
        //     roles: 'temperature',
        //     desc: 'Nắm bắt nhiệt độ bằng celsius hoặc fahrenheit',
        //     isSystem: true,
        //     isActive: false,
        //     isEntity: true,
        // },
        // {
        //     name: 'wit/thanks',
        //     roles: 'thanks',
        //     desc: 'Thực thể hệ thống',
        //     isSystem: true,
        //     isActive: false,
        //     isEntity: true,
        // },
        // {
        //     name: 'wit/url',
        //     roles: 'url',
        //     desc: 'Thực thể hệ thống',
        //     isSystem: true,
        //     isActive: false,
        //     isEntity: true,
        // },
        // {
        //     name: 'wit/volume',
        //     roles: 'volume',
        //     desc: 'Nắm bắt các số đo thể tích như 250 ml, 3 gal',
        //     isSystem: true,
        //     isActive: false,
        //     isEntity: true,
        // },



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
            let json = await P_Wit.import(obj.name,wit_resource_path,obj.botId);
            if (json.error == undefined) {
                obj.appId = json.app_id;
                obj.botId = json.access_token;
                let bot = await Bot.create(obj);
                if (bot) {
                    let item = data_botdefault;
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

const Article = require('../models/Article.model');
const Config = require('../models/Config.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');
const fetch = require('node-fetch');
const config = require('../../config');


module.exports = {

    // get all with botId
    getAll: async (req, res) => {
        try {
            //var mysort = { createdAt: -1 };  
            const { botId } = req.params;
            const ans = await Article.find({ botId: botId }).sort({ createdAt: -1 });
            return sR.sendResponse(res, 200, ans, message.getSuccess);

        } catch (error) {

            console.log('Error[Article:getAll]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
        
    },

    // get by id
    getById: async (req, res) => {
        try {
            const { articleId } = req.params;
            const ans = await Article.findById(articleId);
            return sR.sendResponse(res, 200, ans, message.getSuccess);

        } catch (error) {

            console.log('Error[Article:getById]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // create
    create: async (req, res) => {
        try {

            const { botId } = req.params;
            const con = await Config.findOne({ botId: botId });
            var obj = req.body;            
            var objCreate = {
                cover: {
                  //photo_url: config.imgUrl,
                  photo_url: "https://chatbox.tpsoft.vn/images/default_image.png",
                  //photo_url: obj.photo_url,
                  cover_type: "photo",
                  status: "show"
                },
                type: "normal",
                title: obj.title,
                description: obj.description,
                author: "admin",
                body: [
                  {
                    type: "text",
                    content: obj.content
                  }
                ],
                status: "show",
                comment: "show"
              };              
            const resWit = await fetch('https://openapi.zalo.me/v2.0/article/create?access_token=' + con.zalo_token, {
                method: "POST",
                body: JSON.stringify(objCreate)
            });
            const json = await resWit.json();            
            await new Promise(resolve => setTimeout(resolve, 1800));
            const resVerify = await fetch('https://openapi.zalo.me/v2.0/article/verify?access_token=' + con.zalo_token, {                
                method: "POST",
                body: JSON.stringify({                    
                    token: json.data.token,
                })
            });

            const jsonVerify = await resVerify.json();            
            if (json.error ==0) {
                obj.article_id = jsonVerify.data.id;
                obj.botId = botId;
                await Article.create(obj);
                return sR.sendResponse(res, 200, null, message.createSuccess);
            }
            return sR.sendResponse(res, 400, null, message.createFail);

        } catch (error) {

            console.log('Error[Article:create]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },
    // update method with id
    update: async (req, res) => {
        try {

            const { botId,articleId } = req.params;
            const con = await Config.findOne({ botId: botId });
            const art = await Article.findById(articleId);
            var obj = req.body;
            var objCreate = {
                cover: {
                  //photo_url: config.imgUrl,
                  photo_url: "https://chatbox.tpsoft.vn/images/default_image.png",
                  cover_type: "photo",
                  status: "show"
                },
                type: "normal",
                id: obj.article_id,
                title: obj.title,
                description: obj.description,
                author: "admin",
                body: [
                  {
                    type: "text",
                    content: obj.content                    
                  }
                ],
                status: "show",
                comment: "show"
              };

            const resWit = await fetch('https://openapi.zalo.me/v2.0/article/update?access_token=' + con.zalo_token, {
                method: "POST",
                body: JSON.stringify(
                    objCreate
                )
            });
            const json = await resWit.json();
            if (json.error == 0) {
                
                art.title = obj.title;
                art.description = obj.description;
                art.content = obj.content;    
                console.log(obj.content);            
                await art.save(art);
                return sR.sendResponse(res, 200, null, message.updateSuccess);
            }
            return sR.sendResponse(res, 400, null, message.updateFail);

        } catch (error) {

            console.log('Error[Article:update]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // remove method with id
    remove: async (req, res) => {
        try {

            const { botId, articleId } = req.params;
            const con = await Config.findOne({ botId: botId });
            const art = await Article.findById(articleId);

            const resWit = await fetch('https://openapi.zalo.me/v2.0/article/remove?access_token=' + con.zalo_token, {
                method: "POST",
                body: JSON.stringify({
                    id: art.article_id
                })
            });

            const json = await resWit.json();
            if (json.error ==0)
                await Article.findByIdAndRemove(articleId);
            return sR.sendResponse(res, 200, null, message.deleteSuccess);

        } catch (error) {

            console.log('Error[Article:remove]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }

    }
}
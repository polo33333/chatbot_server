const express = require('express');
const router = express.Router();
const Bot = require('../controllers/Bot.controller');
const Intent = require('../controllers/Intent.controller');
const Entity = require('../controllers/Entity.controller');
const Sample = require('../controllers/Sample.controller');
const Keyword = require('../controllers/Keywords.controller');
const Synonym = require('../controllers/Synonyms.controller');
const Block = require('../controllers/Block.controller');
const Step = require('../controllers/Step.controller');
const Config = require('../controllers/Config.controller');
const History = require('../controllers/History.controller');
const Customer = require('../controllers/Customer.controller');
const UnknowRequest = require('../controllers/UnknowRequest.controller');
const SupportRequest = require('../controllers/SupportRequest.controller');
const Article = require('../controllers/Article.controller');
const BroadCast = require('../controllers/BroadCast.controller');
const Zalo = require('../controllers/Zalo.controller');
const Facebook = require('../controllers/Facebook.controller');
const LiveChat = require('../controllers/LiveChat.controller');
const Notification = require('../controllers/Notification.controller');
const Statistic = require('../controllers/Statistic.controller');
const Auth = require('../controllers/Auth.controller');
const FileUpload = require('../controllers/FileUpload.controller');
const uploadMulter = require('../functions/M_ModelMulter.function');

// Router



// Api
router.get('/', (req, res) => {
    res.send('api works');
});


// Bot
router.get('/Ai/Bots', Bot.getAll);
router.get('/Ai/Bots/:botId', Bot.getById);
router.post('/Ai/Bots', Bot.create);
router.delete('/Ai/Bots/:botId', Bot.remove);

// Intents
router.get('/Ai/Bots/:botId/Intents', Intent.getAll);
router.get('/Ai/Bots/:botId/Intents/:intentId', Intent.getById);
router.post('/Ai/Bots/:botId/Intents', Intent.create);
router.put('/Ai/Bots/:botId/Intents/:intentId', Intent.update);
router.delete('/Ai/Bots/:botId/Intents/:intentId', Intent.remove);

// Entities
router.get('/Ai/Bots/:botId/Entities', Entity.getAll);
router.get('/Ai/Bots/:botId/Entities/:entityId', Entity.getById);
router.post('/Ai/Bots/:botId/Entities', Entity.create);
router.put('/Ai/Bots/:botId/Entities/:entityId', Entity.update);
router.delete('/Ai/Bots/:botId/Entities/:entityId', Entity.remove);

// Keywords
router.post('/Ai/Bots/:botId/Entities/:entityId/Keywords/create', Keyword.create);
router.post('/Ai/Bots/:botId/Entities/:entityId/Keywords/remove', Keyword.remove);

// Synonyms
router.post('/Ai/Bots/:botId/Entities/:entityId/Synonyms/create', Synonym.create);
router.post('/Ai/Bots/:botId/Entities/:entityId/Synonyms/remove', Synonym.remove);

//Samples
router.get('/Ai/Bots/:botId/intents/:intentId/Samples', Sample.getByIntentId);
router.post('/Ai/Bots/:botId/Samples', Sample.create);
router.post('/Ai/Bots/:botId/Samples/Remove', Sample.remove);

//underStrand
router.post('/Ai/Bots/:botId/UnderStrand', Sample.getUnderStrand);

//Block
router.get('/Ai/Bots/:botId/Blocks', Block.getAll);
router.get('/Ai/Bots/:botId/Blocks/Menu', Block.getMenu);
router.get('/Ai/Bots/:botId/Blocks/Defaut', Block.getDefaut);
router.get('/Ai/Bots/:botId/Blocks/:blockId', Block.getById);
router.post('/Ai/Bots/:botId/Blocks', Block.create);
router.put('/Ai/Bots/:botId/Blocks/:blockId', Block.update);
router.delete('/Ai/Bots/:botId/Blocks/:blockId', Block.remove);

//Step
router.get('/Ai/Bots/:botId/Blocks/:blockId/Steps', Step.getAll);
router.get('/Ai/Bots/:botId/Blocks/:blockId/Steps/:stepId', Step.getById);
router.post('/Ai/Bots/:botId/Blocks/:blockId/Steps', Step.create);
router.put('/Ai/Bots/:botId/Steps/:stepId', Step.update);
router.delete('/Ai/Bots/:botId/Steps/:stepId', Step.remove);

//FileUpload
router.post('/Ai/FileUpload',uploadMulter.single('file') ,FileUpload.uploadSingleFile);

//Configs
router.get('/Ai/Bots/:botId/Config', Config.getAll);
router.put('/Ai/Bots/:botId/Config', Config.update);

//History
router.get('/Ai/Bots/:botId/History', History.getAll);
router.get('/Ai/Bots/:botId/HIstory/:historyId', History.getById);
router.delete('/Ai/Bots/:botId/History/:historyId', History.remove);

//Customer
router.get('/Ai/Bots/:botId/Customer', Customer.getAll);
router.get('/Ai/Bots/:botId/Customer/:customerId', Customer.getById);
router.get('/Ai/Bots/:botId/getUserFollower', Customer.getUserFollower);
router.put('/Ai/Bots/:botId/Customer/:customerId', Customer.update);
router.delete('/Ai/Bots/:botId/Customer/:customerId', Customer.remove);

//UnknowRequest
router.get('/Ai/Bots/:botId/UnknowRequest', UnknowRequest.getAll);
router.get('/Ai/Bots/:botId/UnknowRequest/:requestId', UnknowRequest.getById);
router.delete('/Ai/Bots/:botId/UnknowRequest/:requestId', UnknowRequest.remove);

//SupportRequest
router.get('/Ai/Bots/:botId/SupportRequest', SupportRequest.getAll);
router.get('/Ai/Bots/:botId/SupportRequest/:requestId', SupportRequest.getById);
router.delete('/Ai/Bots/:botId/SupportRequest/:requestId', SupportRequest.remove);

//Article
router.get('/Ai/Bots/:botId/Articles', Article.getAll);
router.get('/Ai/Bots/:botId/Articles/:articleId', Article.getById);
router.post('/Ai/Bots/:botId/Articles', Article.create);
router.put('/Ai/Bots/:botId/Articles/:articleId', Article.update);
router.delete('/Ai/Bots/:botId/Articles/:articleId', Article.remove);

//LiveChat
router.get('/Ai/Bots/:botId/LiveChats/:customerId', LiveChat.getById);
router.post('/Ai/Bots/:botId/LiveChats', LiveChat.create);
router.delete('/Ai/Bots/:botId/LiveChats/:liveChatId', LiveChat.remove);

//Notification
router.get('/Ai/Bots/:botId/Notifications', Notification.getAll);
router.delete('/Ai/Bots/:botId/Notifications/:notificationId', Notification.remove);

//Statistic
router.get('/Ai/Bots/:botId/Statistics/getInfo', Statistic.getInfo);
router.get('/Ai/Bots/:botId/Statistics/getChart1', Statistic.getChart1);
router.get('/Ai/Bots/:botId/Statistics/getChart2', Statistic.getChart2);

//BroadCast
router.get('/Ai/Bots/:botId/BroadCast/getHistrory', BroadCast.getHistrory);
router.get('/Ai/Bots/:botId/BroadCast/getSchedule', BroadCast.getSchedule);
router.post('/Ai/Bots/:botId/BroadCast', BroadCast.create);
// router.put('/Ai/Bots/:botId/Articles/:articleId', Article.update);
router.delete('/Ai/Bots/:botId/BroadCast/:broadCastId', BroadCast.remove);


//Auth
router.get('/Ai/Auth', Auth.getAllUser);
router.get('/Ai/Auth/:userId', Auth.getUserById);
router.post('/Ai/Auth/Login', Auth.login);
router.post('/Ai/Auth', Auth.createUser);
router.put('/Ai/Auth/:userId', Auth.updateUser);
router.delete('/Ai/Auth/:userId', Auth.removeUser);

//Webhook
router.post('/Ai/Bots/:botId/Zalo/Webhook', Zalo.webhook);
router.get('/Ai/Bots/:botId/Facebook/Webhook', Facebook.webhookVerify);
router.post('/Ai/Bots/:botId/Facebook/Webhook', Facebook.webhook);

module.exports = router;
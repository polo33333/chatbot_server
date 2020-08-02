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
const BroadCast = require('../controllers/BroadCast.controller');
const Zalo = require('../functions/P_Zalo.function');
const Facebook = require('../functions/P_Facebook.function');
const LiveChat = require('../controllers/LiveChat.controller');
const Notification = require('../controllers/Notification.controller');
const Statistic = require('../controllers/Statistic.controller');
const Survey = require('../controllers/Survey.controller');
const Variable = require('../controllers/Variable.controller');
const Auth = require('../controllers/Auth.controller');
const FileUpload = require('../controllers/FileUpload.controller');
const Utterance = require('../controllers/Utterance.controller');
const uploadMulter = require('../functions/M_ModelMulter.function');

// Router



// Api
router.get('/', (req, res) => {
    res.send('api works');
});


// Bot
router.get('/Ai/Bots', Auth.TokenCheck, Bot.getAll);
router.get('/Ai/Bots/:botId', Auth.TokenCheck, Bot.getById);
router.post('/Ai/Bots', Auth.TokenCheck, Bot.create);
router.delete('/Ai/Bots/:botId', Auth.TokenCheck, Bot.remove);

// Intents
router.get('/Ai/Bots/:botId/Intents', Auth.TokenCheck, Intent.getAll);
router.get('/Ai/Bots/:botId/Intents/:intentId', Auth.TokenCheck, Intent.getById);
router.post('/Ai/Bots/:botId/Intents', Auth.TokenCheck, Intent.create);
router.put('/Ai/Bots/:botId/Intents/:intentId', Auth.TokenCheck, Intent.update);
router.delete('/Ai/Bots/:botId/Intents/:intentId', Auth.TokenCheck, Intent.remove);

// Entities
router.get('/Ai/Bots/:botId/Entities', Auth.TokenCheck, Entity.getEntities);
//router.get('/Ai/Bots/:botId/Entities', Entity.getAll);
//router.get('/Ai/Bots/:botId/Variables', Entity.getVariables);
router.get('/Ai/Bots/:botId/Entities/:entityId/Info', Auth.TokenCheck, Entity.getInfo);
router.get('/Ai/Bots/:botId/Entities/:entityId', Auth.TokenCheck, Entity.getById);
router.post('/Ai/Bots/:botId/Entities', Auth.TokenCheck, Entity.create);
router.put('/Ai/Bots/:botId/Entities/:entityId', Auth.TokenCheck, Entity.update);
router.delete('/Ai/Bots/:botId/Entities/:entityId', Auth.TokenCheck, Entity.remove);


// Variable
router.get('/Ai/Bots/:botId/Variables', Auth.TokenCheck, Variable.getAll);
router.get('/Ai/Bots/:botId/Variables/:variableId', Auth.TokenCheck, Variable.getById);
router.post('/Ai/Bots/:botId/Variables', Auth.TokenCheck, Variable.create);
router.put('/Ai/Bots/:botId/Variables/:variableId', Auth.TokenCheck, Variable.update);
router.delete('/Ai/Bots/:botId/Variables/:variableId', Auth.TokenCheck, Variable.remove);

// Keywords
router.post('/Ai/Bots/:botId/Entities/:entityId/Keywords/create', Auth.TokenCheck, Keyword.create);
router.post('/Ai/Bots/:botId/Entities/:entityId/Keywords/remove', Auth.TokenCheck, Keyword.remove);

// Synonyms
router.post('/Ai/Bots/:botId/Entities/:entityId/Synonyms/create', Auth.TokenCheck, Synonym.create);
router.post('/Ai/Bots/:botId/Entities/:entityId/Synonyms/remove', Auth.TokenCheck, Synonym.remove);

//Samples
router.get('/Ai/Bots/:botId/intents/:intentId/Samples', Auth.TokenCheck, Sample.getByIntentId);
router.post('/Ai/Bots/:botId/Samples', Auth.TokenCheck, Sample.create);
router.post('/Ai/Bots/:botId/Samples/Remove', Auth.TokenCheck, Sample.remove);

//underStrand
router.post('/Ai/Bots/:botId/UnderStrand', Auth.TokenCheck, Sample.getUnderStrand);

//Block
router.get('/Ai/Bots/:botId/Blocks', Auth.TokenCheck, Block.getAll);
router.get('/Ai/Bots/:botId/Blocks/Menu/Default', Auth.TokenCheck, Block.getMenu);
router.get('/Ai/Bots/:botId/Blocks/Menu/CreateBlock', Auth.TokenCheck, Block.getIntentInvalid);
router.get('/Ai/Bots/:botId/Blocks/Defaut', Auth.TokenCheck, Block.getDefaut);
router.get('/Ai/Bots/:botId/Blocks/:blockId', Auth.TokenCheck, Block.getById);
router.post('/Ai/Bots/:botId/Blocks', Auth.TokenCheck, Block.create);
router.put('/Ai/Bots/:botId/Blocks/:blockId', Auth.TokenCheck, Block.update);
router.delete('/Ai/Bots/:botId/Blocks/:blockId', Auth.TokenCheck, Block.remove);

//Step
router.get('/Ai/Bots/:botId/Blocks/:blockId/Steps', Auth.TokenCheck, Step.getAll);
router.get('/Ai/Bots/:botId/Blocks/:blockId/Steps/:stepId', Auth.TokenCheck, Step.getById);
router.post('/Ai/Bots/:botId/Blocks/:blockId/Steps', Auth.TokenCheck, Step.create);
router.put('/Ai/Bots/:botId/Steps/:stepId', Auth.TokenCheck, Step.update);
router.delete('/Ai/Bots/:botId/Steps/:stepId', Auth.TokenCheck, Step.remove);

//FileUpload
router.post('/Ai/FileUpload', uploadMulter.single('file'), FileUpload.uploadSingleFile);

//Configs
router.get('/Ai/Bots/:botId/Config', Auth.TokenCheck, Config.getAll);
router.put('/Ai/Bots/:botId/Config', Auth.TokenCheck, Config.update);

//History
router.get('/Ai/Bots/:botId/History', Auth.TokenCheck, History.getAll);
router.get('/Ai/Bots/:botId/HIstory/:historyId', Auth.TokenCheck, History.getById);
router.delete('/Ai/Bots/:botId/History/:historyId', Auth.TokenCheck, History.remove);

//Customer
router.get('/Ai/Bots/:botId/Customer', Auth.TokenCheck, Customer.getAll);
router.get('/Ai/Bots/:botId/Customer/:customerId', Auth.TokenCheck, Customer.getById);
router.get('/Ai/Bots/:botId/getUserFollower', Auth.TokenCheck, Customer.getUserFollower);
router.put('/Ai/Bots/:botId/Customer/:customerId', Auth.TokenCheck, Customer.update);
router.delete('/Ai/Bots/:botId/Customer/:customerId', Auth.TokenCheck, Customer.remove);

//UnknowRequest
router.get('/Ai/Bots/:botId/UnknowRequest', Auth.TokenCheck, UnknowRequest.getAll);
router.get('/Ai/Bots/:botId/UnknowRequest/:requestId', Auth.TokenCheck, UnknowRequest.getById);
router.delete('/Ai/Bots/:botId/UnknowRequest/:requestId', Auth.TokenCheck, UnknowRequest.remove);

//SupportRequest
router.get('/Ai/Bots/:botId/SupportRequest', Auth.TokenCheck, SupportRequest.getAll);
router.get('/Ai/Bots/:botId/SupportRequest/:requestId', Auth.TokenCheck, SupportRequest.getById);
router.delete('/Ai/Bots/:botId/SupportRequest/:requestId', Auth.TokenCheck, SupportRequest.remove);

//Survey
router.get('/Ai/Bots/:botId/Survey', Auth.TokenCheck, Survey.getAll);
router.get('/Ai/Bots/:botId/Survey/:surveyId', Survey.getById);
router.get('/Ai/Bots/:botId/SurveyIsDesign', Survey.getByIsDesign);
router.get('/Ai/Bots/:botId/SurveyIsUser', Survey.getByIsUser);
router.post('/Ai/Bots/:botId/Survey', Auth.TokenCheck, Survey.create);
router.put('/Ai/Bots/:botId/Survey/:surveyId', Survey.update);
router.delete('/Ai/Bots/:botId/Survey/:surveyId', Auth.TokenCheck, Survey.remove);

//LiveChat
router.get('/Ai/Bots/:botId/LiveChats/:customerId', Auth.TokenCheck, LiveChat.getById);
router.post('/Ai/Bots/:botId/LiveChats', Auth.TokenCheck, LiveChat.create);
router.delete('/Ai/Bots/:botId/LiveChats/:liveChatId', Auth.TokenCheck, LiveChat.remove);

//Notification
router.get('/Ai/Bots/:botId/Notifications', Auth.TokenCheck, Notification.getAll);
router.delete('/Ai/Bots/:botId/Notifications/:notificationId', Auth.TokenCheck, Notification.remove);

//utterances
router.get('/Ai/Bots/:botId/Utterances', Auth.TokenCheck, Utterance.getAll);
router.post('/Ai/Bots/:botId/Utterances/Remove', Auth.TokenCheck, Utterance.remove);

//Statistic
router.get('/Ai/Bots/:botId/Statistics/getInfo', Auth.TokenCheck, Statistic.getInfo);
router.get('/Ai/Bots/:botId/Statistics/getChart1', Auth.TokenCheck, Statistic.getChart1);
router.get('/Ai/Bots/:botId/Statistics/getChart2', Auth.TokenCheck, Statistic.getChart2);
router.get('/Ai/Bots/:botId/Statistics/getChart3', Auth.TokenCheck, Statistic.getChart3);
router.get('/Ai/Bots/:botId/Statistics/getChart4', Auth.TokenCheck, Statistic.getChart4);

//BroadCast
router.get('/Ai/Bots/:botId/BroadCast/getHistrory', Auth.TokenCheck, BroadCast.getHistrory);
router.get('/Ai/Bots/:botId/BroadCast/getSchedule', Auth.TokenCheck, BroadCast.getSchedule);
router.post('/Ai/Bots/:botId/BroadCast', Auth.TokenCheck, BroadCast.create);
router.delete('/Ai/Bots/:botId/BroadCast/:broadCastId', Auth.TokenCheck, BroadCast.remove);


//Auth
router.get('/Ai/Auth', Auth.TokenCheck, Auth.getAllUser);
router.get('/Ai/Auth/:userId', Auth.TokenCheck, Auth.getUserById);
router.post('/Ai/Auth/Login', Auth.login);
router.post('/Ai/Auth/Refresh', Auth.refreshToken);
router.post('/Ai/Auth', Auth.TokenCheck, Auth.createUser);
router.put('/Ai/Auth/:userId', Auth.TokenCheck, Auth.updateUser);
router.delete('/Ai/Auth/:userId', Auth.TokenCheck, Auth.removeUser);

//Webhook
router.post('/Ai/Bots/:botId/Zalo/Webhook', Zalo.webhook);
router.get('/Ai/Bots/:botId/Facebook/Webhook', Facebook.webhookVerify);
router.post('/Ai/Bots/:botId/Facebook/Webhook', Facebook.webhook);

module.exports = router;
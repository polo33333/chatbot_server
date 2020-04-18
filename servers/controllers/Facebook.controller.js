
var Bot = require('../models/Bot.model');
var Config = require('../models/Config.model');

var sR = require('../functions/M_SendResponse.function');
var message = require('../functions/C_String.function');
const request = require('request');
const Core = require('../functions/M_Core.function');
const M_History = require('../functions/M_History.function');

exports.webhookVerify = async function (req, res) {
//console.log(req);
     // Your verify token. Should be a random string.

    var currConfig = await Config.findOne({botId: req.params.botId});
    //console.log();
     //let VERIFY_TOKEN = "ma_xac_nhan";
 
     // Parse the query params
     let mode = req.query['hub.mode'];
     let token = req.query['hub.verify_token'];
     let challenge = req.query['hub.challenge'];
  
     // Checks if a token and mode is in the query string of the request
     if (mode && token) {
  
         // Checks the mode and token sent is correct
         if (mode === 'subscribe' && token === currConfig.fa_verify_token) {
  
             // Responds with the challenge token from the request
             console.log('WEBHOOK_VERIFIED');
             res.status(200).send(challenge);
  
         } else {
             // Responds with '403 Forbidden' if verify tokens do not match
             res.sendStatus(403);
         }
     }
}
// get script by botid method
exports.webhook = async function (req, res) {
    try {
        // Parse the request body from the POST
        var body = req.body;
       
        const currConfig = await Config.findOne({botId: req.params.botId});

        console.log(currConfig.fa_page_token);
        // Check the webhook event is from a Page subscription
        if (body.object === 'page') {

            // Iterate over each entry - there may be multiple if batched
            body.entry.forEach(function (entry) {

                // Gets the body of the webhook event
                var webhook_event = entry.messaging[0];
                console.log(webhook_event);

                // Get the sender PSID
                var sender_psid = webhook_event.sender.id;
                console.log('Sender PSID: ' + sender_psid);

                // Check if the event is a message or postback and
                // pass the event to the appropriate handler function
                if (webhook_event.message) {
                    handleMessage(req.params.botId,currConfig.fa_page_token, sender_psid, webhook_event.message);
                } else if (webhook_event.postback) {
                    handlePostback(sender_psid, webhook_event.postback);
                }

            });

            // Return a '200 OK' response to all events
            res.status(200).send('EVENT_RECEIVED');

        } else {
            // Return a '404 Not Found' if event is not from a page subscription
            res.sendStatus(404);
        }
    } catch (error) {
        console.log(error);
    }
}



// Handles messages events
async function handleMessage(botId,PAGE_ACCESS_TOKEN, sender_psid, received_message) {

    console.log(received_message);
    // Check if the message contains text
    if (received_message.text) {
        if(received_message.is_echo == undefined)
        M_History.addHistory(received_message.text,PAGE_ACCESS_TOKEN,"Facebook",sender_psid,true,botId ,false,null);
        var result = await Core.getAnswer(botId, received_message.text);
        
        if (result) {
            result.forEach(element => {
                if(received_message.is_echo == undefined)
                M_History.addHistory(element.contentDisplay,PAGE_ACCESS_TOKEN,"Facebook",sender_psid,false,botId ,false,null);
                var response = {
                    "text": element
                }
                callSendAPI(PAGE_ACCESS_TOKEN,sender_psid, {"text": element.contentDisplay});
            });

           // return sR.sendResponse(res, 200, null, message.getSuccess);
        } else{
            if(received_message.is_echo == undefined)
            M_History.addHistory("Xin lỗi , Xin vui lòng hỏi lại",PAGE_ACCESS_TOKEN,"Facebook",sender_psid,false,botId,true,received_message.text );
            callSendAPI(PAGE_ACCESS_TOKEN,sender_psid, {"text": "Xin lỗi , Xin vui lòng hỏi lại"});
        }
        
        //M_History.addHistory("Xin lỗi , Xin vui lòng hỏi lại",PAGE_ACCESS_TOKEN,"Facebook",sender_psid,false,botId );
       // return sR.sendResponse(res, 200, null, message.getSuccess);
    }

    // Sends the response message
    

}

// Handles messaging_postbacks events
function handlePostback(sender_psid, received_postback) {

}

// Sends response messages via the Send API
function callSendAPI(PAGE_ACCESS_TOKEN,sender_psid, response) {
    //const PAGE_ACCESS_TOKEN = 'EAAIRor5YhRgBAITU5xaQmORZChHEaci2vHeHXxIqR1s7brUi8itZAY1pJjQNS9X8ZB5l0x3aoZBHNTcD4L3yxffwoZCmck6WLFugmEU57YZCF2j2DbGQeclIbz8q8I6NCtX7dqPvfFSFXZAqUAWzOpa4vH1oFkHvPdE6mGptsSx0QZDZD';
    // Construct the message body
    let request_body = {
        "recipient": {
            "id": sender_psid
        },
        "message": response
    }

    // Send the HTTP request to the Messenger Platform
    request({
        "uri": "https://graph.facebook.com/v2.6/me/messages",
        "qs": { "access_token": PAGE_ACCESS_TOKEN },
        "method": "POST",
        "json": request_body
    }, (err, res, body) => {
        if (!err) {
            console.log('message sent!')
        } else {
            console.error("Unable to send message:" + err);
        }
    });
}
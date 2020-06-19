
const Config = require('../models/Config.model');
const fetch = require('node-fetch');
const sever = require('../../server');
const config = require('../../config');


module.exports = {
    // messages
    // Return the meaning of a sentence
    getMessage: async (text, botId) => {
        try {
            let resWit = await fetch('https://api.wit.ai/message' + config.version + '&q=' + encodeURI(text), {
                method: "GET",
                headers: { Authorization: config.auth + botId },
            });
            let json = await resWit.json();
            return json;
        } catch (error) {
            console.log('Error[P_Wit:getMessage]: ' + error);
            return null;
        }
    },

    // Retrieve the list of all the intents of your app
    getIntents: async (text, botId) => {
        try {
            let resWit = await fetch('https://api.wit.ai/intents' + config.version, {
                method: "GET",
                headers: { Authorization: config.auth + botId },
            });
            let json = await resWit.json();
            return json;
        } catch (error) {
            console.log('Error[P_Wit:getIntents]: ' + error);
            return null;
        }
    },

    //Retrieve all information about an intent
    getIntent: async (name, botId) => {
        try {
            let resWit = await fetch('https://api.wit.ai/intents/' + name + config.version, {
                method: "GET",
                headers: { Authorization: config.auth + botId },
            });
            let json = await resWit.json();
            return json;
        } catch (error) {
            console.log('Error[P_Wit:getIntent]: ' + error);
            return null;
        }
    },
    // Create a new intent
    createIntent: async (name, botId) => {
        try {
            let resWit = await fetch('https://api.wit.ai/intents' + config.version, {
                method: "POST",
                headers: { Authorization: config.auth + botId },
                body: JSON.stringify({
                    name: name
                })

            });
            let json = await resWit.json();
            return json;
        } catch (error) {
            console.log('Error[P_Wit:createIntent]: ' + error);
            return null;
        }
    },

    // Delete an intent
    deleteIntent: async (name, botId) => {
        try {
            let resWit = await fetch('https://api.wit.ai/intents/' + name + config.version, {
                method: "DELETE",
                headers: { Authorization: config.auth + botId },
            });
            let json = await resWit.json();
            if (json.deleted != undefined)
                return true;
            return false;
        } catch (error) {
            console.log('Error[P_Wit:deleteIntent]: ' + error);
            return false;
        }
    },

    // entities
    // Retrieve the list of all the entities in your app
    getEntities: async (botId) => {
        try {

            let resWit = await fetch('https://api.wit.ai/entities' + config.version, {
                method: "GET",
                headers: { Authorization: config.auth + botId },
            });
            let json = await resWit.json();
            return json;

        } catch (error) {
            console.log('Error[P_Wit:getEntities]: ' + error);
            return [];
        }
    },

    // Retrieve all information about an entity
    getEntity: async (name, botId) => {
        try {
            let resWit = await fetch('https://api.wit.ai/entities/' + name + config.version, {
                method: "GET",
                headers: { Authorization: config.auth + botId },
            });
            let json = await resWit.json();
            return json;
        } catch (error) {
            console.log('Error[P_Wit:getEntity]: ' + error);
            return null;
        }
    },
    // Create a new entity
    createEntity: async (obj, botId) => {
        try {
            let resWit = await fetch('https://api.wit.ai/entities' + config.version, {
                method: "POST",
                headers: { Authorization: config.auth + botId },
                body: JSON.stringify({
                    name: obj.name,
                    roles: [],
                    lookups: obj.lookups
                })
            });
            let json = await resWit.json();
            return json;
        } catch (error) {
            console.log('Error[P_Wit:createEntities]: ' + error);
            return null;
        }
    },

    // Update the information of an entity
    updateEntity: async (name, obj, botId) => {
        try {
            let resWit = await fetch('https://api.wit.ai/entities/' + name + config.version, {
                method: "PUT",
                headers: { Authorization: config.auth + botId },
                body: JSON.stringify(obj)
            });
            let json = await resWit.json();
            return json;
        } catch (error) {
            console.log('Error[P_Wit:updateEntity]: ' + error);
            return null;
        }
    },
    // Delete an entity
    deleteEntity: async (name, botId) => {
        try {
            let resWit = await fetch('https://api.wit.ai/entities/' + name + config.version, {
                method: "DELETE",
                headers: { Authorization: config.auth + botId },
            });
            let json = await resWit.json();
            console.log(json)
            if (json.deleted != undefined)
                return true;
            return false;
        } catch (error) {
            console.log('Error[P_Wit:deleteEntity]: ' + error);
            return false;
        }
    },

    // Add new values to a keywords entity
    createKeyword: async (name, keyword, botId) => {
        try {
            let resWit = await fetch('https://api.wit.ai/entities/' + name + '/keywords' + config.version, {
                method: "POST",
                headers: { Authorization: config.auth + botId },
                body: JSON.stringify({
                    keyword: keyword,
                    synonyms: []
                })
            });
            let json = await resWit.json();
            return json;
        } catch (error) {
            console.log('Error[P_Wit:createKeyword]: ' + error);
            return null;
        }
    },
    // Remove a given keyword from an entity
    deleteKeyword: async (name, keyword, botId) => {
        try {

            let resWit = await fetch('https://api.wit.ai/entities/' + name + '/keywords/' + encodeURI(keyword) + config.version, {
                method: "DELETE",
                headers: { Authorization: config.auth + botId },
            });
            let json = await resWit.json();
            if (json.deleted != undefined)
                return true;
            return false;
        } catch (error) {
            console.log('Error[P_Wit:deleteKeyword]: ' + error);
            return false;
        }
    },

    // Create a new synonym for a keywords entity
    createSynonym: async (name, keyword, synonym, botId) => {
        try {
            let resWit = await fetch('https://api.wit.ai/entities/' + name + '/keywords/' + encodeURI(keyword) + '/synonyms' + config.version, {
                method: "POST",
                headers: { Authorization: config.auth + botId },
                body: JSON.stringify({
                    synonym: synonym
                })
            });
            let json = await resWit.json();
            return json;
        } catch (error) {
            console.log('Error[P_Wit:createSynonym]: ' + error);
            return false;
        }
    },

    // Remove a synonym from an entity
    deleteSynonym: async (name, keyword, synonym, botId) => {
        try {
            let resWit = await fetch('https://api.wit.ai/entities/' + name + '/keywords/' + encodeURI(keyword) + '/synonyms/' + encodeURI(synonym) + config.version, {
                method: "DELETE",
                headers: { Authorization: config.auth + botId },
            });
            let json = await resWit.json();
            if (json.deleted != undefined)
                return true;
            return false;
        } catch (error) {
            console.log('Error[P_Wit:deleteSynonym]: ' + error);
            return false;
        }
    },

    // utterances
    // Get utterances for an app
    getUtterances: async (botId) => {
        try {
            let resWit = await fetch('https://api.wit.ai/utterances?' + config.version + '&limit=10000', {
                method: "GET",
                headers: { Authorization: config.auth + botId },
            });
            let json = await resWit.json();
            return json;
        } catch (error) {
            console.log('Error[P_Wit:getUtterances]: ' + error);
            return [];
        }
    },
    //  Train your app
    createUtterances: async (obj, botId) => {
        try {
            let resWit = await fetch('https://api.wit.ai/utterances' + config.version, {
                method: "POST",
                headers: { Authorization: config.auth + botId },
                body: JSON.stringify([obj])
            });
            let json = await resWit.json();
            return json;
        } catch (error) {
            console.log('Error[P_Wit:createUtterances]: ' + error);
            return null;
        }
    },
    // Delete utterances from your app
    deleteUtterances: async (arr, botId) => {
        try {
            let resWit = await fetch('https://api.wit.ai/utterances' + config.version, {
                method: "DELETE",
                headers: { Authorization: config.auth + botId },
                body: JSON.stringify(arr)
            });
            let json = await resWit.json();
            if (json.deleted != undefined)
                return true;
            return false;
        } catch (error) {
            console.log('Error[P_Wit:deleteUtterances]: ' + error);
            return false;
        }
    },

    // apps
    // Get all your apps
    getApps: async (botId) => {
        try {
            let resWit = await fetch('https://api.wit.ai/apps?offset=1&limit=500', {
                method: "GET",
                headers: { Authorization: config.auth + botId },
            });
            let json = await resWit.json();
            return json;
        } catch (error) {
            console.log('Error[P_Wit:getApps]: ' + error);
            return [];
        }
    },
    // Get information for a specific app
    getApp: async (appId, botId) => {
        try {
            let resWit = await fetch('https://api.wit.ai/apps/' + appId, {
                method: "GET",
                headers: { Authorization: config.auth + botId },
            });
            let json = await resWit.json();
            return json;
        } catch (error) {
            console.log('Error[P_Wit:getApp]: ' + error);
            return null;
        }
    },
    // Create a new app
    createApp: async (obj) => {
        try {
            let resWit = await fetch('https://api.wit.ai/apps' + config.version, {
                method: "POST",
                headers: { Authorization: config.auth + config.access_token },
                body: JSON.stringify({
                    name: obj.name,
                    lang: obj.lang,
                    private: "true",
                    timezone: "Asia/Ho_Chi_Minh"
                })
            });
            let json = await resWit.json();
            return json;
        } catch (error) {
            console.log('Error[P_Wit:createApp]: ' + error);
            return null;
        }
    },
    // Update an existing app
    updateApp: async (appId, botId) => {
        try {
            let resWit = await fetch('https://api.wit.ai/apps/' + appId + config.version, {
                method: "PUT",
                headers: { Authorization: config.auth + botId },
                body: JSON.stringify(obj),
            });
            let json = await resWit.json();
            return json;
        } catch (error) {
            console.log('Error[P_Wit:updateApp]: ' + error);
            return null;
        }
    },

    // Delete an app
    deleteApp: async (senderId, botId) => {
        try {
            let resWit = await fetch('https://api.wit.ai/apps/' + appId + config.version, {
                method: "DELETE",
                headers: { Authorization: config.auth + botId },
                body: JSON.stringify(obj),
            });
            let json = await resWit.json();
            if (json.deleted != undefined)
                return true;
            return false;
        } catch (error) {
            console.log('Error[P_Wit:deleteApp]: ' + error);
            return false;
        }
    },


    // exports
    export: async (senderId, botId) => {
        try {
            let resWit = await fetch('https://api.wit.ai/export' + config.version, {
                method: "GET",
                headers: { Authorization: config.auth + botId },
            });
            let json = await resWit.json();
            return json;
        } catch (error) {
            console.log('Error[P_Wit:export]: ' + error);
            return null;
        }
    },

    // imports
    import: async (newapp, botId) => {
        try {
            let resWit = await fetch('https://api.wit.ai/import' + config.version + `&name=${newapp}&private=false`, {
                method: "POST",
                headers: { 'Authorization': config.auth + botId, 'Content-Type': 'application/zip' },
            });
            let json = await resWit.json();
            return json;
        } catch (error) {
            console.log('Error[P_Wit:import]: ' + error);
            return null;
        }
    },
}

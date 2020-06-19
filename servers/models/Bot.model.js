var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema({
    name: String,
    lang: { type: String, default: 'vi' },
    desc: String,
    appId: String,
    botId: String
},
    {
        versionKey: false,
        timestamps: true
    });

module.exports = mongoose.model('Bot', serviceSchema);
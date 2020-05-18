var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema(
    {
        senderId: String,
        name: String,
        intentName: String,
        phone: { type: String, default: ''},
        items: [],
        gender: Number,
        platForm: String,
        botId: String,
    },
    {
        versionKey: false,
        timestamps: true
    }
)
module.exports = mongoose.model('SupportRequest', serviceSchema);
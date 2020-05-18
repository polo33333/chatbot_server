var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema(
    {
        senderId: String,
        name: String,
        phone: { type: String, default: null },
        gender: Number,
        platForm: String,
        isSupport: { type: Boolean, default: false },
        botId: String,
    },
    {
        versionKey: false,
        timestamps: true
    }
)
module.exports = mongoose.model('Customer', serviceSchema);
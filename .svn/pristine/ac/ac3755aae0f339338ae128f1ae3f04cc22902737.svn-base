var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema({
    title: String,
    description: String,
    sendingTime: {
        day: Number,
        month: Number,
        year: Number,
        hour: Number,
        minute: Number
    },
    isSchedule: { type: Boolean, default: false},
    attachment_id: String,
    botId: String
},
    {
        timestamps: true
    });

module.exports = mongoose.model('BroadCast', serviceSchema);
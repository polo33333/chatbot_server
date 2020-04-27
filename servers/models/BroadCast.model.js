var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema(
    {
        sendingTime: {
            day: Number,
            month: Number,
            year: Number,
            hour: Number,
            minute: Number
        },
        name: String,
        blockId: String,
        isSchedule: { type: Boolean, default: false },
        platForm: { type: String, default: 'ALL'}, // facebook;zalo
        botId: String
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.model('BroadCast', serviceSchema);
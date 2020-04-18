var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema({
    name: String,
    type: String,
    intentName: String,
    isActive: { type: Boolean, default: true },
    isDefaut: { type: Boolean, default: false },
    botId: String,

},
    {
        timestamps: true
    });

module.exports = mongoose.model('Block', serviceSchema);
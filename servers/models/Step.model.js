var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema({
    name: String,
    type: String,
    condition: [Object],
    items : [Object],
    isActive: { type: Boolean, default: true },
    blockId: String,
    botId: String,
    position: Number

},
    {
        timestamps: true
    },
    { versionKey: false }
    );

module.exports = mongoose.model('Step', serviceSchema);
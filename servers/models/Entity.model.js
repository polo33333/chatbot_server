var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema({
    name: String,
    desc: { type: String, default: 'User-defined entity' },
    lookups: { type: Number, default: 1 },  // 1: lookups = keyword; 2: lookups = freetext; 3: lookups = keyword & freetext
    intents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Intent' }],
    botId: String,
    // __v: { type: Number, select: false }
},
    {
        timestamps: true
    });

module.exports = mongoose.model('Entity', serviceSchema);
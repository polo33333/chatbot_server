var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema({
    name: String,
    desc: { type: String, default: 'User-defined intent' },
    entities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Entity' }],
    botId: String,
    isActive: { type: Boolean, default: true },
    //__v: { type: Number, select: false }
},
    {
        timestamps: true
    });

module.exports = mongoose.model('Intent', serviceSchema);
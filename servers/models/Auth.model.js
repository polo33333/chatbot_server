var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema(
    {
        userName: String,
        pass: { type: String, default: null },
        token: { type: String, default: null },
        isAdmin: { type: Boolean, default: false },
        role: { type: Number, default: 0 },
        isActive: { type: Boolean, default: true },
        botId: [String],


    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('Auth', serviceSchema);
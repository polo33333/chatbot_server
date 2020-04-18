var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema({
    _Id: Schema.Types.ObjectId,
    botId: String,
    zalo_token: { type: String, default: '' },
    zalo_webhook: { type: String, default: '' },
    fa_page_token: { type: String, default: '' },
    fa_webhook: { type: String, default: '' },
    fa_verify_token: { type: String, default: '' },
    __v: { type: Number, select: false }
},
    {
        timestamps: true
    });

module.exports = mongoose.model('Config', serviceSchema);
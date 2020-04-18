var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema({
    senderId: String,
    platForm: String,
    variables: [
        { entityName: String, value: String }
    ],
    works: [
        Object
    ],
    botId: String,

},
{ versionKey: false }
)

module.exports = mongoose.model('Memory', serviceSchema);
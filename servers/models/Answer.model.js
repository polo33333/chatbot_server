var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema({
    type: String, // text, list, image
    condition: [{
        entity : String,
        keyword : String
         }],
    contentDisplay: String,
    button:[{
        lable : String,
        type: String,
        value : String
         }],
    nextStep: String,
    intentId: String,
    isActive: { type: Boolean, default: true },
},
    {
        timestamps: true
    });

module.exports = mongoose.model('Answer', serviceSchema);
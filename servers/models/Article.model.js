var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema({    
    title: String,
    photo_url: {type: String, default: "https://chatbox.tpsoft.vn/images/default_image.png"},
    description: String,
    author: {type: String, default: "admin"},
    content:{type: String, default: ""},
    botId: String,
    article_id: String
},
    {
        timestamps: true
    });

module.exports = mongoose.model('Article', serviceSchema);
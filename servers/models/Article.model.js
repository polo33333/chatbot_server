var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema({    
    title: String,
    image_url: {type: String, default: "/images/default_image.png"},
    description: String,
    author: {type: String, default: "admin"},
    content:{type: String, default: ""},
    botId: String,
    article_id: String,
},
    {
        versionKey: false ,
        timestamps: true
    });

module.exports = mongoose.model('Article', serviceSchema);
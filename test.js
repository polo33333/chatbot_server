let fetch = require('node-fetch');
let fs = require('fs');

const stats = fs.statSync('./wit_resource/appTest.zip');
const fileSizeInBytes = stats.size;

// You can pass any of the 3 objects below as body
let readStream = fs.createReadStream('./wit_resource/appTest.zip');
//var stringContent = fs.readFileSync('foo.txt', 'utf8');
//var bufferContent = fs.readFileSync('foo.txt');

 fetch('https://api.wit.ai/import?v=20200513&name=newapp1&private=true', {
    method: 'POST',
    headers: {
        "Content-length": fileSizeInBytes,
        'Content-Type': 'application/zip',
        'Authorization': 'Bearer 64AXDR7YZZYUORCDAZBM66OVN4PBKES7'
    },
    body: readStream // Here, stringContent or bufferContent would also work
})
.then(function(res) {
    return res.json();
}).then(function(json) {
    console.log(json);
});
var jwt = require('jsonwebtoken');
// var config = require('../../config');
// var cookieParser = require('cookie-parser');
var sR = require('./M_SendResponse.function');
var message = require('./C_String.function');

var get_cookies = (request) => {
    var cookies = {};
    if (request.headers.cookie)
        request.headers && request.headers.cookie.split(';').forEach(function (cookie) {
            var parts = cookie.match(/(.*?)=(.*)$/)
            cookies[parts[1].trim()] = (parts[2] || '').trim();
        });
    return cookies;
};


// protect router if you want
exports.verifyToken = (req, res, next) => {
    // check avablie in db
    // rule check _id in token with _id user in db and lastModifited in token with db to verity token

    var token = req.body.token || req.query.token || get_cookies(req)['auth'] || req.headers['x-access-token'];
    console.log(token);
    if (!token || token == undefined) sR.sendResponse(res, 403, null, message.noToken);
    else {
        jwt.verify(token, 'superSecret', function (err, decoded) {
            // console.log(decoded);
            if (err) sR.sendResponse(res, 401, null, message.authenticateFail);
            else {
                //console.log(decoded);
                req.decoded = decoded;
                next();
            }

        })
    }
}

// protect router if has role="admin"
exports.verifyTokenAdmin = () => {
    // comming soon
}

// module.exports = verifyToken;
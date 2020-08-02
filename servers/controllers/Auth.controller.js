

const Auth = require('../models/Auth.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');
const bcrypt = require('bcrypt-nodejs');
const salt = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken');
const config = require('../../config');
const S_Token = require('../functions/S_Token.function');
const tokenList = {};

module.exports = {

    // get all user
    getAllUser: async (req, res) => {
        try {

            let { botId } = req.params;

            let r = await Auth.find({ botId: botId });
            return sR.sendResponse(res, 200, r, message.getSuccess);

        } catch (error) {

            console.log('Error[Auth:getAllUser]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // get user by id
    getUserById: async (req, res) => {
        try {
            let { userId } = req.params;
            let r = await Auth.findById(userId);

            return sR.sendResponse(res, 200, r, message.getSuccess);

        } catch (error) {

            console.log('Error[Auth:getUserById]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // create user
    createUser: async (req, res) => {

        try {
            let obj = req.body;
            obj.pass = await pass_decrypt(obj.pass);
            let auth = await Auth.create(obj);
            if (auth)
                return sR.sendResponse(res, 200, auth, message.createSuccess);
            return sR.sendResponse(res, 400, null, message.createFail);


        } catch (error) {

            console.log('Error[Auth:createUser]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // update user method
    updateUser: async (req, res) => {
        try {
            return sR.sendResponse(res, 404, null, message.notFound);
        } catch (error) {
            console.log('Error[Auth:updateUser]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // remove user method
    removeUser: async (req, res) => {
        try {

            let { userId } = req.params;
            let r = await Auth.findByIdAndRemove(userId);
            if (r) {
                return sR.sendResponse(res, 200, null, message.deleteSuccess);
            }
            return sR.sendResponse(res, 400, null, message.deleteFail);

        } catch (error) {

            console.log('Error[Auth:removeUser]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }

    },

    // login method
    login: async (req, res) => {
        try {
            let obj = req.body;
            let user = await Auth.findOne({ userName: obj.userName });
            if (user) {
                let payload = {
                    "role": 0,
                    "user": user.userName
                }

                if (await pass_encrypt(user.pass, obj.pass)) {
                    let token = jwt.sign(payload, config.secret, {
                        expiresIn: config.tokenLife,
                    });
                    let refreshToken = jwt.sign(payload, config.refreshTokenSecret, {
                        expiresIn: config.refreshTokenLife
                    });
                    tokenList[refreshToken] = payload;

                    return sR.sendResponse(res, 200, {
                        access_token: token,
                        refresh_token: refreshToken,
                    }, message.accessSuccess);
                } else {
                    return sR.sendResponse(res, 200, null, message.noMatch);
                }
            } else

                return sR.sendResponse(res, 404, null, message.notFound);

        } catch (error) {

            console.log('Error[Auth:login]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }

    },
    // refreshToken method
    refreshToken: async (req, res) => {
        // Lấy thông tin mã token được đính kèm trong request
        let { refreshToken } = req.body;
        console.log(refreshToken)
        if (refreshToken) {
            try {
                // Kiểm tra mã Refresh token
                await S_Token.verifyToken(refreshToken, config.refreshTokenSecret);
                // Lấy lại thông tin user

                // Tạo mới mã token và trả lại cho user
                let token = jwt.sign({"role": 0}, config.secret, {
                    expiresIn: config.tokenLife,
                });

                let refreshToken1 = jwt.sign({"role": 0}, config.refreshTokenSecret, {
                    expiresIn: config.refreshTokenLife
                });

                return sR.sendResponse(res, 200, {
                    access_token: token,
                    refresh_token: refreshToken1,
                }, message.accessSuccess);
            } catch (err) {
                console.error(err);
                return sR.sendResponse(res, 403, null, 'Invalid refresh token');
            }
        } else {
            return sR.sendResponse(res, 400, null, 'Invalid request');
        }
    },
    // check token middleware method
    TokenCheck: async (req, res, next) => {
        // Lấy thông tin mã token được đính kèm trong request
        let token = req.body.token || req.query.token || req.headers['x-access-token'] || req.header('Authorization');
        // decode token
        if (token) {
            // Xác thực mã token và kiểm tra thời gian hết hạn của mã
            try {
                let decoded = await S_Token.verifyToken(token, config.secret);
                // Lưu thông tin giã mã được vào đối tượng req, dùng cho các xử lý ở sau
                req.decoded = decoded;
                next();
            } catch (err) {
                // Giải mã gặp lỗi: Không đúng, hết hạn...
                console.log('Error[Auth:TokenCheck]: ' + err);
                return sR.sendResponse(res, 401, null, 'Unauthorized access.');

            }
        } else {
            // Không tìm thấy token trong request
            return sR.sendResponse(res, 403, null, 'No token provided.');
        }
    }


};




pass_decrypt = async (pass) => {
    try {
        let hash = bcrypt.hashSync(pass, salt);
        return hash
    } catch (error) {
        console.log('Error[Auth:pass_decrypt]: ' + error);
        return null;
    }

}

pass_encrypt = async (hash, pass) => {

    try {
        let res = bcrypt.compareSync(pass, hash);
        return res;

    } catch (error) {
        console.log('Error[Auth:pass_encrypt]: ' + error);
        return false;
    }
}
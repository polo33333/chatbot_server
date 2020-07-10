

const Auth = require('../models/Auth.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

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
            if (user)
                if ( await pass_encrypt(user.pass, obj.pass))
                    return sR.sendResponse(res, 200, true, message.accessSuccess);
            return sR.sendResponse(res, 200, false, message.accessFail);

        } catch (error) {

            console.log('Error[Auth:login]: ' + error);
            return sR.sendResponse(res, 400, null, error);
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
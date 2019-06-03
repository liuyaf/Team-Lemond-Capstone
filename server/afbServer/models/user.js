const mongoose = require("mongoose");

let userSchema = mongoose.Schema({
    fName: {
        type: String,
        required: true,
        trim: true
    },
    lName: {
        type: String,
        required: true,
        trim: true
    },
    userName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    passHash: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date
    }
})

let User = module.exports = mongoose.model('User', userSchema);

module.exports.createUser = function (user, callback) {
    user.createdAt = Date.now().toString()
    User.create(user, callback)
}

module.exports.findUser = function (userName, cb) {
    User.findOne({
        userName: userName
    }, cb)
}

module.exports.findExistingUser = function (userName, email, cb) {
    User.findOne({
        $or: [{
                userName: userName
            },
            {
                email: email
            }
        ]

    }, cb)
}
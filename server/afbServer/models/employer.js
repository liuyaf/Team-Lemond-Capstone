const mongoose = require("mongoose");

let sectionResponseSchema = mongoose.Schema({
    sectionResponse: [String]
})

let businessInfoSchema = mongoose.Schema({
    businessType: {
        type: String,
        required: true
    },
    busniessSize: {
        type: String,
        required: true
    },
    zipcode: {
        type: Number,
        required: true
    }
})

let employerSchema = mongoose.Schema({
    submittedAt: {
        type: Date
    },
    businessInfo: businessInfoSchema,
    responses: [
        [String]
    ]
}, {
    toJSON: {
        transform: function (doc, ret) {
            delete ret._id;
        }
    },
    versionKey: false
})


let Employer = module.exports = mongoose.model('Employer', employerSchema);

module.exports.addEmployerResult = function (result, callback) {
    let obj = {}
    let busInfo = {}
    busInfo.businessType = result.info[0]
    busInfo.busniessSize = result.info[1]
    busInfo.zipcode = result.info[2]
    obj.submittedAt = Date.now();
    obj.businessInfo = busInfo;
    obj.responses = result.result;
    Employer.create(obj, callback);
}

module.exports.getEmployerResults = function (callback) {
    Employer.find(callback)
}
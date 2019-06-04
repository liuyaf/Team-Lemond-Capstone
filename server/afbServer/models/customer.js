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

let CustomerSchema = mongoose.Schema({
    submittedAt: {
        type: Date
    },
    businessInfo: businessInfoSchema,
    responses: [
        [String]
    ]
})

let Customer = module.exports = mongoose.model('Customer', CustomerSchema);

module.exports.addCustomerResult = function (result, callback) {
    let obj = {}
    let busInfo = {}
    busInfo.businessType = result.info[0]
    busInfo.busniessSize = result.info[1]
    busInfo.zipcode = result.info[2]
    obj.submittedAt = Date.now();
    obj.businessInfo = busInfo;
    obj.responses = result.result;
    Customer.create(obj, callback);
}

module.exports.getCustomerResults = function (callback) {
    Customer.find(callback)
}
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const manageSchema = new Schema({
    nomCompletManager: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true
    },
    AdrDepot: {
        type: String,
        required: true
    },
    tel: {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('manager', manageSchema)
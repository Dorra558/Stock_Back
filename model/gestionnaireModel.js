const mongoose = require('mongoose')
const jwt = require("jsonwebtoken");
const config = require("config");


const Schema = mongoose.Schema
const manageSchema = new Schema({

    nomCompletManager: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    AdrDepot: {
        type: String,
        required: true
    },
    tel: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['manager', 'admin'],
        required: true
    }
    // commands: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "command"
    // }]

})
manageSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id, role: this.role },
        config.get("jwtSecret"), { expiresIn: "5h" }
    );
    return token;
};


module.exports = mongoose.model('manager', manageSchema)
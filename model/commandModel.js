const mongoose = require('mongoose')
const Schema = mongoose.Schema
const commandSchema = new Schema({
    manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "manager",
        required: true
    },

    nomProduit: {
        type: String,
        required: true

    },
    categorie: {
        type: String,
        required: true
    },
    quantité: {
        type: Number,
        required: true
    },
    dateCommand: {
        type: Date,
        // default: Date.now,
        required: true

    },

})

module.exports = mongoose.model('command', commandSchema)
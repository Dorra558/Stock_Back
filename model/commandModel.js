const mongoose = require('mongoose')
const Schema = mongoose.Schema
const commandSchema = new Schema({
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
    }

})

module.exports = mongoose.model('command', commandSchema)
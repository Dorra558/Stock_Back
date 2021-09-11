const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "manager",
    },
    categorie: {
        type: String,
        enum: ['Jus', 'Cake', 'Boisson', 'Eau', 'Biscuit', 'Lait'],
        // required: true
    },

    nomProduct: {
        type: String,
        required: true

    },
    quantité: {
        type: Number,
        required: true
    },
    prix: {
        type: Number,
        required: true
    },
    dateExpirProduct: {
        type: Date,
        required: true
    },
    dateProduct: {
        type: Date,
        default: Date.now,
    }


})

module.exports = mongoose.model('product', productSchema)
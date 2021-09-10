const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productSchema = new Schema({
    // manager: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "manager",
    // },

    nomProduct: {
        type: String,
        required: true

    },
    categorie: {
        type: String,
        enum: ['Jus', 'Cake', 'Boisson', 'Eau', 'Biscuit', 'Lait'],
        // required: true
    },
    quantité: {
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
    },
    prix: {
        type: Number,
        required: true
    },

})

module.exports = mongoose.model('product', productSchema)
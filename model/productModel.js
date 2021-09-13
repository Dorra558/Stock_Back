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


    },
    quantité: {
        type: Number,

    },
    prix: {
        type: Number,

    },
    dateExpirProduct: {
        type: Date,

    },
    dateProduct: {
        type: Date,
        default: Date.now,
    }


})

module.exports = mongoose.model('product', productSchema)
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const commandSchema = new Schema({
    manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "manager",
    },

    nomProduit: {
        type: String,
        required: true

    },
    categorie: {
        type: String,
        enum: ['Jus', 'Cake', 'Boisson', 'Eau', 'Biscuit', 'Lait'],

    },
    quantité: {
        type: Number,
        required: true
    },
    dateCommand: {
        type: Date,
        default: Date.now,
    },
    statut: {
        type: String,
        enum: ['En attente', 'Valider', 'Réfuser'],
        default: 'En attente'
    }

})

module.exports = mongoose.model('command', commandSchema)
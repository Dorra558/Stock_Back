const Products = require('../model/productModel')
const prod = require('../model/gestionnaireModel')




module.exports = {
    // ajout de produit 
    addProduct: async(req, res) => {
        const manager = req.body.manager
        const categorie = req.body.categorie
        const nomProduct = req.body.nomProduct
        const quantité = req.body.quantité
        const prix = req.body.prix
        const dateExpirProduct = req.body.dateExpirProduct


        try {
            produit = new Products({
                manager,
                categorie,
                nomProduct,
                quantité,
                prix,
                dateExpirProduct,
            })
            await produit.save()

            try {
                const id = produit.manager
                const produitt = await prod.findById({ _id: id })


                if (!produitt)
                    return res
                        .status(404)
                        .send({ msg: "The add product with the given ID was not found." });
                produitt.products.push(produit)
                produitt.save()
                res.json(produitt)

            } catch (error) {
                console.error(error.message);
                res.status(500).send("Server error");
            }


        } catch (error) {
            console.error(error.message);
        }
    },

    //get tous les produits
    getProduct: async(req, res) => {
        try {
            const product = await Products.find().populate("manager");
            res.json(product)
        } catch (error) {
            console.error(error.message)
        }
    },

    //gelete product
    deleteProduct: async(req, res) => {
        try {
            const product = await Products.findByIdAndDelete(req.params.id)
            res.json(product)
        } catch (error) {
            console.error(error.message);
        }
    },

    updateProduct: async(req, res) => {
        try {
            const product = await (Products.findByIdAndUpdate(req.params.id, req.body, { new: true }))
            res.json(product)
        } catch (error) {
            console.error(error.message);
        }
    }


}
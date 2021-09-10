const Commands = require('../model/commandModel')
const Ges = require('../model/gestionnaireModel')


module.exports = {

    //Add command

    addCommand: async(req, res) => {
        // const { name, email } = req.body
        const manager = req.body.manager
            // const nomManger = req.body.nomManger
        const nomProduit = req.body.nomProduit
        const categorie = req.body.categorie
        const quantité = req.body.quantité
        const statut = req.body.statut
        try {
            command = new Commands({
                manager,
                // nomManger,
                nomProduit,
                categorie,
                quantité,
                statut
            })

            await command.save()

            try {
                const id = command.manager
                const Gestionnairee = await Ges.findById({ _id: id })


                if (!Gestionnairee)
                    return res
                        .status(404)
                        .send({ msg: "The ad with the given ID was not found." });
                Gestionnairee.commands.push(command)
                Gestionnairee.save()
                res.json(Gestionnairee)

            } catch (error) {
                console.error(error.message);
                res.status(500).send("Server error");
            }




        } catch (error) {
            console.error(error.message);
        }
    },
    getCommand: async(req, res) => {

        try {
            const command = await Commands.find().populate("manager")
                // const command = await Commands.find().populate('manager').select('-_id');

            res.json(command)
        } catch (error) {
            console.error(error.message)
        }
    },
    getCommandById: async(req, res) => {
        try {
            const publication = await Commands.findById(req.params.id)
                .populate("manager", "-password")

            if (!publication)
                return res
                    .status(404)
                    .send({ msg: "The ad with the given ID was not found." });

            return res.send(publication);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Server error");
        }
    },

    deleteCommand: async(req, res) => {
        try {
            const command = await Commands.findByIdAndDelete(req.params.id)
            res.json(command)
        } catch (error) {
            console.error(error.message);
        }
    },

    updateCommand: async(req, res) => {
        try {
            const command = await (Commands.findByIdAndUpdate(req.params.id, req.body, { new: true }))
            res.json(command)
        } catch (error) {
            // console.error(error.message);
            console.log(`erreur`)
        }
    }

}
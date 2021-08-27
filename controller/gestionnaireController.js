const Managers = require('../model/gestionnaireModel')


module.exports = {

    //Add manager

    addManager: async(req, res) => {
        // const { name, email } = req.body
        const nomManager = req.body.nomManager
        const prenom = req.body.prenom
        const email = req.body.email
        const AdrDepot = req.body.AdrDepot
        const tel = req.body.tel
        try {
            manager = new Managers({
                nomManager,
                prenom,
                email,
                AdrDepot,
                tel
            })
            await manager.save()
            res.json(manager)
        } catch (error) {
            console.error(error.message);
        }
    },

    // get manager
    getManager: async(req, res) => {
        try {
            const manager = await Managers.find();
            res.json(manager)
        } catch (error) {
            console.error(error.message)
        }
    },

    //gelete manager
    deleteManager: async(req, res) => {
        try {
            const manager = await Managers.findByIdAndDelete(req.params.id)
            res.json(manager)
        } catch (error) {
            console.error(error.message);
        }
    },
    //update manager
    updateManager: async(req, res) => {
        try {
            const manager = await (Managers.findByIdAndUpdate(req.params.id, req.body, { new: true }))
            res.json(manager)
        } catch (error) {
            console.error(error.message);
        }
    }

}
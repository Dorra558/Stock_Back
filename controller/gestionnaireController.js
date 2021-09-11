const Managers = require('../model/gestionnaireModel')
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");


module.exports = {
    addManager: async(req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }
            const { nomCompletManager, email, AdrDepot, tel, password, role } = req.body;
            let admin = await Managers.findOne({ email });

            if (admin) {
                res.status(400).json({ msg: "email already exists" });
            }

            admin = new Managers({
                nomCompletManager,
                email,
                AdrDepot,
                tel,
                password,
                role,
            });

            const salt = await bcrypt.genSalt(10);
            admin.password = await bcrypt.hash(password, salt);
            await admin.save();
            const token = admin.generateAuthToken();
            res.json({
                _id: admin._id,
                nomCompletManager: admin.nomCompletManager,
                email: admin.email,
                password,
                role,
                token

            });
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server error");
        }
    },
    // login managers

    loginManagers: async(req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const { email, password } = req.body;
            let admin = await Managers.findOne({ email });

            if (!admin) {
                return res.status(400).send({ msg: "Invalid email or password." });
            }
            const isMatch = await bcrypt.compare(password, admin.password);
            if (!isMatch) {
                return res.status(400).send({ msg: "Invalid email or password." });
            }
            const token = admin.generateAuthToken();
            res.json({
                _id: admin._id,
                email: admin.email,
                password,
                token

            });
        } catch (error) {
            res.status(500).send("Server error");
        }
    },
    // //Add manager

    // addManager: async(req, res) => {
    //     // const { name, email } = req.body
    //     const nomCompletManager = req.body.nomCompletManager
    //     const email = req.body.email
    //     const AdrDepot = req.body.AdrDepot
    //     const tel = req.body.tel
    //     try {
    //         manager = new Managers({
    //             nomCompletManager,
    //             email,
    //             AdrDepot,
    //             tel
    //         })
    //         await manager.save()
    //         res.json(manager)
    //     } catch (error) {
    //         console.error(error.message);
    //     }
    // },




    //Current user

    currentManagers: async(req, res) => {
        const id = req.user._id
        try {
            const user = await Managers.findOne({ _id: id }).select("-password");
            res.json(user);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Server Error");
        }
    },

    // get command by id of manager
    currentOrderManagers: async(req, res) => {
        try {
            const user = await Managers.findOne({ _id: req.params.id });
            res.json(user.commands);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Server Error");
        }
    },

    // get command by id of manager
    currentProductManagers: async(req, res) => {
        try {
            const user = await Managers.findOne({ _id: req.params.id });
            res.json(user.products);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Server Error");
        }
    },



    // get manager
    getManager: async(req, res) => {
        try {
            const manager = await Managers.find({ "role": "manager" })
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
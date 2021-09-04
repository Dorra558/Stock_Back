const express = require('express')
const router = express.Router()
const manager = require('../controller/gestionnaireController');
const { check } = require("express-validator");


//routes of manager
router.post('/registerManagers', [
    check("nomCompletManager", "please enter your name")
    .not()
    .isEmpty(),
    check("email", "please enter a valid email").isEmail(),
    check("password", "please enter a password")
    .not()
    .isEmpty(),
    check("role", "wrong role mate").isIn(["admin", "manager"])
], manager.addManager)

router.post("/loginManagers", [
    check("email", "enter a valid email").isEmail(),
    check("password", "enter a password")
    .not()
    .isEmpty()
], manager.loginManagers)
router.get('/getManagers', manager.getManager)

router.delete('/:id', manager.deleteManager)

router.put('/:id', manager.updateManager)



module.exports = router
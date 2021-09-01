const express = require('express')
const router = express.Router()
const manager = require('../controller/gestionnaireController');


//routes of manager
router.post('/addManagers', manager.addManager)
router.get('/getManagers', manager.getManager)
router.delete('/:id', manager.deleteManager)
router.put('/:id', manager.updateManager)



module.exports = router
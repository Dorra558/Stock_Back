const express = require('express')
const router = express.Router()
const command = require('../controller/commandController');


//routes of service
router.post('/addCommands', command.addCommand)
router.get('/getCommands', command.getCommand)
router.delete('/:id', command.deleteCommand)
router.put('/:id', command.updateCommand)



module.exports = router
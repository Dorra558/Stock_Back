const express = require('express')
const router = express.Router()
const command = require('../controller/commandController');


//routes of command
router.post('/addCommands', command.addCommand)
router.get('/getCommands', command.getCommand)
    //get command by id

// router.get("/getCommandById/:id", command.getCommandById)

router.delete('/:id', command.deleteCommand)
router.put('/:id', command.updateCommand)



module.exports = router
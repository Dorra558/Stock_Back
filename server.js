const express = require('express')
const app = express()
const cors = require('cors')
const body = require('body-parser')
const db = require('./config/db.js')
db();
app.use(express.json())
const commandRoute = require('./routes/commandRoute')
const commandManager = require('./routes/gestionnaireRoute')
const productRoute = require('./routes/productRoute')

app.use(cors())

app.use('/app/command', commandRoute)
app.use('/app/manager', commandManager)
app.use('/app/product', productRoute)





// configuration server ==> connection to server
const PORT = process.env.PORT || "4000";

app.listen(PORT, () => {
    console.log(`running server ${PORT}`);
});
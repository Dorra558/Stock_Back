const mongoose = require('mongoose')
const db_connection = () => {
    mongoose.connect('mongodb+srv://root:admin@cluster0.7vnn8.mongodb.net/stockDB?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: false,
            // useFindAndModify: true,
        })
        .then(() => { console.log('data_base connected') })
        .catch(() => { console.log('error to connect in db') })

}
module.exports = db_connection
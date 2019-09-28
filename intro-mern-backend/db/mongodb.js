const mongoose = require('mongoose')

mongoose.connection.on('open', () => console.log('db connected'))

async function connectDb({ host, port, dbName }) {
    const uri = `mongodb://${host}:${port}/${dbName}`
    await mongoose.connect(uri, {useNewUrlParser: true}) 
    // await instruction let us to force to connect to database first
}

module.exports = connectDb

require('dotenv').config()
const express = require('express')
const connectDb = require('./db/mongodb')
const { appConfig, dbConfig  } = require('./config')

const app = express()

async function initApp(appConfig, dbConfig) {
    try {
        connectDb(dbConfig)
        app.listen(appConfig.port, () => console.log(`listening on ${appConfig.port}`))
    } catch (e) {
        console.error(e)
        process.exit(0)
    }
}

initApp(appConfig, dbConfig)

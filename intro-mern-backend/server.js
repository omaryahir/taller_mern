require('dotenv').config()
const express = require('express')
const { appConfig } = require('./config')

const app = express()

app.listen(appConfig.port, () => console.log(`listening on ${appConfig.port}`))

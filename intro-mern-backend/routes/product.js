const express = require('express')

const api = express.Router()

api.post('/products', (req, res) => res.status(201).send({success: false}))

module.exports = api 
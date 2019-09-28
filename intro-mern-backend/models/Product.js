const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const ProductSchema = Schema({
    name: String, 
    size: Number, 
    unitaryPrice: Number, 
    imgUrl: String, 
    description: String, 
}, {
    timestamp: true // created_at & updated_at fields 
})

module.exports = mongoose.model('Products', ProductSchema)

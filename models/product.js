const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productSchema = new Schema({
    //Number: Number,
    Data: String,
    Rank: String,
    Date: String,
    Award: String,
})
const ProductModel = mongoose.model('test2', productSchema)
module.exports = ProductModel
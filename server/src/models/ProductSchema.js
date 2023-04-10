const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    image_url: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }

})


const Products = mongoose.model("Products", productsSchema)

module.exports = Products;
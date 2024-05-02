const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    company: String,
    amount_of_student:Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Products', ProductSchema);
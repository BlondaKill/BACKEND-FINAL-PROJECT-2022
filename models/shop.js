
const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const schema = new Schema({
    title: {
        type: String,
        required: true

    },
    singer: {
        type: String,
        required: true

    },

    price: {
        type: Number,
        required: true

    },

    stock: {
        type: Boolean,
        required: true

    }
})

const Dj = mongoose.model('Dj', schema);

module.exports = { Dj }
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let Order = new Schema({
    OrderId: {
        type: Number
    },
    Product: {
        type: String,
        unique: true
    },
    date: {
        type: Date
    },
    country: {
        type: String
    }

})

module.exports = mongoose.model('Order', Order);
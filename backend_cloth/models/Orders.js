const mongoose = require("mongoose");
const OrderHistorySchema = new mongoose.Schema({
    productName: {
        type: String,
    },
    productImage: {
        type: String,
    },
    productPrice: {
        type: Number,
    },
    paymentType: {
        type: String,
    },
    address: {
        type: String,
    },
    email: {
        type: String,
    },
    
})
module.exports = mongoose.model("OrderHistory", OrderHistorySchema);
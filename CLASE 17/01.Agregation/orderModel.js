import mongoose from "mongoose";
const collection = "orders"
const orderSchema = new mongoose.Schema({
    name: String,
    size: {
        type: String,
        enum: ["small", "medium", "large"],
        default: "medium"
    },
    price: Number,
    quantity: Number,
    date: Date
})

const orderModel = mongoose.model(collection, orderSchema)
export default orderModel;
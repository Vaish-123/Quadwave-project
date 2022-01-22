const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema(
    {
        fname: String,
        lname: String,
        uId: String,
        country: String,
        city: String,
        street: String,
        phone: Number
    },
    { timestamps: true }
);
const customers = mongoose.model('customers', customerSchema)
module.exports = customers;
const express = require("express");
const cors = require("cors");
const customers = require("./scheme/customer")
const mongoose = require("mongoose");
const { db } = require("./scheme/customer");
const app = express();
const PORT = process.env.PORT || 3001;
const dbURL = "mongodb://localhost:27017/quadwave";

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true }).then((res) =>
    app.listen(PORT, () => {
        console.log("Started at ==>", PORT);
    })
)
    .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post('/addcustomer', (req, res) => {
    const customerObj = new customers({
        fname: req.body.fname,
        lname: req.body.lname,
        uId: req.body.uId,
        country: req.body.country,
        city: req.body.city,
        street: req.body.street,
        phone: req.body.phone
    });
    customerObj.save();
    res.send();
})
app.get('/viewcustomer', (req, res) => {
    customers.find().then(result => {
        res.json(result);
    })
})
app.post('/deletecustomer', (req, res) => {
    const uId = req.body.uId;
    customers.deleteOne({ uId: uId }).then(result => {
        res.json(result);
    })
})
app.post('/editcustomer', (req, res) => {
    customers.updateOne({ uId: req.body.uId },
        {
            $set:
            {
                fname: req.body.fname,
                lname: req.body.lname,
                country: req.body.country,
                city: req.body.city,
                street: req.body.street,
                phone: req.body.phone
            }
        },
        function (err, res) {
            if (err) throw err;
            console.log("1 document updated");
        });
    res.send();
})
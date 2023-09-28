const express = require('express');
const app = express();
const path = require('path');
const Product = require('./models/product');

//mongo
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!");
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!");
        console.log(err);
    })

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//     console.log("MONGO CONNECTION OPEN!!");
// });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//라우트를 위한 비동기 콜백 패턴
app.get('/products', async (req, res) => {
    const products = await Product.find();
    res.render('products/index', { products });
})

app.get('/products/:id', async (req, res) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('products/show', {product});
})

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000");
})
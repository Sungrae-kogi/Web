const express = require('express');
const app = express();
const path = require('path');

const methodOverride = require('method-override');
const Product = require('./models/product');
const Farm = require('./models/farm');

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
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

//FARM ROUTES
app.get('/farms', async (req, res) => {
    const farms = await Farm.find({});
    res.render('farms/index', { farms });
})

app.get('/farms/new', (req, res) => {
    res.render('farms/new');
})

app.get('/farms/:id', async (req, res) => {
    const farm = await Farm.findById(req.params.id);
    res.render('farms/show', { farm });
})

app.post('/farms', async (req, res) => {
    const farm = new Farm(req.body);
    await farm.save();
    res.redirect('/farms');
})


//PRODUCT ROUTES
const categories = ['fruit', 'vegetables', 'dairy'];

//라우트를 위한 비동기 콜백 패턴
app.get('/products', async (req, res) => {
    const { category } = req.query
    if (category) {
        const products = await Product.find({ category });
        res.render('products/index', { products, category });
    } else {
        const products = await Product.find({});    //모든 상품
        res.render('products/index', { products, category: 'All' });
    }
})

app.get('/products/new', (req, res) => {
    res.render('products/new', { categories });
})

//new.ejs에서 입력한 정보를 제출할 라우트
app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/show', { product });
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product, categories });
})

app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true });

    res.redirect(`/products/${product._id}`);
})

//DELETE요청에 시간이 걸리므로 비동기함수
app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
})

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000");
})
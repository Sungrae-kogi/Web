const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("CONNECTION OPEN!!");
});

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    }
});

const Product = mongoose.model('Product', productSchema);

const bike = new Product({ name: 'Tire Pump', price: 599, color: 'red', categories: ['Cycling', 'Safety'] });
bike.save().then(data => {
    console.log("It WORKED");
    console.log(data);
}).catch(err => {
    console.log("OH NO ERROR");
    console.log(err);
})


//업데이트 유효성 검사 options 항목에 runValidators: true

Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: 100 }, { new: true })
    .then(data => {
        console.log("IT WORKED");
        console.log(data);
    }).catch(err => {
        console.log("Error");
        console.log(err);
    })
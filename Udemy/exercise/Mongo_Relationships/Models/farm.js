//One to Many relations

const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true });

// .then(() => {
//         console.log("MONGO CONNECTION OPEN!!");
//     })
//     .catch(err => {
//         console.log("OH NO MONGO CONNECTION ERROR!");
//         console.log(err);
//     })

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
});

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
})

const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema);

/*
Product.insertMany([
    {name: 'Goddess Melon', price: 4.99, season: 'Summer'},
    {name: 'Sugar Baby Watermelon', price: 4.99, season: 'Summer'},
    {name: 'Asparagus', price: 3.99, season: 'Spring'},
])
*/

//Farm과 Product를 연결

const makeFarm = async () => {
    const farm = new Farm({ name: 'Fully Belly Farms', city: 'Guinda, CA' });
    const melon = await Product.findOne({ name: 'Goddess Melon' });
    farm.products.push(melon);
    await farm.save();
    console.log(farm);
}


//makeFarm();

const addProduct = async () => {
    const farm = await Farm.findOne({ name: 'Fully Belly Farms' });
    const watermelon = await Product.findOne({ name: 'Sugar Baby Watermelon' });
    farm.products.push(watermelon);
    await farm.save();
    console.log(farm);

    //mongosh에서 db.farm.find() 해보면 products에는 _id값만 들어가있는것을 확인할 수 있다.
}
 
const farm = Farm.findOne({ name: 'Fully Belly Farms'}).populate('products').exec();
console.log(farm.products);
//Farm.findOne({ name: 'Full Belly Farms' }).populate('products').then(farm => console.log(farm));
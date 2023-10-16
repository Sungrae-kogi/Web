const mongoose = require('mongoose');
const cities = require('./cities');
const {places, descriptors} = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://127.0.0.1:27017/YelpCamp', { useNewUrlParser: true, useUnifiedTopology: true });
    
// .then(() => {
//         console.log("MONGO CONNECTION OPEN!!");
//     })
//     .catch(err => {
//         console.log("OH NO MONGO CONNECTION ERROR!");
//         console.log(err);
//     })

const db = mongoose.connection;
db.on("error", console.error.bind(console,"connection error:"));
db.once("open", () => {
    console.log("Database connected");
});


const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    //DB실행시 DB가 전부 초기화 되니 신중히 사용
    await Campground.deleteMany({});
    for(let i =0; i<50; i++){
        const random1000 = Math.floor(Math.random() * 1000);
        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`
        })
        await camp.save();

    }
}

seedDB().then(() => {
    mongoose.connection.close();
});
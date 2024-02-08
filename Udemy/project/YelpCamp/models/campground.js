const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampGroundSchema = new Schema({
    title: String,
    image: String,
    price: {
        type: Number,
        required: true, 
        min: [0, '가격은 음수가 될 수 없습니다'],
    },
    description: String,
    location: String
});


module.exports = mongoose.model('CampGround', CampGroundSchema);
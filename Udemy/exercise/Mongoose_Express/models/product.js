const mongoose = require('mongoose');
const {Schema} = mongoose;


const productSchema = Schema({
    name: {
        type: String,
        required: [true, '상품명은 필수 항목입니다.'],
    },
    price: {
        type: Number,
        required: true, 
        min: [0, '가격은 음수가 될 수 없습니다'],
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['fruit', 'vegetable', 'dairy']
    },
    farm: {
        type: Schema.Types.ObjectId,
        ref: 'Farm'
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
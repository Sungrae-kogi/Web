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
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive']
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
    },
    size: {
        type: String,
        enum: ['S','M','L']
    }
});

// productSchema.methods.greet = function(){
//     console.log("HI");
//     console.log(`- from ${this.name}`);
// }


//static method는 모델에 정의, methods는 모델을 통해 생성된 인스턴스에 정의되는 메서드
productSchema.methods.toggleOnSale = function(){
    this.onSale = !this.onSale;
    return this.save();        //this는 Product의 인스턴스를 가리킴
}

productSchema.methods.addCategory = function(newCat){
    this.categories.push(newCat);
    return this.save;
}

productSchema.statics.fireSale = function(){
    return this.updateMany({}, {onSale: true, price: 0});
}

//비동기 처리 떠올리기 
//자바스크립트는 await 키워드를 만나면 프로미스가 처리될 때까지 기다립니다, 결과는 그 이후 반환됩니다.
//프로미스가 처리되는동안 엔진은 다른일 (다른 스크립트 실행, 이벤트 처리 등)을 하며 cpu리소스 낭비를 줄인다
const findProduct = async () => {
    const foundProduct = await Product.findOne({name: 'Bike Helmet'});
    //상품 하나를 찾아 onSale 상태변경 예시
    await foundProduct.toggleOnSale();
    console.log(foundProduct);
    await foundProduct.addCategory('Outdoors');
    console.log(foundProduct);
}

Product.fireSale().then(res => console.log(res))

const Product = mongoose.model('Product', productSchema);

const bike = new Product({ name: 'bike', price: 50, color: 'red', categories: ['Cycling'], size: 'L' });
bike.save().then(data => {
    console.log("It WORKED");
    console.log(data);
}).catch(err => {
    console.log("OH NO ERROR");
    console.log(err);
})


//업데이트 유효성 검사 options 항목에 runValidators: true
// +추가 내용: Ctrl+/ 주석처리 단축키

// Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: 100 }, { new: true })
//     .then(data => {
//         console.log("IT WORKED");
//         console.log(data);
//     }).catch(err => {
//         console.log("Error");
//         console.log(err);
//     })

const mongoose = require('mongoose');
const Product = require('./product');
const {Schema} = mongoose;

//farm 기본 모델로 상품 product 모델과 연결
const farmSchema = Schema({
    name: {
        type: String,
        required: [true, 'Farm must have a name']
    },
    city: {
        type: String,
    },
    email:{
        type: String,
        required: [true, 'Email required']
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
})

//476번강의 몽구스 미들웨어 삭제부분

farmSchema.post('findOneAndDelete', async function(farm){
    //method가 실행되기전에 실행되는 코드
    //MongoDB의 $in 연산자는 주어진 배열 안에 포함된 값 중 하나와 일치하는 문서를 검색하는 데 사용됩니다. 
    //이 연산자는 배열에 대한 일치 여부를 확인하고, 
    //배열 안에 포함된 값 중 하나라도 문서의 필드 값과 일치하면 해당 문서를 반환합니다.
    if(farm.products.length){
        const res = await Product.deleteMany({_id: {$in: farm.products}});
        console.log(res);
    }

    
    // console.log('POST Middleware');
    // console.log(`name이 "${farm.name}"인 farm이 삭제되었습니다.`);
})


const Farm = mongoose.model('Farm', farmSchema);
 
module.exports = Farm;
const mongoose = require('mongoose');
const Review = require('./review');
const Schema = mongoose.Schema;

const CampGroundSchema = new Schema({
    title: String,
    image: String,
    price: Number,
    description: String,
    location: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
});

//findOneAndDelete를 사용한 이유는 
//This function triggers the following middleware.
//findOneAndDelete()        라고 mongoose doc에 있기때문, 캠프그라운드 자체를 findByIdAndDelete를 이용해 삭제하려고 했을때 해당 미들웨어가
//실행되는데 그 미들웨어를 이용하여 그 캠프그라운드의 리뷰들을 삭제하기 위함이다.
CampGroundSchema.post('findOneAndDelete', async function(doc){
    if(doc){
        await Review.deleteMany({   //강의에서는 Review.remove()를 사용했지만 지금은 deprecated된 상태 따라서 찾아서 변경했음.
            _id: {
                $in: doc.reviews
            }
        })
        console.log('fin');
    }
})


module.exports = mongoose.model('CampGround', CampGroundSchema);
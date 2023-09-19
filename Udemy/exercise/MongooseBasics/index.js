const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("CONNECTION OPEN!!");
});


//Schema와 model은 혼동되기 쉬운 개념, schema는 해당 컬렉션의 문서에 어떤 종류의 값이 들어가는지를 정의
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

//model은 schema를 통해서 만드는 인스턴스
//모델은 Mongoose의 model() 함수를 사용하여 정의됩니다. 
//이 함수는 첫번째 인자로 모델의 이름을 받고, 두번째 인자로 스키마를 받습니다.
const Movie = mongoose.model('Movie', movieSchema);


Movie.insertMany([
    { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
    { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
    { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
    { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
    { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' },
])
.then(data => {
    console.log("IT WORKED");
    console.log(data);
})
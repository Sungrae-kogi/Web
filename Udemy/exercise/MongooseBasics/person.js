const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/people');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("CONNECTION OPEN!!");
});


  const personSchema = new mongoose.Schema({
    first: String,
    last: String
  });

  personSchema.virtual('fullName').get(function(){
    return `${this.first} ${this.last}`
  })

  //두 개의 middleware 함수
  //pre는 'save' 메소드 이전에 처리할 로직을 지정
  personSchema.pre('save', async function(){
    //여기서 this는 'save' 메소드를 실행한 객체
    this.first = "YO";
    this.last = "MAMA";
    console.log("ABOUT TO SAVE");
  })
  personSchema.post('save', async function(){
    console.log("JUST SAVED");
  })

  const Person = mongoose.model('Person', personSchema);

  const tom = new Person({first: 'tom', last: 'jerry'});
tom.save();

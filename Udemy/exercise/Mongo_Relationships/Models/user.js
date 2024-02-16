//One to Few relation

const mongoose = require('mongoose');

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


const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            //mongoose가 자동으로 부여하는 id를 끌 수 있다. addresses에는 굳이 id값이 필요없기때문
            //npm install mongoose@"<7.0.0" 로 7버전 이하의 mongoose를 설치하면 해당 방식으로 발생하는 오류 방지가능
            _id: { id: false },
            street: String,
            city: String,
            state: String,
            country: String
        }
    ]
})

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const u = new User({
        first: 'Harry',
        last: 'Potter'
    })
    u.addresses.push({
        
        street: '123 Sesame, St.',
        city: 'New York',
        state: 'NY',
        country: 'USA'
    })

    const res = await u.save();
    console.log(res);
}

const addAddress = async(id) => {
    const user = await User.findById(id);
    user.addresses.push(
        {
            street: '99 3rd, St.',
            city: 'New York',
            state: 'NY',
            country: 'USA'
        }
    )
    const res = await user.save();
    console.log(res);
}

makeUser();
const express = require('express');
const app = express();
const shelterRoutes = require('./routes/shelters');
const dogRoutes = require('./routes/dogs');
const adminRoutes = require('./routes/admin');

// /shelters나 /dogs로 시작하면 각각의 주어진 라우트를 사용하겠다. -> 코드를 모듈화하고 유지관리가 좋아짐
//여러가지의 router들(shelters,dogs)을 하나의 app과 연결했다.

app.use('/shelters', shelterRoutes);
app.use('/dogs', dogRoutes);
app.use('/admin', adminRoutes);

app.listen(3000, () => {
    console.log('Serving on localhost:3000');
})
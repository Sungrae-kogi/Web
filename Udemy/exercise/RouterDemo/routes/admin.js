const express = require('express');
const router = express.Router(); 

//미들웨어는 admin라우트에만 적용 
router.use((req, res, next) => {
    if (req.query.isAdmin) {    //쿼리문에 isAdmin=true 인지
        next();
    }
    res.send('SORRY NOT AN ADMIN');
})

router.get('/topsecret', (req,res) => {
    res.send('This is top secret');
})
router.get('/deleteeverything', (req,res) => {
    res.send('Ok delete it all');
})

module.exports = router;
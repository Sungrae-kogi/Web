const express = require('express');
const router = express.Router({mergeParams: true});
//express router사용중 자주 발생하는 문제
// Router에서 하위 Router로 한 번 더 routing을 하는 경우에 사용한다.

// 예를 들어,
// URL/parent 를 활용하기 위한 parent 파일에서 하위 routing을 사용하고자 한다.

// 그러면 아래처럼 코드를 작성하게 될텐데
// const router = express.Router(); 
// router.use(/:something/child);
// 이 때, child측 router 파일에서는 아래와 같이 작성해야 'something'에 해당하는 parameter를 사용할 수 있다.
// const router = express.Router({ mergeParams: true });

const { reviewSchema } = require('../schemas.js');
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');
const Campground = require('../models/campground');
const Review = require('../models/review');


const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',');
        throw new ExpressError(msg, 400);
    } else {
        next();
    }
}

//campgrounds/:id/reviews를 접두사로 사용

router.post('/', validateReview, catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    req.flash('success', 'Created new review!');
    res.redirect(`/campgrounds/${campground._id}`);
}));


router.delete('/:reviewId', catchAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });   //캠핑장id
    await Review.findByIdAndDelete(reviewId)    //리뷰id
    req.flash('success', 'Successfully deleted review');
    res.redirect(`/campgrounds/${id}`);
}))

module.exports = router;
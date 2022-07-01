const express = require('express');
const asyncHandler = require('express-async-handler');
const { Spot, User, Review } = require('../../db/models');
const router = express.Router();

router.get(
    '/',
    asyncHandler(async (req, res) => {
        const reviews = await Review.findAll({
            include: ['Spot', 'User']
        })
        return res.json(reviews)
    })
);

router.post(
    '/',
    asyncHandler(async (req, res) => {
        const addReview = await Review.create(req.body)
        // console.log('/n/n/n*********',addReview.dataValues.id)
        const findReview = await Review.findByPk(addReview.dataValues.id, {
            include:[User]
        })
        return res.json(findReview)
    })
)

router.delete(
    '/:id',
    asyncHandler(async (req, res) => {
        const review = await Review.findByPk(req.params.id)
        await review.destroy();
        return res.json('Delete')
    })
)

module.exports = router

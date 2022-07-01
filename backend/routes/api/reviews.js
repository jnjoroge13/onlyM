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
        const review = await Review.create(req.body)
        return res.json(review)
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

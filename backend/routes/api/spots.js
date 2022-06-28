const express = require('express');
const asyncHandler = require('express-async-handler');
const { Spot, User} = require('../../db/models');
const router = express.Router();

router.get(
    '/',
    asyncHandler(async (req, res) => {
        console.log('spot get')
        const spots = await Spot.findAll({
            // include: User,
            order: [['id','DESC']]
        });
        return res.json(spots)
    })
)

module.exports = router

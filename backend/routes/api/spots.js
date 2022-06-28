const express = require('express');
const asyncHandler = require('express-async-handler');
const { Spot, User} = require('../../db/models');
const router = express.Router();

router.get(
    '/spots',
    asyncHandler(async (req, res) => {
        const spot = await Spot.findAll({
            include: User,
            order: [['id','DESC']]
        });
        return res.json(spot)
    })
)

module.exports = router

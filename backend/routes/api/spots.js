const express = require('express');
const asyncHandler = require('express-async-handler');
const { Spot, User } = require('../../db/models');
const router = express.Router();

router.get(
    '/',
    asyncHandler(async (req, res) => {
        console.log('spot get')
        const spots = await Spot.findAll({
            include: User,
            order: [['id', 'DESC']]
        });
        return res.json(spots)
    })
)
router.post(
    '/',
    asyncHandler(async (req, res) => {
        const spot = await Spot.create(req.body);
        res.json(spot)
        return res
    })
);

router.get('/:id', asyncHandler(async function (req, res) {
    console.log('BACKEND GET ONE Spot - id -> ', req.params.id)
    const spot = await Spot.findByPk(req.body.id);
    res.json(spot)
}));

router.put(
    '/:id',
    asyncHandler(async function (req, res) {
        const id = req.body.id
        delete req.body.id
        const spot = await Spot.update(
            req.body,
            {
                where: { id },
                returning: true,
                plain: true,
            }
        );
        res.json(spot)
        return res
    })
);

router.delete(
    '/:id',
    asyncHandler(async (req, res) => {
        const spot = await Spot.findByPk(req.params.id)
        await spot.destroy();
        return res.json('Delete')
    }))
module.exports = router

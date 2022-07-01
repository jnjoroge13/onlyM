const express = require('express');
const asyncHandler = require('express-async-handler');
const { Spot, User } = require('../../db/models');
const router = express.Router();

router.get(
    '/',
    asyncHandler(async (req, res) => {
        // console.log('spot get')
        const spots = await Spot.findAll({
            include: 'User',
        });
        return res.json(spots)
    })
)
router.post(
    '/',
    asyncHandler(async (req, res) => {
        const spot = await Spot.create(req.body);
        const findSpot = await Spot.findByPk(spot.dataValues.id, {
            include:[User]
        })
        res.json(findSpot)
        return res
    })
);

router.get('/:id', asyncHandler(async function (req, res) {
    // console.log('BACKEND GET ONE Spot - id -> ', req.params.id)
    const spot = await Spot.findByPk(req.params.id);
    res.json(spot)
}));

router.put(
    '/:id',
    asyncHandler(async function (req, res) {
        const { id } = req.body
        // // console.log(/n/n/n,'********',id)
        // // delete req.body.id
        // const spot = await Spot.update(
        //     {id},
        //     {
        //         where: { id },
        //     }
        // );
        // console.log('********',spot)
        // return res.json(spot)
        const spot = await Spot.findByPk(id);
        const updateSpot = await spot.update(req.body)
        return res.json(updateSpot)
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

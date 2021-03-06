'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', [{
        userId: 1,
        spotId: 2,
        review: 'Amazing stay!',
        rating: 5,

      }, {
        userId: 3,
        spotId: 2,
        review: 'Beautiful place.',
        rating: 4,

      },{
        userId: 2,
        spotId: 1,
        review: 'Outdated needs a remodel.',
        rating: 1,

      }, {
        userId: 3,
        spotId: 1,
        review: 'Just okay.',
        rating: 3,

      }, {
        userId: 1,
        spotId: 3,
        review: 'Great Stay.',
        rating: 5,

      }, {
        userId: 2,
        spotId: 3,
        review: 'Will be back.',
        rating: 4,

      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews');
  }
};

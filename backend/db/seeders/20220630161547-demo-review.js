'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', [{
        userId: 1,
        spotId: 2,
        review: 'Amazing stay!',
        rating: 5,

      }, {
        userId: 2,
        spotId: 1,
        review: 'Outdated needs a remodel.',
        rating: 1,

      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews');
  }
};

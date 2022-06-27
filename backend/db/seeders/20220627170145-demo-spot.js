'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Spots', [{
      userId: 1,
      address: '1600 Pennsylvania Avenue NW',
      city: 'Washington',
      state: 'DC',
      name: 'White House',
      price: 5000,
      imageUrl: 'www.google.com/'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};

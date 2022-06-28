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
    }, {
      userId: 2,
      address: '200 Pennsylvania Avenue NW',
      city: 'Washington',
      state: 'DC',
      name: 'Black House',
      price: 6000,
      imageUrl: 'www.google.com/'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Spots', {
      id: { [Sequelize.Op.gt]: 0 }
    });
  }
};

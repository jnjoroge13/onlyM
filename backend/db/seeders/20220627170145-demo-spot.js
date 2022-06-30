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
      imageUrl: 'https://www.whitehouse.gov/wp-content/uploads/2021/01/about_the_white_house.jpg'
    }, {
      userId: 2,
      address: '200 Pennsylvania Avenue NW',
      city: 'Seattle',
      state: 'WA',
      name: 'Black House',
      price: 6000,
      imageUrl: 'https://assets.architecturaldigest.in/photos/6020d53ccac05f896fb07ab5/16:9/w_2560%2Cc_limit/Oregon-home-design-architecture-photos.jpg'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Spots');
  }
};

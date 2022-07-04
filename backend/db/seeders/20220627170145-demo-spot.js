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
      price: 7000,
      imageUrl: 'https://assets.architecturaldigest.in/photos/6020d53ccac05f896fb07ab5/16:9/w_2560%2Cc_limit/Oregon-home-design-architecture-photos.jpg'
    }, {
      userId: 3,
      address: '9840 Peg Shop Ave',
      city: 'North Kingstown',
      state: 'RI',
      name: "His Majesty's Manor",
      price: 4000,
      imageUrl: 'https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
    }, {
      userId: 3,
      address: '549 S. Augusta Rd',
      city: 'Sugar Land',
      state: 'TX',
      name: 'Mediterranean Style Villa',
      price: 5000,
      imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2350&q=80'
    }, {
      userId: 2,
      address: '8223 Glen Creek Lane',
      city: 'Wellington',
      state: 'FL',
      name: 'Hatley Castle',
      price: 5500,
      imageUrl: 'https://images.unsplash.com/photo-1575845464743-c61ae600b431?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80'
    }, {
      userId: 3,
      address: '800 Eagle Ave',
      city: 'Riverside',
      state: 'NJ',
      name: 'Shore House',
      price: 3000,
      imageUrl: 'https://images.unsplash.com/photo-1578439297699-eb414262c2de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2020&q=80'
    }, {
      userId: 2,
      address: '760 Mill St',
      city: 'Schererville',
      state: 'IN',
      name: 'Mediterranean Style Villa',
      price: 3500,
      imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2350&q=80'
    }, {
      userId: 2,
      address: '6 Military Street',
      city: 'Morgantown',
      state: 'WV',
      name: 'Suburban Kingdom',
      price: 6000,
      imageUrl: 'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Spots');
  }
};

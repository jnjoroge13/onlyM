'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    },
    spotId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    },
    review: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    rating: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    }
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, {foreignKey: 'userId'})
    Review.belongsTo(models.Spot, {foreignKey: 'spotId'})
  };
  return Review;
};

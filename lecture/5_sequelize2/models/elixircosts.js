'use strict';
module.exports = (sequelize, DataTypes) => {
  const elixirCosts = sequelize.define('elixirCosts', {
    name: DataTypes.STRING
  }, {});
  elixirCosts.associate = function(models) {
    // associations can be defined here
  };
  return elixirCosts;
};
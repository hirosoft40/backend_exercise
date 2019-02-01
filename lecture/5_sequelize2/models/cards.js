'use strict';
module.exports = (sequelize, DataTypes) => {
  const cards = sequelize.define('cards', {
    name: DataTypes.STRING,
    type_id: DataTypes.SMALLINT,
    elixir_id: DataTypes.SMALLINT,
    rarity_id: DataTypes.SMALLINT,
    arena_id: DataTypes.SMALLINT,
    summary: DataTypes.TEXT,
    imgURL: DataTypes.STRING
  }, {});
  cards.associate = function(models) {
  
    // associations can be defined here
  };
  return cards;
};
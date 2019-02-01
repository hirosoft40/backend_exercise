'use strict';
module.exports = (sequelize, DataTypes) => {
  const types = sequelize.define('types', {
    name: DataTypes.STRING
  }, {});
  types.associate = function(models) {
    // associations can be defined here
    models.types.belongsTo(models.cards,{
      onDelete:'CASCADE',
      foreignKey:{allowNull:false}
    });
  };
  return types;
};
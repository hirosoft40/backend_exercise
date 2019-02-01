'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sessions = sequelize.define('Sessions', {
    expires: DataTypes.DATE,
    data: DataTypes.STRING
  }, {});
  Sessions.associate = function(models) {
    // associations can be defined here
  };
  return Sessions;
};
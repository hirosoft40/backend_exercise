'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryIntergace.createTable(
      'types',
      'arenaId',
      {type: Sequelize.SMALLINT
      , onDelete:'CASCADE'
      , allowNull: false
      , references :{
        model: 'arenas',
        key:'id'
      }
    });
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'tasks', 'userID'
    )
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};

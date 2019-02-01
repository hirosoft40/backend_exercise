'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // CHECK documentations for detail
    return queryInterface.addColumn(
      'users',    // table name
      'nickname', // columns
      {
        type:Sequelize.STRING
      }
    )
  },

  // for rollback --> db:migrate:undo
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'users', 'nickname'
    );
  }
};

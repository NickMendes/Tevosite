'use strict';

module.exposts = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Ilustrations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTERGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      site: {
        allowNull: false,
        type: Sequelize.STRING(200)
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING(200)
      },
      collection: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Ilustations')
  },
};

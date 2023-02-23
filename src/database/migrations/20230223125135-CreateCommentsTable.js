'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      content: {
        allowNull: false,
        type: Sequelize.STRING
      },
      postId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'posts',
          key: 'id'
        },
        field: 'post_id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('comments')
  }
};

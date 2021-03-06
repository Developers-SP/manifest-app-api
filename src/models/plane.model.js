const Sequelize = require('sequelize')
  , defaultFields = require('./default.model');

class PlaneModel {

  static get structure() {
    return {
      ...defaultFields,
      prefix: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      model: {
        type: Sequelize.STRING,
        allowNull: false
      },
      amountOfPeople: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    };
  }

  static defineEntityStructure(sequelize) {
    return sequelize
      .define('plane', this.structure);
  }
}

module.exports = PlaneModel;

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class add - damage - to - chara extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  add - damage - to - chara.init({
    number: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'add-damage-to-chara',
  });
  return add - damage - to - chara;
};
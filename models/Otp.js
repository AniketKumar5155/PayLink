'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Otp extends Model {
    static associate(models) {
    }
  }

  Otp.init({
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    purpose: {
      type: DataTypes.ENUM('RESET_PASSWORD'),
      allowNull: false,
      primaryKey: true
    },
    otp: {
      type: DataTypes.STRING(6),
      allowNull: false,
    },
    expires_at: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  }, {
    sequelize,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false,
    modelName: 'Otp',
    tableName: 'otps'
  });

  return Otp;
};

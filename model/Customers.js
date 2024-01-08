const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Customers', {
    CustomerID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CustomerName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PhoneNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PurchaseHistory: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Customers',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CustomerID" },
        ]
      },
    ]
  });
};

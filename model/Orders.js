const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Orders', {
    OrderID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    OrderDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    TotalOrderValue: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    OrderStatus: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CustomerID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Customers',
        key: 'CustomerID'
      }
    }
  }, {
    sequelize,
    tableName: 'Orders',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "OrderID" },
        ]
      },
      {
        name: "CustomerID",
        using: "BTREE",
        fields: [
          { name: "CustomerID" },
        ]
      },
    ]
  });
};

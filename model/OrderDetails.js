const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OrderDetails', {
    OrderDetailID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    OrderID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Orders',
        key: 'OrderID'
      }
    },
    BookID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Books',
        key: 'BookID'
      }
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UnitPrice: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'OrderDetails',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "OrderDetailID" },
        ]
      },
      {
        name: "OrderID",
        using: "BTREE",
        fields: [
          { name: "OrderID" },
        ]
      },
      {
        name: "BookID",
        using: "BTREE",
        fields: [
          { name: "BookID" },
        ]
      },
    ]
  });
};

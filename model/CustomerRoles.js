const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CustomerRoles', {
    CustomerID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Customers',
        key: 'CustomerID'
      }
    },
    RoleID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Roles',
        key: 'RoleID'
      }
    }
  }, {
    sequelize,
    tableName: 'CustomerRoles',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CustomerID" },
          { name: "RoleID" },
        ]
      },
      {
        name: "RoleID",
        using: "BTREE",
        fields: [
          { name: "RoleID" },
        ]
      },
    ]
  });
};

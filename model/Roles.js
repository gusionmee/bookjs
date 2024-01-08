const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Roles', {
    RoleID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RoleName: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "RoleName"
    }
  }, {
    sequelize,
    tableName: 'Roles',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "RoleID" },
        ]
      },
      {
        name: "RoleName",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "RoleName" },
        ]
      },
    ]
  });
};

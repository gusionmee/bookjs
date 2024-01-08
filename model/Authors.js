const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Authors', {
    AuthorID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    AuthorName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    AuthorBiography: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Authors',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "AuthorID" },
        ]
      },
    ]
  });
};

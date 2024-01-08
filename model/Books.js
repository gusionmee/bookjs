const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Books', {
    BookID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Author: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Genre: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Publisher: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PublicationYear: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    QuantityInStock: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Books',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "BookID" },
        ]
      },
    ]
  });
};

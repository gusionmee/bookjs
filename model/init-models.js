var DataTypes = require("sequelize").DataTypes;
var _Authors = require("./Authors");
var _Books = require("./Books");
var _Categories = require("./Categories");
var _CustomerRoles = require("./CustomerRoles");
var _Customers = require("./Customers");
var _OrderDetails = require("./OrderDetails");
var _Orders = require("./Orders");
var _Roles = require("./Roles");
var db=require('../config/database');
function initModels(sequelize) {
  var Authors = _Authors(sequelize, DataTypes);
  var Books = _Books(sequelize, DataTypes);
  var Categories = _Categories(sequelize, DataTypes);
  var CustomerRoles = _CustomerRoles(sequelize, DataTypes);
  var Customers = _Customers(sequelize, DataTypes);
  var OrderDetails = _OrderDetails(sequelize, DataTypes);
  var Orders = _Orders(sequelize, DataTypes);
  var Roles = _Roles(sequelize, DataTypes);


  Customers.belongsToMany(Roles, { as: 'RoleID_Roles', through: CustomerRoles, foreignKey: "CustomerID", otherKey: "RoleID" });
  Roles.belongsToMany(Customers, { as: 'CustomerID_Customers', through: CustomerRoles, foreignKey: "RoleID", otherKey: "CustomerID" });
  OrderDetails.belongsTo(Books, { as: "Book", foreignKey: "BookID"});
  Books.hasMany(OrderDetails, { as: "OrderDetails", foreignKey: "BookID"});
  CustomerRoles.belongsTo(Customers, { as: "Customer", foreignKey: "CustomerID"});
  Customers.hasMany(CustomerRoles, { as: "CustomerRoles", foreignKey: "CustomerID"});
  Orders.belongsTo(Customers, { as: "Customer", foreignKey: "CustomerID"});
  Customers.hasMany(Orders, { as: "Orders", foreignKey: "CustomerID"});
  OrderDetails.belongsTo(Orders, { as: "Order", foreignKey: "OrderID"});
  Orders.hasMany(OrderDetails, { as: "OrderDetails", foreignKey: "OrderID"});
  CustomerRoles.belongsTo(Roles, { as: "Role", foreignKey: "RoleID"});
  Roles.hasMany(CustomerRoles, { as: "CustomerRoles", foreignKey: "RoleID"});

  return {
    Authors,
    Books,
    Categories,
    CustomerRoles,
    Customers,
    OrderDetails,
    Orders,
    Roles,

  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
module.exports.db=db;

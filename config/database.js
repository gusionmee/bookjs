const { Sequelize } = require('sequelize');


const config ={
    dbname:'bookstore',
    user:'root',
    pass:'12345678',
    host: 'localhost'


};
const sequelize = new Sequelize(config.dbname,config.user,config.pass, {host:'localhost', dialect:'mysql'});
try {
     sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
module.exports = sequelize;
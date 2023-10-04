const Sequelize = require('sequelize')

const sequelize = new Sequelize('Expenses','root','Lakshmi@2002',{
    host : "localhost",
    dialect : "mysql"
});

module.exports = sequelize;
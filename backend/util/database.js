
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('appointment_data', 'amans23', '$aman$', {
  host: 'localhost',
  dialect: 'mysql', 
});

module.exports = sequelize;

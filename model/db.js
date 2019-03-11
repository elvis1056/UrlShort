const Sequelize = require('sequelize');

const sequelize = new Sequelize ('mydb', 'myac', 'mypwd',{
    host: 'localhost',
    dialect: 'mysql'
})

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully');
    })
    .catch(err => {
        console.error('Unable to connect the database', err);
    });
    
module.exports = sequelize
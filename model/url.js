const Sequelize = require('sequelize')
const sequelize = require('./db')

const Url = sequelize.define('url', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    shorten_url: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    original_url: {
        type: Sequelize.STRING
    }
}, {
    tableName: 'elvis1056_url'
})

Url.sync()

module.exports = Url
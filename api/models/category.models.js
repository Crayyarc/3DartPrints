const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Category = sequelize.define(
    'category',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { updatedAt: false }
)

module.exports = Category
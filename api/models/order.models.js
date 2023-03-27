const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Order = sequelize.define(
    'order',
    {
        price: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        file: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        file: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { updatedAt: false }
)

module.exports = Order
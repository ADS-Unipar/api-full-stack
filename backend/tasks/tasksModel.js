const db = require('../config/db.js');
const { DataTypes } = require('sequelize');  

const Task = db.define('task', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    status: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        comment: '0 = Pendente, 1 = Em andamento, 2 = Concluída'
    }
});

module.exports = Task;
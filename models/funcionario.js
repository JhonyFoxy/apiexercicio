'use strict'

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/db');

module.exports = (sequelize, DataTypes) => { 
    class Funcionario extends Model { }

    Funcionario.init({

        nome_dependente: DataTypes.STRING(45),
        idade: DataTypes.SMALLINT,
        tipo: DataTypes.STRING(20),
        status: DataTypes.STRING(10),
        id_funcionario: DataTypes.SMALLINT
    },
        {
            sequelize,
            modelName: 'funcionario',
            timestamps: false
        });

        return Funcionario
}
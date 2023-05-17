'use strict'

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/db');

module.exports = (sequelize, DataTypes) => { 
    class Funcionario extends Model { }

    Funcionario.init({

        nome_funcionario: DataTypes.STRING(45),
        telefone: DataTypes.BIGINT,
        cargo: DataTypes.STRING(30),
        salario: DataTypes.INTEGER(10),
        id_departamento: DataTypes.SMALLINT
    },
        {
            sequelize,
            modelName: 'funcionario',
            timestamps: false
        });

        return Funcionario
}
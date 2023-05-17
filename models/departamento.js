'use strict'

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/db');

module.exports = (sequelize, DataTypes) => { 
    class Departamento extends Model { }

    Departamento.init({

        nome: DataTypes.STRING(45),
        sigla: DataTypes.STRING(3),
        responsavel: DataTypes.STRING(45)
    },
        {
            sequelize,
            modelName: 'departamento',
            timestamps: false
        });

        return Departamento
}
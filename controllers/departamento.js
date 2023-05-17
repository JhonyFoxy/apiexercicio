// Cria as funções de controle da busca

const Sequelize = require('sequelize');
const sequelize =  require('../db/db');
const Departamento = require('../models/departamento');

module.exports = {
    async getAll(req, res){
        const departamento = await Departamento(sequelize, Sequelize.DataTypes).findAll();

        res.status(200).send(departamento)
    },

    async get(req, res){
        const departamento = await Departamento(sequelize, Sequelize.DataTypes).findAll({
            where: { id: req.params.id }
        })
            res.status(200).send(departamento)
   }









}
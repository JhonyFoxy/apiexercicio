// Cria as funções de controle da busca

const Sequelize = require('sequelize');
const sequelize =  require('../db/db');
const Dependente = require('../models/dependente');

module.exports = {
    async getAll(req, res){
        const dependente = await Dependente(sequelize, Sequelize.DataTypes).findAll();

        res.status(200).send(dependente)
    },

    async get(req, res){
        const dependente = await Dependente(sequelize, Sequelize.DataTypes).findAll({
            where: { id: req.params.id }
        })
            res.status(200).send(dependente)
   }









}
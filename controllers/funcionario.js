// Cria as funções de controle da busca

const Sequelize = require('sequelize');
const sequelize =  require('../db/db');
const Funcioario = require('../models/funcionario');

module.exports = {
    async getAll(req, res){
        const funcionario = await Funcioario(sequelize, Sequelize.DataTypes).findAll();

        res.status(200).send(funcionario)
    },

    async get(req, res){
        const funcionario = await Funcioario(sequelize, Sequelize.DataTypes).findAll({
            where: { id: req.params.id }
        })
            res.status(200).send(funcionario)
   }









}
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
   },

   async create(req, res){
        const dependente = await Dependente(sequelize, Sequelize.DataTypes).create({
            nome_dependente: req.body.nome_dependente,
            idade: req.body.idade,
            tipo: req.body.tipo,
            status: req.body.status,
            id_funcionario: req.body.id_funcionario
        })
        res.status(201).send({
            message: "Dependente cadastrado com sucesso."
        })
   },

   async update(req, res){
    const dependente = await Dependente(sequelize, Sequelize.DataTypes).update({
        nome_dependente: req.body.nome_dependente,
        idade: req.body.idade,
        tipo: req.body.tipo,
        status: req.body.status,
        id_funcionario: req.body.id_funcionario
    },
    {
        where: { id: req.params.id}
    }
    );
    res.status(200).send({
        message: "Dependente atualizado com sucesso."
    })
   },
   async delete(req, res){
        await Dependente(sequelize, Sequelize.DataTypes).destroy({
            where: { id: req.params.id }
        })
        res.status(200).send({
            message: ("Dependente Excluído com sucesso.")
        })
   }
}

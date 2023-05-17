const express = require('express');

const app = express();

const departamentoRoute = require('./route/departamentoRoute')
const dependenteRoute = require('./route/dependenteRoute')
const funcionarioRoute = require('./route/funcionarioRoute')

app.use(express.json())
app.use('/departamentos', departamentoRoute);
app.use('/dependentes', dependenteRoute);
app.use('/funcionarios', funcionarioRoute);


app.use((req, res, next) => {
    const erro = new Error("Rota não encontrada.")
    erro.status = 404
    next(erro)
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            message: error.message
        }
    })
});

module.exports = app;
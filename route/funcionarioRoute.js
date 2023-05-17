const express = require('express');

const router = express.Router();

const funcionarioController = require('../controllers/funcionario');

router.get('/', (req, res) => {
    funcionarioController.getAll(req, res)
});

router.get('/:id', (req, res) => {
    funcionarioController.get(req, res)
})

router.post('/', (req, res) =>{
})


router.put('/:id', (req, res) => {
    })


router.delete('/:id', (req, res) => {

});

module.exports = router;
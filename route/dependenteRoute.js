const express = require('express');

const router = express.Router();

const dependenteController = require('../controllers/dependente');

router.get('/', (req, res) => {
    dependenteController.getAll(req, res)
});

router.get('/:id', (req, res) => {
    dependenteController.get(req, res)
})

router.post('/', (req, res) =>{
})


router.put('/:id', (req, res) => {
    })


router.delete('/:id', (req, res) => {

});

module.exports = router;
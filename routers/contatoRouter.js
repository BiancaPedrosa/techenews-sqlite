const express = require('express');
const router = express.Router();
const contatoController = require('../controllers/contatoController');

router.get('/', contatoController.showForm);
router.post('/feedback', contatoController.create);

module.exports = router;

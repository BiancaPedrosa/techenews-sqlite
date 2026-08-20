// ============================================
// routers/noticiaRouter.js
// ============================================
const express = require('express');
const router = express.Router();
const noticiaController = require('../controllers/noticiaController');

router.get('/', noticiaController.list);
router.get('/noticia/:id', noticiaController.detail);
router.get('/admin', noticiaController.adminForm);
router.post('/admin', noticiaController.create);

module.exports = router;

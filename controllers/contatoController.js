// ============================================
// controllers/contatoController.js
// ============================================
const Contato = require('../models/contatoModel');

// GET /contato — mostra o formulário de contato
const showForm = (req, res) => {
  res.render('contato', { titulo: 'TechNews - Contato', pagina: 'contato' });
};

// POST /contato/feedback — salva a mensagem enviada
const create = (req, res) => {
  const { nome, email, mensagem } = req.body;

  Contato.create(nome, email, mensagem, (err) => {
    if (err) return res.status(500).send('Erro ao salvar');
    res.render('feedback', { titulo: 'TechNews - Obrigado!', pagina: 'contato', nome });
  });
};

module.exports = { showForm, create };

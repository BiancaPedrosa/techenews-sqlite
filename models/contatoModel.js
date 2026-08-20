// ============================================
// models/contatoModel.js — Model dos contatos
// ============================================
const db = require('../db');

const create = (nome, email, mensagem, callback) => {
  db.run(
    'INSERT INTO contatos (nome, email, mensagem) VALUES (?, ?, ?)',
    [nome, email, mensagem],
    callback
  );
};

module.exports = { create };

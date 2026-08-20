// ============================================
// models/noticiaModel.js — Model das notícias
// ============================================
const db = require('../db');

const getAll = (callback) => {
  db.all('SELECT * FROM noticias ORDER BY data_publicacao DESC', [], callback);
};

const getByCategoria = (categoria, callback) => {
  db.all('SELECT * FROM noticias WHERE categoria = ? ORDER BY data_publicacao DESC', [categoria], callback);
};

const getById = (id, callback) => {
  db.get('SELECT * FROM noticias WHERE id = ?', [id], callback);
};

const create = (titulo, categoria, conteudo, imagem, callback) => {
  db.run(
    'INSERT INTO noticias (titulo, categoria, conteudo, imagem) VALUES (?, ?, ?, ?)',
    [titulo, categoria, conteudo, imagem],
    callback
  );
};

module.exports = { getAll, getByCategoria, getById, create };

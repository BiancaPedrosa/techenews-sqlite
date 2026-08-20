// ============================================
// db.js — Conexão com o SQLite
// ============================================
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(path.join(__dirname, 'database', 'techenews.db'), (erro) => {
  if (erro) return console.error('Erro ao abrir:', erro.message);
  console.log('✅ Conectado ao SQLite!');
});

// Cria a tabela notícias (IF NOT EXISTS evita erro se já existir)
db.run(`CREATE TABLE IF NOT EXISTS noticias (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  titulo TEXT NOT NULL,
  categoria TEXT NOT NULL,
  conteudo TEXT NOT NULL,
  imagem TEXT,
  data_publicacao TEXT DEFAULT CURRENT_TIMESTAMP
)`, (erro) => {
  if (erro) return console.error(erro.message);
  console.log('✅ Tabela notícias pronta!');
});
// Cria a tabela contatos (IF NOT EXISTS evita erro se já existir)
db.run(`CREATE TABLE IF NOT EXISTS contatos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  mensagem TEXT NOT NULL
)`, (erro) => {
  if (erro) return console.error(erro.message);
  console.log('✅ Tabela contatos pronta!');
});

module.exports = db;

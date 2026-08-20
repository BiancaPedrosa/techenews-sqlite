// ============================================
// app.js — Servidor Express
// ============================================
const express = require('express');
const path = require('path');
require('./db');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Delega TUDO para os arquivos de rotas
const noticiaRouter = require('./routers/noticiaRouter');
const contatoRouter = require('./routers/contatoRouter');

app.use('/', noticiaRouter);
app.use('/contato', contatoRouter);

app.listen(PORT, () => {
  console.log(`🚀 Servidor em http://localhost:${PORT}`);
});

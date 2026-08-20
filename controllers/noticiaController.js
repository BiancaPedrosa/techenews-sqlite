// ============================================
// controllers/noticiaController.js
// ============================================
const Noticia = require('../models/noticiaModel');

// GET / — lista todas as notícias (título e categoria), com filtro opcional por categoria
const list = (req, res) => {
  const { categoria } = req.query;

  const aoTerminar = (err, linhas) => {
    if (err) return res.status(500).send('Erro ao buscar notícias');
    res.render('index', {
      titulo: 'TechNews - Início',
      pagina: 'home',
      noticias: linhas,
      categoriaAtiva: categoria || 'todas'
    });
  };

  if (categoria) {
    Noticia.getByCategoria(categoria, aoTerminar);
  } else {
    Noticia.getAll(aoTerminar);
  }
};

// GET /noticia/:id — mostra os detalhes completos de uma notícia
const detail = (req, res) => {
  const { id } = req.params;

  Noticia.getById(id, (err, noticia) => {
    if (err) return res.status(500).send('Erro ao buscar notícia');
    if (!noticia) return res.status(404).send('Notícia não encontrada');
    res.render('noticia', {
      titulo: `TechNews - ${noticia.titulo}`,
      pagina: 'noticia',
      noticia
    });
  });
};

// GET /admin — mostra o formulário de cadastro de notícias
const adminForm = (req, res) => {
  res.render('admin', { titulo: 'TechNews - Admin', pagina: 'admin' });
};

// POST /admin — cria uma nova notícia
const create = (req, res) => {
  const { titulo, categoria, conteudo, imagem } = req.body;

  Noticia.create(titulo, categoria, conteudo, imagem, (err) => {
    if (err) return res.status(500).send('Erro ao salvar notícia');
    res.redirect('/');
  });
};

module.exports = { list, detail, adminForm, create };

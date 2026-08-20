// ============================================
// seed.js — Popula o banco com notícias de exemplo
// Rode uma única vez: node seed.js
// ============================================
const db = require('./db');

const noticias = [
  [
    'iPhone 16 é lançado com IA integrada',
    'Tecnologia',
    'A Apple apresentou o novo iPhone 16 com recursos de inteligência artificial que prometem revolucionar a forma como usamos smartphones.',
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400'
  ],
  [
    'Robôs domésticos chegam ao Brasil',
    'Inovação',
    'Empresas brasileiras começam a importar robôs assistentes para tarefas domésticas. O preço ainda é alto, mas a tendência é de queda.',
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400'
  ],
  [
    'Nova rede 6G já está em testes',
    'Internet',
    'Pesquisadores da Coreia do Sul anunciaram os primeiros testes bem-sucedidos da rede 6G, prometendo velocidades 50x maiores que o 5G.',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400'
  ]
];

const sql = 'INSERT INTO noticias (titulo, categoria, conteudo, imagem) VALUES (?, ?, ?, ?)';

noticias.forEach(([titulo, categoria, conteudo, imagem]) => {
  db.run(sql, [titulo, categoria, conteudo, imagem], function (erro) {
    if (erro) return console.error('Erro ao inserir:', erro.message);
    console.log(`✅ Notícia ID ${this.lastID}: ${titulo}`);
  });
});

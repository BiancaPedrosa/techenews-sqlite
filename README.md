# TechNews — Gabarito (SQLite + MVC)

## Como rodar

```
npm install
node app.js           # cria database/techenews.db e a tabela noticias
node seed.js           # roda uma única vez para inserir notícias de exemplo
```

Depois abra http://localhost:3000

## Rotas

| Método | Rota            | O que faz                                    |
|--------|-----------------|-----------------------------------------------|
| GET    | /               | Lista todas as notícias (título e categoria)   |
| GET    | /?categoria=X   | Filtra as notícias por categoria (desafio extra) |
| GET    | /noticia/:id    | Mostra os detalhes completos de uma notícia    |
| GET    | /admin          | Formulário para cadastrar uma nova notícia     |
| POST   | /admin          | Salva a nova notícia no banco                  |
| GET    | /contato        | Página de contato                              |
| POST   | /contato/feedback | Salva a mensagem enviada                     |

## Estrutura MVC

- `db.js` — conexão com o SQLite (raiz do projeto), cria as tabelas se não existirem
- `database/techenews.db` — arquivo do banco SQLite (gerado sozinho)
- `models/noticiaModel.js` — único arquivo que executa SQL de notícias (getAll, getByCategoria, getById, create)
- `controllers/noticiaController.js` — liga Model e View (list, detail, adminForm, create)
- `routers/` — mapeia URLs para os Controllers
- `views/` — templates EJS (index, noticia, admin, contato, feedback, partials/)
- `seed.js` — script avulso para popular o banco com exemplos

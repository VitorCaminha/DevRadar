const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// Metodos HTTP: GET = pegar algo, POST = criar algo novo, PUT = editar algo ja existente, DELETE = deletar algo.

// Tipos de paramentros:
// Query Params: request.query (P/ filtros, ordenacao, paginacao, etc)
// Route Params: request.params (P/ identificar um recurso na alteracao ou remocao dele)
// Body: request.body (Dados para criacao ou alteracao de um registro)

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;
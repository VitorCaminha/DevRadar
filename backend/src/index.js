const { MONGO_USER, MONGO_PASS, MONGO_DB } = require('../.env');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

// MongoDB (Nao-relacional)

mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0-yxwck.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.use(cors());
app.use(express.json()); //Entender requisicoes que tenham o corpo no formato json em todas as rotas. Se usasse algum metodo, somente as rotas que utilizassem esse metodo, entenderiam essas requisicoes.

app.use(routes); //Cadastra todas as rotas da aplicacao vindo do arquivo routes.js

server
.listen(3333);
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middleware = jsonServer.defaults();

const session = require('express-session');
const express = require('express');

server.set("port", process.env.PORT || 8080);
server.set("view engine", "ejs");

const index = require('./src/index');
const auth = require('./src/auth');

server.use(middleware);
server.use(jsonServer.bodyParser);

server.use(express.static('public'));

server.use(session({secret: "secret", resave: false, saveUninitialized: true}));

server.use(index);
server.use(auth);

server.use(router);
server.listen(server.get('port'), function() {
  console.log('Server is running on port', server.get('port'));
})

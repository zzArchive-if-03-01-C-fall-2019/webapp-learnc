const express = require('express');
const fs = require('fs');
const roles = require('./roles');

const router = express();

router.get("/", function(req, res) {
  res.status(200);
  res.render("../index", {user: req.session.user});
});
router.get("/views/structure", function(req, res) {
  let data = fs.readFileSync('comments.json');
  let jsonObj = JSON.parse(data);
  res.status(200);

  res.render("../views/structure", {message: '', pattern: req.body.search,
  comments: jsonObj.comments[0], user: req.session.user});
});

router.get("/views/variables", function(req, res) {
  let data = fs.readFileSync('comments.json');
  let jsonObj = JSON.parse(data);
  res.status(200);

  res.render("../views/variables", {message: '', pattern: req.body.search,
  comments: jsonObj.comments[1], user: req.session.user});
});

router.get("/views/output", function(req, res) {
  let data = fs.readFileSync('comments.json');
  let jsonObj = JSON.parse(data);
  res.status(200);

  res.render("../views/output", {message: '', pattern: req.body.search,
  comments: jsonObj.comments[2], user: req.session.user});
});

router.get("/views/input", function(req, res) {
  let data = fs.readFileSync('comments.json');
  let jsonObj = JSON.parse(data);
  res.status(200);

  res.render("../views/input", {message: '', pattern: req.body.search,
  comments: jsonObj.comments[3], user: req.session.user});
});

router.get("/views/selections", function(req, res) {
  let data = fs.readFileSync('comments.json');
  let jsonObj = JSON.parse(data);
  res.status(200);

  res.render("../views/selections", {message: '', pattern: req.body.search,
  comments: jsonObj.comments[4], user: req.session.user});
});

router.get("/views/arrays", function(req, res) {
  let data = fs.readFileSync('comments.json');
  let jsonObj = JSON.parse(data);
  res.status(200);

  res.render("../views/arrays", {message: '', pattern: req.body.search,
  comments: jsonObj.comments[5], user: req.session.user});
});

router.get("/views/methods", function(req, res) {
  let data = fs.readFileSync('comments.json');
  let jsonObj = JSON.parse(data);
  res.status(200);

  res.render("../views/methods", {message: '', pattern: req.body.search,
  comments: jsonObj.comments[6], user: req.session.user});
});

router.get("/views/structs", function(req, res) {
  let data = fs.readFileSync('comments.json');
  let jsonObj = JSON.parse(data);
  res.status(200);

  res.render("../views/structs", {message: '', pattern: req.body.search,
  comments: jsonObj.comments[7], user: req.session.user});
});

router.get("/views/login", function(req, res) {
  res.render("../views/login", {message: '', user: req.session.user});
});

router.get("/views/registration", function(req, res) {
  res.render("../views/registration", {message: '', user: req.session.user});
});

router.get("/views/changelog", function(req, res) {
  res.status(200);
  res.render("../views/changelog", {user: req.session.user});
});
router.get("/views/assign", checkAuth, function(req, res) {
  res.render("../views/assign", {message1: '', message2: '', user: req.session.user});
});
router.get("/views/profile", checkUser, function(req, res) {
  let data = fs.readFileSync('db.json');
  let jsonObj = JSON.parse(data);
  let foundUser = jsonObj.users.find(user => {
    return user.user === req.session.user.user;
  });
  const profile = {
    "user": foundUser.user,
    "comments": foundUser.comments,
    "role": foundUser.role
  }
  res.render("../views/profile", {message: '', profile: profile});
});
module.exports = router;

function checkAuth(req, res, next) {
  if(!req.session.user || (req.session.user.role !== roles.Admin)) {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.write('Not Found');
    res.end();
  } else {
    next();
  }
}
function checkUser(req, res, next) {
  if(!req.session.user) {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.write('Not Found');
    res.end();
  } else {
    next();
  }
}

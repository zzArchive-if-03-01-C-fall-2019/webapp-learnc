const express = require('express');
const fs = require('fs');

const router = express();

router.get("/", function(req, res) {
  res.render("../index");
});

router.get("/views/structure", function(req, res) {
  let data = fs.readFileSync('comments.json');
  let jsonObj = JSON.parse(data);

  res.render("../views/structure", {message: '', pattern: '',
  array: jsonObj.comments[0], user: req.session.user});
});

router.get("/views/variables", function(req, res) {
  res.render("../views/variables");
});

router.get("/views/output", function(req, res) {
  res.render("../views/output");
});

router.get("/views/input", function(req, res) {
  res.render("../views/input");
});

router.get("/views/selections", function(req, res) {
  res.render("../views/selections");
});

router.get("/views/arrays", function(req, res) {
  res.render("../views/arrays");
});

router.get("/views/methods", function(req, res) {
  res.render("../views/methods");
});

router.get("/views/structs", function(req, res) {
  res.render("../views/structs");
});

router.get("/views/login", function(req, res) {
  res.render("../views/login", {message: ''});
});

router.get("/views/registration", function(req, res) {
  res.render("../views/registration", {message: ''});
});

router.get("/views/changelog", function(req, res) {
  res.render("../views/changelog");
});
module.exports = router;

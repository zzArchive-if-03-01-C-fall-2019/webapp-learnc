const express = require('express');

const router = express();

router.get("/", function(req, res) {
  res.render("../index");
});

router.get("/views/structure.ejs", function(req, res) {
  res.render("../views/structure");
});

router.get("/views/variables.ejs", function(req, res) {
  res.render("../views/variables");
});

router.get("/views/output.ejs", function(req, res) {
  res.render("../views/output");
});

router.get("/views/input.ejs", function(req, res) {
  res.render("../views/input");
});

router.get("/views/selections.ejs", function(req, res) {
  res.render("../views/selections");
});

router.get("/views/arrays.ejs", function(req, res) {
  res.render("../views/arrays");
});

router.get("/views/methods.ejs", function(req, res) {
  res.render("../views/methods");
});

router.get("/views/structs.ejs", function(req, res) {
  res.render("../views/structs");
});

router.get("/views/login.ejs", function(req, res) {
  res.render("../views/login", {message: ''});
});

router.get("/views/registration.ejs", function(req, res) {
  res.render("../views/registration", {message: ''});
});

router.get("/views/changelog.ejs", function(req, res) {
  res.render("../views/changelog");
});
module.exports = router;

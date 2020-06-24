const path = require('path');
const fs = require('fs');
const express = require('express');
const sha256 = require('js-sha256').sha256;

const router = express();

router.post("/views/login", function(req, res) {
  console.log(req.session);
  if(!req.session.user) {
    let newUser = {
      "user": req.body.username,
      "password": req.body.password,
    }

    let data = fs.readFileSync('db.json');
    let jsonObj = JSON.parse(data);

    let user = jsonObj.users.find(user => {
      return user.user === newUser.user;
    });

    if(user) {
      if(hash(newUser.password, user.salt)[1] == user.password) {
        req.session.user = newUser.user;
        res.render("../views/login", { message: "You are logged in" });
      } else {
        res.render("../views/login", { message: "Wrong Password" });
      }
    } else {
      res.render("../views/login", { message: "You are not registered" });
    }
  } else {
    res.render("../views/login", { message: "You are already logged in with one account" });
  }
});

router.post("/views/logout", function(req, res) {
  console.log(req.session);
  if(!req.session.user) {
    res.render("../views/login", { message: "You are not logged in" });
  } else {
    delete req.session.user;
    res.render("../views/login", { message: "You are no more logged in" });
  }
});

router.post("/views/registration", function(req, res) {
  let newUser = {
    "id": 0,
    "user": req.body.username,
    "password": req.body.password,
    "email": req.body.email
  }

  let data = fs.readFileSync('db.json');
  let jsonObj = JSON.parse(data);

  let exists = jsonObj.users.some(user => {
    return user.user === newUser.user;
  });
  if(exists) {
    res.render("../views/registration", { message: "This user already exists " });
  } else {
    newUser.id = jsonObj.users.length + 1;
    let pAnds = hash(newUser.password);

    newUser.password = pAnds[1];
    newUser.salt = pAnds[0];

    jsonObj.users.push(newUser);

    fs.writeFile('db.json', JSON.stringify(jsonObj), function() {
      console.log('You are registerd in with user', newUser.user);
    });
    res.redirect('../views/login');
  }
});

module.exports = router;

function hash(password, salt = new Date().getTime()) {
  let hash = sha256.create();
  hash.salt = salt;
  hash.update(password);
  return [salt, hash.hex()];
}

const path = require('path');
const fs = require('fs');
const express = require('express');
const sha256 = require('js-sha256').sha256;

const router = express();

router.post("/views/login", function(req, res) {

  if(req.body.username === '' || req.body.password === '') {
    res.render("../views/login", { message: "Please fill out all fields" });
  } else {
    const newUser = {
      "user": req.body.username,
      "password": req.body.password,
    }

    var data = fs.readFileSync('db.json');
    var jsonObj = JSON.parse(data);

    var user = jsonObj.users.find(user => {
      return user.user === newUser.user;
    });

    if(user) {
      if(hash(newUser.password, user.salt)[1] == user.password) {
        req.session.user = newUser;
        res.render("../views/login", { message: "You are logged in" });
      } else {
        res.render("../views/login", { message: "Wrong Password" });
      }
    } else {
      res.render("../views/login", { message: "You are not registered" });
    }
  }
  res.send();
});


router.post("/views/registration", function(req, res) {
  let valid = true;

  if(req.body.username === '' || req.body.password === '' || req.body.email === ''
    || req.body.passwordcon === '') {
  res.render("../views/registration", { message: "Please fill out all fields" });
  valid = false;
} else if(req.body.username.length < 5 || req.body.password.length < 5) {
    res.render("../views/registration", { message: "The username and the password should be longer than 5 characters" });
    valid = false;
  } else if(req.body.password !== req.body.passwordcon) {
    res.render("../views/registration", { message: "The password was not right confirmed", username: 'ttt' });
    valid = false;
  }

  if(valid) {
    const newUser = {
      "id": 0,
      "user": req.body.username,
      "password": req.body.password,
      "email": req.body.email
    }

    var data = fs.readFileSync('db.json');
    var jsonObj = JSON.parse(data);

    var exists = jsonObj.users.some(user => {
      return user.user === newUser.user;
    });
    if(exists) {
      res.render("../views/registration", { message: "This user already exists " });
    } else {
      newUser.id = jsonObj.users.length + 1;
      var pAnds = hash(newUser.password);

      newUser.password = pAnds[1];
      newUser.salt = pAnds[0];

      jsonObj.users.push(newUser);

      fs.writeFile('db.json', JSON.stringify(jsonObj), function() {
        console.log('You are registerd in with user', newUser.user);
      });
      res.redirect('../views/login');
    }
  }
  res.send();
});

module.exports = router;

function hash(password, salt = new Date().getTime()) {
  let hash = sha256.create();
  hash.salt = salt;
  hash.update(password);
  return [salt, hash.hex()];
}

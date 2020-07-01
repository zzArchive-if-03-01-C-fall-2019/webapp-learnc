const path = require('path');
const fs = require('fs');
const express = require('express');
const sha256 = require('js-sha256').sha256;
const roles = require('./roles');

const router = express();

router.post("/views/login", function(req, res) {
  let message = '';
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
        req.session.user = {"user": user.user, "role": user.role};
      } else {
        message = 'Wrong Password';
      }
    } else {
      message = 'You are not registered';
    }
  } else {
    message = 'You are already logged in with one account';
  }
  res.render("../views/login", { message: message, user: req.session.user });

});

router.post("/views/logout", function(req, res) {
  let message = ''
  if(!req.session.user) {
    message = 'You are not logged in';
  } else {
    delete req.session.user;
    message = 'You are no more logged in';
  }
  res.render("../views/login", { message: message, user: req.session.user });
});

router.post("/views/registration", function(req, res) {
  let newUser = {
    "user": req.body.username,
    "password": req.body.password,
    "email": req.body.email,
    "role": roles.Member,
    "comments": {
      "submited": 0,
      "deleted": 0,
      "pinned": 0
    }
  }

  let data = fs.readFileSync('db.json');
  let jsonObj = JSON.parse(data);

  let exists = jsonObj.users.some(user => {
    return user.user === newUser.user;
  });
  if(exists) {
    res.render("../views/registration", { message: "This user already exists " });
  } else {
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

router.post("/views/assign", checkAuth, function(req, res) {
  let data = fs.readFileSync('db.json');
  let jsonObj = JSON.parse(data);
  let found = false;
  for (let i = 0; i < jsonObj.users.length && !found; i++) {
    if(jsonObj.users[i].user === req.body.username) {
      jsonObj.users[i].role = req.body.select;
      found = true;
    }
  }
  let message = '';
  if(found) {
    fs.writeFile('db.json', JSON.stringify(jsonObj), function() {
      console.log('Role assigned');
    });
    message = "The user "+req.body.username+" has now a "+req.body.select+" role"
  } else {
    message = "This user does not exist";
  }
  res.render("../views/assign", {message1: message, message2: ''});

});
router.delete("/views/assign", checkAuth, function(req, res) {
  let data = fs.readFileSync('db.json');
  let users = JSON.parse(data);
  let found = false;
  for (let i = 0; i < users.users.length && !found; i++) {
    if(users.users[i].user === req.body.value) {
      users.users.splice(i, 1);
      found = true;
    }
  }
  if(found) {
    fs.writeFile('db.json', JSON.stringify(users), function() {
      console.log('User deleted');
    });
    message = "The user "+req.body.value+" is now deleted"

    let data = fs.readFileSync('comments.json');
    let comments = JSON.parse(data);
    for (var i = 0; i < comments.comments.length; i++) {
      for (var j = 0; j < comments.comments[i].length; j++) {
        if(comments.comments[i][j].info.user === req.body.value) {
          comments.comments[i].splice(j, 1);
          j--;
        }
      }
    }
    fs.writeFile('comments.json', JSON.stringify(comments), function() {
      console.log('Comments of user deleted');
    });
  } else {
    message = "This user does not exist";
  }
  res.render("../views/assign", {message1: '', message2: message});

});
router.put("/views/profile", checkUser, function(req, res) {
  let profile = {
    "user": '',
    "comments": {},
    "role": ''
  }
  let message = '';
  let data = fs.readFileSync('db.json');
  let jsonObj = JSON.parse(data);
  let found = false;

  if(req.body.newUser !== undefined) {

    for (let i = 0; i < jsonObj.users.length; i++) {
      if(jsonObj.users[i].user === req.body.newUser) {
        found = true;
      }
    }
    if(found) {
      found = false;
      for (let i = 0; i < jsonObj.users.length && !found; i++) {
        if(jsonObj.users[i].user === req.session.user.user) {
          profile.user =jsonObj.users[i].user;
          profile.comments =jsonObj.users[i].comments;
          profile.role = jsonObj.users[i].role;
          found = true;
        }
      }
      message = 'This user already exists';
    } else {
      for (let i = 0; i < jsonObj.users.length && !found; i++) {
        if(jsonObj.users[i].user === req.session.user.user) {
          jsonObj.users[i].user = req.body.newUser
          found = true;
          profile.user = jsonObj.users[i].user;
          profile.comments =jsonObj.users[i].comments;
          profile.role = jsonObj.users[i].role;
        }
      }
      fs.writeFile('db.json', JSON.stringify(jsonObj), function() {
        console.log('Username renamed');
      });

      data = fs.readFileSync('comments.json');
      let comments = JSON.parse(data);
      for (let i = 0; i < comments.comments.length; i++) {
        for (let j = 0; j < comments.comments[i].length; j++) {
          if(comments.comments[i][j].info.user === req.session.user.user) {
            comments.comments[i][j].info.user = req.body.newUser;
          }
        }
      }
      fs.writeFile('comments.json', JSON.stringify(comments), function() {
        console.log('Comments of user renamed');
      });
      req.session.user.user = req.body.newUser;
    }
  } else if(req.body.newPassword !== undefined) {
    for (let i = 0; i < jsonObj.users.length && !found; i++) {
      if(jsonObj.users[i].user === req.session.user.user) {
        let pAnds = hash(req.body.newPassword);
        jsonObj.users[i].password = pAnds[1];
        jsonObj.users[i].salt = pAnds[0];
        found = true;

        profile.user = jsonObj.users[i].user;
        profile.comments =jsonObj.users[i].comments;
        profile.role = jsonObj.users[i].role;
      }
    }
    fs.writeFile('db.json', JSON.stringify(jsonObj), function() {
      console.log('Password renamed');
    });
  }
  res.render("../views/profile", {message: message, profile: profile})
})

module.exports = router;

function hash(password, salt = new Date().getTime()) {
  let hash = sha256.create();
  hash.salt = salt;
  hash.update(password);
  return [salt, hash.hex()];
}

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

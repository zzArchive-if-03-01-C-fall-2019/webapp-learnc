const express = require('express');
const fs = require('fs');

const router = express();

router.post("/views/structure", function(req, res) {
  let jsonObj = {};
  let pattern = '';
  let user = req.session.user;
  if(req.body.searchtext !== undefined) {
    pattern = req.body.searchtext;
    jsonObj = search(0, pattern);
    res.render("../views/structure", {message: '', pattern: pattern, array: jsonObj, user: user});
  } else if(req.body.text !== undefined) {
    if(user) {
      jsonObj = add(0, req);
      res.render("../views/structure", {message: '', pattern: pattern, array: jsonObj, user: user});
    } else {
      res.render("../views/structure", {message: 'You are not logged in',
       pattern: pattern, array: jsonObj, user: user});
    }
  } else if(req.body.delete_button !== undefined) {
    jsonObj = delete_comment(0, req.body.delete_button);
    res.render("../views/structure", {message: '', pattern: pattern, array: jsonObj, user: user});
  }
});

module.exports = router;

function delete_comment(index, count) {
  let data = fs.readFileSync('comments.json');
  let jsonObj = JSON.parse(data);
  jsonObj.comments[index].splice(count, 1);
  fs.writeFile('comments.json', JSON.stringify(jsonObj), function() {
    console.log('comment deleted');
  });
  return jsonObj.comments[index];
}

function search(index, search) {
  let data = fs.readFileSync('comments.json');
  let jsonObj = JSON.parse(data);
  let filtered = [];
  jsonObj.comments[index].forEach(item => {
      if(item.text.toLowerCase().includes(search.toLowerCase())
      || item.info.user.toLowerCase().includes(search.toLowerCase())) {
        filtered.push(item);
      }
  });
  return filtered;
}


function add(index, req) {
  let data = fs.readFileSync('comments.json');
  let jsonObj = JSON.parse(data);
  let date = getDate();
  let newComment = {
    "text": req.body.text,
    "info": {
      "user": req.session.user,
      "date": date
    }
  };

  jsonObj.comments[index].unshift(newComment);
  fs.writeFile('comments.json', JSON.stringify(jsonObj), function() {
    console.log('comment posted');
  });

  return jsonObj.comments[index];
}

function getDate() {
  let date = new Date().getFullYear();
  date += '-';
  date += new Date().getMonth()+1;
  date += '-';
  date += new Date().getDate();

  return date;
}

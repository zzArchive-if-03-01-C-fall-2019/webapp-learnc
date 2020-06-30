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
    res.render("../views/structure", {message: '', pattern: pattern, comments: jsonObj, user: user});
  } else if(req.body.text !== undefined) {
    jsonObj = add(0, req);
    if(user) {
      res.render("../views/structure", {message: '', pattern: pattern, comments: jsonObj, user: user});
    } else {
      res.render("../views/structure", {message: 'You are not logged in',
       pattern: pattern, comments: jsonObj, user: user});
    }
  } else if(req.body.delete_button !== undefined) {
    jsonObj = delete_comment(0, req.body.delete_button);
    res.render("../views/structure", {message: '', pattern: pattern, comments: jsonObj, user: user});
  } else if(req.body.pin_button !== undefined) {
    jsonObj = pin_comment(0, req.body.pin_button);
    res.render("../views/structure", {message: '', pattern: pattern, comments: jsonObj, user: user});
  }
});

module.exports = router;

function pin_comment(index, count) {
  let data = fs.readFileSync('comments.json');
  let jsonObj = JSON.parse(data);
  if(jsonObj.comments[index][count].info.isPinned) {
    jsonObj.comments[index][count].info.isPinned = false;
  } else {
    jsonObj.comments[index][count].info.isPinned = true;
  }
  fs.writeFile('comments.json', JSON.stringify(jsonObj), function() {
    console.log('comment pinned');
  });
  return jsonObj.comments[index];
}

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

  if(req.session.user) {
    let date = getDate();
    let newComment = {
      "text": req.body.text,
      "info": {
        "user": req.session.user.user,
        "date": date,
        "isPinned": false
      }
    };

    jsonObj.comments[index].unshift(newComment);
    fs.writeFile('comments.json', JSON.stringify(jsonObj), function() {
      console.log('comment posted');
    });
  }

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

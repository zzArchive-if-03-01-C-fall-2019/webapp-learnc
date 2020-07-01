const express = require('express');
const fs = require('fs');

const router = express();

//
// Structure
//
router.post("/views/structure", function(req, res) {
  let message = '';
  if(req.body.value !== undefined) {
    jsonObj = add(0, req);
    if(!req.session.user) {
       message = 'You are not logged in';
    }
  } else if(req.body.search !== undefined) {
    jsonObj = search(0, req.body.search);
  }
  res.render("../views/structure", {message: message, pattern: req.body.search, comments: jsonObj,
  user: req.session.user});
})
router.delete("/views/structure", function(req, res) {
  jsonObj = delete_comment(0, req.body.value);
  res.render("../views/structure", {message: '', pattern: req.body.search, comments: jsonObj,
  user: req.session.user});
});
router.put("/views/structure", function(req, res) {
  jsonObj = pin_comment(0, req.body.value);
  res.render("../views/structure", {message: '', pattern: req.body.search, comments: jsonObj,
  user: req.session.user});
});

//
// Variables
//
router.post("/views/variables", function(req, res) {
  let message = '';
  if(req.body.value !== undefined) {
    jsonObj = add(1, req);
    if(!req.session.user) {
       message = 'You are not logged in';
    }
  } else if(req.body.search !== undefined) {
    jsonObj = search(1, req.body.search);
  }
  res.render("../views/variables", {message: message, pattern: req.body.search, comments: jsonObj,
  user: req.session.user});
})
router.delete("/views/variables", function(req, res) {
  jsonObj = delete_comment(1, req.body.value);
  res.render("../views/variables", {message: '', pattern: req.body.search, comments: jsonObj,
  user: req.session.user});
});
router.put("/views/variables", function(req, res) {
  jsonObj = pin_comment(1, req.body.value);
  res.render("../views/variables", {message: '', pattern: req.body.search, comments: jsonObj,
  user: req.session.user});
});

//
// Output
//
router.post("/views/output", function(req, res) {
  let message = '';
  if(req.body.value !== undefined) {
    jsonObj = add(2, req);
    if(!req.session.user) {
       message = 'You are not logged in';
    }
  } else if(req.body.search !== undefined) {
    jsonObj = search(2, req.body.search);
  }
  res.render("../views/output", {message: message, pattern: req.body.search, comments: jsonObj,
  user: req.session.user});
})
router.delete("/views/output", function(req, res) {
  jsonObj = delete_comment(2, req.body.value);
  res.render("../views/output", {message: '', pattern: req.body.search, comments: jsonObj,
  user: req.session.user});
});
router.put("/views/output", function(req, res) {
  jsonObj = pin_comment(2, req.body.value);
  res.render("../views/output", {message: '', pattern: req.body.search, comments: jsonObj,
  user: req.session.user});
});

//
// Input
//
router.post("/views/input", function(req, res) {
  let message = '';
  if(req.body.value !== undefined) {
    jsonObj = add(3, req);
    if(!req.session.user) {
       message = 'You are not logged in';
    }
  } else if(req.body.search !== undefined) {
    jsonObj = search(3, req.body.search);
  }
  res.render("../views/input", {message: message, pattern: req.body.search, comments: jsonObj,
  user: req.session.user});
})
router.delete("/views/input", function(req, res) {
  jsonObj = delete_comment(3, req.body.value);
  res.render("../views/input", {message: '', pattern: req.body.search, comments: jsonObj,
  user: req.session.user});
});
router.put("/views/input", function(req, res) {
  jsonObj = pin_comment(3, req.body.value);
  res.render("../views/input", {message: '', pattern: req.body.search, comments: jsonObj,
  user: req.session.user});
});

//
// Selections
//
router.post("/views/selections", function(req, res) {
  let message = '';
  if(req.body.value !== undefined) {
    jsonObj = add(4, req);
    if(!req.session.user) {
       message = 'You are not logged in';
    }
  } else if(req.body.search !== undefined) {
    jsonObj = search(4, req.body.search);
  }
  res.render("../views/selections", {message: message, pattern: req.body.search, comments: jsonObj,
  user: req.session.user});
})
router.delete("/views/selections", function(req, res) {
  jsonObj = delete_comment(4, req.body.value);
  res.render("../views/selections", {message: '', pattern: req.body.search, comments: jsonObj,
  user: req.session.user});
});
router.put("/views/selections", function(req, res) {
  jsonObj = pin_comment(4, req.body.value);
  res.render("../views/selections", {message: '', pattern: req.body.search, comments: jsonObj,
  user: req.session.user});
});

//
// Arrays
//
router.post("/views/arrays", function(req, res) {
  let message = '';
  if(req.body.value !== undefined) {
    jsonObj = add(5, req);
    if(!req.session.user) {
       message = 'You are not logged in';
    }
  } else if(req.body.search !== undefined) {
    jsonObj = search(5, req.body.search);
  }
  res.render("../views/arrays", {message: message, pattern: req.body.search, comments: jsonObj,
  user: req.session.user});
})
router.delete("/views/arrays", function(req, res) {
  jsonObj = delete_comment(5, req.body.value);
  res.render("../views/arrays", {message: '', pattern: req.body.search, comments: jsonObj,
  user: req.session.user});
});
router.put("/views/arrays", function(req, res) {
  jsonObj = pin_comment(5, req.body.value);
  res.render("../views/arrays", {message: '', pattern: req.body.search, comments: jsonObj,
  user: req.session.user});
});

//
// Methods
//
router.post("/views/methods", function(req, res) {
  let message = '';
  if(req.body.value !== undefined) {
    jsonObj = add(6, req);
    if(!req.session.user) {
       message = 'You are not logged in';
    }
  } else if(req.body.search !== undefined) {
    jsonObj = search(6, req.body.search);
  }
  res.render("../views/methods", {message: message, pattern: req.body.search, comments: jsonObj,
  user: req.session.user});
})
router.delete("/views/methods", function(req, res) {
  jsonObj = delete_comment(6, req.body.value);
  res.render("../views/methods", {message: '', pattern: req.body.search, comments: jsonObj,
  user: req.session.user});
});
router.put("/views/methods", function(req, res) {
  jsonObj = pin_comment(6, req.body.value);
  res.render("../views/methods", {message: '', pattern: req.body.search, comments: jsonObj,
  user: req.session.user});
});

//
// Structs
//
router.post("/views/structs", function(req, res) {
  let message = '';
  if(req.body.value !== undefined) {
    jsonObj = add(7, req);
    if(!req.session.user) {
       message = 'You are not logged in';
    }
  } else if(req.body.search !== undefined) {
    jsonObj = search(7, req.body.search);
  }
  res.render("../views/structs", {message: message, pattern: req.body.search, comments: jsonObj,
  user: req.session.user});
})
router.delete("/views/structs", function(req, res) {
  jsonObj = delete_comment(7, req.body.value);
  res.render("../views/structs", {message: '', pattern: req.body.search, comments: jsonObj,
  user: req.session.user});
});
router.put("/views/structs", function(req, res) {
  jsonObj = pin_comment(7, req.body.value);
  res.render("../views/structs", {message: '', pattern: req.body.search, comments: jsonObj,
  user: req.session.user});
});



module.exports = router;

function pin_comment(index, count) {
  let data = fs.readFileSync('comments.json');
  let jsonObj = JSON.parse(data);
  if(jsonObj.comments[index][count].info.isPinned) {
    jsonObj.comments[index][count].info.isPinned = false;
    count_comment(4, jsonObj.comments[index][count].info.user)
  } else {
    jsonObj.comments[index][count].info.isPinned = true;
    count_comment(3, jsonObj.comments[index][count].info.user)
  }
  fs.writeFile('comments.json', JSON.stringify(jsonObj), function() {
    console.log('comment pinned');
  });
  return jsonObj.comments[index];
}

function delete_comment(index, count) {
  let data = fs.readFileSync('comments.json');
  let jsonObj = JSON.parse(data);
  if(jsonObj.comments[index][count].info.isPinned) {
    count_comment(5, jsonObj.comments[index][count].info.user);
  } else {
    count_comment(2, jsonObj.comments[index][count].info.user);
  }
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
      "text": req.body.value,
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
    count_comment(1, req.session.user.user);
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
function count_comment(which, user) {
  let data = fs.readFileSync('db.json');
  let jsonObj = JSON.parse(data);
  let found = false;
  for (var i = 0; i < jsonObj.users.length && !found; i++) {
    if(jsonObj.users[i].user === user) {
      found = true;
      switch(which) {
        case 1:
          jsonObj.users[i].comments.submited++;
          break;
        case 2:
          //console.log(jsonObj.users[i].comments.deleted)
          jsonObj.users[i].comments.deleted++;
          //console.log(jsonObj.users[i].comments.deleted)
          //console.log(jsonObj.users[i].user+' '+user);
          break;
        case 3:
          jsonObj.users[i].comments.pinned++;
          break;
        case 4:
          jsonObj.users[i].comments.pinned--;
          break;
        case 5:
          jsonObj.users[i].comments.deleted++;
          jsonObj.users[i].comments.pinned--;
          break;
      }
    }
  }
  fs.writeFile('db.json', JSON.stringify(jsonObj), function() {
    console.log('comment count initializied');
  });
}

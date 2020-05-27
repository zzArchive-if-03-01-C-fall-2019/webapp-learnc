const express = require('express');

const router = express();

router.post("/views/structure", function(req, res) {
  res.render("../views/structure", {message: 'Not implemented'});
})


module.exports = router;

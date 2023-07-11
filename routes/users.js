var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    //get this data from DB
    var users = [{
        id: 0,
        name: "Sharad",
        lastname: "Biradar"
    },{
        id: 1,
        name: "Jagdish",
        lastname: "Biradar"
    }];
  res.render('users', { users: users });
});

module.exports = router;

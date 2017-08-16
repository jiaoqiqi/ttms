let express = require('express');
let router = express.Router();

let db = require('../connection');

let userSQL = require('../userSql');

router.get('/userLogin',function (req,res) {
    var  name=req.query.userName;
    var password=req.query.userPassword;

    db.query(userSQL.logSql,[name,password],function (err,result) {
        if (err) return   err;

        res.send(result);
    })
})

module.exports = router;

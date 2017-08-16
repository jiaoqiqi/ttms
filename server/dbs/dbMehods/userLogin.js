let express = require('express');
let router = express.Router();

let db = require('../connection');

let userSQL = require('../userSql');

// router.get('/userLogin', (req, res) => {
//     const findName = db.query(userSQL.loginName, req.body.userName, function (err) {
//         if (err) return err;
//         return req.body.userName;
//         // res.send(result);
//     });
//
//     const findPassword = db.query(userSQL.loginPass,[req.body.userPassword] , function (err) {
//         if(err) return err;
//         return req.body.userPassword;
//         // res.send(result);
//     })
//
//     db.query(userSQL.login,[findName,findPassword] , function(err,result){
//         if(err) return err;
//         res.send(result);
//     })



// });

router.get('/userLogin',function (req,res) {
    var  name=req.query.userName;
    var password=req.query.userPassword;

    db.query(userSQL.logSql,[name,password],function (err,result) {
        if (err) return   err;
        res.send(result);
    })
})


module.exports = router;

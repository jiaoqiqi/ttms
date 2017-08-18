const express = require('express');

const router = express.Router();

let db = require('../dbs/connection')
let userSQL = require('../dbs/userSql')

router.post("/registerInfo", (req, res) => {
    const name = req.body.userName;
    const password = req.body.userPassword;

    db.query(userSQL.registerSql, [name, password,name], (err,result) => {
        console.log(result);
        if(err){
            return err;
        }
        if(result.message != "&Records: 1  Duplicates: 0  Warnings: 0"){
            return ;
        }
        res.json({isSuccess: true});
    })

});

module.exports = router;


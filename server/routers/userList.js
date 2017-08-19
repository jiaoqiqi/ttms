const express = require('express');

const router = express.Router();

let db = require('../dbs/connection')
let userSQL = require('../dbs/userSql')


router.get('/userList', (req, res) => {
    db.query(userSQL.queryAll, (err,result) =>{
        console.log(result);
        if(err){
            return err;
        }
        res.send(result);
    });

});

module.exports = router;



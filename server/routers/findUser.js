const express = require('express');

const router = express.Router();

let db = require('../dbs/connection')
let userSQL = require('../dbs/userSql')

router.post("/finduser", (req, res) => {
    const name = req.body.name;

    db.query(userSQL.findUser, ["%"+name+"%"], (err,result) => {
        console.log(result)
        if(err){
            return err;
        }
        res.send({isSuccess: true,result:result});

    })

});

module.exports = router;


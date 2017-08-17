
const express = require('express');

const router = express.Router();

let db = require('../dbs/connection')
let userSQL = require('../dbs/userSql')


router.post("/userInfo", (req, res) => {
    console.log(req.body);
    var name = req.body.userName;
    var password = req.body.userPassword;

    db.query(userSQL.logSql, [name, password], function (err, result) {
        console.log(result)
        if (err) return err;
        else {
            if (result.length == 0) {
                res.json({isSuccess: false});
            }
            else if (result[0].name === name && result[0].password === password) {
                res.json({isSuccess: true});

            }

        }
    })

});

module.exports = router;

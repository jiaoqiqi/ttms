const express = require('express');

const router = express.Router();

let db = require('../dbs/connection')
let userSQL = require('../dbs/userSql')

router.post("/findmovie", (req, res) => {
    const movieName = req.body.name;

    db.query(userSQL.findMovie, ["%" + movieName + "%"], (err, result) => {
        console.log(result)
        if (err) {
            return err;
        }
        res.send({isSuccess: true, result: result});

    })

});

module.exports = router;


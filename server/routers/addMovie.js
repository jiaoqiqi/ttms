const express = require('express');

const router = express.Router();

let db = require('../dbs/connection')
let userSQL = require('../dbs/userSql')

router.post("/addmovie", (req, res) => {
    // console.log(req.body);
    // console.log(res.body.isSuccess);
    db.query(userSQL.addMovie, [req.body.movieName, req.body.movieLead,
        req.body.movieAct, req.body.movieDuration, req.body.movieInfo], (err, result) => {
        if (err) {
            return err;
        }
        res.json({isSuccess: true});
    })

});

module.exports = router;
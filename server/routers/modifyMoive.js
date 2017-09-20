const express = require('express');

const router = express.Router();

let db = require('../dbs/connection')
let userSQL = require('../dbs/userSql')

router.post('/updateMovie', (req, res) => {
    console.log(req.body.movieId)
    db.query(userSQL.modifyMovie, [req.body.movieName, req.body.movieLead,
        req.body.movieAct,req.body.movieDuration,
        req.body.movieInfo,req.body.movieId], function (err, result) {

        if (err) return res.status(500).json({tip: err.message});

        res.json({tip: "success"});
    });
});

module.exports = router;
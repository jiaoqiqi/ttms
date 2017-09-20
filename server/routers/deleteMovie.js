const express = require('express');

const router = express.Router();

let db = require('../dbs/connection')
let userSQL = require('../dbs/userSql')


router.post('/delMovie', (req, res) => {
    console.log(req.body)
    db.query(userSQL.deleteMovie, req.body.movieId, function (err) {
        if (err) return res.status(500).json({tip: err.message});

        res.json({tip: "success"});
    });
});

module.exports = router;
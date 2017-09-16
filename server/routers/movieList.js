const express = require('express');

const router = express.Router();

let db = require('../dbs/connection')
let userSQL = require('../dbs/userSql')


router.get('/movieList', (req, res) => {
    db.query(userSQL.selectMovies, (err, result) => {
        if (err) {
            return err;
        }
        res.send(result);
    });

});

module.exports = router;



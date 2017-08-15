let express = require('express');
let router = express.Router();

let db = require('../connection');

let userSQL = require('../userSql');

router.get('/userSelect', (req, res) => {
    db.query(userSQL.queryAll,  function (err, result) {
        if (err) return err;

        res.send(result);
    });
});


module.exports = router;

let express = require('express');
let router = express.Router();

let db = require('../connection');

let userSQL = require('../userSql');

router.delete('/userDelete', (req, res) => {
    db.query(userSQL.delete, req.body.id, function (err) {
        if (err) return err;

        res.send('User deleted to database ');
    });
});


module.exports = router;

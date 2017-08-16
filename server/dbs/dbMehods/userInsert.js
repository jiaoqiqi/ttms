let express = require('express');
let router = express.Router();

let db = require('../connection');

let userSQL = require('../userSql');

router.post('/userInsert', (req, res) => {
    console.log(req.body);
    db.query(userSQL.insert, [req.body.name, req.body.password, req.body.role,
         req.body.note], function (err, result) {
        if (err) return err;

        res.send(result);
    });
});


module.exports = router;

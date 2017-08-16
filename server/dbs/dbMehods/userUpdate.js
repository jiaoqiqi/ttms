let express = require('express');
let router = express.Router();

let db = require('../connection');

let userSQL = require('../userSql');

router.post('/userUpdate', (req, res) => {
    db.query(userSQL.update, [req.body.name, req.body.password, req.body.role,
        req.body.note,req.body.id], function (err, result) {
        if (err) return err;

        res.send(result);
    });
});


module.exports = router;

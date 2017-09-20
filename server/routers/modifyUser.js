const express = require('express');

const router = express.Router();

let db = require('../dbs/connection')
let userSQL = require('../dbs/userSql')

router.post('/modifyUser', (req, res) => {
    db.query(userSQL.update, [req.body.name, req.body.role, req.body.id], function (err, result) {

        if (err) return res.status(500).json({tip: err.message});

        res.json({tip: "success"});
    });
});

module.exports = router;
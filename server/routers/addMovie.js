const express = require('express');

const router = express.Router();

let db = require('../dbs/connection')
let userSQL = require('../dbs/userSql')

router.post("/addInfo", (req, res) => {
    console.log(req.body)

    db.query(userSQL.addMovie, [req.body.movieName, req.body.movieLead,
        req.body.movieAct,req.body.movieDuration,req.body.movieInfo], (err,result) => {
        if(err){
            return err;
        }
        // if(result.message != "&Records: 1  Duplicates: 0  Warnings: 0"){
        //     return ;
        // }
        res.json({isSuccess: true});
    })

});

module.exports = router;
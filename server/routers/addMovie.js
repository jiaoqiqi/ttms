const express = require('express');

const router = express.Router();

let db = require('../dbs/connection')
let userSQL = require('../dbs/userSql')

router.post("/addmovie", (req, res) => {
    db.query(userSQL.addMovie,[req.body,req.body.movieName] , (err,result) => {
        if(err){
            return ;
        }
        res.send({isSuccess:true})
    })

});

module.exports = router;
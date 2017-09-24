const express = require('express');

const router = express.Router();

let db = require('../dbs/connection')
let userSQL = require('../dbs/userSql')

router.post("/addmovie", (req, res) => {
    // console.log(req.body);
    //数据库操作语法糖，直接匹配相应字段
    db.query(userSQL.addMovie,req.body , (err,result) => {
        if(err){
            return ;
        }
        res.send({isSuccess:true})
    })

});

module.exports = router;
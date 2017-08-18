const express = require('express');

const router = express.Router();

router.post("/registerInfo", (req, res) => {
    console.log(req.body)
    res.json({isSuccess:true});
});

module.exports = router;
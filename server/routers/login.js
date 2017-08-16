const express = require('express');

const router = express.Router();

router.post("/userInfo", (req, res) => {
    console.log(req.body);
    res.json({isSuccess: true});

});

module.exports = router;

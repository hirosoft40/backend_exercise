const express = require('express');
var router = express.Router();

router.get('/project',(req, res)=>{
    res.send('project page')
});

module.exports = router;
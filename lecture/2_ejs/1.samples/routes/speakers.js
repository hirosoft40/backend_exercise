var express = require('express');
var router = express.Router();

router.get('/speakers',(req, res)=>{
    res.render('index',{
        pageTitle: "Speakers",
        pageId:"coding",
        artwork:""
    })
});
module.exports = router;
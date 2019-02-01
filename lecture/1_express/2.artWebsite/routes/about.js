const express = require('express');

const router = express.Router();


//fname and value is key pair
router.get('/about',(req, res)=>{
    var fname = req.params('fname');
    var lname = req.params('lname');
    res.send(`<h1>${fname} ${lname}</h1>`)
});


module.exports = router;
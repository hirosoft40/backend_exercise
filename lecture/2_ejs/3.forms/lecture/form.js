const express = require('express');
const router = express.Router();
const body_parser = require('body-parser')


router.get('/',(req, res)=>{

    res.render('forms')
});

router.use(body_parser.urlencoded({extended:false}));


router.post('/forms', (req, res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var moNo = req.body.moNo;

    res.send(`My information is Name:${name} email is:${email} mobileNo;${moNo}`)
})

module.exports = router;
const express = require('express');
const router = express.Router();


router.get('/', (req, res)=>{
    // res.send('Hello World!')
    res.send("<img src ='/imgs/speakers/")
});
module.exports = router;
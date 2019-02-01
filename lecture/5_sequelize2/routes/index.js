const express = require('express');
const router = express.Router();
const db = require('../models/')

router.get('/', (req, res)=>{
    db.types.findAll()
    .then(results=>{
        res.render('index',{
            data:results
        })
    })

    // res.send('hello world')
})

module.exports = router;
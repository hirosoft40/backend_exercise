const express = require('express');
const router = express.Router();
const db = require('../models/database.js');
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended:false}));

router.get('/dishes)',(req, res)=>{
    db.any('SELECT * FROM dishes')
    .then((data)=>{
        res.render('dishes', {dishes:data})
    })
    res.render('dishes');
});

router.get('/newdish',(req,res)=>{
    res.render('/newdish');
})
router.post('/dishes',(req, res)=>{
    let title = req.body.title, 
        description = req.body.description,
        price = req.body.price,
        course = req.body.course,
        imageURL = req.body.imageURL;

        //senitize input
        db.none('INSERT INTO dishes (title, description, course, imageurl) VALUES($1, $2, $3, $4, $5)',
        [title, description, price, course, imageURL])
        .then(data=>{
            db.any('SELECT * FROM dishes')
            .then(results =>{
                res.render('dishes', {
                    dishes: results
                })
            })
        })
    })



module.exports = router;
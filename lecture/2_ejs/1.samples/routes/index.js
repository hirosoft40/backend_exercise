var express = require('express');
var router = express.Router();

var data = require('../data/data.json')

router.get('/', (req, res)=>{

    var speakers = data.speakers;
    var pagePhotos = [];

    speakers.forEach(function(item){
        pagePhotos = pagePhotos.concat(item.artwork);
    });

    res.render('index',{
        pageTitle: "Digital Crafts",
        pageId:"coding",
        artwork: pagePhotos
    });
});

module.exports = router;

//=== demo to show concat 
// var a1 = [1,2,3,4,5];
// var a2 = [3,4,5,2,3];
// var a3 = a1.concat(a2)
// if (a1.length > 0){
//     for (var i=0; i<a1.length;i++){
//         console.log(a1[i]);
//     }
// }
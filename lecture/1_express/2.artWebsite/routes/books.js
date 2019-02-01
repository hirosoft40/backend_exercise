const express = require('express');
const router = express.Router();


// when you put keys in url(:bookID) then, no need to put key value pair.
router.get('/books/:bookID', (req, res)=>{
    var bookID = req.params.bookID;
    res.send(`My bookID is ${bookID}`)
})


router.get('/books/:fname/:lname', (req, res)=>{
    var fname = req.params.fname;
    var lname = req.params.lname;
    res.send(`My Name is ${fname} ${lname}`)
})

module.exports = router;
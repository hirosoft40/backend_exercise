const express = require('express');
const router = express.Router();

var data = require('../data/data.json')

router.get('/speakers',(req, res)=>{
    var html = '';
    var count = 0;
    data.speakers.forEach((item)=>{
        html += `
        <li>
            <h2><a href='/speakers/${count}'>${item.name}</a></h2>
            <img src = '${item.shortname}_tn.jpg'>
            <p>${item.summary}</p>
        </li>
        `
        count ++;
    })
    res.send(`<ul>${html}</ul>`)
})

router.get('/speakers/:speakerID', (req, res)=>{
    let html;
    let speaker = data.speakers[req.params.speakerID];

    
    res.send(`
    <h2>${speaker.name}</h2>

    <img src = '/imgs/speakers/${speaker.shortname}_tn.jpg'>
    <p>${speaker.summary}</p>
    `)
})
module.exports = router;
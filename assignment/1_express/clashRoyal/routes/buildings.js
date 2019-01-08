const express = require('express');
const router = express.Router();

var data = require('../data/clashRoyaleData.json');

//Buildings Cards
router.get('/buildings/?/?',(req, res)=>{
    let html = '';
    var count = 0;
    data.cards.forEach(ele => {
        if(ele.Type === 'Buildings'){
            // make clickable with name and #
        html += `
        <div style="margin:10px;">
            <img src = '/imgs/${ele.Artwork}'>
            <h3><a href='/cards/${count}'>${ele.Name.toUpperCase()}</a></h3>
            <p>Type: <a href='/buildings/'>${ele.Type}</a></p>
            <p>Elixir Cost: ${ele.ElixirCost}</p>
            <p>Rarity: ${ele.Rarity}</p>
            <p>Arena: ${ele.Arena}</p>
            <p style="width:500px">${ele.Summary}</p>
            <hr>
        </div>
        `
        }
        count++;
    });
    res.send(`<h1 style="text-align:center; margin:20px;">BUILDINGS CARDS</h1><ul style='list-style-type: none;'>${html}</ul>`)
});

module.exports = router;
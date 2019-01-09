const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{
    let data = req.app.get('appData');
    let uniqueArena =[], uniqueRarity =[], uniqueType=[];

    uniqueType = [...new Set(data.cards.map(item => item.Type))];
    uniqueRarity = [...new Set(data.cards.map(item => item.Rarity))];
    uniqueArena = [...new Set(data.cards.map(item => item.Arena.trim()))];

    res.render('index',{
        pageTitle:'Clash Royale Community',
        Type: uniqueType,
        Rarity: uniqueRarity,
        Arena: uniqueArena,
        pageID:'home'
    });
});

module.exports = router;

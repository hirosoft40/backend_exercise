const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'))
app.use('../routes/dishes')
app.use('/', (req, res)=>{
    
})


app.listen(3100, ()=>{
    console.log('listening on port 3100')
})
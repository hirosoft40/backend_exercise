var express = require('express');
var app = express();

var http =  require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));


app.get('/',(req, res)=>{
    res.sendFile('index.html')
})



http.listen(3000,()=>{
    console.log('Server running on port 3000')
})
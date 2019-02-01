const express = require('express');
const app = express();

app.use(express.static('public'));

app.use(require('./routes/index'));
app.use(require('./routes/about'));
app.use(require('./routes/books'));
app.use(require('./routes/project'));
app.use(require('./routes/speakers'))


app.listen(3000,()=>{
    console.log('listening on port 3000')
});
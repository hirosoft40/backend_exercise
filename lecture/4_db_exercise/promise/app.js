const express = require('express');
const app = express();

// === template to use pg-promise
const promise = require('bluebird');
const initOptions = {
    promiseLib:promise
};
//check database and grab info
const config = {
    host: 'localhost'
    , port: 5432
    , database: 'classPostgres'
    , user: 'postgres'
};
const pgp = require('pg-promise')(initOptions);
const db = pgp(config);

//---end ------
//=== start of query practice

//-------SELECT
// db.query('SELECT * from people')
// .then(results =>{
//     console.log(results);
//     results.forEach(r=>{
//         console.log(`${r.name} ${r.age} ${r.id}`)

//     })
// })
// db.one('SELECT * FROM people WHERE id=3')
// .then(results => {
//     console.log(`There name is ${results.name}`)
// })

db.result("INSERT INTO people VALUES(DEFAULT, 'Raul', 21)")
.then(results => {
    console.log(results)
})

app.listen('3100',()=>{
    console.log('listening on port 3100')
})
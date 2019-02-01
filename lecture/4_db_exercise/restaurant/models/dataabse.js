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

module.exports = router;
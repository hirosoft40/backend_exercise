--------
sessions
----------
//cookie
browser side. retain information
who you are, amazon card info, expiration date can be set by developer
local storage => never expired

//session
limited time. 
server cookie 
inside the header : req, res, cookie

// what do we need?

document.cookie= '';

// key value pair
localStorage.setItem('color','green')

// differences between session and cookie
the amount that you can store is different
I can put expiration data {maxAge}
local storage stays until I clear the memory.

//all data are stored in
req.session

// below will create session table
npm install connect-pg-simple
psql mydatabase < node_modules/connect-pg-simple/table.sql

// when using sequelize, we need to create own table
npm install sequelize-session-store
CREATE TABLE express_session (
    sid VARCHAR NOT NULL,
    sess TEXT NOT NULL,
    expire TIMESTAMP(6) NOT NULL,
    PRIMARY KEY (sid)
)
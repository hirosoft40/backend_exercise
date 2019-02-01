// create and store password

// 1. take the user password
const pbkdf2 = require('pbkdf2');
const crypto = require('crypto');

// 2. generate a salt(string of random char)
const salt = crypto.randomBytes(20).toString('hex')
console.log(salt);

const password = 'some-password';

// 3. combine the salt and the user generated password
// sha256 is encrypto argorythm
const key = pbkdf2.pbkdf2Sync(password, salt, 3600, '256','sha256')
console.log(key)

// 4. Hash the combined string with same crypto algorithm used at the time of
const hash = key.toString('hex');
console.log(hash);

// store in database
const stored_pass = `pbkbf2_sha256$3600$${salt}$${hash}`

//checking password
//retrieving password from database
const pass_parts = stored_pass.split('$');

var enteredPassword = 'some-password';

const key2 = pbkdf2.pbkdf2Sync(
    enteredPassword,
    pass_parts[2],
    parseInt(pass_parts[1]),
    256,
    'sha256'
);
console.log(key2)

const hash2 = key2.toString('hex');
console.log(hash2)

// compare original has and has2
if(hash === pass_parts[3]){
    console.log('password matched')
} else{
    console.log('Try again.')
}

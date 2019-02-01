salt --> key

var derivedKey = pbkdf2.pbkdf2Sync('password', 'salt', 1, 32, 'sha512')
32 -> shows how many times we want to encrypt the password. how secure you want to make it


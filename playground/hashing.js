const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

var password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

var hashedPassword = '$2a$10$jgS.j72fXjA6MfsQ6in79eBU/wTQJRbsArMiZ5W9YNI.UvwLm9QGC';

bcrypt.compare(password,hashedPassword, (err,res) => {
  console.log(res);
})

// var data = {
//   id:10
// };
//
// var token = jwt.sign(data, '123abc');
// console.log(token);
//
// var decoded = jwt.verify(token,'123abc');
// console.log('decoded',decoded);

// var message = 'i am user number 3';
// var hash = SHA256(message).toString();
//
// console.log(`Message : ${message}`);
// console.log(`Hash ${hash}`);

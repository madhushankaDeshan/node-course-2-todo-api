const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// 
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findByIdAndRemove('5ac45a22018b3b3ad1a10952').then((todo) => {
  console.log(todo);
});

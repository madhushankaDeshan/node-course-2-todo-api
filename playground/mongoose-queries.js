const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
//
// var id = '5ac34011828c9300cc9e0a56';

// Todo.find({
//   _id : id
// }).then((todos) => {
//   console.log('todos',todos);
// });
//
//
// Todo.findOne({
//   _id : id
// }).then((todo) => {
//   console.log('todo',todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('ID not found');
//   }
//   console.log('todo find by id',todo);
// }).catch((e) => console.log(e));

User.findById('5abdc4a4e7b0301dfce41a00').then((user) => {
  if(!user){
    return console.log('Unable to find user');
  }
  console.log(JSON.stringify(user, undefined,2));
},(e) => {
  console.log(e);
})

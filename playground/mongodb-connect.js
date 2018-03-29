// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err, client) => {
  if(err){
    return console.log('Unable to connect MOngoDB server');
  }
  console.log('connected to MongoDB server');
  const db =client.db('Todos');

  // db.collection('Todos').insertOne({
  //   text:'Something to do',
  //   completed:false
  // },(err , result) =>{
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  // //  console.log(result);
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });
  // db.collection('USers').insertOne({
  //   name:'madhushanka',
  //   age:22,
  //   location:'Ahangama'
  // },(err , result) =>{
  //   if(err){
  //     return console.log('Unable to insert User', err);
  //   }
  // //  console.log(result);
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  client.close();
});

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err, client) => {
  if(err){
    return console.log('Unable to connect MOngoDB server');
  }
  console.log('connected to MongoDB server');
 const db =client.db('Todos');

  //
  // db.collection('Todos').findOneAndUpdate({
  //   _id:new ObjectID("5abc8ad40830d02fb4479689")
  // },{
  //   $set:{
  //     completed: true
  //   }
  // },{
  //   returnOriginal:false
  // }).then((results) => {
  //   console.log(results);
  // })
  db.collection('USers').findOneAndUpdate({
    _id:new ObjectID("5abc98781b50f005e081c8f8")
  },{
    $set:{
      name: 'madhushanka'
    },
    $inc:{
      age:1
    }
  },{
    returnOriginal:false
  }).then((results) => {
    console.log(results);
  })

  // client.close();
});

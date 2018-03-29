// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err, client) => {
  if(err){
    return console.log('Unable to connect MOngoDB server');
  }
  console.log('connected to MongoDB server');
 const db =client.db('Todos');
  // db.collection('Todos').find({
  //   _id: new ObjectID('5abca15a68f2fc8914cdfc13')
  //  }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err) => {
  //   console.log('Unable to fletch Todos',err);
  // });
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  //   //console.log(JSON.stringify(docs,undefined,2));
  // },(err) => {
  //   console.log('Unable to fletch Todos',err);
  // });

  db.collection('USers').findOneAndDelete({
    _id:new ObjectID("5abc988375704515c45a2834")
  }).then((results) => {
    console.log(JSON.stringify(results,undefined,2))
  })


  // client.close();
});

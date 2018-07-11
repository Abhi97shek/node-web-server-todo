const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>
{
  var db=client.db('TodoApp');
  if(err)
  {
  return console.log("Unable to connect with the DataBase");
  }
  console.log("Database connection SuccessFull");

  // db.collection('Todos').deleteMany({task:"Lunch Time"}).then((result)=>{
  //
  //   console.log(result);
  // },(err)=>{
  //
  //   console.log("unable to delete the data");
  // })

// db.collection('Todos').deleteOne({completed:true}).then((result)=>
// {
//   console.log(result);
// },(err)=>{
//
//   console.log(err);
// });

// db.collection('Todos').findOneAndDelete({completed:false}).then((docs)=>{
//
//       console.log(JSON.stringify(docs,undefined,2));
//
// },(err)=>{
//   console.log("unalbe to connect with the database"+err);
//
// });

  db.collection('Users').deleteOne({_id:new ObjectID("5b44baaedd99555c4811aaa5")}).then((result)=>{
    console.log(result);
  },(err)=>{
    console.log(err);
  });



});

const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>
{
  var db=client.db('TodoApp');
  if(err)
  {
    return console.log("Unable to connect with the server");
  }
  console.log("Connect to the DataBase SuccessFully");

  // db.collection('Todos').findOneAndUpdate({
  //   _id:new ObjectID("5b45caf46e3a754b8a0d28c8")
  // },{
  //   $set:
  //   {
  //     completed:true
  //   }
  // },{
  //   returnOriginal:false
  // }).then((result)=>{
  //   console.log(result);
  // },(err)=>{
  //   console.log("Ubale to update the Data"+err);
  // });


db.collection('Users').findOneAndUpdate({
  _id:new ObjectID("5b4585d2b4c7902a5c759da4")
},{
  $set:{
    name:"vishal"
  },
  $inc:{
    age:1
  }
},{
  returnOriginal:false
}).then((result)=>{
  console.log(result);
},(err)=>{

  console.log(err);
});



});

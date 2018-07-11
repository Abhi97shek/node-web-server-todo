const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>
{
  var db = client.db('TodoApp');
  if(err)
  {
  return  console.log("Unable to connect with the Database");
  }
  console.log("Connection With Database is Successfull");


  db.collection('Todos').find({_id:new ObjectID('5b4594bc6e3a754b8a0d11ad')}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{

    console.log("Unable to fetch the data from the Database");
  });



  // db.collection('Users').find({name:"Abhishek"}).count().then((count)=>{
  //     console.log(`Total Todos:${count}`)
  //  console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log("Unable to fetch the data from the database"+err);
  // });

})

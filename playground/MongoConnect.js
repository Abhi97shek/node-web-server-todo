const {MongoClient,ObjectID}=require('mongodb');



MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>
{
  var db=client.db('TodoApp');
  if(err)
  {
    return console.log("Unable to connect with the server");
  }
  console.log("Connect to the DataBase SuccessFully");

  // db.collection('Todos').insertOne({
  //   text:"Something to do",
  //   completed:false
  // },(err,result)=>{
  //   if(err)
  //   {
  //    return console.log("Unable to insert the data into the DataBase"+err)
  //   }
  //     console.log(JSON.stringify(result.ops,undefined,2));
  // });

  db.collection('Users').insertOne({
    name:"Abhishek",
    age:20,
    location:"Pathankot"

  },(err,result)=>{
    if(err)
    {
      return console.log("Unalbe to insert the Data into the User DataBase");
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
  });

  client.close();
})


const express = require("express");
const server = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const objectID = require('mongodb').ObjectID;
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:true}));
server.use(cors());


MongoClient.connect("mongodb://localhost:27017", function(err, client){
  if(err){
    console.log(err)
    return;
  }

  const db = client.db('data');

  server.get("/api/words", function(req, res){
    console.log('connection made');
    db.collection("words").find().toArray(function(err, result){
      res.status(200);
      res.json(result);
    });
  })

  server.get("/api/maths", function(req, res){
    console.log('connection made');
    db.collection("maths").find().toArray(function(err, result){
      res.status(200);
      res.json(result);
    });
  })

  server.get("/api/flags", function(req, res){
    console.log('connection made');
    db.collection("flags").find().toArray(function(err, result){
      res.status(200);
      res.json(result);
    });
  })


  server.listen(5000, function(){
    console.log("Typit Backend running on port: " + this.address().port);
  });

});

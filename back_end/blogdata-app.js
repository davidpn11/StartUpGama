var express = require('express');
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient,
    assert = require('assert');
var myParser = require("body-parser");
var app = express();

app.use(myParser.json());


MongoClient.connect('mongodb://localhost:27017/blog-data', function(err, db) {

    assert.equal(err, null);
    console.log("Successfully connected to MongoDB.");
    

  app.put("/leed", function(request, response) {
       
       try {
      
       var json = request.body;
       console.log(JSON.stringify(json));        

       if(json.nome_completo || json.email){
            db.collection("leeds").insertOne(json, function(err, res) {
                console.log("Inserted document with _id: " + res.insertedId + "\n");
                json._id = res.insertedId;
            });
       }else{
        throw new Exception;
       }

        response.send(json);
       } catch (e) {
            console.log("not JSON");
            response.send({"status":"error"}); 
        }

    });

    app.get("/leeds",function(req,res){

        db.collection('leeds').find().toArray(function(err, docs) {

             assert.equal(err, null);
	     console.log("GET REQUEST");                              
             res.send(docs);            
        });
    });
    app.listen(3000,function () {
        console.log("Escutando na porta 3000...");
    });

});



var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var reminderOne = require('./reminderOneModule');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

module.exports = function(app) { //the "app" is the expressObj from app.js
app.use(bodyParser.json());

  
MongoClient.connect(url,{useNewUrlParser: true, useUnifiedTopology: true}, function(err, db) {
  if(err) throw err;
  var dbo = db.db("mydb");
  /* //after db had been created, the following is how to add a collection
  dbo.createCollection('customers', function (err,res) {
    if (err) throw err;
    console.log("Collection Created");
    db.close();
  })
  */
 /* //how to insert data to mongodb
  var myobj = {name: "Company Inc.", address: "highway 37"};
  dbo.collection("customers").insertOne(myobj, function(err,res) {
    if (err) throw err;
    console.log("inserted object: " + myobj);
    db.close();
  })
  */
})

app.get('/login', (req, res) => {
    res.render('login');
  });
  var username = '';
  var password = '';
  app.post('/login', urlencodedParser, function(req, res) {
    console.log(req.body);
    MongoClient.connect(url,{useNewUrlParser: true, useUnifiedTopology: true}, function(err, db) {
      if(err) throw err;
      var dbo = db.db("mydb");
      dbo.collection("customers").findOne({}, function(err, result){
        if(err) throw err;
        console.log(result.name);
        console.log(result);
        username = result.name;
        password = result.address;
        db.close();
      })
    })
    var isVerified = false;
    if(req.body.details.username === username && req.body.details.password === password){
    isVerified = true;
        console.log(isVerified);
    }
    res.send({"result": isVerified});
  });
/*
app.post('/reminder_2', urlencodedParser, function(req, res) {
            console.log(data);
            console.log(req.body);
            data.array.push(req.body);
            res.render('reminder_2', {data});
            
        console.log(req.body);
        data.push(req.body);
        
        console.log(data + req.body);
        
    });
    */
}
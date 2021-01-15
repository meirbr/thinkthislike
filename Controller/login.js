var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var reminderOne = require('./reminderOneModule');

module.exports = function(app) { //the "app" is the expressObj from app.js
app.use(bodyParser.json());

app.get('/login', (req, res) => {
    res.render('login');
  });

  app.post('/login', urlencodedParser, function(req, res) {
    console.log(req.body);
    var x = 2;
    var isVerified = false;
    if(x===2){
    isVerified = true;
        console.log(isVerified);
    }
    res.write(200, {"result": isVerified});
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
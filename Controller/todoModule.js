var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

var data = {milk: "diary", array: [{item: 'get milk'},{item: 'wark, dog'},{item: 'another item'}]};


module.exports = function(app) { //the "app" is the expressObj from app.js
app.use(bodyParser.json());
    app.get('/reminder_2/:params', function(req, res){
        console.log(req.query.color1 === 'red');   // true
        console.log(req.query.color2 === 'ble'); //false
        var dataB = req.query.color1;
        var dataC = req.params.params;
        res.render('reminder_2', {data, dataB, dataC});
    });

    //app.post('/todo', urlencodedParser, function(req, res){
        app.post('/reminder_2', urlencodedParser, function(req, res) {
            console.log(data);
            console.log(req.body);
            data.array.push(req.body);
            res.render('reminder_2', {data});
            /*
        console.log(req.body);
        data.push(req.body);
        
        console.log(data + req.body);
        */
    });

    /*
    app.delete('/todo/:item', function(req, res){
        data = data.filter(function(todo){
            return todo.item.replace(/ /g, '-') !== req.params.item;
        });
        res.json(data);
    });
    */
}
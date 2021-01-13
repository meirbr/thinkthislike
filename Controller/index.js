var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

module.exports = function(app) { //the "app" is the expressObj from app.js
app.use(bodyParser.json());

app.get('*', (req, res) => {
 global.window = {document: {createElementNS: () => {return {}} }};
 global.document = new JSDOM().window.document;
  const window  = new JSDOM();
    const user = { name: 'World', age: 19 };
    res.render('index', { user });
    delete global.window;
  });


}
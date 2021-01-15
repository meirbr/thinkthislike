var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
var imgPrdcts = require('../views/imgPrsdcts.json');

module.exports = function(app) { //the "app" is the expressObj from app.js
app.use(bodyParser.json());

app.get('*', (req, res) => {

  async function createWindow(){
   global.window = {document: {createElementNS: () => {return {}} }};
 global.document = new JSDOM().window.document;
  const window  = new JSDOM();
  console.log("window created?" + window);
  while(typeof window === 'undefined'){
    setTimeout(createWindow, 50);
  }
  }

createWindow().then(() => {
    const user = { name: 'World', age: 19 };
    console.log("what's window?" + window);
    res.render('index', { imgPrdcts, user });
    delete global.window;
  });
});
}
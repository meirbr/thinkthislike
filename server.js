var todoModule = require('./Controller/todoModule.js');
var reminderOneModule = require('./Controller/ReminderOneModule.js');
var index = require('./Controller/index.js');
var login= require('./Controller/login.js');

const express = require('express');
var cors = require('cors');
const register = require('@react-ssr/express/register');
const app = express();
app.use(express.static('./public/assets'));
app.use(cors());


(async () => {
  await register(app);



reminderOneModule(app);
todoModule(app);
login(app);

//always put last
index(app);


  app.listen(3000, () => {
    console.log('> Ready on http://localhost:3000');
  });
})();

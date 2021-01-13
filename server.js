var todoModule = require('./Controller/todoModule.js');
var reminderOneModule = require('./Controller/ReminderOneModule.js');
var index = require('./Controller/index.js');

const express = require('express');
const register = require('@react-ssr/express/register');
const app = express();
app.use(express.static('./public/assets'));


(async () => {
  await register(app);

reminderOneModule(app);
todoModule(app);

await index(app);

  app.listen(3000, () => {
    console.log('> Ready on http://localhost:3000');
  });
})();

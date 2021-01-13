module.exports = function(app) { //the "app" is the expressObj from app.js
app.get('/reminder_1', (req, res) => {
    const user = { name: 'World', age: 19 };
    res.render('reminder_1', { user });
  });
}
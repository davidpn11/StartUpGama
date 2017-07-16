var express = require('express');
var path = require('path');
app = express();

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render("index");
});

app.listen(5000,function () {
    console.log("Escutando na porta 5000...");
});
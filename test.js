const express  = require('express');
const path     = require('path');
const app      = express();

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/download.txt', function(req, res) {
  console.log('!!')
  res.send('hi');
  res.end();
});


app.listen(3000);



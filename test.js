const express  = require('express');
const app      = express();

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/download.txt', function(req, res) {
  console.log('!!')
  res.send('hi');
});


app.listen(3000);



var express    = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  console.log('aeee ' +  JSON.stringify(req.body))
  next()
})

app.get('/api/v1/actuations/test', function (req, res) {
    console.log('curl');
    res.send({message: 'curl command'})
});

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});
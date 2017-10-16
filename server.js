const express = require('express');
const formidable = require('express-formidable');

var app = express();


//app.use(express.static('public'));
app.use(formidable());

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.post("/",function(req,res){
  var sizeres = {name:req.files.uploadfile.name,size:req.files.uploadfile.size};
  res.send(sizeres);
})


var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

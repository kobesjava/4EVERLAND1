//创建HTTP服务器

var express = require('express');
var app = express();
app.use(express.static(__dirname+'/public/'));
//app.use(express.static(__dirname+'/node_modules/jquery/dist/'));
//app.use(express.static(__dirname+'/node_modules/web3/dist/'));
app.get('/', function(req, res){
   res.sendFile(__dirname+'/public/index.html');
});
app.get('/web3.min.js', function(req, res) {
    res.sendFile(__dirname + '/node_modules/web3/dist/web3.min.js');
});
app.get('/jquery.min.js', function(req, res) {
    res.sendFile(__dirname + '/node_modules/jquery/dist/jquery.min.js');
});
let port = 80;
app.listen(port, () => {
    console.log(`Server listening on http://localhost::${port}, Ctrl+C to stop`) 
});

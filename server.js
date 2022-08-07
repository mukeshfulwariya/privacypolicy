const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/privacypolicy'));
app.get('/*', function(req,res) {
res.sendFile('./privacypolicy/dist/index.html'); 
app.listen(process.env.PORT || 8080);

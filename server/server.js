/*

Simple node backend leveraging express as webserver
*/

var express = require("express");
var http = require('http');
var path = require('path');

const port = process.env.PORT || 3000;

var app = express();

//app.use(express.static(__dirname+'../public'));


app.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname, '../public/index.html'));
})

app.listen(port, ()=>{
	console.log(`Server is up on port ${port}`);
})
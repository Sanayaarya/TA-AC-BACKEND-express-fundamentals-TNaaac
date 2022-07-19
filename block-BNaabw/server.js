// requires

var express = require("express");
var logger = require("morgan");
var cookieParser = require("cookie-parser");



// instantiate the app

var app = express();

// middleware

app.use( express.json() );
app.use( express.urlencoded( { extended : false } ) );
app.use( logger('dev') );
app.use( express.static( __dirname + "/public" ) );
app.use( cookieParser() );

// routes
 

app.get('/',(req,res)=>{
    res.sendFile('index.html')
})

app.use('/',(req,res)=>{
  res.sendFile(__dirname + "/index.html");
})

app.get('/users',(req,res)=>{
    res.send('Users Pages')
})

app.get('/projects',(req,res)=>{
  res.send('Users Page')
})

// error handler middleware



// 404 error
app.use( ( req, res, next )=>{
    res.send("Page not found");
} );  


// custom client/server error

app.use((err,req,res,next)=>{
    res.send(err);
})

// listener

app.listen( 4000, ()=>{
    console.log("server listening on port 4000");
} );
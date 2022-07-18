var express = require('express');

var logger = require('morgan')

var cookieParser   = require('cookie-parser')

var app = express(); 

app.use(logger('dev'));

app.get('/',(req,res,)=>{
  res.sendFile(__dirname + "/index.html")
});

app.get('/users',(req,res)=>{
  res.send('users page')
})

app.get('/users/:username',(req,res)=>{
  var username = req.params.username;
  res.send(username)
})


app.listen(3000,()=>{
  console.log('server listening on port 3k')
}); 
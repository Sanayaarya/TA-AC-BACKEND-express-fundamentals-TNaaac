var express = require('express');

var logger = require('morgan')

var cookieParser   = require('cookie-parser')

var app = express(); 

app.use('/admin',(req,res,next)=>{
  next("unauthorized");
})

app.get('/',(req,res)=>{
  res.send('Welcome')
})

app.get('/user',(req,res)=>{
  res.send('Users page')
})

app.use((req,res,next)=>{
 res.send('Page not found')
})

app.use((err,req,res,next)=>{
  console.log(err)
  res.send(err);

})

app.listen(3000,()=>{
  console.log('server listening on port 3k')
});
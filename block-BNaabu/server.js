var express = require('express');
var logger = require('morgan')

var app = express(); 

// middleware

app.use(logger('dev'))

app.use('/admin',(req,res,next)=>{
  next('Unauthorized to access')
})

// routes

app.get('/',(req,res)=>{
  res.send("Welcome")
})

app.get('/about',(req,res)=>{
 res.send('About Page');
})

// 404 handler

app.use((req,res,next)=>{
  res.send('Page Not Found')
})

// custom error

 app.use(( err,req,res,next)=>{
   res.status(500).send(err);
 })

app.listen(4000,()=>{
  console.log('server listening on port 4k')
});




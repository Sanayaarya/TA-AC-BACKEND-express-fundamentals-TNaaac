var express = require('express');

var logger = require('morgan')

var cookieParser   = require('cookie-parser')

var app = express(); 

// app.use((req,res,next)=>{
//  console.log(req.method,req.url);
//  next();
// })



app.use(logger('dev')); 

app.use(cookieParser());



app.use(express.json());

app.use(express.urlencoded  ({extened:false}));

app.use(express.static(__dirname + 'public'));

app.use((req,res,next)=>{
  var count = req.cookies.count
  if(count){
   res.cookie("count",Number(count) + 1)
  }else{
    res.cookie("count",1)
  }
  console.log(req.cookies);
 
  next( )
})    

app.get('/',(req,res)=>{
  res.sendFile(__dirname + "/index.html")
})
app.listen(3000,()=>{
  console.log('server is listening on port 3k')
})
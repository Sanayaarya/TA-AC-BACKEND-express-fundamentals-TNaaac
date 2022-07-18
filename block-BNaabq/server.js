var express = require('express');

var logger = require('morgan')

var cookieParser   = require('cookie-parser')

var app = express(); 



app.use(express.json())
app.use(express.urlencoded  ({extened:false}));
app.use(express.static(__dirname + 'public'));

app.use(cookieParser());

app.use(logger('combined'))

app.use((req,res,next)=>{
  console.log(req.cookies);
})


app.use("/about",(req,res,next)=>{
  res.cookie('username','sanaya')
  res.send('About Page');  
})



app.get('/',(req,res)=>{
  res.sendFile(__dirname + "/index.html")
})





app.listen(4000,()=>{
  console.log('server is listening on port 4k')
});
var express = require('express');
var app = express();

app.use("/",(req,res,next)=>{
  console.log(req.method,req.url);
  next();
})

app.get('/',(res,res)=>{
  res.setEncoding('Welcome');
});

app.listen(3000,()=>{
  console.log('server is listening on port 3k')
});
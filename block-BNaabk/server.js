var express = require('express')

var app = express();

app.get('/',(req,res)=>{
  res.send('Welcome')
})

app.get('/about',(req,res)=>{
  res.send('About page')
})
app.listen(300,()=>{
  console.log('server is listening on port 3k')
})
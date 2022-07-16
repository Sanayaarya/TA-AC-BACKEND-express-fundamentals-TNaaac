// var express = require('express')

// var app = express();

// app.use((req,res,next) => {
//   console.log(req.method,req.url);
//   next();
// });

// app.use(express.json());

// app.use(express.urlencoded({extened: false}))

// app.use(express.static(__dirname + 'public'))

// app.get('/',(req,res) => {
//   res.sendFile(__dirname + "/html/index.html");
// });

// app.post('/json',(req,res) => {
//   console.log(req.body);
// })

// app.listen(3000,() => {
//   console.log('server listening on port 3k')
// }); 

var express = require('express');
var app = express();  

// middleware

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname + "/public"))

app.get('/json',(req,res)=>{
  res.sendFile(__dirname + "/index.html")
})

app.get('/', (req,res)=>{
  res.send('Welcome to Express')
})

app.post('/',(req,res)=>{
  console.log(req.body);
})

app.post('/',(req,res)=>{
  console.log(req.body)
}) 

app.listen(4000,()=>{
  console.log('server is listening on port 4k')
})
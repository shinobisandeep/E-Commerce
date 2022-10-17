
var express= require("express");
var userRoute= require("./app/routes/userRouters");
const mongoose=  require("mongoose");
var cors= require('cors');
var bodyparser= require('body-parser');
const username='sandeep';
const app= express();


mongoose.connect("mongodb+srv://sandeep:yEbr1WS6khh5d5Yj@cluster0.fbgglgi.mongodb.net/E-commerceDB?retryWrites=true&w=majority"
).then(()=>{
  console.log('Connected to database!');
})
.catch(()=>{
  console.log('Connection failed');
});

app.use((req,res,next)=>{
  console.log('First');
  next();
});


var corsOptions = {
  " origin": "*",
   "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
   "preflightContinue": false,
   "optionsSuccessStatus": 204,

 }
app.use(cors(corsOptions));
app.use((re,res,next)=>{
  res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();

});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use('/api/userData',userRoute);

module.exports=app;

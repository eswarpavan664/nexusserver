const express = require('express');
 
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require("cors");
 
const {mogoUrl} = require('./keys');
mongoose.connect(mogoUrl)
const mongoose = require('mongoose');
require('./models');
 
 
 
const authRoutes = require('./authRoutes');
 
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(authRoutes)
 


mongoose.connect(mogoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on('connected',()=>{
    console.log("database connected ...")
})


mongoose.connection.on('error',(err)=>{
    console.log("error occered... ",err);
})

 
 
const User = mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Section:{
        type:String,
        required:true
    },
    RegNo:{
        type:String,
        required:true
    },
    PhoneNumber:{
        type:String,
        required:true
    },
})


// Query for insert data into mongodb database
app.post('/',(req,res)=>{
    const user = new User({Name,Section,RegNo,PhoneNumber});
    user.save();
    console.log("done");
})


// Query for get single data from mongodb database
app.get('/',async(req,res)=>{
    const user = await User.findOne({PhoneNumber})
    console.log(user);
})

// Query for get all data from mongodb database
app.get('/',async(req,res)=>{
    
    User.find((err, docs) => {
        if (docs.length>0) {
            res.send(docs);
           
        } else {
          res.send({"Status":"PASS ERROR"});
        }
      });
    
})


// Query for get by condition all data from mongodb database
app.get('/',async(req,res)=>{
    
    User.find({Section:"CSE-C"},(err, docs) => {
        if (docs.length>0) {
            res.send(docs);
           
        } else {
          res.send({"Status":"PASS ERROR"});
        }
      });
    
})


// Query for delete data from mongodb database
app.get('/',async(req,res)=>{
    
   
  User.deleteOne({RegNo:"19A21A0534"}, function (err, results) {
    if(!err){
      console.log("Deleted successfully");
    }
  });

    
})

  
app.listen(process.env.PORT || 5000,()=>{
    console.log("server is runnung on port 5000");
    console.log("done");
})
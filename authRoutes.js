const express = require('express')
const mongoose = require('mongoose')
 
 
const router = express.Router();


const User = mongoose.model('User');
const AdminUser = mongoose.model('AdminUser');
const SubscriptionPack = mongoose.model('SubscriptionPack');
const Subscription = mongoose.model('Subscription');
const DistributorUser = mongoose.model('DistributorUser');
 
//IVfr2xUxcvEt4rdo


router.post('/UserSignup',async (req,res)=>{
   
  const {FirstName,LastName,Age,Gender,Address,Email,Password,Phone,WhatApp,Language,Country,State,District,Area,AccountType,StockPoints,Date,Time,UserId,Additional,Temp} = req.body;
  const user = await User.findOne({Phone,Password,Email})
  
  if(user){
    res.send({"Status":"Already"})
  }
  else{

       
          const user = new User({ FirstName,LastName,Age,Gender,Address,Email,Password,Phone,WhatApp,Language,Country,State,District,Area,AccountType,StockPoints,Date,Time,UserId,Additional,Temp});
          user.save();
          res.send({"Status":"Yes"});
         console.log("done");


  }
     
 
     
    
})

 
router.post('/UserSigin',async (req,res)=>{
   
  const {Email,Password} = req.body
  if(Email==="" || Password===""){
       res.send({"Status":"Wrong"})
  }
  const user = await User.findOne({Email})

  if(!user){
       res.send({"Status":"NO"})
  }
  else{
      User.find({Email:Email,Password:Password},(err, docs) => {
        if (docs.length>0) {
            res.send(docs);
           
        } else {
          res.send({"Status":"PASS ERROR"});
          console.log(err);
        }
      });
  }

    
})


 






 


 
 
 
 
 

// Admin siginup

router.post('/AdminSignup',async (req,res)=>{
   
  const {Email,Password,PhoneNumber,Name,Role,AdminId,Date,Time,Temp} = req.body;

  try{
    const user = new AdminUser({Email,Password,PhoneNumber,Name,Role,AdminId,Date,Time,Temp});
    await  user.save();
    
  }catch(err){
    return res.status(422).send(err.message)
  }
  
  
})



//Admin siginin
 
router.post('/AdminSigin',async (req,res)=>{
   
  const {Email,Password} = req.body
  if(Password==="" || Email===""){
       res.send({"Status":"Wrong"})
  }
  const user = await AdminUser.findOne({Email})

  if(!user){
       res.send({"Status":"NO"})
  }
  else{
      AdminUser.find({Password:Password,Email:Email},(err, docs) => {
        if (docs.length>0) {
            res.send(docs);
           
        } else {
          res.send({"Status":"PASS ERROR"});
        }
      });
  }

    
})


// Add SubscriptionPack


router.post('/AddSubscriptionPack',async (req,res)=>{
   
  const {Price,PackName,PackId,PackValidity,Date,Time,SubscriptionType,NoOfDevices,AdminId,Temp,Area} = req.body
  
  try{
    const user = new SubscriptionPack({Price,PackName,PackId,PackValidity,Date,Time,SubscriptionType,NoOfDevices,AdminId,Temp,Area});
    await  user.save();
    res.send({"Status":"Done"})
    
  }catch(err){
    res.send({"Status":"Error"})
  }
    
})



// Add Subscription


router.post('/AddSubscription',async (req,res)=>{
   
  const {Price,PackName,PackId,PackValidity,Date,Time,SubscriptionType,NoOfDevices,AdminId,UserName,UserId,Temp,SubscriptionStatus} = req.body
  
  try{
    const user = new Subscription({Price,PackName,PackId,PackValidity,Date,Time,SubscriptionType,NoOfDevices,AdminId,UserName,UserId,Temp,SubscriptionStatus});
    await  user.save();
    res.send({"Status":"Done"})
    
  }catch(err){
    res.send({"Status":"Error"})
  }
    
})




// Get Packs

 
router.get('/GetPacks', function(req, res, next) {
 
    const id =req.query.id;
    if(id===""){
      SubscriptionPack.find((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log('Failed to retrieve the Course List: ' + err);
        }
     });
 
    }
    else{
      SubscriptionPack.find({Area:id},(err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log('Failed to retrieve the Course List: ' + err);
        }
     });
 
    }
  

});


// update status of subscription pack
 
router.put('/UpdateSubscriptionStatus',async (req,res)=>{
  const {status,Id} = req.body
 
  Subscription.findByIdAndUpdate(Id,{SubscriptionStatus:status},{useFindAndModify:false})
  .then(data=>{
    res.send(data);
  })
  .catch(err=>{
    res.send("error....!");
  })
})

 

 

 

module.exports = router
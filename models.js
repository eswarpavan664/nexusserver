const mongoose = require('mongoose');
 


const User = mongoose.Schema({
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    Age:{
        type:String,
        required:true
    },
    Gender:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Phone:{
        type:String,
        required:true
    },
    WhatApp:{
        type:String,
        required:true
    },
    Language:{
        type:String,
        required:true
    },
    Country:{
        type:String,
        required:true
    },
    State:{
        type:String,
        required:true
    },
    District:{
        type:String,
        required:true
    },
    Area:{
        type:String,
        required:true
    },
    AccountType:{
        type:String,
        required:true
    },
    StockPoints:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        required:true
    },
    Time:{
        type:String,
        required:true
    },
    UserId:{
        type:String,
        required:true
    },
    Additional:{
        type:String,
        
    },
    Temp:{
        type:String,
        
    },
})



const SubscriptionPack =mongoose.Schema({
    Price:{
        type:String,
        required:true
    },
    PackName:{
        type:String,
        required:true
    },
    PackId:{
        type:String,
        required:true
    },
    PackValidity:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        required:true
    },
    Time:{
        type:String,
        required:true
    },
    SubscriptionType:{
        type:String,
        required:true
    },
    NoOfDevices:{
        type:String,
        required:true
    },
    AdminId:{
        type:String,
        required:true
    },
    Temp:{
        type:String,
        
    },
    Area:{
        type:String,
        required:true
    },

})

const AdminUser =mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    PhoneNumber:{
        type:String,
        required:true

    },
    AdminId:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        required:true
    },
    Time:{
        type:String,
        required:true
    },
    Role:{
        type:String,
        required:true
    },
    Temp:{
        type:String,
        
    },

})



const DistributorUser =mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Area:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        required:true
    },
    Time:{
        type:String,
        required:true
    },
    Temp:{
        type:String,
       
    },

})






const Subscription  =mongoose.Schema({
    Price:{
        type:String,
        required:true
    },
    PackName:{
        type:String,
        required:true
    },
    PackId:{
        type:String,
        required:true
    },
    PackValidity:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        required:true
    },
    Time:{
        type:String,
        required:true
    },
    SubscriptionType:{
        type:String,
        required:true
    },
    NoOfDevices:{
        type:String,
        required:true
    },
    AdminId:{
        type:String,
        required:true
    },
    UserName:{
        type:String,
         required:true
    },
    UserId:{
        type:String,
         required:true
    },
    SubscriptionStatus:{
        type:String,
         required:true
    },
    Temp:{
        type:String,
        
    },

})



 
mongoose.model('User',User);
mongoose.model('SubscriptionPack',SubscriptionPack);
mongoose.model('Subscription',Subscription);
mongoose.model('AdminUser',AdminUser);
mongoose.model('DistributorUser',DistributorUser);
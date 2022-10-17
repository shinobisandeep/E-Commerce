const mongoose = require('mongoose');
const userSchema= mongoose.Schema({
  firstName:{type:String,trim:true, required: true},
  lasttName:{type:String,trim:true, required: true},
  email:{type:String,trim:true, required: true,
  unique: true},
  password:{type:String,required:true, trim:true
  ,maxLength:12},
  mobile:{type:Number,trim:true, required: true,maxLength:10},
  dob:{type:Date,required:true,trim:true},
  role:{type:String, required:true,trim:true,default:'user'}

});
module.exports=mongoose.model('User',userSchema);

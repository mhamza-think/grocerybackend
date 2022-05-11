const mongoose = require ('mongoose');

const User = new mongoose.Schema({
 username:{
     type:String,
     required:[true,'Username is required']
 },
 mobileNumber:{
     type:String,
     required:[true,'MobileNo is required']
 },
 email:{
     type:String,
     required:[true,'Email is required'],
     unique:true
 },
 password:{
     type:String,
     required:[true,'Password is required']
 },
 confirmPassword:{
    type:String,
    required:[true,'ConfirmPassword is required']
}
})

module.exports = mongoose.model('User',User);
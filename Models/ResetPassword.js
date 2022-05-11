const mongoose = require ('mongoose');

const ResetPassword = new mongoose.Schema({
    email:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('resetpasswords',ResetPassword);
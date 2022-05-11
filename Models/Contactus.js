const mongoose = require ('mongoose');

const Contactus = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required']
    },
    email:{
        type:String,
        required:[true,'email is required']
    },
    query:{
        type:String,
        required:[true,'query is required']
    }
})

module.exports = mongoose.model('Contactus',Contactus);
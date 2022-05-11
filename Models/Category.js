const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    categoryName:{
        type:String,
        required:[true,'Category name is required']
    },
    categoryImage:{
      type:String,
      required:true
    },
    enable:{
        type:Boolean,
        default:true
    },
    createdDate:{
        type:Date,
        default:Date.now()
    },
})
module.exports= new mongoose.model("categories",categorySchema);
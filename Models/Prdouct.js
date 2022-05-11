const mongoose = require ('mongoose');

const productReviewSchema=new mongoose.Schema({
    productReviewName:{
        type:String,
        required:true
    },
    productReviewRating:{
        type:Number,
        required:true
    },
    productReviewDescription:{
        type:String,
        required:true
    }
})



const Product = new mongoose.Schema({
  productName:{
      type:String,
      required:true
  },
  price:{
   type:Number,
   required:true
  },
  quantity:{
      type:Number,
      required:true
  },
 
productDescription:{
    type:String,
    required:true
},
productInformation:{
    type:String,
    required:true
},
productAvailability:{
    type:Boolean,
    default:true
},
productDeliveryCharges:{
    type:String,
    required:true
},

productOnSale:{
    type:String,
    required:true
},
productReview:[productReviewSchema],

categoryId:{
    type:mongoose.Schema.Types.ObjectId,
    refs:'categories'
},

createdDate:{
    type:Date,
    default:Date.now()
},
enable:{
    type:Boolean,
    default:true
}


})

module.exports = mongoose.model('products',Product);
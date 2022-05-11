const mongoose = require ('mongoose');

const Product = new mongoose.Schema({
  productName:{
      type:String,
      required:true
  },
  price:{
   type:String,
   required:true
  },
  Quantity:{
      type:String,
      required:true
  },
  productReviews:[
      {
        productReviewName:{
            type:String,
            required:true
        },
        productReviewDescription:{
            type:String,
            required:true
        },
        productReviewRating:{
            type:String,
            required:true
        }
      }
  ],
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
productBrands:[
    {
        productType:{
            type:String,
            required:true
        },
        categoryType:{
            type:String,
            required:true
        },
        productSubType:{
            type:String,
            required:true
        }
    }
],
productOnSale:{
    type:String,
    required:true
}


})

module.exports = mongoose.model('Product',Product);
const mongoose = require("mongoose");
const itemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
  },
  payablePrice: {
    type: Number,
    required: true,
  },
  purchasedQty: {
    type: Number,
    required: true,
  }
})
const orderStatusSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["ordered", "packed", "shipped", "delivered"],
    default: "ordered",
  },
  date: {
    type: Date,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  }
})

const Orders = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },

    totalAmount: {
      type: Number,
      required: true,
    },

    paymentStatus: {
      type: String,
      enum: ["pending", "completed", "cancelled", "refund"],
      required: true,
    },
    paymentType: {
      type: String,
      enum: ["cod", "card"],
      required: true,
    },
    items: [itemSchema],
    orderStatus: [orderStatusSchema],

    createdDate: {
      type: Date,
      default: Date.now()
    },
    enable:{
      type:Boolean,
      default:true
    }

  });

module.exports = mongoose.model("orders", Orders);
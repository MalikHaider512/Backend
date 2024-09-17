const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      require: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    company: {
      type: Boolean,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
      // required: true,
      default: "",
    },
    waNo: {
      type: String,
      // required: true,
      default: "",
    },
    landline: {
      type: String,
      // required: true,
      default: "",
    },

    website: {
      type: String,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    pobox: {
      type: String,
    },
    province: {
      type: String,
    },
    country: {
      type: String,
    },

    verificationImage: {
      type: String,
    },

    favorites: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Item", // assuming your item model's name is 'Item'
      },
    ],

    logged_in: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);

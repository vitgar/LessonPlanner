const mongoose = require("mongoose");
// const { password } = require("../../dbconfig");
// const { getUserById } = require("../../usersoperations");

const Schema = mongoose.Schema;

//Todo move to helper file
let validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const usersSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required."],
      unique: true,
      dropDups: [true, "Another user with this username already exists."],
      maxlength: [255, "Username exceeds maximum length of 255."],
    },
    password: {
      type: String,
      required: [true, "Password is required."],
      maxlength: [255, "Password exceeds maximum length of 255."],
    },
    name: {
      type: String,
      required: [true, "Name is required."],
      maxlength: [255, "Name exceeds maximum length of 255."],
    },
    lastname: {
      type: String,
      required: [true, "Lastname is required."],
      maxlength: [255, "Last name exceeds maximum length of 255."],
    },
    description: { type: String },
    birthdate: { type: Date, date: true },
    gender: { type: String },
    photouri: {
      type: String,
      maxlength: [1000, "Description exceeds maximum length of 1000."],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      dropDups: [true, "Another user with this email address already exists."],
      validate: [validateEmail, "Please fill a valid email address"],
      maxlength: [255, "Email exceeds maximum length of 255."],
    },
    profession: {
      type: String,
      maxlength: [255, "Profession exceeds maximum length of 255."],
    },
    position: {
      type: String,
      maxlength: [255, "Position exceeds maximum length of 255."],
    },
    addressid: { type: Number },
  },
  {
    timestamps: true,
  }
);

const users = mongoose.model("users", usersSchema);
module.exports = users;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

const schemaModel = new Schema({
  username: {type: String, required: [true, 'username is required']},
  password: {type: String, required: [true, 'password is required']},
  zipcode: {type: Number, required: [true, 'zipcode is required']},
  contactEmail: {type: String, required: [true, 'email is required']},
  workoutType: {type: String, required: [true, 'workout type is required']},
  availability: {type: String, required: [true, 'availability is required']},
});

schemaModel.pre('create', async function (next){
  //within this context, 'this' refers to the dwavocument about to be saved
  //in our case, it should have properties username and password
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, SALT_WORK_FACTOR)
  }
  next()
  // bcrypt.hash(this.password, SALT_WORK_FACTOR, (err, hash) => {
  //   if (err) return next (err);
  //   //reassign the document's password to its hashed version
  //   this.password = hash;
  //   //this next call makes mongoose move on to the saving the document
  //   return next;
  // })
});

const Partner = mongoose.model('users', schemaModel);

module.exports = Partner;

//in terminal bcrypt.hash(password, 10, (err,hash)=>console.log(hash));

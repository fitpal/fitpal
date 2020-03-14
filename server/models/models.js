const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaModel = new Schema({
  username: {type: String, required: [true, 'username is required']},
  password: {type: String, required: [true, 'password is required']},
  zipcode: {type: Number, required: [true, 'zipcode is required']},
  'contact email': {type: String, required: [true, 'email is required']},
  'workout type': {type: String, required: [true, 'workout type is required']},
  availability: {type: String, required: [true, 'availability is required']},
});

const Partner = mongoose.model('model', schemaModel);

module.exports = Partner;

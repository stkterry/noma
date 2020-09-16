const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type:String,
    required: true
  },
  password: {
    type: String,
    required: true
  },

  primaryFirstName: {
    type: String
  },
  primaryMiddleIni: {
    type: String
  },
  primaryLastName: {
    type:String
  },
  primaryContactEmail: {
    type:String
  },
  primaryContactNum: {
    type:String
  },

  businessName: {
    type: String
  },
  registrationNum: {
    type: String
  },
  businessNum: {
    type: String
  },
  businessCountry: {
    type: String,
  },
  businessStreeAdr: {
    type: String
  },
  businessOptAdr: {
    type: String
  },
  businessCity: {
    type: String
  },
  businessState: {
    type: String
  },
  businessZip: {
    type: String
  },
  businessProfileComplete: {
    type: Boolean,
    default: false
  }



}, {
  timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema);
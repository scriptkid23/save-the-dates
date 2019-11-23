const mongoose = require('mongoose');
const crypto = require('crypto')
const jwt = require('jsonwebtoken');

const {Schema} = mongoose;

const UsersSchema = new Schema({
    username: String,
    password : String,
  });

UsersSchema.methods.setPassword = (password) => {
    this.password = password;
}
UsersSchema.methods.generateJWT = function() {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);
  
    return jwt.sign({
      username: this.username,
      id: this._id,
      exp: parseInt(expirationDate.getTime() / 1000, 10),
    }, 'secret');
  }
UsersSchema.methods.toAuthJSON = function() {
    return {
      _id: this._id,
      username: this.username,
      token: this.generateJWT(),
    };
  };

module.exports = mongoose.model('Users',UsersSchema);

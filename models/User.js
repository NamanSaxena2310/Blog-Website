const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const uniqueValidator = require('mongoose-unique-validator')
const userSchema = mongoose.Schema({
  username:{
    type:String,
    required:[true,"Please provide username"],
    unique:[true,"Username Already taken, Please Provide a unique username"]
  },
  password:{
    type: String,
    required: [true,"Please provide password"],
  }
})

userSchema.plugin(uniqueValidator,{
  message: '{PATH} must be unique. "{VALUE}" is already in use.'
})

userSchema.pre('save',function(next){
  const user = this
  bcrypt.hash(user.password,10,(err,hash)=>{
    user.password = hash
    next()
  })

  
})

const User = mongoose.model('User',userSchema)

module.exports = User
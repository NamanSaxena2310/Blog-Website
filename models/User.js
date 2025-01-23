const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const uniqueValidator = require('mongoose-unique-validator')
const userSchema = mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type: String,
    required: true,
  }
})

userSchema.plugin(uniqueValidator)

userSchema.pre('save',function(next){
  const user = this
  bcrypt.hash(user.password,10,(err,hash)=>{
    user.password = hash
    next()
  })

  
})

const User = mongoose.model('User',userSchema)

module.exports = User
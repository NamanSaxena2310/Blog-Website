const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports = async (req,res)=>{
  const {username,password} = req.body
  const user = await User.findOne({username})
if (user) { //User Found Then 
    bcrypt.compare(password,user.password,(err,result)=>{
      if (result) {
        res.redirect('/')
      }else{
        res.redirect('/auth/login')
      }
    })
}else{
  res.redirect('/auth/login')
}
  
}
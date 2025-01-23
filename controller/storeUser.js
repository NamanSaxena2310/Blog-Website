const User = require('../models/User')

module.exports = async (req,res)=>{

  try {
    const {username,password} = req.body
  const newUser = await User.create({
    username,
    password
  })

  res.redirect('/')
  console.log(newUser)
  } catch (error) {
    console.log(error)
    const validationErrors = Object.keys(error.errors).map((key)=> error.errors[key].message)
    req.flash('validationErrors',validationErrors)  
    res.redirect('/auth/register')
  }

  
}
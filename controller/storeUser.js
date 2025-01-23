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
    res.redirect('/auth/register')
  }

  
}
const User = require('../models/User')

module.exports = async (req,res,next)=>{
  try {
    const result = await User.findById(req.session.userId)

    if (result) {
       return next()
      }
  } catch (error) {
    res.redirect('/')
  }

}
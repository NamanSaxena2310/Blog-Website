

module.exports = (req,res,next)=>{
  if (req.title == null || req.description == null || req.files == null) {
    return res.redirect('/posts/store')
  }

  next()
}
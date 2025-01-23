
module.exports = (req,res)=>{
  const validationErrors = req.flash('validationErrors')
 res.render('register',{
  errors:validationErrors
 })
}
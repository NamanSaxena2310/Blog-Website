
module.exports = (req,res)=>{

  let username = ''
  let password = ''

  const data = req.flash('data')[0]

  if (data) {
    username = data.username
    password = data.password
  }

  const validationErrors = req.flash('validationErrors')
 res.render('register',{
  errors:validationErrors,
  username,
  password
 })
}
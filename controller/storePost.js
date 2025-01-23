const BlogPost = require('../models/BlogPost')
const path = require('path')
module.exports = async (req,res)=>{
   
  try {
      const {title,description} = req.body
      const image = req.files.image
      image.mv(path.resolve(__dirname,'../public/assets/img',image.name))
     const blogPost = await BlogPost.create({
          title,
          body:description,
          image:'/img/' + image.name,
          userid:req.session.userId
      })
      console.log(blogPost)
      res.redirect('/')
  } catch (error) {
      console.log(error)
  }
}
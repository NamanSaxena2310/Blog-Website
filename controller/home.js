const BlogPost = require('../models/BlogPost')

module.exports = async(req,res)=>{

  try {
      const blogPosts = await BlogPost.find({})
      console.log(req.session)
      res.render('index',{
          blogPosts
      })
  } catch (error) {
      console.log('Unable to fetch All blogposts' + error)
  }

  
}
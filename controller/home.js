const BlogPost = require('../models/BlogPost')

module.exports = async(req,res)=>{

  try {
      const blogPosts = await BlogPost.find({})
      res.render('index',{
          blogPosts
      })
  } catch (error) {
      console.log('Unable to fetch All blogposts' + error)
  }

  
}
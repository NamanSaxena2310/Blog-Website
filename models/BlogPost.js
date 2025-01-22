const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title:String,
  body:String
})

const BlogPost = mongoose.model('BlogPost',schema)

module.exports = BlogPost
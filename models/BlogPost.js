const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title:String,
  body:String,
  username:String,
  datePosted:{
    type:Date,
    default: new Date()
  },
  image:String
})

const BlogPost = mongoose.model('BlogPost',schema)

module.exports = BlogPost
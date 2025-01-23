const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title:String,
  body:String,
  userid:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User',
    required: true
  },
  datePosted:{
    type:Date,
    default: new Date()
  },
  image:String
})

const BlogPost = mongoose.model('BlogPost',schema)

module.exports = BlogPost
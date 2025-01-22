const express = require('express')
const path = require('path')
const ejs = require('ejs')
const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')
const app = express()


const URL = 'mongodb+srv://admin:admin@learningmongodb.zkb7g.mongodb.net/Blog-App?retryWrites=true&w=majority&appName=LearningMongoDB'

mongoose.connect(URL)
    .then(()=>{
        console.log("Database Connected ")
    }).catch((error)=>{
        console.log("Unable to connect " + error)
    })

app.set('view engine', 'ejs')

app.use(express.static('public')) // Telling the express server to use public folder for static files 
app.use(express.json())
app.use(express.urlencoded({ extended: true })); // It helps in parsing form data which is in url-encoded form and helps to add the form data in req.body

app.get('/',async(req,res)=>{

    try {
        const blogPosts = await BlogPost.find({})
        res.render('index',{
            blogPosts
        })
    } catch (error) {
        console.log('Unable to fetch All blogposts' + error)
    }

    
})



app.get('/about',(req,res)=>{
    res.render('about')
})


app.get('/contact',(req,res)=>{
    res.render('contact')
})


app.get('/post',(req,res)=>{
    res.render('post')
})


app.get('/posts/new', (req,res)=> {
    res.render('create')

})

app.post('/posts/store', async (req,res)=>{
    const {title,description} = req.body

    try {
        await BlogPost.create({
            title,
            body:description
        })

        res.redirect('/')
    } catch (error) {
        console.log(error)
    }
})


app.listen(4000,()=>{
    console.log("App is running on port 4000")
})


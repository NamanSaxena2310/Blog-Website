const express = require('express')
const path = require('path')
const ejs = require('ejs')
const fileUpload = require('express-fileupload')
const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')
const app = express()

//Controllers

const newPostController = require('./controller/newPost')
const homeController = require('./controller/home')
const getPostController = require('./controller/getPost')
const storePostController = require('./controller/storePost')
const newUserController = require('./controller/newUser')
const storeUSerController = require('./controller/storeUser')
const loginController = require('./controller/login')
const loginUserController = require('./controller/loginUser')

//Middlewares 
const validationMiddleware = require('./middlewares/validationMiddleware')

const URL = 'mongodb+srv://admin:admin@learningmongodb.zkb7g.mongodb.net/Blog-App?retryWrites=true&w=majority&appName=LearningMongoDB'

mongoose.connect(URL)
    .then(()=>{
        console.log("Database Connected ")
    }).catch((error)=>{
        console.log("Unable to connect " + error)
    })


// app.use(validationMiddleware)
 app.use(fileUpload())
app.set('view engine', 'ejs')

app.use(express.static('public')) // Telling the express server to use public folder for static files 
app.use(express.json())

app.use(express.urlencoded({ extended: true })); // It helps in parsing form data which is in url-encoded form and helps to add the form data in req.body

app.get('/',homeController)


app.get('/post',(req,res)=>{
    res.render('post')
})

app.get('/posts/new',newPostController )

app.get('/post/:id',getPostController)

app.post('/posts/store', storePostController )

app.get('/auth/register', newUserController)

app.get('/auth/login',loginController)

app.post('/users/register', storeUSerController)

app.post('/users/login', loginUserController)

app.listen(4000,()=>{
    console.log("App is running on port 4000")
})


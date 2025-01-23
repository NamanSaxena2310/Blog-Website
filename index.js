const express = require('express')
const path = require('path')
const ejs = require('ejs')
const fileUpload = require('express-fileupload')
const expressSession = require('express-session')
const mongoose = require('mongoose')
const flash = require('connect-flash')
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
const logoutController = require('./controller/logoutController')

//MiddleWares
const authMiddleware  = require('./middlewares/authMiddleware')
const validationMiddleware = require('./middlewares/validationMiddleware')
const redirectIfAuthenticatedMiddleware = require('./middlewares/redirectIfAuthenticatedMiddleware')

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

global.loggedIn = null



app.use(express.static('public')) // Telling the express server to use public folder for static files 
app.use(express.json())

app.use(express.urlencoded({ extended: true })); // It helps in parsing form data which is in url-encoded form and helps to add the form data in req.body
app.use(expressSession({
    secret:"This Naman's Secret key"
}))

app.use('*',(req,res,next)=>{
    loggedIn = req.session.userId
    next()
})

app.use(flash())

app.get('/',homeController)


app.get('/post',(req,res)=>{
    res.render('post')
})

app.get('/posts/new',authMiddleware,newPostController )

app.get('/post/:id',getPostController)

app.post('/posts/store',authMiddleware, storePostController )

app.get('/auth/register',redirectIfAuthenticatedMiddleware, newUserController)

app.get('/auth/login',redirectIfAuthenticatedMiddleware,loginController)

app.post('/users/register',redirectIfAuthenticatedMiddleware, storeUSerController)

app.post('/users/login',redirectIfAuthenticatedMiddleware, loginUserController)

app.get('/auth/logout',logoutController)

app.use((req,res)=>{
    res.render('notfound')
})

app.listen(4000,()=>{
    console.log("App is running on port 4000")
})


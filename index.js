const express = require('express')
const path = require('path')
const ejs = require('ejs')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public')) // Telling the express server to use public folder for static files 
app.get('/',(req,res)=>{
    res.render('index')
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



app.listen(4000,()=>{
    console.log("App is running on port 4000")
})


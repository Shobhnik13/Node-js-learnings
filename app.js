const express=require('express')
// the above line will be returning a function in express variable 
//then that function in express will be called out in app variable
const app=express() 
app.listen('3000')
app.get('/',(req,res)=>{
    // res.send('<p>home page</p>')
    res.sendFile('./views/index.html',{root:__dirname})
})
app.get('/about',(req,res)=>{
res.sendFile('./views/about.html',{root:__dirname})
})
//redirects
app.get('/about-us',(req,res)=>{
    res.redirect('/about')
})
//404 page
app.use((req,res)=>{
    res.sendFile('./views/404.html',{root:__dirname})
})
const express=require('express')
const morgan=require('morgan')
// the above line will be returning a function in express variable 
//then that function in express will be called out in app variable
const app=express()
//register view engine
app.set('view engine','ejs') 
app.listen('3000')
//uisng static files with express
app.use(express.static('public'))
//third party middleware
app.use(morgan('dev'))
app.get('/',(req,res)=>{
    const blogs=[
        {
        title:'abcd',
        snippet:'dhduwbnxj',
        },
        {
        title:'kloo',
        snippet:'wdddhddwdw',
        },
        {
        title:'nckd',
        snippet:'ddwdnkjwdkwbnxj',
        }
    ];
    res.render('index',{title:'Home',blogs})
})
app.get('/about',(req,res)=>{
res.render('about',{title:'About'})
})
//redirects
app.get('/about-us',(req,res)=>{
    res.redirect('/about')
})
app.get('/blogs/create',(req,res)=>{
    res.render('create',{title:'Create'})
})
//404 page
app.use((req,res)=>{
    res.render('404',{title:'Error 404'})
})
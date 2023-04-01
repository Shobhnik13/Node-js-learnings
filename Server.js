const fs=require('fs')
const http=require('http');
const _ =require('lodash')
const server=http.createServer((req,res)=>{
    // console.log(req.url,req.method)
    // lodash
    const num=_.random(0,20)
    console.log(num)
    const greet=_.once(()=>{
        console.log('Hello')
    })
    greet()
    greet()
    // setting content type of hedaer 
    res.setHeader('Content-type','text/html');
    
    //page rendering
    let path='./views/'
        switch(req.url){
            case '/':
                res.statusCode=200;
            path=path+'index.html'
            break;
            case '/about':
                res.statusCode=200;
            path=path+'about.html'
            break;
            case '/about-us':
                res.statusCode=301;
                res.setHeader('Location','/about')
                res.end()
            break;
            default:
                res.statusCode=404;
            path=path+'404.html'
            break;    
        }

        
    //sending html file
    //read and then callback function
    fs.readFile(path,(err,data)=>{
        if(err)
        {
            console.log(err);
        res.end();
        }
        else 
        {
        // res.write(data);
        //if we passing only one thing as a data in file then we do not need res.write(data) just pass the data in end function
        res.end(data);
        }
    })
})
server.listen(3000,'localhost',()=>{
    console.log('listening requests on port 3000')
})
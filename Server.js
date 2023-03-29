const fs=require('fs')
const http=require('http');
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method)
    //sending html file
    fs.readFile('./views/index.html',(err,data)=>{
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
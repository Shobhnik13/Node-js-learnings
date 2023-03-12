const fs=require('fs')

//read files

fs.readFile('./docs/blog1.txt',(err,data)=>{
if(err){
    console.log(err);
}
console.log(data.toString());
})
console.log('last')

//write files

fs.writeFile('./docs/blog1.txt','gm ser',()=>{
    console.log('done')
})

//directories
if(!fs.existsSync('./assets')){
fs.mkdir('./assets',(err)=>{
    if(err){
        console.log(err)
    }
    console.log('created successfully')
})
}
else{
    fs.rmdir('./assets',(err)=>{
        if(err)console.log(err)
        else console.log('deleted successfully')
    })
}

//delte files
if(fs.existsSync('./docs/deleteMe.txt')){
    fs.unlink('./docs/deleteMe.txt',(err)=>{
        if(err)console.log(err)
        else console.log('file delted successfully')
    })
}
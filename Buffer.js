const fs=require('fs')
const readStream=fs.createReadStream('./docs/blog2.txt');
const writeStream=fs.createWriteStream('./docs/blog3.txt');
readStream.on('data',(chunk)=>{
    // console.log('-----NEW CHUNNk----');
    // console.log(chunk.toString());
    // writeStream.write('\nNEW CHUNK\n');
    // writeStream.write(chunk)
})
// PIPELINE ->read as well asa write by using a single line 
readStream.pipe(writeStream)
// this will read the data from readstream by uisng pipe and then write that data in writeStream using pipe
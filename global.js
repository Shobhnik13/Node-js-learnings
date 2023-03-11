// console.log(global)
// timeout function will only display the console thing once after 1s
setTimeout(() => {
    console.log('Hi')
    // clear will help to clear the created intervla after when it will print it sthing after 3s the entire process will stop  
    clearInterval(dummy);
}, 3000);
//interval function will keep displaying the console thing continuously after every 1s
const dummy=setInterval(() => {
    console.log('shobhnik')
},1000);
// __dirname return the folder in which we working 
console.log(__dirname)
// __filename return the folder as well as file name in which we wroking  
console.log(__filename)
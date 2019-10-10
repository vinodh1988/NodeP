var fs=require('fs');
var temp=  require('./another');

temp.myfun();

console.log(temp.numberarray);

console.log(temp.person);
/*
fs.readFile("package.json","utf8",function(err,data){
    if(err)
       console.log("error reading file..!!!")
    else
       console.log(data);
})*/

console.log("After code...!!!");
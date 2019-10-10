var express=require('express');
var path=require("path");
var app=express();

app.get("/",function(request,response){
      response.send("This is my first node app");
});

app.get("/driver",function(request,response){
    response.setHeader('Content-Disposition', 'attachment; filename=' + "ojdbc6.jar");
    response.download(path.join(__dirname,"files/ojdbc6.jar"));
})


app.listen("4505",function(){
  console.log("server started and listening in 4505");
});
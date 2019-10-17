var fs=require("fs");
var express=require('express');
var bodyParser=require('body-parser');
var path=require("path");
var dbroute=require("./server/routes/dbroutes")
var app=express();

//To configure path of static resources
app.use(express.static(path.join(__dirname,"public/styles")));
app.use(express.static(path.join(__dirname,"public/static")));
app.use(express.static(path.join(__dirname,"public/scripts")));
app.use(express.static(path.join(__dirname,"bower_components/jquery/dist")));
app.use(express.static(path.join(__dirname,"bower_components/bootstrap/dist")))

app.use(bodyParser.urlencoded());

app.set('views', path.join(__dirname, 'public/views'));//setting the path of template files
app.set('view engine', 'pug'); //configuring view Engine


app.use('/dbops',dbroute);
app.get("/",function(request,response){
      response.send("This is my first node app");
});

app.get("/driver",function(request,response){
    response.setHeader('Content-Disposition', 'attachment; filename=' + "ojdbc6.jar");
    response.download(path.join(__dirname,"files/ojdbc6.jar"));
})

app.get("/home",(request,response)=>{
    response.sendFile(path.join(__dirname,"public/index.html"));
});

app.get("/images/:filename",(request,response)=>{
    response.sendFile("E:/projectimages/"+request.params.filename);
})

app.get("/showpeople",function(request,response){
     fs.readFile("files/data.json","utf8",function(err,data){
       if(err)
          response.sendStatus(500);
       else{
          let people= JSON.parse(data);
          response.render('people',{people:people, programmer: "Johnson"});
       }
     })
})

app.post("/storeperson",(request,response)=>{
  let sno=request.body.sno;
  let name=request.body.name;
  let city=request.body.city;
 
  fs.readFile("files/data.json","utf8",function(err,data){
       if(err)
        response.sendStatus(500);
       else
          {
            let people=JSON.parse(data);
            people.push({sno:sno,name:name,city:city});
            console.log(people);
            fs.writeFile("files/data.json",JSON.stringify(people),function(err){
               if(err)
                  response.sendStatus(500);
               else
                  response.send("DATA STORED..!!!");
            })

          }
  })

})

app.listen("4505",function(){
  console.log("server started and listening in 4505");
});
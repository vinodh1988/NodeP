let express=require('express');
let operations=require('../database/operations');
var route=express.Router();

route.get("/modules",(request,response)=>{
    operations.getModules((err,data)=>{
        if(err){
            console.log(err);
           response.sendStatus(500)
        }
        else
           response.json(data);
    })
});

route.post("/modules",(request,response)=>{
    let module={modulecode:request.body.modulecode,
                modulename:request.body.modulename,
                duration:request.body.duration,
                price:request.body.price,
                filename:request.body.filename,
                description:request.body.description
               }
        operations.addModules(module,function(err,data){
            if(err)
              response.sendStatus(500);
            else 
              response.send("Successfully stored");
        });
});


module.exports=route;
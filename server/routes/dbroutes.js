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


module.exports=route;
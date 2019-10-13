var connect=require('./connection.js');

var operations={

    getModules:function(callback){
        connect.query("select * from moduledetails",callback);
    }

}

module.exports=operations;
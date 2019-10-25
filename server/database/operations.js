var connect=require('./connection.js');

var operations={

    getModules:function(callback){
        connect.query("select * from moduledetails",callback);
    },

    addModules: function(modules,callback){
        connect.query("insert into moduledetails values(?,?,?,?,?,?)",
        [modules.modulecode,modules.modulename,modules.duration,
            modules.price,modules.description,modules.filename],callback);
    }

}

module.exports=operations;
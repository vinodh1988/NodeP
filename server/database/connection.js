var mysql=require('mysql');

var connection=mysql.createPool({

host:'localhost',
user:'vinodh',
password:'password',
database:'isql'

});


module.exports=connection;

$(document).ready(
    function(){
    $('#btn').click(function(){

       $.get("dbops/modules",function(data,status){
        let code="";
                    for(let x in data){
               code+='<div class="media border p-3" style="background-color: gray;">';
               code+= ' <img src="images/'+data[x].filename+'" alt="Dummy" class="mr-3 mt-3 rounded-circle" style="width:60px;">'
               code+= '<div class="media-body">';
               code+="<h4>"+data[x].modulename+"</h4>"
               code+="<p>"+data[x].description+"</p></div></div>";
                     }
                    $('#mcontent').html(code);

        
       
       })
   });
}
);
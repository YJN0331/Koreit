function showEvent(eventname) {
  const p = $("<p></p>");
    p.text(eventname);
    $("main").append(p);
}

$(function(){
 
  const input = $("#text")

  input.on("keydown",function(e){
    console.log(e)
    console.log(e.key)
    console.log(e.keyCode)
    
  })

  
  input.on("keyup",function(e){
    console.log(e)
  })




});
function showEvent(eventname) {
  const p = $("<p></p>");
    p.text(eventname);
    $("main").append(p);
}

$(function(){
 

  const sample = $("#sample");

  
  sample.width(200);
  sample.height(200);
  sample.text ("");
  sample.css("background-color", "orange");
  
  
  // sample.on("click",function(){
  //   console.log("Clicked");
  //   const p = $("<p></p>");
  //   p.text("click");
  //   sample.append(p);
  // });

  sample.on("dblclick",function(){
    console.log("Double Clicked");
    const p = $("<p></p>");
    p.text("dbclick");
    alert("Double Clicked");
    sample.append(p);
  });
  
  sample.on("mouseenter",function(){
    console.log("Mouse Enter");
    showEvent("MouseEnter")
  });

  sample.on("mouseleave",function(){
    console.log("Mouse Leave");
    showEvent("MouseLeave")
  });

  sample.on("mouseover",function(){
    
    console.log("Mouse Over");
    const p = $("<p></p>");
    p.text("Mouse Over");
    sample.append(p);
  });

  sample.on("hover",function(e){ //e는 발생한 이벤트와 관련된 정보를 가지고 있음
    /*console.log(e);    
    console.log("Hover");       
    if (e.type == "mouseenter"){
      console.log("마우스가 얹어졌다.");
    }else{
      console.log("마우스가 나갔다.");
    }
    */
    const p = $("<p></p>");
    p.text("hover");
    sample.append(p);
  });

  sample.on("mousedown",function(){
    console.log("마우스 눌렀다.");
  });

  sample.on("mouseup",function(){
    console.log("마우스 떼었다.");
  });

  sample.on("mousemove",function(){
    console.log("마우스 움직였다.");
  });







});
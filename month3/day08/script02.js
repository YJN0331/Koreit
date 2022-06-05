
$(function(){


  $("#first").animate({
    width: 200
  })
  $("#first").stop()
  $("#second").delay(2000).animate({
     marginLeft: 200

  })

  const a = $("#third").animate({ marginLeft: 100 }, 1000)
  .animate({ marginLeft: 200 }, 1000)
  .animate({ marginLeft: 300 }, 1000)
  .queue(function(){
    $(this).css("background-color", "red")
    $(this).clearQueue()
    $(this).dequeue()
  })

  console.log(a)


})
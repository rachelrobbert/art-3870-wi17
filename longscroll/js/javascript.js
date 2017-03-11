$(window).scroll(function(){ //start of scroll

  var fromTop = $(window).scrollTop();
   console.log(fromTop);


  $("#headline").text("You scrolled" + fromTop + "px");

  $("#headline").css({

    "top" : fromTop +"px"
  });

   if (fromTop > 8975) {

   $("#headline").text("End");
 }

  if (fromTop >30) {

    $("#headline").css({
      "transform": "rotate(180 deg)", "display":"block"
    })
  }



}

);//end  of scroll

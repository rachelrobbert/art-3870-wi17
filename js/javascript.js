$(window).scroll(function(){ //start of scroll

  var fromTop = $(window).scrollTop();
   console.log(fromTop);


  $("#princess").text("You scrolled" + fromTop + "px");

  $("#princess").css({

    "top" : fromTop +"px"
  });

   if (fromTop > 8975) {

   $("#princess").text("End");
 }

  if (fromTop >30) {

    $("#princess").css({
      "transform": "rotate(180 deg)", "display":"block"
    })
  }


if (fromTop > 10) {
  $("#zone1").css({
    "transform": "left: 0"
  })
}





switch (true) {
    case (fromTop < 500):    //text1
         console.log("less than five");
        break;
    case (fromTop > 400 && fromTop < 900):   //text2
         console.log("between 5 and 8");
        break;
    case (fromTop > 800 && fromTop < 1200): //text3
         console.log("between 9 and 11");
        break;

    case (fromTop > 800 && fromTop < 1200): //text4
         console.log("between 9 and 11");
        break;
    case (fromTop > 800 && fromTop < 1200): //text5
        console.log("between 9 and 11");
        break;
    case (fromTop > 800 && fromTop < 1200): //text7
       console.log("between 9 and 11");
        break;
    case (fromTop > 800 && fromTop < 1200): //text8
      console.log("between 9 and 11");
        break;
    case (fromTop > 800 && fromTop < 1200): //text9
      console.log("between 9 and 11");
        break;
    case (fromTop > 800 && fromTop < 1200): //text10
      console.log("between 9 and 11");
        break;
    default:
         console.log("none");
        break;
}





});//end  of scroll

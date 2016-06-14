
    /*
    @title - Calculator
    @author - mike
    @date -13/06/2016
    */

    var yoshi = 



window.onkeydown = function(e) {
    var key = e.keyCode || e.which;
  
    switch (key) {


    case 81:
         $( "#yoshi" ).animate({ "left": "-=50px" },"fast");
          $("#isho" ).hide();
          $("#yoshi" ).show();
                break;

    case 68:
       $("#isho" ).show();
       $("#isho" ).animate({ "left": "+=50px" },"fast");
        $("#yoshi" ).hide();

       break;
    

    case 83:

        $( "#yoshi" ).animate({ "top": "-=80px" },"fast"); 
        $( "#yoshi" ).animate({ "top": "+=80px" },"fast");

    default:
        break;
    }
};



    /*
    @title - Calculator
    @author - mike
    @date -13/06/2016
    */

    


$( document).keydown(function( event ) {
  switch(parseInt(event.which,10)) {
      // On a appuyé sur la touche flèche gauche
      case 81:
        $(".yoshi").animate({left: "-=30px"}, 20);
        $(".yoshi").css({transform: 'scaleX(1)'});
        break;
      // On a appuyé sur la touche flèche vers le haut//
      case 68:
        $(".yoshi").animate({left: "+=30px"}, 20);
        $(".yoshi").css({transform: 'scaleX(-1)'});
        break;
      case 83:
        $(".yoshi").animate({top: "-=80px"}, 100);
        $(".yoshi").animate({top: "+=80px"}, 100);
        break;
      }

      });
(function ($) {

  'use strict';

  Drupal.behaviors.helloWorld = {
    attach: function (context) {
      $('#test').append($('#left_bar .navbar'))


      console.log('work')
      $('#burger_menu').once('behavior').click(function (){
        $('#test ').toggle("slow")
      })
      $('.social_navbar .map').once('bef').click(function (){
        if($('#map_site').hasClass("ShowBlock")){
          $('#map_site').animate({
            opacity: 0
          },1000,function (){
            $('#map_site').removeClass("ShowBlock")
            $('#burger_menu').removeClass("HideBlock")
          })

        }else{
          $('#map_site').addClass("ShowBlock")
          $('#map_site').animate({
            opacity:1
          },1000,function (){
            $('#burger_menu').addClass("HideBlock")
          })


        }

      })

  }
    }
})(jQuery, Drupal);




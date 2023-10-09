(function($){
  'use strict';

    jQuery(document).ready(function($){
     // Defining a function to set size for #hero
        /* ========== Background image height equal to the browser height.==========*/
      $('header').css({ 'height': $(window).height() });
         $(window).on('resize', function() {
            $('header').css({ 'height': $(window).height() });
         });
    });

    jQuery(window).scroll(function() {
      let scroll = jQuery(window).scrollTop();
      let whatsappIcon = $('.whatsapp-action');
      if (scroll >= 700) { // Altura da pagina em pixels
        whatsappIcon.fadeIn( "slow");
      } else {
        whatsappIcon.fadeOut( "slow");
      }
    });



    // Smooth scroll to anchor links
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
})(jQuery);

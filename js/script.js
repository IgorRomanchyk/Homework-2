$(document).ready(function(){
   $('.quote__slider').slick({
       arrows:false,
       dots:true,
   });
   
   $('.header__burger').click(function(event) {
       $('.header__burger, .header__nav, .header__page').toggleClass('active'); 
   });
});

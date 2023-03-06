$(document).ready(function(){

$('.slider1').slick({
    slidesToShow:3,
    prevArrow: $('.arrows__left1'),
    nextArrow: $('.arrows__right1'),
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            
          }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              
            }
          }
    ]   
        
});
$('.slider2').slick({
    slidesToShow:3,
    prevArrow: $('.arrows__left2'),
    nextArrow: $('.arrows__right2'),
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            
          }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              
            }
          }
    ]   
        
});

});
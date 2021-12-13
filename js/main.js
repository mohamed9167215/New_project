$(window).ready(function()
   {
   $('body').css("overflow","auto");
   $('.loading ').fadeOut(7000) ;

   $('.slide .open').click(function(){
    $('.sidebar').css('top' , '100px');

});
$('.sidebar .toggle').click(function(){
 $('.sidebar').css('top','-230px');
});



$('.dark-mode').click(function(){

    $('body').toggleClass('test-one');
    $('.about-me').toggleClass('test-two');

});

   

  
 });
import { setInterval } from "timers";


document.addEventListener("DOMContentLoaded", function() {
    $(document).ready(function() {
       
        $(".down").click(function() {
             $('html, body').animate({
                 scrollTop: $("footer").offset().top
             }, 1500);
             $(".down").css("display", "none")
             $(".up").css("display", "block")
            });
         });
        $(".up").click(function() {
             $('html, body').animate({
                 scrollTop: $(".wrapper").offset().top
             }, 1000);
             $(".down").css("display", "block")
             $(".up").css("display", "none")
            });
        var motto = $('.motto')
        var counter = 0;
         function text(){
             counter++;
                motto.fadeOut(2500, function(){
                    motto.fadeIn(2500).text((counter%2===0)?"Sit comfortably":"In our Chairs")
                })
            };
        setInterval(text, 5000)
        
 
        $(".contactButton").click(function(){
            $('html, body').animate({
                scrollTop: $("#contact").offset().top
            },1200)
            $("#contact").css("font-size", "1rem")
        })

        $(".chair").click(function(){
            $('html, body').animate({
                scrollTop: $("#chair").offset().top
            },1200)
        })

        $(".buyTop").click(function() {
            $('html, body').animate({
                scrollTop: $(".buy").offset().top
            }, 1500)})
            $(".buy").click(function(){
                $(".form").slideToggle()
            })
           $(".submit").click(function(e){
                e.preventDefault()
           })


  //variable for the 'stroke-dashoffset' unit
  var $dashOffset = $(".path").css("stroke-dashoffset");
  //on a scroll event - execute function
  $(window).scroll(function() {
    //calculate how far down the page the user is 
    var $percentageComplete = (($(window).scrollTop() / ($("html").height())) * 100);
    //convert dashoffset pixel value to interger
    var $newUnit = parseInt($dashOffset, 10);
    //get the value to be subtracted from the 'stroke-dashoffset'
    var $offsetUnit = $percentageComplete * ($newUnit / 100);
    //set the new value of the dashoffset to create the drawing effect
    $(".path").css("stroke-dashoffset", $newUnit - $offsetUnit);
  });
});

         

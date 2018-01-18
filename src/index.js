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

                                        
                        
                        
            

});
         

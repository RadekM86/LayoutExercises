document.addEventListener("DOMContentLoaded", function() {
    $(document).ready(function() {
        $(".down").click(function() {
             $('html, body').animate({
                 scrollTop: $("footer").offset().top
             }, 1500);
         });
        });
        
        $(document).ready(function() {
        $(".up").click(function() {
             $('html, body').animate({
                 scrollTop: $(".wrapper").offset().top
             }, 1000);
         });
        });
        }
)

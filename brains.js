$(document).ready(function () {
    $(".centered").slideDown(2000);
    $(".navbar").mouseenter(function(){
       $(".navbar").css("height","75px"); 
    })
    $(".navbar").mouseleave(function(){
        $(".navbar").css("height","60px"); 
     })
        $(".workpage").click(function () {
            $(".home").slideUp(1000);
            $(".aboutme").slideUp(1000);
            $(".contactme").slideUp(1000);
            $(".work").slideDown(1000);
        })

        $(".homepage").click(function () {
            $(".aboutme").slideUp(1000);
            $(".contactme").slideUp(1000);
            $(".work").slideUp(1000);
            $(".home").slideDown(1000);
            $(".centered").fadeIn(3000);
        })

        $(".aboutmepage").click(function () {
            $(".home").slideUp(1000);
            $(".contactme").slideUp(1000);
            $(".work").slideUp(1000);
            $(".aboutme").slideDown(1000);
            $(".centered").fadeOut();
        })

        $(".contactmepage").click(function () {
            $(".home").slideUp(1000);
            $(".aboutme").slideUp(1000);
            $(".work").slideUp(1000);
            $(".contactme").slideDown(1000);
            $(".centered").fadeOut();
        })

    }
)


$(document).ready(function () {
    $(".centered").slideDown(2000);
    $(".navbar").mouseenter(function(){
       $(".navbar").css("height","75px"); 
       $(".logo").css("font-size","40px");
    })
    $(".navbar").mouseleave(function(){
        $(".navbar").css("height","60px"); 
        $(".logo").css("font-size","25px");
     })
     $("footer").mouseenter(function(){
         $(".social").slideDown();
     })
     $("footer").mouseleave(function(){
        $(".social").slideUp();
    })
    $(".aboutmepage").click(function(){
        $(".moreaboutme").hide();
        $(".btn").html("More about me...")
    })
    $(".btn").click(function(){
        $(".moreaboutme").slideDown();
        $(".btn").html("Less about me...");
    })
    // $(".btn").click(function(){
    //     $(".moreaboutme").slideUp();

    // })
    $(".up").click(function(){
        $(".navbar").slideDown();
    })
        $(".workpage").click(function () {
            $(".home").slideUp(1000);
            $(".aboutme").slideUp(1000);
            $(".contactme").slideUp(1000);
            $(".work").slideDown(1000);
            $(".centered").fadeOut();
            $("#MYWORK").fadeIn(2000);
            $("#ABOUTME").fadeOut();
            $("#CONTACTME").fadeOut();
        })

        $(".homepage").click(function () {
            $(".aboutme").slideUp(1000);
            $(".contactme").slideUp(1000);
            $(".work").slideUp(1000);
            $(".home").slideDown(1000);
            $(".centered").fadeIn(3000);
            $("#MYWORK").fadeOut();
            $("#ABOUTME").fadeOut();
            $("#CONTACTME").fadeOut();
        })

        $(".aboutmepage").click(function () {
            $(".home").slideUp(1000);
            $(".contactme").slideUp(1000);
            $(".work").slideUp(1000);
            $(".aboutme").slideDown(1000);
            $(".centered").fadeOut();
            $("#ABOUTME").fadeIn(2000);
            $("#CONTACTME").fadeOut();
            $("#MYWORK").fadeOut();
        })

        $(".contactmepage").click(function () {
            $(".home").slideUp(1000);
            $(".aboutme").slideUp(1000);
            $(".work").slideUp(1000);
            $(".contactme").slideDown(1000);
            $(".centered").fadeOut();
            $("#CONTACTME").fadeIn(2000);
            $("#ABOUTME").fadeOut();
            $("#MYWORK").fadeOut();
        })

    }
)

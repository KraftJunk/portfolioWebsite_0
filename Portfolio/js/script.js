$(document).ready(function()    {

    $('#slides').superslides({
    animation: "fade",
    play: "5000"
    });

    var typed = new Typed(".typed", {
        strings: ["Architect" ,"Urbanist", "Designer."],
        typeSpeed: 90,
        loop: true,
        startDelay: 1000,
        showCursor: false
    

    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    })

/*Pie Chart animation begins on scroll to section*/
    var skillsTopOffset = $(".skillsSection").offset().top;
    console.log(skillsTopOffset);


    $(window).scroll(function(){

        console.log(window.pageYOffset)

        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
           /*Actual easyPieChart jquery*/
            $('.chart').easyPieChart({
                easing: "easeInOut",
                barColor: "#fff",
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent) {
                    $(this.el).find(".percent").text(Math.round(percent));
                }
            });
        }

    });

    $("[data-fancybox]").fancybox();

    $(".items").isotope({
        filter:"*",
        animationOptions:{
            duration:1500,
            easing: "linear",
            queue: false
        }
    });
    


    /*Sticky Nav(body -> body.fixednav*/
    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);
    function stickyNavigation() {
       const body = $("body");
       if($(window).scrollTop()>= navTop){
            /*1st line in if and else statemnt Fixes Jump when going to fixedNav*/
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
            }
        else {
            body.css("padding-top", 0)
            body.removeClass("fixedNav");
        }
    }
});

(function ($) {
    "use strict";
    $(document).ready(function () {

        /*
       Jquery Mobile Menu
       ============================*/
        $('#mean-menu').meanmenu({
            meanMenuContainer: '.sidebar-active-here',
            meanScreenWidth: "991",
            //meanExpand: ['<i class="fal fa-plus"></i>'],
        });

        // Custom CirSor
        

        /*
       Jquery Sidebar Toggle
       ============================*/
        $("#mobile-menu-toggle-btn").on("click", function () {
            // alert('clidk');
            $(".sidebar-wrapper").addClass("active");
            $(".body-overlay").addClass("active");
        });
        $("#close-sidebar").on("click", function () {
            $(".sidebar-wrapper").removeClass("active");
            $(".body-overlay").removeClass("active");
        });

        /*
       Jquery Body Overlay
       ============================*/
        $(".body-overlay").on("click", function () {
            $(".sidebar-wrapper").removeClass("active");
            $(".body-overlay").removeClass("active");
        });
        /*
        Stikey Js
        ============================*/

        const body = document.body;
        const html = document.documentElement;
        const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

        if (100 < $(window).scrollTop()) {
            $(".header-menu-area.sticky-header").addClass("sticky_menu");
        }
        
        if( height  > 1400 ) {
            const nav = $(".header-menu-area.sticky-header");
            let scrolled = false;
            $(window).scroll(function(){
                if(100 < $(window).scrollTop() && !scrolled ){
                    nav
                        .addClass("sticky_menu animated fadeIn")
                        .animate({"margin-top":"0px"});
                    scrolled = true;
                }
                if(100 > $(window).scrollTop() && scrolled ){
                    nav.removeClass("sticky_menu animated fadeIn").css("margin-top","0px")
                    scrolled = false;
                }
            })
        }

        /*
        Jquery Empty Post Content Hide
        ============================*/
        $('.blog-area .post-content p').filter(function() {
            return /\u00A0/.test($(this).text());
        }).hide();

        /*
       Slider
       ============================*/
        $("#slider-wrapper").slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: false,
            slidesToScroll: 1,
            loop: true,
            dots: true,
            speed: 1500,
            // prevArrow:
            //     "<button type='button' class='slider-arrow-btn prev-btn'><i class='fa-solid fa-arrow-left'></i></button>",
            // nextArrow:
            //     "<button type='button' class='slider-arrow-btn next-btn'><i class='fa-solid fa-arrow-right'></i></button>",
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        autoplay: true,
                    },
                },
            ],
        });

        /*
       Info Card Slider
       ============================*/
        $(".nex-client-active").slick({
            slidesToShow:7,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 5000,
            loop:true,
            arrows: false,
            swipe: true,
            cssEase: 'linear',
            pauseOnFocus: true,
            pauseOnHover: true,
            // prevArrow:
            //     "<button type='button' class='info-card-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            // nextArrow:
            //     "<button type='button' class='info-card-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 5,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4,
                    },
                },
            ],
        });

        /*
       Team Slider
       ============================*/
        $("#active-community-slider").slick({
            slidesToShow: 3,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: false,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });

        /*
       Client-Slider
       ============================*/
       $(".client-logo-wrapper__").slick({
        slidesToShow: 5,
        infinite: true,
        autoplay: true,
        draggable: true,
        arrows: false,
        slidesToScroll: 1,
        loop: true,
        dots: false,
        speed: 1500,
        prevArrow:
            "<button type='button' class='testimonial-arrow-btn prev-btn'><div class='swip'><div class='title-wrapper'><i class='icon-left-arrow title-1'></i><i class='icon-left-arrow title-2'></i></div></div></button>",
        nextArrow:
            "<button type='button' class='testimonial-arrow-btn next-btn active'><div class='swip'><div class='title-wrapper'><i class='icon-right-arrow title-1'></i><i class='icon-right-arrow title-2'></i></div></div></button>",
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    });
        /*
       Testimonial Slider
       ============================*/
       $(".testimonial-slider-two__").slick({
        slidesToShow: 3,
        infinite: true,
        autoplay: false,
        draggable: true,
        arrows: true,
        slidesToScroll: 1,
        loop: true,
        dots: false,
        speed: 1500,
        centerMode: true,
        prevArrow:
            "<button type='button' class='testimonial-arrow-btn prev-btn'><i class='fa-solid fa-arrow-left title-1'></i></button>",
        nextArrow:
            "<button type='button' class='testimonial-arrow-btn next-btn active'><i class='fa-solid fa-arrow-right title-1'></i></button>",
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
    
    // arrow button active class
    $(".testimonial-arrow-btn").on("click", function () {
        $(".testimonial-arrow-btn").removeClass("active");
        $(this).addClass("active");
    });

    // Review-slider-area button trigger
    $('#review-prev').on('click', function (e) {
        e.preventDefault();
        $('.prev-btn').trigger('click');
    });
    $('#review-next').on('click', function (e) {
        e.preventDefault();
        $('.next-btn').trigger('click');
    });
    
    // Header notification
    $('.header-top-btn').on('click', function (e) {
        e.preventDefault();
        $('.header-top').css("display", "none");
    });


    // Isotop
    $('.isotope-grid').isotope({
        itemSelector: '.isotope-item',
        layoutMode: 'fitRows'
    });
   var $grid = $('.isotope-grid').isotope({
        itemSelector: '.isotope-item',
        layoutMode: 'fitRows',
        masonry: {
            columnWidth: '.isotope-item'
        }
    });
    $grid.imagesLoaded().progress( function() {
        $grid.isotope('layout');
    });
    // filter items on button click
    $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    $(".filter-button-group").on("click", 'button', function () {
        $('.filter-button-group button').removeClass("active");
        $(this).addClass("active");
    });

    // Accordion height
    const accordionEl = $(".accordion");
        const  accordionHeight = accordionEl.innerHeight();
        
            var width = $(window).width();
            if (width < 767){
                accordionEl.css("height",'auto');
            }else{
                accordionEl.css("height",accordionHeight);
            }

        /*
       Related Portfolio Slider
       ============================*/
        $("#related_portfolio__").slick({
            slidesToShow: 3,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            prevArrow:
                "<button type='button' class='portfolio-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow:
                "<button type='button' class='portfolio-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 460,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });

        // portfolio-area slider style-1
        $(".portfolio-slider__").slick({
            slidesToShow: 3,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: false,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            prevArrow:
                "<button type='button' class='testimonial-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow:
                "<button type='button' class='testimonial-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        autoplay: true,
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 554,
                    settings: {
                        autoplay: true,
                        slidesToShow: 1,
                    },
                },
            ],
        });
        // Testimonial-slider-area slider style-1
        $(".testimonial-slider__").slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            vertical: true,
            touchMove: true,
            useTransform: true,
            prevArrow:
                "<button type='button' class='testimonial-arrow-btn testimonial-prev'><div class='swip'><div class='title-wrapper'><i class='icon-left-arrow title-1'></i><i class='icon-left-arrow title-2'></i></div></div></button>",
            nextArrow:
                "<button type='button' class='testimonial-arrow-btn testimonial-next'><div class='swip'><div class='title-wrapper'><i class='icon-right-arrow title-1'></i><i class='icon-right-arrow title-2'></i></div></div></button>",
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        autoplay: true,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        autoplay: true,
                    },
                },
            ],
        });
        // Review-slider-area button trigger
    $('#left-arrow').on('click', function (e) {
        e.preventDefault();
        $('.testimonial-prev').trigger('click');
    });
    $('#right-arrow').on('click', function (e) {
        e.preventDefault();
        $('.testimonial-next').trigger('click');
    });

        // portfolio-area slider style-1
        $(".review-slider__").slick({
            slidesToShow: 4,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            variableWidth: true,
            prevArrow:
                "<button type='button' class='testimonial-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow:
                "<button type='button' class='testimonial-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        autoplay: true,
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 991,
                    settings: {
                        autoplay: true,
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 554,
                    settings: {
                        autoplay: true,
                        slidesToShow: 1,
                    },
                },
            ],
        });

        // accordion
        $("#accordion").on("hide.bs.collapse show.bs.collapse", e => {
            $(e.target)
              .prev()
              .find("i:last-child")
              .toggleClass("fa-minus fa-plus");
          });
          

        /*
        Counter Js
        ============================*/
        // $(".counter").counterUp({
        //     delay: 10,
        //     time: 1000,
        // });

        /*
       Magnific Popup
       ============================*/
        // $(".video-play").magnificPopup({
        //     disableOn: 700,
        //     type: "iframe",
        //     mainClass: "mfp-fade",
        //     removalDelay: 160,
        //     preloader: false,
        //     fixedContentPos: false,
        // });

        /*
        Jquery Wow Js
        ============================*/
        // new WOW().init();
        if ($('.wow').length) {
            var wow = new WOW(
                {
                    boxClass: 'wow',      // animated element css class (default is wow)
                    animateClass: 'animated', // animation css class (default is animated)
                    offset: 0,          // distance to the element when triggering the animation (default is 0)
                    mobile: false,       // trigger animations on mobile devices (default is true)
                    live: true       // act on asynchronously loaded content (default is true)
                }
            );
            wow.init();
        }

        /*
       Jquery Nice Select Js
       ============================*/
        // $('select.select_option, select.wpcf7-select').niceSelect();

        /*
       Jquery Tilt Js
       ============================*/
        // $('.tilt-animate').tilt({
        //     maxTilt: 12,
        //     perspective: 1500,
        // })

        /*
        Scroll To Top Js
        ============================*/
        $(function () {
            $("#scrollTop").hide();
            var position = $(window).scrollTop();
            var timer;
            $(window).on('scroll', function () {
                var scrollTop = $(window).scrollTop();
                clearTimeout(timer);
                if (scrollTop > 100) {
                    if (scrollTop > position) {
                        $('#scrollTop').fadeOut();
                    } else {
                        $('#scrollTop').fadeIn();
                        timer = window.setTimeout(function() {
                            $("#scrollTop").fadeOut();
                        }, 3000);
                    }
                    position = scrollTop;
                } else {
                    $('#scrollTop').fadeOut();
                }
            });
            $(".scrollup-btn").click(function() {
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            });
        });
        /*
        Preeloader
        ============================*/
        $(window).on("load", function () {
            $("#preloader").fadeOut();
            $("#preloader-status").delay(200).fadeOut("slow");
            $("body").delay(200).css({"overflow-x": "hidden"});
        });

        // Custom-switch
        $('.switch').on('click', function() {

            $(".switch").toggleClass("active");
            $("#custom-switch").toggleClass("active");
            $('.yearly').toggleClass("active");
            $('.monthly').toggleClass("active");
        });
        // Price-card switch
    // $('.price-switch').on('click', function () {
    //     $('.switch-price-card').toggleClass(' reverse ');
    // });
        // Accordion
        $('.accordion-item').on('click', function() {

            $(this).toggleClass("active");
        });
        // animate.css
        // Function to check if an element is in the viewport
  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to add animation class when element is in viewport
  function animateOnScroll() {
    const elements = document.querySelectorAll('.animated');
    elements.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add('activate-animation');
      }
    });
  }

  // Attach the scroll event listener to trigger animations
  window.addEventListener('scroll', animateOnScroll);

  // Initially trigger animations for elements in the viewport on page load
  animateOnScroll();

    });
})(jQuery);

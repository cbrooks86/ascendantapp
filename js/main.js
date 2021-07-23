
(function ($) {
  "use strict";

 //wow animation
  new WOW().init();
  //Mobile nav
  var $main_nav = $('#main-nav');
  var $toggle = $('.toggle');
  var defaultOptions = {
    disableAt: false,
    customToggle: $toggle,
    levelSpacing: 10,
     navTitle: 'Menu',
     levelTitles: true,
    levelTitles: true,
     labelClose: false,
    levelTitleAsBack: true,
    levelOpen: 'expand',
    closeOnClick: true,
    insertClose: true,
    closeActiveLevel: true,
    insertBack: true
  };
  
	
	 
    

	
  const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Beliefs. Actions. Results. "];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});
	
  // Nav call plugin
  var Nav = $main_nav.hcOffcanvasNav(defaultOptions);

  //Sticky Header 
  function updateScroll() {
    if ($(window).scrollTop() >= 80) {
      $(".navfix").addClass('sticky');
    } else {
      $(".navfix").removeClass("sticky");
    }
  }
  $(function () {
    $(window).scroll(updateScroll);
    updateScroll();
	  
  });

  //Header mega menu
  var $nav = $('li.sbmenu');
  $nav.hover(
    function () {
      $(this).addClass('hover');
    },
    function () {
      $(this).removeClass('hover');
    }
  );

  //Video magnificPopup
  $('.video-link').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
  });

// Tooltips
        $('[data-toggle="tooltip"]').tooltip();

  //Owl-Carousel - Home hero card
  var owl = $('.service-card-prb');
  owl.owlCarousel({
    items: 4,
    loop: true,
    autoplay: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1
      },
      520: {
        items: 2
      },
      768: {
        items: 3
      },
      1200: {
        items: 3
      },
      1400: {
        items: 3
      },
      1600: {
        items: 3
      },
    }
  });
  //Owl-Carousel - Home testimonial
  var owl = $('.testimonial-card-a');
  owl.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1024: {
        items: 1
      },
      1400: {
        items: 1
      }
    }
  });

  //Owl-Carousel - video testimonial
  var owl = $('.video-testimonials');
  owl.owlCarousel({
    items: 2,  
    nav: false,
    dots: false,
    autoplay: false,
    autoplayTimeout: 3500,  
    smartSpeed: 1500,
    margin: 20,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1024: {
        items: 2
      },
      1400: {
        items: 2
      }
    }
  });

  //Owl-Carousel - case-study
  var owl = $('.project-screens');
  owl.owlCarousel({
    items: 4,
    loop: true,
    autoplay: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1
      },
      520: {
        items: 2
      },
      768: {
        items: 3
      },
      1200: {
        items: 3
      },
      1400: {
        items: 3
      },
      1600: {
        items: 3
      },
    }
  }); 

   //Owl-Carousel -portfolio slide 
  var owl = $('.porto-slide');
  owl.owlCarousel({ 
    items:1,  
    loop: true,
    autoplay: true,
    margin: 10,
    nav: false,
    dots: true,
    stagePadding: 50,
    autoplayTimeout: 350000,
    autoplayHoverPause: true,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1,
        stagePadding:0
      },
      520: {
         items: 1,
        stagePadding:0
      },
      768: {
         items: 1,
        stagePadding:0
      },
      1200: {
        items: 1
      },
      1400: {
        items: 1
      },
      1600: {
        items: 1
      },
    }
  }); 

    //Owl-Carousel -single slide
  var owl = $('.single-slide');
  owl.owlCarousel({ 
    items:1,  
    loop: true,
    autoplay: true,
    margin: 10,
    nav: false,
    dots: true,
    stagePadding: 100,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
    smartSpeed: 2000,
     responsive: {
      0: {
        items: 1,
        stagePadding:0
      },
      520: {
         items: 1,
        stagePadding:0
      },
      768: {
         items: 1,
        stagePadding:0
      },
      1200: {
        items: 1
      },
      1400: {
        items: 1
      },
      1600: {
        items: 1
      },
    }
  });

      //Owl-Carousel - app page bages-slider
  var owl = $('.bages-slider');
  owl.owlCarousel({
    items: 4,
    loop: true,
    autoplay: true,
    centre:true,
    margin: 20,
    nav: false,
    dots: false,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 2
      },
      520: {
        items: 3
      },
      768: {
        items: 3
      },
      1200: {
        items: 3
      },
      1400: {
        items: 4
      },
      1600: {
        items: 4
      },
    }
  });

      //Owl-Carousel - app page bages-slider
  var owl = $('.logo-weworkfor');
  owl.owlCarousel({
    items: 4,
    loop: true,
    autoplay: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplayTimeout: 1800,
    autoplayHoverPause: false,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 3
      },
      520: {
        items: 3
      },
      768: {
        items: 4
      },
      1200: {
        items: 4
      },
      1400: {
        items: 5
      },
      1600: {
        items: 6
      },
    }
  });

  //  //Owl-Carousel - Home testimonial
  var owl = $('.testimonial-card-b');
  owl.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    dotsContainer: "#testimonials-avatar",
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1024: {
        items: 1
      },
      1400: {
        items: 1
      }
    }
  });

  

  //Counter Up	
  $(".counter").counterUp({
    delay: 10,
    time: 2500,
  });
  //Scroll to top
  $.scrollUp({
    animation: 'fade',
    scrollImg: {
      active: true,
      type: 'background'
    }
  });
  //Portfolio Filter		
  $('.card-list').imagesLoaded(function () {
    // init Isotope
    var $grid = $('.card-list').isotope({
      itemSelector: '.single-card-item',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-sizer'
      }
    });
    // filter items on button click
    $('.filter-menu').on('click', 'li', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({
        filter: filterValue
      });
    });
  });
  //for menu active class
  $('.filter-menu li').on('click', function (event) {
    $(this).siblings('.is-checked').removeClass('is-checked');
    $(this).addClass('is-checked');
    event.preventDefault();
  });


  // background image
  $("[data-background]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
  })

	
	
	
	$(document).ready(function() {
		$('a[href*=#]').bind('click', function(e) {
				e.preventDefault(); // prevent hard jump, the default behavior

				var target = $(this).attr("href"); // Set the target as variable

				// perform animated scrolling by getting top-position of target-element and set it as scroll target
				$('html, body').stop().animate({
						scrollTop: $(target).offset().top
				}, 600, function() {
						location.hash = target; //attach the hash (#jumptarget) to the pageurl
				});

				return false;
		});
});

$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();

		// Show/hide menu on scroll
		//if (scrollDistance >= 850) {
		//		$('nav').fadeIn("fast");
		//} else {
		//		$('nav').fadeOut("fast");
		//}
	
		// Assign active class to nav links while scolling
		$('.page-section').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
						$('.custom-nav a.active').removeClass('active');
						$('.custom-nav a').eq(i).addClass('active');
				}
		});
}).scroll();


	
	
	

})(jQuery);
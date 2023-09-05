$(document).ready(function () {
      $(".toggle-manu").click(function (e) {
            $("nav").toggleClass("nav-manu-bar");
      });
      $(".top-to-back").click(function (e) {
            $("html").animate({ "scrollTop": "0" })
      });
      $(".top-to-back").hide();
});
$(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
            $(".top-to-back").fadeIn();
            $("header").addClass("header-active");
      } else {
            $(".top-to-back").fadeOut();
            $("header").removeClass("header-active");
      }
});
$(document).ready(function () {
      $('.slider-owl-carousel').owlCarousel({
            loop: true,
            animateOut: 'fadeOut',
            nav: false,
            dots: false,
            autoplay: true,
            responsive: {
                  0: {
                        items: 1
                  },
                  1000: {
                        items: 1
                  }
            }
      })
      $('.custom1').owlCarousel({
            animateOut: 'slideOutDown',
            animateIn: 'flipInX',
            items: 1,
            margin: 30,
            stagePadding: 30,
            smartSpeed: 450
      });

});

$(document).ready(function () {
      $('.owl-carousel-1').owlCarousel({
            loop: true,
            margin: 20,
            nav: false,
            dots: false,
            responsive: {
                  0: {
                        items: 1
                  },
                  600: {
                        items: 2
                  },
                  1000: {
                        items: 3
                  }
            }
      })
      var owl = $('.owl-carousel-1');
      owl.owlCarousel();
      // Go to the next item
      $('.right-arrow-2').click(function () {
            owl.trigger('next.owl.carousel');
      })
      // Go to the previous item
      $('.left-arrow-1').click(function () {
            // With optional speed parameter
            // Parameters has to be in square bracket '[]'
            owl.trigger('prev.owl.carousel', [300]);
      })
});

$(document).ready(function () {
      $('.owl-carousel-2').owlCarousel({
            loop: true,
            margin: 20,
            nav: false,
            dots: true,
            responsive: {
                  0: {
                        items: 1
                  },

                  900: {
                        items: 2
                  }
            }
      })
});
$(document).ready(function () {
      $('.owl-carousel-3').owlCarousel({
            loop: true,
            margin: 20,
            nav: false,
            dots: true,
            responsive: {
                  0: {
                        items: 1
                  },
                  600: {
                        items: 2
                  },
                  1000: {
                        items: 3
                  }
            }
      })
      var owl = $('.owl-carousel-3');
      owl.owlCarousel();
      // Go to the next item
      $('.right-arrow-2').click(function () {
            owl.trigger('next.owl.carousel');
      })
      // Go to the previous item
      $('.left-arrow-1').click(function () {
            // With optional speed parameter
            // Parameters has to be in square bracket '[]'
            owl.trigger('prev.owl.carousel', [300]);
      })
});

$(document).ready(function () {
      $('.owl-carousel-4').owlCarousel({
            loop: true,
            margin: 20,
            nav: false,
            dots: true,
            responsive: {
                  0: {
                        items: 1
                  },
                  600: {
                        items: 2
                  },
                  1000: {
                        items: 4
                  }
            }
      })
      var owl = $('.owl-carousel-4');
      owl.owlCarousel();
      // Go to the next item
      $('.right-arrow-2').click(function () {
            owl.trigger('next.owl.carousel');
      })
      // Go to the previous item
      $('.left-arrow-1').click(function () {
            // With optional speed parameter
            // Parameters has to be in square bracket '[]'
            owl.trigger('prev.owl.carousel', [300]);
      })
});
$(document).ready(function () {
      $('.owl-carousel-5').owlCarousel({
            loop: true,
            margin: 20,
            nav: false,
            dots: true,
            responsive: {
                  0: {
                        items: 1
                  },
                  600: {
                        items: 2
                  },
                  1000: {
                        items: 3
                  }
            }
      })
      var owl = $('.owl-carousel-5');
      owl.owlCarousel();
      // Go to the next item
      $('.right-arrow-2').click(function () {
            owl.trigger('next.owl.carousel');
      })
      // Go to the previous item
      $('.left-arrow-1').click(function () {
            // With optional speed parameter
            // Parameters has to be in square bracket '[]'
            owl.trigger('prev.owl.carousel', [300]);
      })
});


// counter
var a = 0;
$(window).scroll(function () {

      var oTop = $('#counter').offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counter-value').each(function () {
                  var $this = $(this),
                        countTo = $this.attr('data-count');
                  $({
                        countNum: $this.text()
                  }).animate({
                        countNum: countTo
                  },

                        {

                              duration: 2000,
                              easing: 'swing',
                              step: function () {
                                    $this.text(Math.floor(this.countNum));
                              },
                              complete: function () {
                                    $this.text(this.countNum);
                                    //alert('finished');
                              }

                        });
            });
            a = 1;
      }

});

// gallery

filterSelection("all") // Execute the function and show all 
function filterSelection(c) {
      var x, i;
      x = document.getElementsByClassName("column");
      if (c == "all") c = "";
      // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
      for (i = 0; i < x.length; i++) {
            w3RemoveClass(x[i], "show");
            if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
      }
}

// Show filtered elements
function w3AddClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) {
                  element.className += " " + arr2[i];
            }
      }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
                  arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
      }
      element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
      });
}

// 
$(document).ready(function () {
      $("#dropdown-parent #dropdwon-manu").click(function () {
            $(this).parent("#dropdown-parent").find(".dropdwon").slideToggle();
            $(this).parent("#dropdown-parent").prevAll("#dropdown-parent").find(".dropdwon").slideUp();
            $(this).parent("#dropdown-parent").nextAll("#dropdown-parent").find(".dropdwon").slideUp();

      });
});



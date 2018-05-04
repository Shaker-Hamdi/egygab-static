$(document).ready(function() {

    (function() {
        var backToTop = $('a.backToTop');

        backToTop.on('click', function(event) {
            $('html, body').animate({
                scrollTop: 0
            }, 300);

            event.preventDefault();
        });

        $(window).on('scroll', function() {
            var self = $(this),
                height = self.height() / 8,
                top = self.scrollTop();

            if (top > height) {
                if (!backToTop.hasClass("show")) {
                    backToTop.addClass("show");
                }
            } else {
                backToTop.removeClass("show");
            }
        });
    })();
	//Back to top button
	
	(function() {
        if ($("a.toggle-mobile-nav").length) {
            $("a.toggle-mobile-nav").on("click", function(event) {
                event.preventDefault();
                event.stopPropagation();

                $("body").toggleClass("show-mobile-nav");
                $("html").toggleClass("show-mobile-nav");
            });
        }
    })();
	//toggle Mobile Nav
	
	(function() {
        if ($(".rev_slider_wrapper").length) {
			$(".main-header").addClass("transparent");
        }
    })();
    //Add class to main-header if it's the home page

    (function() {
        if ($("a.play-video").length) {
            $("a.play-video").magnificPopup({
                type: "iframe"
            });
        }
    })();
    //magnificPopup (iframe)

    (function() {
		if ($(".project-gallery").length) {
            $(".interior ul").magnificPopup({
				type: "image",
				delegate: 'a',
                gallery: {
                    enabled: true
                }
			});
			
			$(".exterior ul").magnificPopup({
				type: "image",
				delegate: 'a',
                gallery: {
                    enabled: true
                }
            });
		}
		
		if ($(".project-updates").length) {
			$(".project-updates .left-gallery").each(function(index) {
				$(this).find("ul").magnificPopup({
					type: "image",
					delegate: 'a',
					gallery: {
						enabled: true
					}
				});
			});

			$(".project-updates .right-gallery").each(function(index) {
				$(this).find("ul").magnificPopup({
					type: "image",
					delegate: 'a',
					gallery: {
						enabled: true
					}
				});
			});
        }
    })();
    //magnificPopup (Photo Gallery)

    (function() {
        if ($("a.inquire-form").length) {
            $("a.inquire-form").magnificPopup({
                type: 'inline',
                preloader: false,
                focus: '#name',

                removalDelay: 500, //delay removal by X to allow out-animation

                // When elemened is focused, some mobile browsers in some cases zoom in
                // It looks not nice, so we disable it:
                callbacks: {
					open: function() {
						if(!navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)) {
							$('html').css('margin-right', 17);
						} else {
							$('html').css('margin-right', 0);
						}
					},
					close: function() {
						$('html').css('margin-right', 0);
					},
                    beforeOpen: function() {

                        if ($(window).width() < 700) {
                            this.st.focus = false;
                        } else {
                            this.st.focus = '#name';
                        }

                        this.st.mainClass = this.st.el.attr('data-effect');
                    }
                },

                midClick: true // allow opening popup on middle mouse click. Always set
            });
        }
    })();
    //magnificPopup (Form)

    (function() {
        if ($("#project-loaction").length) {

            function initialize() {
                var mapCanvas = document.getElementById("project-loaction");
                var LatLng = {
                    lat: 30.120714,
                    lng: 31.624231
                };
                var mapOptions = {
                    center: new google.maps.LatLng(30.120714, 31.624231),
                    zoom: 16,
                    mapTypeId: google.maps.MapTypeId.TERRAIN,
                    backgroundColor: "#B7912E",
                    scrollwheel: false
                }
                var map = new google.maps.Map(mapCanvas, mapOptions);

                var marker = new google.maps.Marker({
                    position: LatLng,
                    map: map,
                    title: "Project Name Goes Here"
                    // icon: 'images/ui/Pin-Hepca.png'
				});

            }

            initialize();
        }
    })();
	//Project Loaction map
	
	(function() {
        if ($("#our-loaction").length) {

            function initialize() {
                var mapCanvas = document.getElementById("our-loaction");
                var LatLng = {
                    lat: 30.120714,
                    lng: 31.624231
                };
                var mapOptions = {
                    center: new google.maps.LatLng(30.120714, 31.624231),
                    zoom: 16,
                    mapTypeId: google.maps.MapTypeId.TERRAIN,
                    backgroundColor: "#B7912E",
                    scrollwheel: false
                }
                var map = new google.maps.Map(mapCanvas, mapOptions);

                var marker = new google.maps.Marker({
                    position: LatLng,
                    map: map,
                    title: "Project Name Goes Here"
                    // icon: 'images/ui/Pin-Hepca.png'
				});

            }

            initialize();
        }
    })();
    //Contact Us map

    (function() {
	    $("a.delete").on("click", function(event) {
	        event.preventDefault();
	        swal({
	            title: "Error!",
	            text: "Here's my error message!",
	            type: "error",
	            confirmButtonText: "Cool"
	        });
	    });
    })();
    //Sweet Alert Plugin

    (function() {
        if(window.location.hash != "") {
            var element = window.location.hash;

        	if (element.indexOf("#_=_") >= 0) {
        		return false;
        	} else {
        		if($(element).length && $(element).hasClass("mfp-with-anim")) {

	                openMagnificPopup(window.location.hash, false);
	            }
        	}
        }
    })();
	//Open the popup if the hashtag is not empty and the popup exist
	
	$(".contact-form form").validate({
		errorElement: "span",
		rules: {
			email: {
				email: true
			},
			mobileNumber: {
				number: true
			}
		},
		submitHandler: function(form) {
			//
		}
	}); //contact info

	$("#project-inquiry form").validate({
		errorElement: "span",
		rules: {
			email: {
				email: true
			},
			mobileNumber: {
				number: true
			}
		},
		submitHandler: function(form) {
			//
		}
	}); //project-inquiry
});

function openMagnificPopup(element, checker) {

    var source,
        hasEffect;

    // console.log(element);

    if (checker === true) {
        // console.log("link");
        source = element.attr('href');
        hasEffect = true;
    } else {
        // console.log("not alink");
        source = element;
        hasEffect = false;
    }

    $.magnificPopup.open({
        items: {
            src: source
        },
        type: 'inline',
        preloader: false,
        focus: '#name',

        removalDelay: 500, //delay removal by X to allow out-animation

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
			open: function() {
				if(!navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)) {
					$('html').css('margin-right', 17);
				} else {
					$('html').css('margin-right', 0);
				}
			},
			close: function() {
				$('html').css('padding-right', 0);
			},
            beforeOpen: function() {

                if ($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }

                if (hasEffect) {
                    this.st.mainClass = element.attr('data-effect');
                }
            }
        },

        midClick: true // allow opening popup on middle mouse click. Always set
    });
}
//openMagnificPopup

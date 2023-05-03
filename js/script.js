!function(e){"use strict";e(document).ready((function(){var t=function(){if(navigator.userAgent.match(/Trident\/7\./)&&window.navigator.userAgent.indexOf("Windows Phone")<0)return 1},n=function(){if(window.navigator.userAgent.indexOf("MSIE 9.0")>0)return 1},a=function(){var t=e(window).height(),n=e(".fullscreen");device.mobile()&&device.landscape()&&e(window).width()<=768?n.css("height","425px"):n.css("height",t)};a(),e(window).resize((function(){a()})),device.tablet()||device.mobile()||n()||e(".animation").css({visibility:"hidden"}),Pace.on("done",(function(){e("#preloader").hide()})),Pace.on("hide",(function(){if(e("#nav-bar").hasClass("sticky-nav")){var t=e("#nav-bar");if(t.hasClass("top-bar"))e("#nav-header").waypoint((function(e){"down"===e?device.tablet()||device.mobile()?t.addClass("stick-it"):t.addClass("stick-it animated fadeInDownBig"):t.removeClass("stick-it animated fadeInDownBig")}),{offset:"-100%"});else if(t.hasClass("bottom-bar"))e("#nav-header").waypoint((function(e){"down"===e?device.tablet()||device.mobile()?t.addClass("stick-it"):t.addClass("stick-it animated fadeInDownBig"):"up"===e&&t.removeClass("stick-it animated fadeInDownBig")}),{offset:"-90px"})}if(e("nav ul#nav-menu").hasClass("nav-smooth-scroll")){var a=e("nav ul#nav-menu");e("#main-slider").waypoint((function(t){a.find("a").each((function(){e(this).removeClass("active")})),a.find("a").first().addClass("active")}),{offset:"-200px"}),e("#content section").waypoint((function(t){var n="#"+this.element.id;a.find("a").each((function(){n==e(this).attr("href")&&e(this).addClass("active").parent().siblings().find("a").removeClass("active")}))}),{offset:"-20px"})}if(e("#masonry-gallery").length){var i=e("#masonry-gallery");device.tablet()||device.mobile()?i.masonry({columnWidth:".grid-sizer",itemSelector:".masonry-col",gutter:".gutter-sizer",transitionDuration:0}):i.masonry({columnWidth:".grid-sizer",itemSelector:".masonry-col",gutter:".gutter-sizer",transitionDuration:"1s"})}device.tablet()||device.mobile()||n()||function(){if(window.navigator.userAgent.indexOf("MSIE 10.0")>0)return 1}()||function(){if(navigator.userAgent.match(/Trident\/7\./))return 1}()||function(){if(-1!=navigator.userAgent.indexOf("Safari")&&-1!=navigator.userAgent.indexOf("Mac"))return 1}()||(e(".image-divider").css("background-attachment","fixed"),e(window).stellar({horizontalScrolling:!1,responsive:!0})),device.tablet()||device.mobile()||n()||e(".animation").each((function(){new Waypoint({element:this,handler:function(t){e(this.element).css({visibility:"visible"}).addClass("animated")},offset:"95%"})}))}));var i,s,o=window.location.href.substr(window.location.href.lastIndexOf("/")+1);e("nav ul#nav-menu").hasClass("nav-smooth-scroll")||(""==o||"#"==o.charAt(0)?e("nav ul#nav-menu > li:first-child > a").addClass("active"):e("nav ul#nav-menu li a").each((function(){var t=e(this).attr("href");if(window.location.href.indexOf(t)>-1)return e(this).addClass("active"),i=e(this).parents().eq(2).children(),s=e(this).parents().eq(4).children(),i.is("a")&&i.addClass("active"),s.is("a")&&s.addClass("active"),!1}))),e(".nav-smooth-scroll a").smoothScroll({speed:1e3,offset:-80}),e("#mobile-nav").on("click",(function(t){t.preventDefault(),e("#nav-menu").toggleClass("open")})),e("#nav-menu.nav-smooth-scroll").on("click",(function(t){var n=e(t.target);return n.is("a")&&"#"!==n.attr("href")&&n.parents("#nav-menu").removeClass("open"),!1})),e(window).width()>991&&e("#nav-menu").doubleTapToGo(),e(window).width()>991&&e(window).width()<=1024&&e("#nav-menu ul ul").addClass("on-left");var l=function(){e("#main-slider .slide-image").each((function(){var t=e(this).data("mobile-image-position"),n=e(this).data("tablet-image-position");e(window).width()<="480"&&""!=t?e(this).css("background-position",t):e(window).width()<="991"&&""!=n&&e(this).css("background-position",n)}))};l(),e(window).resize((function(){l()}));var r=e(".photo-item");(device.tablet()||device.mobile())&&(t()||r.find(".hover-animation").css("transition","none")),r.on("touchstart touchend",(function(e){}));var c=new Date;if(c=new Date(2024,4,31),e(".countdown").countdown({until:c,format:"DHMS"}),e("#gift-carousel").length){var d=e("#gift-carousel");if(d.owlCarousel({items:4,autoPlay:2e3,stopOnHover:!0,pagination:!0}),device.tablet()||device.mobile())d.data("owlCarousel").stop()}if(e("#places-carousel").length){var v=e("#places-carousel");if(v.owlCarousel({items:3,itemsDesktop:[1199,3],itemsDesktopSmall:[979,2],autoPlay:2e3,stopOnHover:!0,pagination:!0,navigation:!1}),device.tablet()||device.mobile())v.data("owlCarousel").stop()}if(e("#events-carousel").length){var f=e("#events-carousel");if(f.owlCarousel({items:3,itemsDesktop:[1199,3],itemsDesktopSmall:[979,2],autoPlay:2e3,stopOnHover:!0,pagination:!0,navigation:!1}),device.tablet()||device.mobile())f.data("owlCarousel").stop()}e("a.smooth-scroll").smoothScroll({speed:1e3}),e(".magnific-zoom").length&&e(".magnific-zoom").magnificPopup({type:"image",image:{titleSrc:"title"},callbacks:{open:function(){},afterClose:function(){}}}),e(".magnific-zoom-gallery").length&&e(".magnific-zoom-gallery").magnificPopup({type:"image",image:{titleSrc:"title"},gallery:{enabled:!0},callbacks:{open:function(){},afterClose:function(){}}}),e(".magnific-ajax").length&&e(".magnific-ajax").magnificPopup({type:"ajax",ajax:{settings:{cache:!1}},callbacks:{open:function(){},afterClose:function(){}}}),(device.tablet()||device.mobile())&&(t()||e(".de-icon, .de-icon i").css("transition","none")),e(".popup-video-button").each((function(){e(this).on("click",(function(t){t.preventDefault(),e(this).hasClass("on-photo-item")?e(this).closest(".photo-item").next().fadeIn().find("video").get(0).play():e(this).next().fadeIn().find("video").get(0).play()}))})),e(".popup-video-wrapper").on("click",(function(t){t.target===this&&(e(this).fadeOut(),e(this).find(".popup-video").get(0).pause())})),e(".popup-map-wrapper").on("click",(function(t){t.target===this&&e(this).fadeOut()})),e("#rsvpform").length&&e("#rsvpform").ajaxrsvp(),e(".ajax-checkbox").on("click",(function(t){var n=e(t.target);n.is(".custom-option-icon")&&n.toggleClass("active-icon")})),e(".ajax-radio").on("click",(function(t){var n=e(t.target);n.is(".custom-option-icon")&&(n.parent().hasClass("radio")?n.addClass("active-icon").parent().siblings().children(".custom-option-icon").removeClass("active-icon"):n.addClass("active-icon").siblings().removeClass("active-icon"))})),e("#setting-button").on("click",(function(t){t.preventDefault(),e("#setting-button i").hasClass("de-icon-cog")?(e("#options-setting").addClass("move-right"),e("#setting-button i").removeClass("de-icon-cog"),e("#setting-button i").addClass("de-icon-cancel-3")):(e("#options-setting").removeClass("move-right"),e("#setting-button i").removeClass("de-icon-cancel-3"),e("#setting-button i").addClass("de-icon-cog"))}));var u="default",h="white";e("#coral").on("click",(function(t){t.preventDefault(),e("link[rel*=skin]").remove(),e("head").append('<link rel="stylesheet skin" href="css/skin/coral/style.css" type="text/css" />'),"color"==h&&(e("link[rel*=navbar]").remove(),e("head").append('<link rel="stylesheet navbar" href="css/skin/coral/navbar-style.css" type="text/css" />')),u="coral"})),e("#coral-red").on("click",(function(t){t.preventDefault(),e("link[rel*=skin]").remove(),e("head").append('<link rel="stylesheet skin" href="css/skin/coral-red/style.css" type="text/css" />'),"color"==h&&(e("link[rel*=navbar]").remove(),e("head").append('<link rel="stylesheet navbar" href="css/skin/coral-red/navbar-style.css" type="text/css" />')),u="coral-red"})),e("#lapis").on("click",(function(t){t.preventDefault(),e("link[rel*=skin]").remove(),e("head").append('<link rel="stylesheet skin" href="css/skin/lapis/style.css" type="text/css" />'),"color"==h&&(e("link[rel*=navbar]").remove(),e("head").append('<link rel="stylesheet navbar" href="css/skin/lapis/navbar-style.css" type="text/css" />')),u="lapis"})),e("#light-teal").on("click",(function(t){t.preventDefault(),e("link[rel*=skin]").remove(),e("head").append('<link rel="stylesheet skin" href="css/skin/light-teal/style.css" type="text/css" />'),"color"==h&&(e("link[rel*=navbar]").remove(),e("head").append('<link rel="stylesheet navbar" href="css/skin/light-teal/navbar-style.css" type="text/css" />')),u="light-teal"})),e("#tan").on("click",(function(t){t.preventDefault(),e("link[rel*=skin]").remove(),e("head").append('<link rel="stylesheet skin" href="css/skin/tan/style.css" type="text/css" />'),"color"==h&&(e("link[rel*=navbar]").remove(),e("head").append('<link rel="stylesheet navbar" href="css/skin/tan/navbar-style.css" type="text/css" />')),u="tan"})),e("#reset-color").on("click",(function(t){t.preventDefault(),e("link[rel*=skin]").remove(),"color"==h&&(e("link[rel*=navbar]").remove(),e("head").append('<link rel="stylesheet navbar" href="css/skin/default/navbar-style.css" type="text/css" />')),u="default"})),e("#white-navbar").on("click",(function(t){t.preventDefault(),e("#white-navbar span").addClass("active"),e("#color-navbar span").removeClass("active"),h="white",e("link[rel*=navbar]").remove()})),e("#color-navbar").on("click",(function(t){t.preventDefault(),e("#color-navbar span").addClass("active"),e("#white-navbar span").removeClass("active"),h="color",e("link[rel*=navbar]").remove(),e("head").append('<link rel="stylesheet navbar" href="css/skin/'+u+'/navbar-style.css" type="text/css" />')}))}))}(jQuery);
(function(){
    function openNav() {
        $("#mySidenav").addClass("openNavLeft");
        $("body").css("overflow", "hidden");
        document.getElementById("leftOverlay").style.display = "block";
        $(".install-tuts-icon").addClass("hide");
    }

    function closeNav() {
        $("#mySidenav").removeClass("openNavLeft");
        $("body").css("overflow", "auto");
        document.getElementById("leftOverlay").style.display = "none";
        $(".install-tuts-icon").removeClass("hide");
    }

    $('#close-mobile-nav').click(closeNav);

    var mainEl = ".main", mainElWi = $(mainEl).outerWidth();
    $(window).resize(function() {
        mainElWi = $(mainEl).outerWidth();
    });
    odoo.openNav = openNav;
    odoo.closeNav = closeNav;
    jQuery(document).ready(function(e) {
        function t(t) {
            e(t).bind("click", function(t) {
                t.preventDefault();
                e(this).parent().fadeOut()
            })
        }
        e(".dropdown-toggle").click(function() {
            var t = e(this).parents(".button-dropdown").children(".dropdown-menu").is(":hidden");
            e(".button-dropdown .dropdown-menu").hide();
            e(".button-dropdown .dropdown-toggle").removeClass("active");
            if (t) {
                e(this).parents(".button-dropdown").children(".dropdown-menu").toggle().parents(".button-dropdown").children(".dropdown-toggle").addClass("active")
            }
        });
        e(document).bind("click", function(t) {
            var n = e(t.target);
            if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-menu").hide();
        });
        e(document).bind("click", function(t) {
            var n = e(t.target);
            if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-toggle").removeClass("active");
        })
    });
    //$(window).scroll(function() {
    //    if ($(this).scrollTop() > 0) {
    //        $("header .header_bottom").addClass("green");
    //    } else {
    //        $("header .header_bottom").removeClass("green");
    //    }
    //});
    $(document).ready(function() {
        var $searchTrigger = $('[data-ic-class="search-trigger"]'),
            $searchInput = $('[data-ic-class="search-input"]'),
            $searchClear = $('[data-ic-class="search-clear"]');
        $searchTrigger.click(function() {
            var $this = $('[data-ic-class="search-trigger"]');
            $this.addClass('active');
            $searchInput.focus();
        });
        $searchInput.blur(function() {
            if ($searchInput.val().length > 0) {
                return false;
            } else {
                $searchTrigger.removeClass('active');
            }
        });
        $searchClear.click(function() {
            $searchInput.val('');
        });
        $searchInput.focus(function() {
            $searchTrigger.addClass('active');
        });
    });
    $(document).ready(function(e) {
        var adjsutDrawerHeight = function() {
            var windowHeight = $(window).height();
            var adjustedHeight = windowHeight - $("#mySidenav .drawer-logo").height();
            $("#mySidenav .inner-scroller").height(adjustedHeight);
        };
        adjsutDrawerHeight();
        $(window).resize(function() {
            adjsutDrawerHeight();
        })
        $(".non-clickable").on("click", function(e) {
            $(this).next("a").next("ul").slideToggle();
            $(this).parents("li").toggleClass("menu-open");
        });
    });
    $(document).ready(function() {
        $('.collapse.in').prev('.panel-heading').addClass('active');
        $('#accordion, #bs-collapse').on('show.bs.collapse', function(a) {
            $(a.target).prev('.panel-heading').addClass('active');
        }).on('hide.bs.collapse', function(a) {
            $(a.target).prev('.panel-heading').removeClass('active');
        });
    });

    (function() {
        var parallax = document.querySelectorAll(".parallax"),
            speed = 0.5;
        window.onscroll = function() {
            [].slice.call(parallax).forEach(function(el, i) {
                var windowYOffset = window.pageYOffset,
                    elBackgrounPos = "0 " + (windowYOffset * speed) + "px";
                el.style.backgroundPosition = elBackgrounPos;
            });
        };
    })();
    $(document).ready(function() {
        var s = $("#sticker");
        var pos = s.position();
        $(window).scroll(function() {
            var windowpos = $(window).scrollTop();
            if ($(this).scrollTop() > 0) {
                s.addClass("stick");
            } else {
                s.removeClass("stick");
            }
        });
    });
    $(document).ready(function() {
        var isRtl = $("body").hasClass("rtl"),
            punchout = function() {
                $(".makeThisFeatured").each(function() {
                    var isImage = $(this).length,
                        isIframe = $(this).find("iframe").length,
                        isTwitterIframe = $(this).find(".media__item--twitter").length;
                    if (isImage || !isIframe) {
                        if (!isTwitterIframe)
                            if (isRtl) {
                                var offsetRight = Math.round(Math.max(0, $(window).width() - $(this).outerWidth() - $(this).offset().left)),
                                    marginRight = 0 - offsetRight;
                                $(this).css("margin-right", marginRight + "px"), $(this).css("width", $(window).width()), offsetRight = Math.round(Math.max(0, $(window).width() - $(this).outerWidth() - $(this).offset().left)), marginRight = 0 - offsetRight + marginRight, 0 !== offsetRight && 0 !== marginRight && $(this).css("margin-right", marginRight + "px")
                            } else {
                                var offsetLeft = Math.round(Math.max(0, $(this).offset().left)),
                                    marginLeft = 0 - offsetLeft;
                                $(this).css("margin-left", marginLeft + "px"), $(this).css("width", $(window).width()), offsetLeft = Math.round(Math.max(0, $(this).offset().left)), marginLeft = 0 - offsetLeft + marginLeft, 0 !== offsetLeft && 0 !== marginLeft && $(this).css("margin-left", marginLeft + "px")
                            }
                        isImage ? $(this).find("img").css("width", "100%") : isIframe && $(this).find("iframe").css("width", "100%"), $(this).addClass("makeThisFeatured"), $(this).css("max-width", "inherit")
                    }
                })
            };
        $(window).resize(punchout), punchout()
    });
})();

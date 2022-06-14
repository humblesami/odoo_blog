(function () {

    let uid = 'none';
    function check_user(){
        let user_class = 'o_connected_user';
        let org = window.location.origin + '';
        $.get(org + '/auth/get_user_id').then(function(uid){
            if(!isNaN(uid)){
                //console.log(uid,2);
                let user_menu_bar = $('#oe_main_menu_navbar');
                user_menu_bar.css('display', 'grid');
                if(!$('body').hasClass(user_class))
                {
                    $('body').addClass(user_class);
                }
            }
            else{
                //console.log(uid,3);
                if($('body').hasClass(user_class))
                {
                    $('body').removeClass(user_class);
                }
            }
        }).fail(function(){
            //console.log(uid,3);
            $('body').removeClass(user_class);
        });
    }

    let els = [];
    function set_image_heights(){
        els = document.querySelectorAll('.bg_image_div:not(.adjusted)');
        for(let el of els){
            let height = el.clientWidth * 0.587;
            let height_to_apply = height + 'px';
            el.style.height = height_to_apply;
            el.classList.add("adjusted");
            if(el.nextElementSibling)
            {
                el.nextElementSibling.remove();
            }
            if(el.nextElementSibling)
            {
                el.nextElementSibling.remove();
            }
            el.classList.remove("o_record_cover_component");
            el.parentNode.classList.remove("o_half_screen_height")
            el.parentNode.classList.remove("o_full_screen_height");
        }
        //console.log('Setting heights of => '+els.length+' images');
    }


    function on_css_wait_time_out(){
        css_load_timeout = setTimeout(function(){
            if(window.css_waiter.afe_loaded){
                show_dom('Failed loading css');
            }
        }, 500);
        //console.log("Time out should be called in 500ms");
    }

    let css_load_timeout = undefined;
    function show_dom(args) {
        if(css_load_timeout)
        {
            clearTimeout(css_load_timeout);
        }
        if($('body').hasClass('o_connected_user')){
            check_user();
            //console.log('checking user');
        }
        //set_image_heights();
        console.log(args + ', Showing wrap');
        $('body').css('background-color', '#fff');
        $('.spinner').first().hide();
        $('#wrapwrap').show();
    }

    window.css_waiter.wait_or_execute(function(){
        show_dom('Assets loaded');
    });
    if(!window.css_waiter.afe_loaded)
    {
        on_css_wait_time_out();
    }
})()
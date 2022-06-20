(function () {
    if(!window.on_front_end){
        return false;
    }
    let uid = 'none';
    console.log("It will show dom")
    function check_user(){
        let user_class = 'o_connected_user';
        let org = window.location.origin + '';
        $.get(org + '/auth/get_user_id').then(function(uid){
            if(!isNaN(uid)){
                let user_menu_bar = $('#oe_main_menu_navbar');
                user_menu_bar.css('display', 'grid');
                if(!$('body').hasClass(user_class))
                {
                    $('body').addClass(user_class);
                }
                console.log('User available');
            }
            else{
                //console.log(uid,3);
                if($('body').hasClass(user_class))
                {
                    $('body').removeClass(user_class);
                }
                console.log('User unavailable');
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
            let el_width = $(el).width();
            if(!el_width){
                el_width = $(el).parent().width();
            }
            if(!el_width){
                console.log(el.parentNode, 'has no width');
            }
            else{
                el_width = parseFloat(el_width);
            }
            //console.log(el_width, 111);
            let height = el_width * 0.587;
            let height_to_apply = height + 'px';
            //let img_inside = el.children[0];
            //img_inside.setAttribute('height', height_to_apply);
            //img_inside.style.height = height_to_apply;
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
            if(!window.css_waiter.afe_loaded){
                console.log('Fe assets not loaded in 2 seconds');
                $('body').css('background-color', '#fff');
                $('.spinner').first().hide();
                $('#wrapwrap').show();
            }
        }, 2000);
        //console.log("Time out should be called in 500ms");
    }

    let css_load_timeout = undefined;
    function show_dom(args) {
        if(css_load_timeout)
        {
            clearTimeout(css_load_timeout);
        }
        check_user();
        console.log(args + ', Showing wrap');
        $('body').css('background-color', '#fff');
        $('.spinner').first().hide();
        $('#wrapwrap').show();
        set_image_heights();
    }

    window.css_waiter.wait_or_execute(function(){
        show_dom('Assets loaded');
    });
    if(!window.css_waiter.afe_loaded)
    {
        on_css_wait_time_out();
    }
})()
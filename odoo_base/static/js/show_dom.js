(function () {

//    let links = document.querySelectorAll('link[type="text/css"]');
//    console.log(links.length + ' css files');
//    for(let link of links){
//        link.onload = function(){
//            console.log(link.href);
//        }
//    }

    let if_css_failed = setTimeout(function(){
        let message = 'Failed loading css';
        show_dom(message);
        console.log(message);
    }, 25000);

    function show_dom(args) {
        let main_loader = document.getElementById('css_waiter_dom');
        if(main_loader)
        {
            main_loader.style.display = ' none';
        }
        let el = document.querySelector('button[data-target="#top_menu_collapse"]');
        if(el)
        {
            el.style.visibility = 'visible';
        }
        clearTimeout(if_css_failed);
        //set_image_heights();
        $('#edit-page-menu').css('visibility', 'visible');
        console.log(args + ', Showing wrap');
        if($('body').hasClass('o_connected_user')){
            check_user();
            console.log('checking user');
        }
        document.getElementById('wrapwrap').style.display = 'block';
    }

    let uid = 'none';
    function check_user(){
        let user_class = 'o_connected_user';
        let org = window.location.origin + '';
        $.get(org + '/auth/get_user_id').then(function(uid){
            //console.log(uid,1);
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

    window.css_waiter.wait_or_execute(function(){
        show_dom('All loaded');
    });

})()
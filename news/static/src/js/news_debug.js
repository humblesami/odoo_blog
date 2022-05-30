(function(){
    function check_user(){
        let org = window.location.origin + '';
        $.get(org + '/auth/get_user_id').then(function(uid){
            //console.log(uid,1);
            if(!isNaN(uid)){
                console.log(uid,2);
                $('#oe_main_menu_navbar').css('visibility', 'visible');
            }
            else{
                console.log(uid,3);
                $('#oe_main_menu_navbar').hide();
                $('body').removeClass('o_connected_user');
            }
        }).fail(function(){
            console.log(uid,3);
            $('body').removeClass('o_connected_user');
        });
    }
    check_user();

    (function(){
        let counts = 0;
        let check1 = 0;
        let check2 = 0;
        let wrappers = [];
        let count_limit = 5;
        function adjust_image_heights(){
            counts += 1;
            if(check2){
                console.log('Just a cross test, should not be executed ever');
                clearInterval(waiter);
                return;
            }
            if(counts >= count_limit){
                console.log(count_limit + ' counts did nothing ');
                if(check1){
                    console.log('wrappers found without images');
                    wrappers.css('visibility', 'visible');
                }
                clearInterval(waiter);
                return;
            }
            if(!wrappers.length)
            {
                wrappers = $('#o_wblog_posts_loop, .dynamic_snippet_template');
            }
            else{
                count_limit = 20;
            }
            let els = $('.bg_image_div:not(.adjusted)');
            if(!els.length){
                if(wrappers.length){
                    check1 = 1;
                }
                return;
            }
            else{
                if(!wrappers.length){
                    console.log('images found without wrappers');
                }
                else{
                    console.log('images found');
                }
                check2 = 1;
            }
            els.each(function(i, el){
                el = $(el);
                let width = el.width();
                let height = width * 0.5874;
                let height_to_apply = height+'px';
                el.height(height_to_apply).addClass('adjusted');
                el.next().remove();
                el.next().remove();
                el.removeClass('o_record_cover_component');
                el.parent().removeClass('o_half_screen_height').removeClass('o_full_screen_height');
            });
            console.log('counts => ' +counts);
            wrappers.css('visibility', 'visible');
            clearInterval(waiter);
        }
        let waiter = setInterval(adjust_image_heights, 200);
    });

})();
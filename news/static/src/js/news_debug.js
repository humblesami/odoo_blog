(function(){
    let counts = 0;
    $.get('/news/get-user-id').then(function(uid){
        if(!isNAN(uid)){
            $('#oe_main_menu_navbar').not('.adjusted').show().addClass('adjusted');
        }
    }).fail(function(){});


    let check1 = 0;
    let check2 = 0;
    function adjust_image_heights(){
        counts += 1;
        console.log('counts => ' +counts);
        if(!check1 && $('#o_wblog_posts_loop, .dynamic_snippet_template').length){
            $('#o_wblog_posts_loop, .dynamic_snippet_template').not('.adjusted').css('visibility', 'visible').addClass('adjusted');
            check1 = 1;
        }
        if(counts >= 10){
            clearInterval(waiter);
        }
        if(check2){
            if(check1){
                clearInterval(waiter);
            }
            return;
        }
        let els = $('.bg_image_div:not(.adjusted)');
        if(!els.length){
            return;
        }
        else{
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
        $('#o_wblog_posts_loop, .dynamic_snippet_template').css('visibility', 'visible');
    }
    adjust_image_heights();
    let waiter = setInterval(adjust_image_heights, 200);
})();
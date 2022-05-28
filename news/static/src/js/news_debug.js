(function(){
    let counts = 0;
    function adjust_image_heights(){
        let els = $('.bg_image_div:not(.adjusted)');
        counts += 1;
        $('#o_wblog_posts_loop, .dynamic_snippet_template').not('.adjusted').css('visibility', 'visible').addClass('adjusted');
        $('#oe_main_menu_navbar')not('.adjusted').show().addClass('adjusted');
        console.log(111);
        if(counts >= 10){
            clearInterval(waiter);
        }
        if(!els.length){
            return;
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
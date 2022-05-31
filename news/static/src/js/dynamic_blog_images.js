(function(){
    function set_image_heights(){
        let els = $('.bg_image_div:not(.adjusted)');
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
    }
    if (typeof $ === 'undefined') {
        setTimeout(function(){
            //console.log(2222);
            set_image_heights();
        }, 500);
    }
    else{
        //console.log(111);
        set_image_heights();
    }
})()
(function(){
    let counts = 0;
    function adjust_image_heights(){
        let els = $('.bg_image_div:not(.adjusted)');
        counts += 1;
        console.log(counts, 10, els.length);
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
//            el.parent().removeAttr('class').addClass('o_record_cover_container');
            el.parent().removeClass('o_half_screen_height').removeClass('o_full_screen_height');
        });
    }
    adjust_image_heights();
    let waiter = setInterval(adjust_image_heights, 200);
})();
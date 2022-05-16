(function(){
    let els = $('#o_wblog_post_top .bg_image_div');
    if(!els.length){
        els = $('article.o_wblog_post .bg_image_div');
    }
    if(!els.length){
        return;
    }
    let first_el = els.first();
    let width = first_el.width();
    let height = width * 0.5874;
    let height_to_apply = height+'px';

    els.each(function(i, el){
        el = $(el);
        el.height(height_to_apply);
        el.next().remove();
        el.next().remove();
        el.removeClass('o_record_cover_component');
        el.parent().removeClass('o_half_screen_height').removeClass('o_full_screen_height');
    });
})();
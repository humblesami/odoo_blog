(function(){
    let el = $('#o_wblog_post_top .bg_image_div').first();
    let width = el.width();
    let height = width * 0.5874;
    el.height(height+'px');
    el.next().remove();
    el.next().remove();
    el.removeClass('o_record_cover_component');
})();
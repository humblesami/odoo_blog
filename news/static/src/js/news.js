(function(){
    let el = $('#o_wblog_post_top .o_post_cover_image').first();
    let width = el.width();
    let height = width * 0.5874;
    el.height(height+'px');

    $('.breadcrumb_container nav.breadcrumb:first').removeClass('mb-3').removeClass('bg-transparent');
})();
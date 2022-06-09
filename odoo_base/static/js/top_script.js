(function(){

    let dom_shown = 0;
    let css_loaded = 0;

    function show_dom(what_is_loaded){
        if(dom_shown && what_is_loaded != 'both loaded'){
            return;
        }
        console.log('Showing dom with '+what_is_loaded);
        document.getElementById('css_waiter_dom').style.display = 'none';
        let nav_bar = document.getElementById('oe_main_menu_navbar');
        if (nav_bar){
            nav_bar.style.display = 'grid';
        }
        dom_shown = 1;
    }

    window.css_loaded = function(href, link){
        console.log(href);
        if(link.onload){
            link.onload=null;
        }
        if(href.endsWith('/web.assets_frontend.min.css') || href.endsWith('/web.assets_common.min.css')){
            css_loaded += 1;
            if(css_loaded == 2)
            {
                show_dom('both loaded');
            }
        }
    }

    console.log('Top script 2');
})();
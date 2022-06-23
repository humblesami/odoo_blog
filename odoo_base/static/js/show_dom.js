(function () {

    console.log('v8 Show dom');
    if(!window.is_website){
        return false;
    }

    let els = [];
    let uid = 'none';

    function set_image_heights(){
        els = document.querySelectorAll('.bg_image_div:not(.adjusted)');
        for(let el of els){
            let el_width = el.getBoundingClientRect().width;
            if(!el_width){
                el_width = el.parentNode.getBoundingClientRect().width;
            }
            if(!el_width){
                console.log(el.parentNode.outerHTML, 'has no width');
            }
            else{
                el_width = parseFloat(el_width);
            }
            //console.log(el_width, 111);
            let height = el_width * 0.587;
            let height_to_apply = height + 'px';
            //let img_inside = el.children[0];
            //img_inside.setAttribute('height', height_to_apply);
            //img_inside.style.height = height_to_apply;
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

    function handle_css_loading(){
        let css_links = document.querySelectorAll("head link[as='style']");
        for (let link of css_links){
            if(link.rel == 'stylesheet'){
                if(link.href.endsWith('/web.assets_frontend.min.css')){
                    show_dom('CSS pre loaded');
                }
            }
            else{
                link.onload = function(){
                    if(!link.loaded){
                        link.rel = 'stylesheet';
                        link.loaded = 1;
                        if(link.href.endsWith('/web.assets_frontend.min.css')){
                            show_dom('CSS now loaded');
                        }
                    }
                }
            }
        }
    };

    let css_load_timeout = setTimeout(function(){
        show_dom('Failed loading css');
    }, 2000);

    function show_dom(args) {
        if(css_load_timeout)
        {
            clearTimeout(css_load_timeout);
        }
        console.log(args + ', Showing wrap');
        document.body.style.backgroundColor = '#fff';
        document.querySelector('.spinner').style.display = 'none';
        document.getElementById('wrapwrap').style.display = 'block';
        set_image_heights();
    }

    handle_css_loading();

})()
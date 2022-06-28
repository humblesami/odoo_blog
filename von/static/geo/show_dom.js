(function(){
    function set_image_heights(){
        document.getElementById('page_wait_spinner').style.display = 'none';
        document.getElementById('wrapwrap').style.display = 'block';
        document.body.style.backgroundColor = '#fff';
        els = document.querySelectorAll('article img.lazyloaded:not(.adjusted)');
        console.log(els.length+' images');
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
            //let height = el_width * 0.587;
            let height = el_width * 0.75;
            let height_to_apply = height + 'px';
            el.style.height = height_to_apply;
            el.classList.add("adjusted");
        }
        //console.log('Setting heights of => '+els.length+' images');
    }
    let el = document.querySelector("link[as='style']");
    //console.log(el.href, 1111);
    if(el.rel == 'stylesheet'){
        console.log('already loaded '+new Date().getMilliseconds());
        el.rel = 'stylesheet';
        set_image_heights();
    }
    else{
        console.log('will load '+new Date().getMilliseconds());
        el.onload = null;
        el.onload = function(){
            console.log('now loaded '+new Date().getMilliseconds());
            el.rel = 'stylesheet';
            set_image_heights();
        };
    }
    let user_nav = document.getElementById('oe_main_menu_navbar');
    if(user_nav)
    {
        user_nav.style.display = 'grid';
    }
})()
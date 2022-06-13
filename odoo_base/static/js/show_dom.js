(function () {
    let if_css_failed = setTimeout(function(){
        let message = 'Failed loading css';
        show_dom(message);
        console.log(message);
    }, 1500);
    function show_dom(args) {
        document.getElementById('css_waiter_dom').style.display = ' none';
        let el = document.querySelector('button[data-target="#top_menu_collapse"]');
        if(el)
        {
            el.style.visibility = 'visible';
        }
        clearTimeout(if_css_failed);
        //set_image_heights();
    }

    let els = [];
    function set_image_heights(){
        els = document.querySelectorAll('.bg_image_div:not(.adjusted)');
        for(let el of els){
            let height = el.clientWidth * 0.587;
            let height_to_apply = height + 'px';
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

    window.css_waiter.wait_or_execute(function(){
        show_dom('All loaded');
    });

    console.log('show dom 5');

})()
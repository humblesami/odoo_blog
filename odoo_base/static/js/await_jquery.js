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

    let if_css_not_loaded = setTimeout(function(){
        show_dom('nothing loaded');
    }, 1000);

    window.css_loaded = function(href, link){
        //console.log(href);
        if(link.onload){
            link.onload=null;
        }
        if(dom_shown){
            return;
        }
        if(href.endsWith('/web.assets_frontend.min.css') || href.endsWith('/web.assets_common.min.css')){
            css_loaded += 1;
            console.log(href);
            clearTimeout(if_css_not_loaded);
            if_css_not_loaded = setTimeout(function(){
                show_dom('With '+href+' only loaded');
            }, 500);
            if(css_loaded == 2)
            {
                clearTimeout(if_css_not_loaded);
                show_dom('both loaded');
            }
        }
    }
    window.await_jquery = {
        completed: 0,
        functions : [],
        exec_on_ready: function(awaiting_function){
            if(window.await_jquery.completed){
                console.log('Executed without wait');
                awaiting_function();
            }
            else{
                window.await_jquery.functions.push(awaiting_function);
            }
        },
    };

    if(typeof $ == 'undefined'){
        let ref_script = document.getElementById('web.layout.odooscript');
        let lazy_js_found = false;
        let sibling = ref_script.nextElementSibling;
        let breaker = 0;
        while(!lazy_js_found && sibling && breaker <= 10){
            breaker += 1;
            if(sibling){
                let src = sibling.src;
                if(!src){
                    src = sibling.getAttribute('data-src');
                }
                if(src){
                    if(src.endsWith('web.assets_common_lazy.min.js')){
                        lazy_js_found = true;
                        sibling.onload = function(){
                            window.await_jquery.completed = 1;
                            for(let fun of window.await_jquery.functions){
                                fun();
                            }
                            console.log('Executed waiting functions after jquery loaded');
                        };
                    }
                }
            }
            else{
                console.log('No next sibling of ', ref_script)
                break;
            }
            ref_script = sibling;
            sibling = sibling.nextElementSibling;
        }
        if(!lazy_js_found){
            console.log('Jquery wait failed after '+breaker);
        }
        else{
            //console.log('Jquery wait is defined after '+breaker);
        }
    }
    else{
        console.log('Executed waiting functions $ already loaded');
        for(let fun of window.await_jquery.functions){
            fun();
        }
    }

    console.log('Wait jquery 2');
})();
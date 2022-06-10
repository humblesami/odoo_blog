(function () {
    window.css_waiter = {
        css_loaded: 0,
        waiting_functions: [],
        on_file_loaded: function (link_el) {
            let waiter_obj = window.css_waiter;
            link_el.onload = undefined;
            let href = link_el.href;
            console.log(href);
            if(href.endsWith('/web.assets_frontend.min.css')){
                waiter_obj.css_loaded = 1;
                for (let fun of waiter_obj.waiting_functions) {
                    fun();
                }
                waiter_obj.waiting_functions = [];
            }
        },
        wait_or_execute: function (waiter_function) {
            let waiter_obj = window.css_waiter;
            if (waiter_obj.css_loaded) {
                waiter_function();
            }
            else {
                waiter_obj.waiting_functions.push(waiter_function);
            }
        }
    }
    console.log('On Loads 1');
})()
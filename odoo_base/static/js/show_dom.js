(function () {
    function show_dom(args) {
        document.getElementById('css_waiter_dom').style.display = ' none';
        console.log(args);
    }

    let failure_handler = setTimeout(function () {
        //show_dom('failed loading css');
        clearTimeout(failure_handler);
    }, 2900);


    function wait_and_load(){
        window.css_waiter.wait_or_execute(function(){
            if(failure_handler)
            {
                clearTimeout(failure_handler);
            }
        });
        window.css_waiter.wait_or_execute(function(){
            show_dom('All loaded');
        });
    }
    wait_and_load();
})()
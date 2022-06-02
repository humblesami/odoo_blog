(function(){
    function activate_purge(){
        $('#purge-menu a.purge').click(function(){
            let el = $(this);
            if(el.hasClass('all')){
                //console.log('purge all');
            }
            else if(el.hasClass('static')){
                //console.log('purge static');
            }
            else if(el.hasClass('current')){
                let current_page = window.location + '';
                //console.log('purge this', current_page);
            }
        });
    }
    window.await_jquery.exec_on_ready(activate_purge);
})();


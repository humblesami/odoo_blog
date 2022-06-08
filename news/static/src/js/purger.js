(function(){
    function activate_purge(){
        $('#purge-menu a.purge').click(function(){
            let current_page = window.location.origin + '';
            console.log(current_page);
            if(current_page.startsWith('http://localhost'), current_page.startsWith('http://127.0.0')){
                alert('Can not purge localhost');
                return;
            }
            let el = $(this);
            if(el.hasClass('all')){
                //console.log('purge all');
            }
            else if(el.hasClass('static')){
                //console.log('purge static');
            }
            else if(el.hasClass('current')){
                current_page = window.location + '';
                //console.log('purge this', current_page);
            }
        });
    }
    console.log('Purge page');
    window.await_jquery.exec_on_ready(activate_purge);
})();


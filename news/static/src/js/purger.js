(function(){
    function activate_purge(){
        console.log($('#purge-menu').length, 44, $('#purge-menu a.purge').length);
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
    if(typeof $ === 'undefined'){
        console.log(111);
        setTimeout(activate_purge, 500);
    }
    else{
        activate_purge();
        console.log(222);
    }
})();


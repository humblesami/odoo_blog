(function(){
    function activate_purge(){
        let loc_obj = window.location;
        let server_url = loc_obj.origin + '';
        if(server_url.startsWith('http://localhost') || server_url.startsWith('http://127.0.0')){
            $('#purge-menu').hide();
            return;
        }

        $('#purge-menu a.purge').click(function(){
            let current_page = loc_obj + '';
            let purge_req_options = {
                url: server_url + '/purge/cache',
                data: {
                    url: current_page,
                },
                success: function(data){
                    alert(data);
                },
                error: function(e){
                    alert('Some error in purge');
                    console.log(e);
                }
            }
            let el = $(this);
            if(el.hasClass('all')){
                purge_req_options.data.url = 'all';
            }
            $.ajax(purge_req_options);
        });
    }
    if($('#purge-menu a.purge').length)
    {
        activate_purge();
    }
    console.log('Purging activated and menu buttons shown');
    $('button[data-target="#top_menu_collapse"],#edit-page-menu').css('visibility', 'visible');
})();


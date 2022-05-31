(function(){
    let uid = 'none';
    function check_user(){
        let org = window.location.origin + '';
        $.get(org + '/auth/get_user_id').then(function(uid){
            //console.log(uid,1);
            if(!isNaN(uid)){
                //console.log(uid,2);
                $('#oe_main_menu_navbar').css('visibility', 'visible');
            }
            else{
                //console.log(uid,3);
                $('#oe_main_menu_navbar').hide();
                $('body').removeClass('o_connected_user');
            }
        }).fail(function(){
            //console.log(uid,3);
            $('body').removeClass('o_connected_user');
        });
    }
    check_user();
})();
(function(){
    console.log('On Scripts loaded 2');
    $('button[data-target="#top_menu_collapse"], #edit-page-menu').css('visibility', 'visible');

    let uid = 'none';
    function check_user(){
        let user_class = 'o_connected_user';
        let org = window.location.origin + '';
        $.get(org + '/auth/get_user_id').then(function(uid){
            //console.log(uid,1);
            if(!isNaN(uid)){
                //console.log(uid,2);
                let user_menu_bar = $('#oe_main_menu_navbar');
                if(user_menu_bar.css('display', 'none')){
                    user_menu_bar.css('display', 'grid');
                }
                if(!$('body').hasClass(user_class))
                {
                    $('body').addClass(user_class);
                }
            }
            else{
                //console.log(uid,3);
                if($('body').hasClass(user_class))
                {
                    $('body').removeClass(user_class);
                }
            }
        }).fail(function(){
            //console.log(uid,3);
            $('body').removeClass(user_class);
        });
    }
    check_user();
})();
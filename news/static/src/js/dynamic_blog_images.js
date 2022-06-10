(function(){
    function set_image_heights(){
        let els = document.querySelectorAll('.bg_image_div:not(.adjusted)');
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
    }
    set_image_heights();
})()
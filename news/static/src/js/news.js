(function(){
    let v = new Date().getSeconds();
    $('body').append('<script type="text/javascript" src="/news/static/src/js/news_debug.js?v='+v+'"></script>');
})();
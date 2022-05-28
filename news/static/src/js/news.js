(function(){
    let dt = new Date();
    let v = get.getMonth() + '-' + get.getDate() + '-' + dt.getHours() + '-' + dt.getMinutes() + '-' +  dt.getSeconds();
    //$('body').append('<link rel="stylesheet" href="/news/static/src/css/news.css"/>');
    $('body').append('<script type="text/javascript" src="/news/static/src/js/news_debug.js?v='+v+'"></script>');
})();
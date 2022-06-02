(function(){
    let dt = new Date();
    let v = dt.getMonth() + '-' + dt.getDate() + '-' + dt.getHours() + '-' + dt.getMinutes() + '-' +  dt.getSeconds();
    //$('body').append('<link rel="stylesheet" href="/news/static/src/css/news.css"/>');
    $('body').append('<script type="text/javascript" src="/news/static/src/js/news_debug.js?v=1"></script>');
})();
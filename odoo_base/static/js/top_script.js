$(window).unbind("unload");$(window).unbind("onunload");console.log('On unload added');window.on_front_end=1;window.css_waiter={css_loaded:0,afe_loaded:0,waiting_functions:[],on_file_loaded:function(i){let n=window.css_waiter;if(i.onload=void 0,i.href.endsWith("/web.assets_frontend.min.css")){css_waiter.afe_loaded=1;for(let i of n.waiting_functions)i();n.waiting_functions=[]}},wait_or_execute:function(i){let n=window.css_waiter;n.afe_loaded?i():n.waiting_functions.push(i)}};
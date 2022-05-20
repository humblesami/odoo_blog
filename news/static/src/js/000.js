odoo.define('news.s_dynamic_snippet', function (require) {
    'use strict';
    const publicWidget = require('web.public.widget');
    const DynamicSnippet = require('website.s_dynamic_snippet');

    class DynamicSnippet1 extends DynamicSnippet{
        constructor() {
            console.log(7888);
            super(...arguments);
            console.log(7888);
        }
        init() {
            console.log(7888);
            this._super.apply(this, arguments);
            this.xmlDependencies = ['/news/static/src/snippets/s_dynamic_snippet/000.xml'];
            this.template_key = 'news.s_dynamic_snippet.grid';
            console.log(7888);
        }
    }
    let DynamicSnippet2 = DynamicSnippet.extend({
        xmlDependencies: ['/news/static/src/snippets/s_dynamic_snippet/000.xml'],
        template_key: 'news.s_dynamic_snippet.grid',
        init: function(){
            console.log(7888);
            this._super.apply(this, arguments);
            this.xmlDependencies = ['/news/static/src/snippets/s_dynamic_snippet/000.xml'];
            this.template_key = 'news.s_dynamic_snippet.grid';
            console.log(7888);
        }
    });
    console.log(777);
    publicWidget.registry.dynamic_snippet = DynamicSnippet2;
    return DynamicSnippet2;

});

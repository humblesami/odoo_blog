# -*- coding: utf-8 -*-
{
    'name': "News Blog",

    'summary': """
        Short (1 phrase/line) summary of the module's purpose, used as
        subtitle on modules listing or apps.openerp.com
    """,

    'description': """
        Long description of module's purpose
    """,

    'author': "sami",
    'website': "http://www.yourcompany.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/14.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['website_blog'],

    # always loaded
    'assets': {
        'web.assets_frontend': [
            'news/static/src/js/news.js',
            'news/static/src/js/000.js',
        ],
        'web.assets_qweb': [
            'news/static/src/snippets/s_dynamic_snippet/000.xml',
            'news/static/src/xml/home.xml',
        ],
    },
    'data': [
        # 'security/ir.model.access.csv',
        'views/rewritten.xml',
        'views/news.xml',
        'views/website_blog.xml',
    ],
}

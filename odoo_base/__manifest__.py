# -*- coding: utf-8 -*-
{
    'name': "Customized Base",

    'summary': """
        Odoo Base app for minor UI customization
        """,

    'description': """
        Long description of module's purpose
    """,

    'author': "sami",
    'website': "http://www.yourcompany.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/13.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Base',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base','web'],
    'assets': {
        'web._assets_common_scripts': [
            # ('replace', 'web/static/lib/jquery/jquery.js', 'odoo_base/static/js/empty.js'),
        ],
        'web.assets_frontend_minimal': [
            'odoo_base/static/js/purger.js',
        ],
        'web.assets_frontend': [
            ('replace', 'website/static/src/scss/website.scss', 'odoo_base/static/css/website.scss'),
            # ('replace', 'website/static/src/js/content/menu.js', 'odoo_base/static/js/empty.js'),
            # ('replace', 'web/static/src/legacy/js/services/config.js', 'odoo_base/static/js/empty.js'),
            # ('replace', 'active_addons/web/static/src/legacy/js/core/widget.js', 'odoo_base/static/js/empty.js'),
            
        ],
        # 'web.assets_common_minimal': [
        #     'web/static/src/legacy/js/services/config.js',
        #     'active_addons/web/static/src/legacy/js/core/widget.js'
        #     'website/static/src/js/content/menu.js',
        # ],
    },
    # always loaded
    'data': [
        'views/views.xml',
    ],
    'application':True,
}

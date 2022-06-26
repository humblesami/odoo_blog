# -*- coding: utf-8 -*-
{
    'name': "VON News Blog",

    'summary': """
        VON
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
    'depends': ['news'],

    # always loaded
    'assets': {
    },
    'data': [
        'views/views.xml',
    ],
    'application': True,
}

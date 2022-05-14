# -*- coding: utf-8 -*-
# from odoo import http


# class News(http.Controller):
#     @http.route('/news/news', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/news/news/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('news.listing', {
#             'root': '/news/news',
#             'objects': http.request.env['news.news'].search([]),
#         })

#     @http.route('/news/news/objects/<model("news.news"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('news.object', {
#             'object': obj
#         })

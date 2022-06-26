from odoo import http
from odoo.http import request
from odoo.addons.website.controllers.main import Website


class NewsWebsite(Website):
    @http.route('/', type='http', auth="public", website=True, sitemap=True)
    def index(self, **kw):
        res = super().index()

        BlogPost = request.env['blog.post']
        blogs = BlogPost.search([])

        search = ''
        res.qcontext['posts'] = blogs
        res.qcontext['tag'] = None
        res.qcontext['active_tag_ids'] = []
        res.qcontext['search'] = search

        return res

# from odoo.addons.website.models.ir_qweb import QWeb
#
#
# class NewsQWeb(QWeb):
#     """ QWeb object for rendering stuff in the website context """
#
#     _inherit = 'ir.qweb'
#
#     def _post_processing_att(self, tagName, atts, options):
#         is_blog_post = False
#         if tagName == 'img' and 'loading' not in atts:
#             src = atts['src']
#             if src.startswith('/website_blog/static/src/img/cover'):
#                 path = request.httprequest.path
#                 if path.startswith('/blog/'):
#                     try:
#                         last_minus_index = path.rindex('-')
#                         if last_minus_index != -1:
#                             post_id = path[last_minus_index + 1:]
#                             if post_id.isnumeric():
#                                 is_blog_post = True
#                     except:
#                         pass
#         atts = super(NewsQWeb, self)._post_processing_att(tagName, atts, options)
#         if is_blog_post and atts.get('loading'):
#             del atts['loading']
#         return atts

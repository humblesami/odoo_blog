from odoo import http
from odoo.http import request, Controller


class VonWebsite(Controller):
    @http.route('/', type='http', auth="public", website=True, sitemap=True)
    def index(self, **kw):
        
        BlogPost = request.env['blog.post']
        top_blog = BlogPost.search([('id', '=', 1)])
        blogs1 = BlogPost.search([('id', '>', 1), ('id', '<', 5)])
        blogs2 = BlogPost.search([('id', '>', 1), ('id', '<', 5)])
        blogs3 = BlogPost.search([('id', '>', 1), ('id', '<', 5)])
        blogs4 = BlogPost.search([('id', '>', 1), ('id', '<', 5)])
        blogs5 = BlogPost.search([('id', '>', 1), ('id', '<', 5)])
        blogs6 = BlogPost.search([('id', '>', 1), ('id', '<', 5)])

        search = ''
        qcontext = {}
        qcontext['top_post'] = top_blog
        qcontext['blogs1'] = blogs1
        qcontext['blogs2'] = blogs2
        qcontext['blogs3'] = blogs3
        qcontext['blogs4'] = blogs4
        qcontext['blogs5'] = blogs5
        qcontext['blogs6'] = blogs6
        
        qcontext['tag'] = None
        qcontext['active_tag_ids'] = []
        qcontext['search'] = search

        return request.render("von.homepage", qcontext)

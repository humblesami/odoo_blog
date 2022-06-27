from odoo import http
from odoo.http import request, Controller


class VonWebsite(Controller):
    @http.route('/', type='http', auth="public", website=True, sitemap=True)
    def index(self, **kw):
        Blog = request.env['blog.blog']
        BlogPost = request.env['blog.post']
        top_blog = BlogPost.search([('id', '=', 1)])
        blogs1 = BlogPost.search([('id', '>', 1), ('id', '<', 5)])
        blogs2 = BlogPost.search([('id', '>=', 1), ('id', '<=', 6)])
        blogs3 = BlogPost.search([('id', '>', 1), ('id', '<', 9)])
        hp_blog_types = Blog.search([])

        search = ''
        qcontext = {}
        qcontext['top_post'] = top_blog
        qcontext['blogs1'] = blogs1
        qcontext['blogs2'] = blogs2
        qcontext['editor_blogs'] = blogs3
        qcontext['hp_blog_types'] = hp_blog_types
        
        qcontext['tag'] = None
        qcontext['active_tag_ids'] = []
        qcontext['search'] = search

        return request.render("von.homepage", qcontext)

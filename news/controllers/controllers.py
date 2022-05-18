# -*- coding: utf-8 -*-
from odoo import http
from odoo.http import request
from odoo.addons.website.controllers.main import Website
from odoo.addons.website.controllers.main import QueryURL
from odoo.addons.website_blog.controllers.main import WebsiteBlog


class NewsWebsite(Website):

    @http.route('/', type='http', auth="public", website=True, sitemap=True)
    def index(self, **kw):
        homepage = request.website.homepage_id
        if homepage and (homepage.sudo().is_visible or request.env.user.has_group('base.group_user')) and homepage.url != '/':
            return request.env['ir.http'].reroute(homepage.url)
        website_page = request.env['ir.http']._serve_page()
        if website_page:
            blog_values = self.get_blog_values()
            homepage_posts = blog_values.get('posts') or []
            website_page.qcontext['posts'] = homepage_posts
            website_page.qcontext['len_posts'] = len(homepage_posts)
            return website_page

        raise request.not_found()
    
    def get_blog_values(self):
        opt = {}
        Blog = request.env['blog.blog']
        blogs = Blog.search(request.website.website_domain(), order="create_date asc, id asc")
        obj = WebsiteBlog()
        values = obj._prepare_blog_values(blogs=blogs, page=1)
        values['blog_url'] = QueryURL('/blog', ['tag'])
        return values

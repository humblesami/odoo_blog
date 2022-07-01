# -*- coding: utf-8 -*-
from odoo import models, fields, api
from odoo.tools.json import scriptsafe as json_scriptsafe


class FakeEmptyClass(object):
    pass


def dict2obj(d):
    if isinstance(d, list):
        d = [dict2obj(x) for x in d]
    if not isinstance(d, dict):
        return d
    
    o = FakeEmptyClass()
    for k in d:
        o.__dict__[k] = dict2obj(d[k])
    return o


class WebsitePostPublishedButton(models.AbstractModel):
    _inherit = "website.published.mixin"
    
    def open_website_url(self):
        res= {
            'type': 'ir.actions.act_url',
            'url': self.website_url,
            'target': 'new',
        }
        return res


class NewsPost(models.Model):
    _inherit = 'blog.post'
    side_bar = fields.Boolean()

    published_date = fields.Datetime('Published Date', default=lambda self: fields.datetime.now())
    is_click = fields.Boolean('Open Post')
    
    def write(self, vals):
        res = super(NewsPost, self).write(vals)
        return res
    
    def get_image_path(self):
        res = json_scriptsafe.loads(self.cover_properties).get('background-image', 'none')[4:-1].strip("'")
        # res = json_scriptsafe.loads(self.cover_properties)
        # res = res.get('background-image', 'none')
        # res = res[4:-1]
        # res = res.strip("'")
        return res
    
    def get_author_image_path(self):
        res = f'/web/image/blog.post/{self.author_id.id}/author_avatar'
        return res
    
    @api.onchange('name')
    def _on_name_changed(self):
        if self.name:
            self.website_meta_title = self.name
            
    @api.onchange('subtitle')
    def _on_subtitle_changed(self):
        if self.name:
            self.website_meta_description = self.subtitle
            
    def get_blog_author(self):
        author = self.author_id
        dictionary = {'id': author.id, 'name': author.name, 'picture': self.get_author_image_path()}
        res = dict2obj(dictionary)
        return res


class NewsBlog(models.Model):
    _inherit = 'blog.blog'
    
    def get_top_post_id(self):
        return self.blog_post_ids.filtered(lambda x: x.is_published)[0].id
    
    def top_post(self):
        res = self.blog_post_ids.filtered(lambda x: x.is_published)[0]
        return res
    
    def hp_posts(self):
        top_post_id = self.get_top_post_id()
        res = self.blog_post_ids
        res = res.filtered(lambda x:x.is_published==True and x.id != top_post_id)[:4]
        return res

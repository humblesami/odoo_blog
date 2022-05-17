# -*- coding: utf-8 -*-
from odoo.addons.website_blog.models.website_blog import BlogPost
from odoo import models, fields, api


class CoverProperties(models.AbstractModel):
    _inherit = 'website.cover_properties.mixin'

    def _get_background_src(self, height=None, width=None):
        super_ob = super()
        res = super_ob._get_background(height, width)
        if not res or res == 'none':
            res = ''
        else:
            res = res.replace('url(', '').replace(')', '').replace("'", "")
        return res


class NewsPost(models.Model):
    _inherit = 'blog.post'
    side_bar = fields.Boolean()

    published_date = fields.Datetime('Published Date', default=lambda self: fields.datetime.now())
    
    def write(self, vals):
        res = super(NewsPost, self).write(vals)
        return res
    
    @api.onchange('name')
    def _on_name_changed(self):
        if self.name:
            self.website_meta_title = self.name
            
    @api.onchange('subtitle')
    def _on_subtitle_changed(self):
        if self.name:
            self.website_meta_description = self.subtitle

        
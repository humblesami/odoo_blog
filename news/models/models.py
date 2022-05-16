# -*- coding: utf-8 -*-

from odoo import models, fields, api


class CoverProperties(models.AbstractModel):
    _inherit = 'website.cover_properties.mixin'
    
    def _get_background_src(self, height=None, width=None):
        res = super()._get_background()
        res = res.replace('url(', '').replace(')', '').replace("'", "")
        return res


class NewsPost(models.Model):
    _inherit = 'blog.post'
    side_bar = fields.Boolean()
    
    @api.onchange('name')
    def _on_name_changed(self):
        if self.name:
            self.website_meta_title = self.name
            
    @api.onchange('subtitle')
    def _on_name_changed(self):
        if self.name:
            self.website_meta_description = self.subtitle

        
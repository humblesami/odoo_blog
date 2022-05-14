# -*- coding: utf-8 -*-

from odoo import models, fields, api


class NewsPost(models.Model):
    _inherit = 'blog.post'
    side_bar = fields.Boolean()
    
    @api.onchange('name')
    def _on_name_changed(self):
        if self.name:
            self.website_meta_title = self.name
    
from odoo import http
from odoo.http import request


class Website(http.Controller):
    @http.route(['/auth/get_user_id'], type='http')
    def get_user_id(self):
        user_id = request.uid or 'none'
        return str(user_id)

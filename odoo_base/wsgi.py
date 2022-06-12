import werkzeug

import odoo
from odoo.http import root


def __call__(self, environ, start_response):
    def start_wrapped(status, headers):
        req = werkzeug.wrappers.Request(environ)
        root.setup_session(req)
        if req.session and req.session.debug and not 'wkhtmltopdf' in req.headers.get('User-Agent'):
            if "assets" in req.session.debug and (".js" in req.base_url or ".css" in req.base_url):
                new_headers = [('Cache-Control', 'no-store')]
            else:
                new_headers = []
            for k, v in headers:
                if k.lower() != 'cache-control':
                    new_headers.append((k, v))
            start_response(status, new_headers)
        else:
            found_at = -1
            for header in headers:
                found_at += 1
                if header[0].lower() == 'cache-control':
                    headers[found_at] = ('cache-excluded', 'yes')
                    break
            start_response(status, headers)
    return self.app(environ, start_wrapped)


odoo.http.DisableCacheMiddleware.__call__ = __call__

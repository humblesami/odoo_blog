import werkzeug

import odoo
from odoo.http import root


def __call__(self, environ, start_response):
    def start_wrapped(status, headers):
        req = werkzeug.wrappers.Request(environ)
        root.setup_session(req)
        req_path = req.path
        cache_control = ('Cache-Control', 'public, max-age=3200, stale-while-revalidate=3800')
        if req.session and req.session.debug and not 'wkhtmltopdf' in req.headers.get('User-Agent'):
            if "assets" in req.session.debug and (".js" in req.base_url or ".css" in req.base_url):
                new_headers = [('Cache-Control', 'no-store')]
            else:
                new_headers = [('Cache-Control', 'no-cache')]
                if req_path != '/web' and not req_path.startswith('/web?') and req_path != '/longpolling/poll':
                    new_headers = [cache_control]
            
            for k, v in headers:
                if k.lower() != 'cache-control':
                    new_headers.append((k, v))

            start_response(status, new_headers)
        else:
            if req_path != '/web' and not req_path.startswith('/web?') and req_path != '/longpolling/poll':
                found_at = -1
                for header in headers:
                    found_at += 1
                    if header[0].lower() == 'cache-control':
                        headers[found_at] = cache_control
                        break
                if found_at == -1:
                    headers.append(cache_control)
            start_response(status, headers)
    return self.app(environ, start_wrapped)


odoo.http.DisableCacheMiddleware.__call__ = __call__

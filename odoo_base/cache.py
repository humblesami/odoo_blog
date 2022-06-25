import odoo
import werkzeug
from odoo.http import root, DisableCacheMiddleware  # , Response, HttpRequest


# class NewsHttpRequest(HttpRequest):
#     def make_response(self, data, headers=None, cookies=None):
#         found_at = -1
#         for header in headers:
#             found_at += 1
#             if header[0].lower() == 'cache-control':
#                 headers[found_at] = ('Cache-Control', 'public, max-age=7200, stale-while-revalidate=14400')
#                 break
#         response = Response(data, headers=headers)
#         if cookies:
#             for k, v in cookies.items():
#                 response.set_cookie(k, v)
#         return response


class NewsDisableCacheMiddleware(DisableCacheMiddleware):
    def __call__(self, environ, start_response):
        def start_wrapped(status, headers):
            req = werkzeug.wrappers.Request(environ)
            root.setup_session(req)
            found_at = 0
            for header in headers:
                if header[0].lower() == 'cache-control':
                    headers.pop(found_at)
                    break
                found_at += 1
            start_response(status, headers)
        return self.app(environ, start_wrapped)


odoo.http.DisableCacheMiddleware.__call__ = NewsDisableCacheMiddleware.__call__
# odoo.http.HttpRequest.make_response = NewsHttpRequest.make_response

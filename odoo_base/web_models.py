from odoo.addons.base.models.ir_qweb import IrQWeb


class CustomIrQWeb(IrQWeb):
    _inherit = 'ir.qweb'
    
    def _generate_asset_nodes(self, bundle, css=True, js=True, debug=False, async_load=False, defer_load=False, lazy_load=False, media=None):
        res = super()._generate_asset_nodes(bundle, css, js, debug, async_load, defer_load, lazy_load, media)
        if css:
            res[0][1]['rel'] = "preload"
            if res[0][1] != 'text/css':
                res[0][1]['type'] = "text/css"
            res[0][1]['as'] = "style"
            res[0][1]['onload'] = "this.rel='stylesheet';"
        return res

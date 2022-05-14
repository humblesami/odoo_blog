odoo.define('website.editor.snippets.options.image', function (require) {
    'use strict';

    const {ColorpickerWidget} = require('web.Colorpicker');
    const config = require('web.config');
    var core = require('web.core');
    var Dialog = require('web.Dialog');
    const {Markup, sprintf} = require('web.utils');
    const weUtils = require('web_editor.utils');
    var options = require('web_editor.snippets.options');

    options.registry.CoverProperties = options.Class.extend({
        background: async function (previewMode, widgetValue, params) {
            console.log(6666);
            if (widgetValue === '') {
                this.$image.css('background-image', '');
                this.$target.removeClass('o_record_has_cover');
            } else {
                this.$image.css('background-image', `url('${widgetValue}')`);
                this.$target.addClass('o_record_has_cover');
                const $defaultSizeBtn = this.$el.find('.o_record_cover_opt_size_default');
                $defaultSizeBtn.click();
                $defaultSizeBtn.closest('we-select').click();
            }
            if (!previewMode) {
                this._updateSavingDataset();
            }
        },
    });

    console.log(3222);
});

console.log(111);
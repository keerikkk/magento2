define(['jquery', 'validation', 'jquery-ui-modules/widget'], ($) => {
    'use strict';

    $.widget('vendor.customWidget', {
        _init() {
            this._on(this.element, {
                input: this.onInput.bind(this)
            });
        },

        onInput(e) {
            e.preventDefault();

            const input = $(e.target);
            const isValid = input.valid();

            if (isValid) {
                input.css({
                    'border-color': 'lightgreen',
                    'box-shadow': '0 0 5px lightgreen'
                });
            } else {
                input.css({
                    'border-color': 'red',
                    'box-shadow': '0 0 5px red'
                });
            }
        }
    });

    return $.vendor.customWidget;
});

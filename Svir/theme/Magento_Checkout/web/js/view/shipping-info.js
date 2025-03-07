define([
    'uiComponent',
    'ko',
    'Magento_Checkout/js/model/quote',
    'mage/translate'
], function (Component, ko, quote, $t) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Magento_Checkout/shipping-info'
        },

        freeTitle: $t('Інформація про безкоштовну доставку'),
        freeDesc: $t('Вау!! Доставка безкоштовна ;)'),
        defaultTitle: $t('Безкоштовна доставка недоступна'),
        defaultDesc: $t('На жаль... Доставка не є безкоштовною ;('),

        initialize: function () {
            this._super();

            this.isFreeShipping = ko.computed(function() {
                var method = quote.shippingMethod();

                if (method && method['carrier_code'] !== undefined) {
                    return method['carrier_code'] === 'freeshipping';
                }

                return false;
            }, this);
        }
    });
});

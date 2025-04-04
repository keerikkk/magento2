var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/model/checkout-data-resolver': {
                'Magento_Checkout/js/model/checkout-data-resolver-mixin': true
            },
            'Magento_Checkout/js/view/summary/abstract-total': {
                'Magento_Checkout/js/view/summary/abstract-total-mixin': true
            },
            'Magento_Checkout/js/model/shipping-rates-validation-rules': {
                'Magento_Checkout/js/checkout/model/shipping-rates-validation-rules-mixin': true
            }
        }
    }
};

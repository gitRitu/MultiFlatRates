define([
    'uiComponent',
    'Magento_Checkout/js/model/shipping-rates-validator',
    'Magento_Checkout/js/model/shipping-rates-validation-rules',
    '../model/shipping-rates-validator',
    '../model/shipping-rates-validation-rules'
], function (
    Component,
    defaultShippingRatesValidator,
    defaultShippingRatesValidationRules,
    dsShippingRatesValidator,
    dsShippingRatesValidationRules
) {
    'use strict';

    defaultShippingRatesValidator.registerValidator('dsflatrate', dsShippingRatesValidator);
    defaultShippingRatesValidationRules.registerRules('dsflatrate', dsShippingRatesValidationRules);

    return Component;
});

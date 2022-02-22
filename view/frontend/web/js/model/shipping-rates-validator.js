define([
    'jquery',
    'mageUtils',
    '../model/shipping-rates-validation-rules',
    'mage/translate'
], function ($, utils, validationRules, $t) {
    'use strict';

    return {
        validationErrors: [],

        /**
         * @param {Object} address
         * @return {Boolean}
         */
        validate: function (address) {
            var self = this;

            this.validationErrors = [];

            $.each(validationRules.getRules(), function (field, rule) {
                if (rule.required && utils.isEmpty(address[field])) {
                    self.validationErrors.push($t('Field ') + field + $t(' is required.'));
                }
            });

            return !this.validationErrors.length;
        }
    };
});

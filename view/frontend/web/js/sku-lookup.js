define([
    'uiComponent',
    'ko',
    'mage/storage',
    'jquery',
    'mage/translate',
    'MageChamps_InventoryFulfillment/js/model/sku'
], function(
    Component,
    ko,
    storage,
    $,
    $t,
    skuModel
) {
    'use strict';

    return Component.extend({
        defaults: {
            sku: skuModel.sku,
            placeholder: $t('Example: %1').replace('%1', '24-MB01'),
            messageResponse: ko.observable(''),
            isSuccess: skuModel.isSuccess
        },
        initialize() {
            this._super();
            console.log('The skuLookup component has been loaded.');
        },
        handleSubmit() {
            $('body').trigger('processStart');

            // resetting the response message
            this.messageResponse('');
            this.isSuccess(false);

            storage.get(`rest/V1/products/${this.sku()}`)
                .done(response => {
                    console.log(response);
                    this.messageResponse($t('Product found! %1').replace('%1', `<strong>${response.name}</strong>`));
                    this.isSuccess(true);
                })
                .fail(() => {
                    this.messageResponse($t('Product not found.'));
                    this.isSuccess(false);
                })
                .always(() => {
                    $('body').trigger('processStop');
                });
        }
    });
});

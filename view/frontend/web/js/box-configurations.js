define([
    'uiComponent',
    'ko',
    'MageChamps_InventoryFulfillment/js/model/box-configurations',
    'MageChamps_InventoryFulfillment/js/model/sku',
    'jquery'
], function(
    Component,
    ko,
    boxConfigurationsModel,
    skuModel,
    $
) {
    'use strict';

    return Component.extend({
        defaults: {
            boxConfigurationsModel: boxConfigurationsModel,
            skuModel: skuModel
        },
        initialize() {
            this._super();
            console.log('The boxConfigurations component has been loaded.');

            skuModel.isSuccess.subscribe((value) => {
                console.log('SKU isSuccess new value', value);
            });

            skuModel.isSuccess.subscribe((value) => {
                console.log('SKU isSuccess old value', value);
            }, null, 'beforeChange');
        },
        handleAdd: function () {
            boxConfigurationsModel.add()
        },
        handleDelete: function (index) {
            boxConfigurationsModel.delete(index);
        },
        handleSubmit: function () {
            if ($('.box-configurations form').valid()) {
                boxConfigurationsModel.isSuccess(true);
            } else {
                boxConfigurationsModel.isSuccess(false);
            }
        }
    });
});

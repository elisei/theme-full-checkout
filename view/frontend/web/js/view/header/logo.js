/**
 * Copyright © 2021 O2TI. All rights reserved.
 * @author  Bruno Elisei <brunoelisei@o2ti.com>
 * See LICENSE.txt for license details.
 */

define([
	"jquery",
	"ko",
	"uiComponent",
	"underscore",
	"Magento_Ui/js/modal/confirm",
	"mage/translate"
], function (
	$,
	ko,
	Component,
	_,
	confirmation,
	$t
) {
	"use strict";
	return Component.extend({
		defaults: {
			template: "O2TI_ThemeFullCheckout/header/logo",
		},

		/**
		 * Src to Logo.
		 */
		getLogoSrc() {
			return window.checkoutConfig.logo_src;
		},

		/**
		 * Width to Logo.
		 */
		getLogoWidth() {
			return window.checkoutConfig.logo_width;
		},

		/**
		 * Height to Logo.
		 */
		getLogoHeight() {
			return window.checkoutConfig.logo_height;
		},

		/**
		 * Alt to Logo.
		 */
		getLogoAlt() {
			return window.checkoutConfig.logo_alt;
		},

		/**
		 * Checkout Cart Url.
		 */
		getLogoUrl() {
			return window.checkoutConfig.cartUrl;
		},

		/**
		 * Go To Cart Url.
		 */
		goToCartUrl() {
			var self = this,
				textAlert;

			textAlert = $t('When you abandon checkout, you may lose your item reservation.');

			confirmation({
				title: $t('Exit Checkout?'),
				content: textAlert,
				actions: {

					confirm: function () {
						window.location = self.getLogoUrl()
					},

					cancel: function () {
						return false;
					}
				},
				buttons: [{
					text: $t('Cancel'),
					class: 'action-primary action-dismiss',
					click: function (event) {
						this.closeModal(event);
					}
				}, {
					text: $t('Exit Checkout'),
					class: 'action-secondary action-accept',
					click: function (event) {
						this.closeModal(event, true);
						window.location = self.getLogoUrl();
					}
				}],
			});
			
		}
	});
});

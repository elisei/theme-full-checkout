/**
 * Copyright © 2021 O2TI. All rights reserved.
 * @author  Bruno Elisei <brunoelisei@o2ti.com>
 * See LICENSE.txt for license details.
 */

define(["mage/translate"], function ($t) {
	"use strict";
	return function (targetModule) {
		return targetModule.extend({
			defaults: {
				template: "O2TI_ThemeFullCheckout/payment-methods/list"
			},
			/**
			 * Returns payment group title
			 *
			 * @param {Object} group
			 * @returns {String}
			 */
			getGroupTitle: function (group) {
				var title = $t('Select Payment Method');
				if (group().isDefault() && this.paymentGroupsList().length > 1) {
					title = this.defaultGroupTitle;
				}
				return title;
			}
		});
	};
});

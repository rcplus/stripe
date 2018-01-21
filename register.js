// 2018-01-21
// I have started the implementation by analogy with the built-in Stripe plugin:
// https://github.com/reactioncommerce/reaction/blob/v1.6.4/imports/plugins/included/payments-stripe/register.js
import {Reaction} from '/server/api';
Reaction.registerPackage({
	// 2018-01-21 "How is a package's `autoEnable` flag declared and used?" https://rc.plus/t/35
	autoEnable: true
	,icon: 'fa fa-cc-stripe' // 2018-01-21 http://fontawesome.io/icon/cc-stripe
	,name: 'df-stripe'
	,label: 'DF Stripe'
	,registry: [
		{
			icon: 'fa fa-cc-stripe' // 2018-01-21 http://fontawesome.io/icon/cc-stripe
			// 2018-01-21 "What is `provides` / `paymentMethod` for a package?" https://rc.plus/t/36
			,provides: ['paymentMethod']
			,template: 'stripePaymentForm'
		}		
	]
	,settings: {}
});
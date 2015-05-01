;(function( window, document, undefined ) {

	'use strict';

	var home = (function() {

		var $private = {};
		var $public = {};

		/**
		 * Private Variables
		 */

		$private._privateVar = null;





		// -----------------------------------

		/**
		 * Public Variables
		 */

		$public.publicVar = 'public var';





		// -----------------------------------

		/**
		 * Private Methods
		 */


		// -----------------------------------

		/**
		 * Public Methods
		 */

		$public.init = function() {

			console.log('home.js');

		};

		// -----------------------------------

		return $public;

	})();

	// Global
	window.home = home;

})( window, document );
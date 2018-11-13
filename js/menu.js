/*
	* Copyright (c) 2017 - present, De Nieuwe Zaak
	* All rights reserved.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*
*/

// Mobile menu toggle
$(document).ready(function() {
	$('[data-menu-toggle]').on('click', function () {
		$('.navbar .nav').toggleClass('expanded');
	});
});
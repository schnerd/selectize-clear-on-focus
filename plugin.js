/**
 * Plugin: "clear_on_focus" (selectize.js)
 * Copyright (c) 2016 David Schnurr
 *
 * Released under the MIT license.
 * See LICENSE file
 *
 * @author David Schnurr
 */
window.Selectize.define('clear_on_focus', function() {
	this.on('change', function(){
		delete this._previousValue;
	});

	this.on('dropdown_open', function(){
		this._previousValue = this.getValue();
		this.clear(true);
		this.positionDropdown();
	});

	this.on('blur', function(){
		if (this._previousValue) {
			this.setValue(this._previousValue, true);
		}
	});
});

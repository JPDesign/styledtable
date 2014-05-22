/*
Filename: 		jquery.styledtable.js
Plugin: 		styledtable
Version: 		1.2.4
Author: 		JPDesign Dirk Jüttner

Changelog:
V. 1.2.4 		even changed to row-even, odd changed to row-odd
V. 1.2.3 		bugfux only TH inner THEAD
V. 1.2.2 		class row-hover for TD inner TBODY
V. 1.2.1 		with debugging, default is off
V. 1.2.0 		columnMode for TBODY
V. 1.1.0 		columnMode for THEAD TH or TD, default is on
V. 1.0.0 		working with TD

Description / Features:
The plugin adds classes for tables within THEAD and TBODY
+ one class is added for 'row-even' and 'row-odd' rows inner TBODY
+ adds cat01, cat02... by line number inner TBODY
++ first row is 'from: 1'
++ last row is 'to: [insert line number here]'
++ e.g. cat01: {from: 1, to: 1} adding 'cat01' to line number one
++ e.g. cat01: {from: 1, to: 10} adding 'cat01' from line number one to ten
++ overwrite all ten categories or you will get the default category per line (line number is cat number)
+ enabled columnMode for 'col-even' and 'col-odd'
++ default is 'true'
++ set it to 'false' for unable columnMode
jQuery is still needed, tested with: jQuery v1.7.2 and jQuery v1.10.2

Usage:
			// dont forget the jquery.js library
			//
			// dieable columnMode
			// add cat01 for line number 1
			// add cat02 for line number 2 and 3 ... 
            $(document).ready(function(){
            	var options = {
	            	columnMode: false,
					cat01: {from: 1, to: 1},
					cat02: {from: 2, to: 3},
					cat03: {from: 4, to: 4},
					cat04: {from: 5, to: 15},
					cat05: {from: 16, to: 16},
					cat06: {from: 17, to: 18}
            	};
            	
            	// select a TABLE
                $('table#styledtable').styledtable(options);
            });

*/
(function($) {

	$.fn.styledtable = function(options) {
		// debugging for console
		var debug = false;
		// options are overwriting defaults
		var opts = $.extend({}, $.fn.styledtable.defaults, options);
		
		if (debug) { console.log('settings: ' + opts); }

		return this.each(function() {
			// call the plugin more than once per page
			var $this = $(this);
			
			if (debug) { console.log('this is an object: ' + $this); }
			if (debug) { console.log('columnMode: ' + opts.columnMode); }

			// V. 1.2.0 columnMode for THEAD
			if (opts.columnMode) {

				// get row from THEAD
				var thead_element = $this.find('thead');
				var thead_tr_element = thead_element.find('tr');
				
				if (debug) { console.log('typeof tr inner thead: ' + typeof tbody_tr_element); }
				
				// check for THEAD TR
				if (typeof thead_tr_element === 'object') {
					
					// add classes for each TH column by column
					thead_tr_element.each(function() {
						var tr_row = $(this);
						var th_col = tr_row.find('th');
						var num_col = 1;
						// each th
						th_col.each(function() {
							// styleing for 'col-even' and 'col-odd'
							if (num_col %2 === 0) {
								$(this).addClass('col-even');
								++num_col;
							} else {
								$(this).addClass('col-odd');
								++num_col;
							}
						});

					});
					
				} else {
					if (debug) { console.log('\'thead_tr_element\' is not an object'); }
				}

			}

			// get rows from TBODY
			var tbody_element = $this.find('tbody');
			var tbody_tr_element = tbody_element.find('tr');
			
			if (debug) { console.log('typeof tr inner tbody: ' + typeof tbody_tr_element); }
			
			// check for TBODY TR
			if (typeof tbody_tr_element === 'object') {
								
				// add classes for each TR row by row
				tbody_tr_element.each(function(index, data) {
					var tr_row = $(this);
					var td_col = tr_row.find('td');
					// line number of TBODY TR
					var num_row = index + 1;
					// column number of TBODY TR TD
					var num_col = 1;
					
					// V. 1.2.2 feature
					// hover the row
					tr_row.hover(
						function () {
							$(this).find('td').addClass('row-hover');
						}, 
						function () {
							$(this).find('td').removeClass('row-hover');
						}
					);
	
					// add classes for each TD by row
					td_col.each(function() {
						// classes for 'row-even' and 'row-odd'
						if (num_row %2 === 0) {
							$(this).addClass('row-even');
						} else {
							$(this).addClass('row-odd');
						}
	
						// classes by 'num_row' for cat01 - cat10
						if (num_row>=opts.cat01.from && num_row<=opts.cat01.to) {
							$(this).addClass('cat01');
						}
						if (num_row>=opts.cat02.from && num_row<=opts.cat02.to) {
							$(this).addClass('cat02');
						}
						if (num_row>=opts.cat03.from && num_row<=opts.cat03.to) {
							$(this).addClass('cat03');
						}
						if (num_row>=opts.cat04.from && num_row<=opts.cat04.to) {
							$(this).addClass('cat04');
						}
						if (num_row>=opts.cat05.from && num_row<=opts.cat05.to) {
							$(this).addClass('cat05');
						}
						if (num_row>=opts.cat06.from && num_row<=opts.cat06.to) {
							$(this).addClass('cat06');
						}
						if (num_row>=opts.cat07.from && num_row<=opts.cat07.to) {
							$(this).addClass('cat07');
						}
						if (num_row>=opts.cat08.from && num_row<=opts.cat08.to) {
							$(this).addClass('cat08');
						}
						if (num_row>=opts.cat09.from && num_row<=opts.cat09.to) {
							$(this).addClass('cat09');
						}
						if (num_row>=opts.cat10.from && num_row<=opts.cat10.to) {
							$(this).addClass('cat10');
						}
						
						// V. 1.1.0 columnMode classes inner TBODY TR TD
						if (opts.columnMode) {
							if (num_col %2 === 0) {
								$(this).addClass('col-even');
								++num_col;
							} else {
								$(this).addClass('col-odd');
								++num_col;
							}
						} else {
							if (debug) { console.log('\'thead_tr_element\' is not an object'); }
						} /* if opts.columnMode */
			
					});

				});
				
			} else {
				if (debug) { console.log('\'tbody_tr_element\' is not an object'); }
			}

		});
	};

	// default values
	$.fn.styledtable.defaults = {
		columnMode: true,
		cat01: {from: 1, to: 1},
		cat02: {from: 2, to: 2},
		cat03: {from: 3, to: 3},
		cat04: {from: 4, to: 4},
		cat05: {from: 5, to: 6},
		cat06: {from: 6, to: 6},
		cat07: {from: 7, to: 7},
		cat08: {from: 8, to: 8},
		cat09: {from: 9, to: 9},
		cat10: {from: 10, to: 10}
	};

})(jQuery);

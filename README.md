styledtable
===========

It is a jQuery plugin for tables.
The jQuery plugin adds classes for tables within THEAD and TBODY
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

/**
 * cbpFWTabs.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 *//*
;( function( window ) {
	
	'use strict';

	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	function CBPFWTabs( el, options ) {
		this.el = el;
		this.options = extend( {}, this.options );
  		extend( this.options, options );
  		this._init();
	}

	CBPFWTabs.prototype.options = {
		start : 0
	};

	CBPFWTabs.prototype._init = function() {
		// tabs elems
		this.tabs = [].slice.call( this.el.querySelectorAll( 'ul.og-grid > li' ) );
		// content items
		this.items = [].slice.call( this.el.querySelectorAll( '.content-wrap > section' ) );

		this.spans = [].slice.call( this.el.querySelectorAll( '.og-close' ) );
        
		// current index
		this.current = -1;
		// show current content item
	 	           //this._show(); I made this INACTIVE to not show first or all tab content when page loads.
		// init events
		this._initEvents();
		
	};

	CBPFWTabs.prototype._initEvents = function() {
		var self = this;
		this.tabs.forEach( function( tab, idx ) {
			tab.addEventListener( 'click', function( ev ) {
				ev.preventDefault();
				self._show( idx );
				
				//var d = $('.tabs').offset();
				//var h = $('.flexslider').outerHeight();
				//$( 'html, body' ).animate( { scrollTop : h + 55 + 15}, 500 );
			    
				
			} );
		} );
	};
  	CBPFWTabs.prototype._show = function( idx ) {
		if( this.current >= 0 ) {
		 //	this.tabs[ this.current ].className = this.items[ this.current ].className = '';
		 this.tabs[ this.current ].className = '';
		 this.items[ this.current ].className = '';
		}
	/*	two (nested) ternary operators
		this.current = idx != undefined ? idx : c; 
		where c is the result of (this.options.start >= 0 && this.options.start < this.items.length ? this.options.start : 0);
	
		if(idx != undefined) {this.current = idx} 
		else if (this.options.start >= 0 && this.options.start < this.items.length) {this.current = this.options.start }
		 else {this.current = 0}
		 
		 he ternary operator a = cond ? b : c can be interpreted as follows:

      if (cond) {
       a = b;
		} else {
    	a = c;
			}
As you can see, there is a nested ternary operator in the "c" part, so you can just put another nested if in there to help you translate it to english. Hope that makes it clear.
		 */
			// change current
/*		this.current = idx != undefined ? idx : this.options.start >= 0 && this.options.start < this.items.length ? this.options.start : 0;
		this.tabs[ this.current ].className = 'tab-current';
		var b = this.items[ this.current ].className = 'content-current';
		var element = document.getElementById("og-grid");
		element.scrollIntoView({behavior: "smooth", block: "start", inline: "center"});
		var self = this;
		this.spans[this.current].addEventListener('click', function(ev){
			self._close();
			element.scrollIntoView({behavior: "smooth", block: "end", inline: "center"});
		});
		
			//.addEventListener('click', function(e){
		//	ev.preventDefault();
		//	alert("yess!");
			 //self.className = self.className.replace(/\content-current\b/g,"");
			 
		//});
	};
	CBPFWTabs.prototype._close = function(){
		this.tabs[ this.current ].className = "";
		this.items[ this.current ].className = "";
	}
	// add to global namespace
	window.CBPFWTabs = CBPFWTabs;
    
})( window ); 

function openTab(evt, tabName) {
	// Declare all variables
	var i, tabContent, tablinks;
  
	// Get all elements with class="tabcontent" and hide them
	tabContent = document.getElementsByClassName("tabContent");
	for (i = 0; i < tabContent.length; i++) {
		tabContent[i].style.display = "none";
	}
  
	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" activeTab", "");
	}
  
	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " activeTab";
	return true;
  }
  */

 $(function() {
	/**
	* for each menu element, on mouseenter, 
	* we enlarge the image, and show both sdt_active span and 
	* sdt_wrap span. If the element has a sub menu (sdt_box),
	* then we slide it - if the element is the last one in the menu
	* we slide it to the left, otherwise to the right
	*/
	//var b = $('#og-grid > li').height();
	$('.gre').bind('mouseenter', function(){
		var $elem = $(this);
			$elem.find('.exp')
			 .stop(true)
			 //.show().animate({ 'height' : $('.og-grid li > a').height()},300,'easeOutSine')
			 .show().animate({ 'height' : '100%' },300,'easeOutSine')
	 }).bind('mouseleave',function(){
		var $elem = $(this);
		$elem.find('.exp')
			 .stop(true)
			 .hide().animate({'height':'0px'},300,'easeOutSine');
	});

});

$(document).ready(function(){
	 var $tablist = $('div.exp'),
	     $body = $('html, body'),
		 $tabcontent = $('.content-wrap section'),
         $listli = $('ul.navb li');
                
	$tablist.children('a').click(function(e) {
		e.preventDefault();
        var tab_id = $(this).attr('href');
            list_id = $(this).parent('.exp').attr('data-id');
          
		$listli.removeClass('tab-current');
        $tabcontent.removeClass('content-current');
        
        $listli.eq(list_id).addClass('tab-current');
         $(tab_id).addClass('content-current');
         
         $body.animate({
			scrollTop: $listli.offset().top},500);
			return false;
        });
        
     $('span.og-close').click(function(e){
		 e.preventDefault();
		$listli.removeClass('tab-current');
		$tabcontent.removeClass('content-current');
			$body.animate({
				scrollTop: $body.offset().top},500);
				return false;
		}); 
})
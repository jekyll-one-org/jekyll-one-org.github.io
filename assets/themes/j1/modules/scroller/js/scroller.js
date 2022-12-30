/*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/modules/scroller/js/scroller.js
 # J1 core module for scroller
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 # NOTE: Based on https://github.com/jquery-boilerplate/jquery-boilerplate
 # See:  https://www.dotnetcurry.com/jquery/1069/authoring-jquery-plugins
 # -----------------------------------------------------------------------------
*/

// the semi-colon before function invocation is a SAFETY method
// against concatenated scripts and/or other plugins which may
// NOT be closed properly.
//
;(function($, window, document, undefined) {
  'use strict';

  // Create the defaults
  var pluginName = 'scroller',
  defaults = {
    type:                 'infiniteScroll',
    scrollOffset:         100,
    elementScroll:        false,
    firstPage:            2,
    lastPage:             false,
    infoLastPage:         false,
    loadStatus:           false,
    onInit:               function (){},                                        // callback after plugin has initialized
    onBeforeLoad:         function (){},                                        // callback before new items are loaded
    onAfterLoad:          function (){}                                         // callback after new items are loaded
  };

  // Plugin constructor
  function Plugin (element, options) {
    this.element            = element;
    this.settings           = $.extend( {}, defaults, options);
    this.settings.elementID = '#' + this.element.id;

    // call the initializer
    this.init(this.settings);
  }

  // Avoid plugin prototype conflicts
  $.extend(Plugin.prototype, {
    // -----------------------------------------------------------------------
    // init()
    // plugin initializer
    // -----------------------------------------------------------------------
    init: function(options) {
      var _this  = this;
      var logger = log4javascript.getLogger('j1.scroller.core.init');

      logger.info('\n' + 'initializing plugin: started');
      logger.info('\n' + 'state: started');

      if (options.elementScroll) {
        _this.scroller = _this.element;
      } else {
        _this.scroller = window;
      }

      if (options.loadStatus) {
        var spinner = '<div class="loader-ellips" style="display: none"> <span class="loader-ellips__dot"></span> <span class="loader-ellips__dot"></span> <span class="loader-ellips__dot"></span> <span class="loader-ellips__dot"></span> </div>';
        $(spinner).insertAfter(options.elementID);
      }

      if (options.infoLastPage) {
        var message = options.lastPageInfo;
        $(message).insertAfter(options.elementID);
      }

      // jadams, 2021-11-08: for testing reason, registerScrollEvent delayed
      // until page_ready state
      var dependencies_met_page_ready = setInterval (function () {
        if (j1.getState() === 'finished') {

          // initialize infinite scroll
          if ( options.type === 'infiniteScroll') {
            logger.info('\n' + 'processing mode: ' + options.type);
            logger.info('\n' + 'loading items from path: ' + options.pagePath);
            logger.info('\n' + 'monitoring element set to: ' + this.scroller);
            _this.registerScrollEvent(options);
          }
          // initialize show on scroll
          if ( options.type === 'showOnScroll') {
            logger.info('\n' + 'processing mode: ' + options.type);
            logger.info('\n' + 'loading items from path: ' + options.pagePath);
            logger.info('\n' + 'monitoring element set to: ' + this.scroller);
            _this.registerScrollEvent(options);
          }
          logger.info('\n' + 'initializing plugin: finished');
          logger.info('\n' + 'state: finished');
          clearInterval(dependencies_met_page_ready);
        }
      }, 25);
    },

    // -------------------------------------------------------------------------
    // isInViewport()
    // detects if an element is visible in an viewport specified
    // -------------------------------------------------------------------------
    isInViewport: function (elm, offset) {
      // if the element doesn't exist, abort
    	if( elm.length == 0 ) {
    		return;
    	}
    	var $window = jQuery(window);
    	var viewport_top = $window.scrollTop();
    	var viewport_height = $window.height();
    	var viewport_bottom = viewport_top + viewport_height;
    	var $elm = jQuery(elm);
    	var top = $elm.offset().top + offset;
    	var height = $elm.height();
    	var bottom = top + height;

    	return (top >= viewport_top && top < viewport_bottom) ||
    	(bottom > viewport_top && bottom <= viewport_bottom) ||
    	(height > viewport_height && top <= viewport_top && bottom >= viewport_bottom);
    },

    // -------------------------------------------------------------------------
    // bottomReached()
    // detect final scroll position
    // NOTE: the calculation for BOTTOM position is different for
    //       elementScroll and windowScroll. For elementScroll, the
    //       trigger isBottomReached is TRUE, if the scroll position has
    //       the end of the container PLUS a given scrollOffset.
    //       For windowScroll, the trigger isBottomReached is TRUE, if
    //       the scroll position has the end of the window MINUS
    //       a given scrollOffset.
    // -------------------------------------------------------------------------
    isBottomReached: function (options) {
      var _this = this;
      var bottom, scrollY;
      var clientHeight = $(options.elementID).height();

      if (_this.settings.elementScroll) {
        // check scroll position of the container items are to be added
        var $window = $(window);
        var viewport_top = $window.scrollTop();
        var viewport_height = $window.height();
        var viewport_bottom = viewport_top + viewport_height - options.scrollOffset;
        var $elm = $(options.elementID);
        var top = $elm.offset().top + clientHeight;
        var height = $elm.height();
        bottom = top + height;

        return (top >= viewport_top && top < viewport_bottom) ||
        (bottom > viewport_top && bottom <= viewport_bottom) ||
        (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom);
      } else {
        // check scroll position of the (overall) window
        return (window.innerHeight + window.pageYOffset + options.scrollOffset >= document.body.offsetHeight);
      }
    },

    // -------------------------------------------------------------------------
    // detectScroll()
    // EventHandler to load new items for infinite scroll if final scroll
    // position reached
    // -------------------------------------------------------------------------
    registerScrollEvent: function (options) {
      var _this = this;
      var logger = log4javascript.getLogger('j1.scroller.core.registerScrollEvent');

      // scroller type infiniteScroll
      if (options.type === 'infiniteScroll') {
        logger.info('\n' + 'register scroll event of type: ' + options.type);

        // register event function DYNAMICALLY
        _this[options.id] = function (event) {
          var options = _this.settings;

          if (_this.isBottomReached(options)) {
            if (options.firstPage > options.lastPage ) {
              logger.info('\n' + 'last page detected on: ' + options.lastPage);
              window.removeEventListener('scroll', _this[options.id]);
              logger.info('\n' + 'scroll event: removed');

              if (options.infoLastPage ) {
                  _this.infoLastPage(options);
              }
              return false;
            }
            _this.getNewPost(options);
          }
        };
        window.addEventListener('scroll', _this[options.id]);
        logger.info('\n' + 'scroll event: registered');
      }

      // scroller type showOnScroll
      if (options.type === 'showOnScroll') {
        logger.info('\n' + 'register scroll event of type: ' + options.type);

        // register event function DYNAMICALLY
        _this[options.id] = function (event) {
          if (_this.isInViewport ($('#' + options.id ), options.scrollOffset)) {
      			logger.info('\n' + 'specified container is in view: ' + options.id);
            $('.' + options.id).show(options.showDelay);
      			logger.info('\n' + 'remove eventHandler');
            window.removeEventListener('scroll', _this[options.id]);
          }
        }
      	window.addEventListener('scroll', _this[options.id]);
      }

    },

    // -------------------------------------------------------------------------
    // getNewPost()
    // load new items (from current path)
    // Note:  loader flag prevents to load items if AJAX load in progress
    //        is NOT finished
    // -------------------------------------------------------------------------
    getNewPost: function (options) {
      var _this = this;
      var logger = log4javascript.getLogger('j1.scroller.core.getNewPost');

      logger.debug('\n' + 'trigger loading ');

      // initialze loader flag
      if (this.itemsLoaded === false) return false;

      // set loader flag (false == not loaded)
      this.itemsLoaded = false;

      // display spinner while loading
      if (options.loadStatus) {
        logger.info('\n' + 'show: spinner');
        $('.loader-ellips').show();
      }

      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
          if (xmlhttp.status == 200) {
            options.firstPage++;
            var childItems = _this.getChildItemsByAjaxHTML(options, xmlhttp.responseText);
            _this.appendNewItems(childItems);

            logger.info('\n' + 'loading new items: successful');

            // hide the spinner after loading
            if (options.loadStatus) {
                logger.info('\n' + 'hide: spinner');
                $('.loader-ellips').hide();
            }

            // set loader flag (true == loaded)
            // return _this.itemsLoaded = true;
            _this.itemsLoaded = true;
          } else {
            // hide the spinner
            if (options.loadStatus) {
                logger.info('\n' + 'hide: spinner');
                $('.loader-ellips').hide();
            }

            logger.error('\n' + 'loading new items failed, HTTP response: ' + xmlhttp.status );
            // set loader flag (true == loaded)
            // return _this.itemsLoaded = false;
            _this.itemsLoaded = false;
          }
        }
      };
      logger.info('\n' + 'loading new items from path: ' + options.pagePath + options.firstPage);
      xmlhttp.open("GET", location.origin + options.pagePath + options.firstPage + '/index.html', true);
      xmlhttp.send();
    },

    // -------------------------------------------------------------------------
    // getChildItemsByAjaxHTML()
    // extract items from page loaded
    // -------------------------------------------------------------------------
    getChildItemsByAjaxHTML: function (options, HTMLText) {
      var newHTML = document.createElement('html');
      var logger = log4javascript.getLogger('j1.scroller.core.getChildItemsByAjaxHTML');

      logger.debug('\n' + 'load new items');
      newHTML.innerHTML = HTMLText;
      var childItems = newHTML.querySelectorAll(options.elementID + ' > *');
      return childItems;
    },

    // -------------------------------------------------------------------------
    // appendNewItems()
    // append items and run post processing
    // -------------------------------------------------------------------------
    appendNewItems: function (items) {
      var _this           = this;
      var logger          = log4javascript.getLogger('j1.scroller.core.appendNewItems');
      var cookie_names    = j1.getCookieNames();
      var user_translate  = j1.readCookie(cookie_names.user_translate);

      logger.debug('\n' + 'append new items');
      items.forEach(function (item) {
        _this.element.appendChild(item);
      });

      // no dropcaps if translation enabled
      if (user_translate.translationEnabled) {
        logger.info('\n' + 'translation enabled: ' + user_translate.translationEnabled);
        logger.warn('\n' + 'skipped processing of dropcaps');
      } else {
        // initialize dropcaps
        logger.info('\n' + 'post processing: createDropCap');
        j1.core.createDropCap();
      }

    },

    // -------------------------------------------------------------------------
    // getNewPost()
    // load|append new items
    // Note:  loader flag prevents to load items if AJAX load in progress
    //        is NOT finished
    // -------------------------------------------------------------------------
    infoLastPage: function (options) {
      var _this         = this;
        var logger      = log4javascript.getLogger('j1.scroller.core.infoLastPage');

        logger.info('\n' + 'show: infoLastPage');
        $('.page-scroll-last').show();
    }
  }); // END prototype

  // wrapper around the constructor to prevent multiple instantiations
  $.fn [pluginName] = function(options) {
    return this.each(function() {
      if (!$.data( this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" +
        pluginName, new Plugin(this, options));
      }
    });
  };

})(jQuery, window, document);



  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/toccer.js
 # JS Adapter for J1 Toccer
 #
 # Product/Info:
 # https://jekyll.one
 # https://tscanlin.github.io/tocbot
 #
 # Copyright (C) 2020 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see https://jekyll.one
 # Tocbot is licensed under under the MIT License.
 # For details, see https://tscanlin.github.io/tocbot
 # -----------------------------------------------------------------------------
 # Adapter generated: 2020-09-28 19:58:45 +0200
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter['toccer'] = (function () {
  var environment   = 'development'; // Set environment
  var moduleOptions = {};
  var _this;
  var logger;
  var logText;
  // ---------------------------------------------------------------------------
  // helper functions
  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------
  // main object
  // ---------------------------------------------------------------------------
  return {
    // -------------------------------------------------------------------------
    // initializer
    // -------------------------------------------------------------------------
    init: function (options) {
      // -----------------------------------------------------------------------
      // globals
      // -----------------------------------------------------------------------
      _this   = j1.adapter.toccer;
      logger  = log4javascript.getLogger('j1.adapter.toccer');
      // initialize state flag
      _this.setState('started');
      logger.info('state: ' + _this.getState());
      logger.info('Module is being initialized');
      if (options  !== undefined) {
        var settings = $.extend({}, options);
      } else {
        var settings = false;
      }
      // cast text-based booleans
      var  isToc = (options.toc === 'true');
      var  isComments = (options.comments === 'true');
      if (settings.collapseDepth === undefined) {
        settings.collapseDepth = 2;
      }
      if (settings.scrollSmoothOffset === undefined) {
        settings.scrollSmoothOffset = -80;
      }
      if (settings.enabled === undefined) {
        settings.enabled = true;
      }
      // save config settings into the toccer object for global|later access
      //
      _this['moduleOptions'] = settings;
      if (isToc) {
        var dependencies_met_navigator = setInterval(function() {
//        if ( j1.adapter.navigator.getState() == 'finished' ) {
          if ( j1.getState() == 'finished' ) {
            var settings = j1.adapter.toccer.moduleOptions;
            // calculate (tocbot page) offset DYMICALLY for correct
            // smoothscroll position
            //
            var $pagehead       = $('.attic');
            var $navbar         = $('nav.navbar');
            var $adblock        = $('#adblock');
            var navbarType      = $navbar.hasClass('navbar-fixed') ? 'fixed' : 'scrolled';
            var fontSize        = $('body').css('font-size').replace('px','');
            var start           = window.pageYOffset;
            var l               = parseInt(fontSize);
            var h               = $pagehead.length ? $pagehead.height() : 0;
            var n               = $navbar.length ? $navbar.height() : 0;
            var a               = $adblock.length ? $adblock.height() : 0;
            var o               = navbarType == 'fixed' ? -1*(n + a + l) : -1*(h + n + a + l);
            settings.scrollSmoothOffset = o;
            _this.initToccerCore(settings);
            _this.setState('finished');
            logger.info('state: ' + _this.getState());
            logger.info('module initialized successfully');
            logger.info('met dependencies for: j1');
            clearInterval(dependencies_met_navigator);
          }
        }, 25);
      }
    }, // END init
    // -------------------------------------------------------------------------
    // Set Toccer options
    // -------------------------------------------------------------------------
    initToccerCore: function (options) {
      if (options  !== undefined) {
        var settings = $.extend({}, options);
      } else {
        var settings = false;
      }
      _this.setState('running');
      logger.info('state: ' + _this.getState());
      // tocbot get fired if HTML portion is loaded (AJAX load finished)
      var dependencies_met_ajax_load_finished = setInterval (function () {
        if ($('#toc_mmenu').length) {
          /* eslint-disable */
          tocbot.init({
            log:                    false,
            activeLinkColor:        null,
            tocSelector:            ".js-toc",
            headingSelector:        "h2, h3, h4, h5",
            ignoreSelector:         ".notoc",
            contentSelector:        ".js-toc-content",
            collapseDepth:          settings.collapseDepth,
            throttleTimeout:        50,
            hasInnerContainers:     false,
            includeHtml:            false,
            linkClass:              'toc-link',
            extraLinkClasses:       '',
            activeLinkClass:        'is-active-link',
            listClass:              'toc-list',
            extraListClasses:       '',
            isCollapsedClass:       'is-collapsed',
            collapsibleClass:       'is-collapsible',
            listItemClass:          'toc-list-item',
            positionFixedSelector:  '',
            positionFixedClass:     'is-position-fixed',
            fixedSidebarOffset:     'auto',
            scrollSmooth:           true,
            scrollSmoothDuration:   300,
            scrollSmoothOffset:     settings.scrollSmoothOffset,
            headingsOffset:         1,
            throttleTimeout:        50
          });
          /* eslint-enable */
          logger.info('met dependencies for: xhrData');
          clearInterval(dependencies_met_ajax_load_finished);
        } // END AJAX load finished
      }, 25); // END dependencies_met_ajax_load_finished
    }, // END initToccerCore
    // -------------------------------------------------------------------------
    // messageHandler: MessageHandler for J1 NAV module
    // Manage messages (paylods) send from other J1 modules
    // -------------------------------------------------------------------------
    messageHandler: function (sender, message) {
      var json_message = JSON.stringify(message, undefined, 2);
      logText = 'received message from ' + sender + ': ' + json_message;
      logger.debug(logText);
      // -----------------------------------------------------------------------
      //  Process commands|actions
      // -----------------------------------------------------------------------
      if (message.type === 'command' && message.action === 'module_initialized') {
        //
        // Place handling of command|action here
        //
        logger.info(message.text);
      }
      //
      // Place handling of other command|action here
      //
      return true;
    }, // END messageHandler
    // -------------------------------------------------------------------------
    // setState()
    // Sets the current (processing) state of the module
    // -------------------------------------------------------------------------
    setState: function (stat) {
      _this.state = stat;
    }, // END setState
    // -------------------------------------------------------------------------
    // getState()
    // Returns the current (processing) state of the module
    // -------------------------------------------------------------------------
    getState: function () {
      return _this.state;
    } // END getState
  }; // END return
})(j1, window);




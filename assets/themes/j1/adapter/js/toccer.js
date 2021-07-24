

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/toccer.js
 # JS Adapter for J1 Toccer
 #
 # Product/Info:
 # https://jekyll.one
 # https://tscanlin.github.io/tocbot
 #
 # Copyright (C) 2021 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see https://jekyll.one
 # Tocbot is licensed under under the MIT License.
 # For details, see https://tscanlin.github.io/tocbot
 # -----------------------------------------------------------------------------
 # Adapter generated: 2021-07-24 15:00:20 +0000
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter['toccer'] = (function () {
  var environment         = 'development';                                  // Set environment
  var moduleOptions       = {};
  var toccerOptions       = {};
  var frontmatterOptions  = {};
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
      logger.info('\n' + 'state: ' + _this.getState());
      logger.info('\n' + 'module is being initialized');
      // create settings object from frontmatterOptions
      var frontmatterOptions = options != null ? $.extend({}, options) : {};
      // -----------------------------------------------------------------------
      // defaults
      // -----------------------------------------------------------------------
      var settings  = $.extend({
        module_name: 'j1.adapter.toccer',
        generated:   '2021-07-24 15:00:20 +0000'
      }, options);
      // -----------------------------------------------------------------------
      // options loader
      // -----------------------------------------------------------------------
      /* eslint-disable */
      toccerOptions = $.extend({}, {"enabled":true, "log":false, "tocSelector":".js-toc", "contentSelector":".js-toc-content", "headingSelector":"h2, h3, h4, h5, h6", "ignoreSelector":".notoc", "collapseDepth":4, "activeLinkColor":"#f44336", "throttleTimeout":150, "scrollSmooth":true, "scrollSmoothDuration":300, "scrollSmoothOffset":10, "scrollContainer":null, "delay":400});
      // Load (individual) frontmatter options (currently NOT used)
      if (options != null) { frontmatterOptions = $.extend({}, options); }
      if (typeof frontmatterOptions !== 'undefined') {
        moduleOptions = j1.mergeData(frontmatterOptions, toccerOptions);
      }
      /* eslint-enable */
      // save config settings into the toccer object for global access
      _this['moduleOptions'] = moduleOptions;
      // cast text-based booleans
      var isToc = (moduleOptions.toc === 'true');
      var isComments = (moduleOptions.comments === 'true');
      if ( typeof moduleOptions.collapseDepth === 'undefined') {
        moduleOptions.collapseDepth = 3;
      }
      if (isToc) {
        var dependencies_met_navigator = setInterval(function() {
//        if ( j1.adapter.navigator.getState() == 'finished' ) {
          if ( j1.getState() == 'finished' ) {
            var settings = j1.adapter.toccer.moduleOptions;
            _this.initToccerCore(settings);
            _this.setState('finished');
            logger.info('\n' + 'state: ' + _this.getState());
            logger.info('\n' + 'module initialized successfully');
            logger.info('\n' + 'met dependencies for: j1');
            clearInterval(dependencies_met_navigator);
          }
        }, 25);
      }
    }, // END init
    // -------------------------------------------------------------------------
    // Set Toccer options
    // -------------------------------------------------------------------------
    initToccerCore: function (options) {
      var scrollOffset;
      if (options  !== undefined) {
        var settings = $.extend({}, options);
      } else {
        var settings = false;
      }
      // calculate offset for correct (smooth) scroll position
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
      scrollOffset        = navbarType == 'fixed' ? -1*(n + a + l) : -1*(h + n + a + l);
      // static offset, to be checked why this is needed
      //
      scrollOffset        = scrollOffset + moduleOptions.scrollSmoothOffset
      _this.setState('running');
      logger.info('\n' + 'state: ' + _this.getState());
      // tocbot get fired if HTML portion is loaded (AJAX load finished)
      //
      var dependencies_met_ajax_load_finished = setInterval (function () {
        if ($('#toc_mmenu').length) {
          /* eslint-disable */
          tocbot.init({
            log:                    moduleOptions.log,
            activeLinkColor:        moduleOptions.activeLinkColor,
            tocSelector:            moduleOptions.tocSelector,
            headingSelector:        moduleOptions.headingSelector,
            ignoreSelector:         moduleOptions.ignoreSelector,
            contentSelector:        moduleOptions.contentSelector,
            collapseDepth:          moduleOptions.collapseDepth,
            throttleTimeout:        moduleOptions.throttleTimeout,
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
            scrollContainer:        null,
            scrollSmooth:           moduleOptions.scrollSmooth,
            scrollSmoothDuration:   moduleOptions.scrollSmoothDuration,
            scrollSmoothOffset:     scrollOffset,
            headingsOffset:         1,
            throttleTimeout:        moduleOptions.throttleTimeout
          });
          /* eslint-enable */
          logger.info('\n' + 'met dependencies for: loadHTML');
          clearInterval(dependencies_met_ajax_load_finished);
        } // END AJAX load finished
      }, 25); // END dependencies_met_ajax_load_finished
      $(window).on('resize', function() {
        var scrollOffset;
        // re-calculate offset for correct (smooth) scroll position
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
        scrollOffset        = navbarType == 'fixed' ? -1*(n + a + l) : -1*(h + n + a + l);
        // static offset, to be checked why this is needed
        scrollOffset        = scrollOffset + moduleOptions.scrollSmoothOffset
        tocbot.refresh({
          log:                    moduleOptions.log,
          activeLinkColor:        moduleOptions.activeLinkColor,
          tocSelector:            moduleOptions.tocSelector,
          headingSelector:        moduleOptions.headingSelector,
          ignoreSelector:         moduleOptions.ignoreSelector,
          contentSelector:        moduleOptions.contentSelector,
          collapseDepth:          moduleOptions.collapseDepth,
          throttleTimeout:        moduleOptions.throttleTimeout,
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
          scrollContainer:        null,
          scrollSmooth:           moduleOptions.scrollSmooth,
          scrollSmoothDuration:   moduleOptions.scrollSmoothDuration,
          scrollSmoothOffset:     scrollOffset,
          headingsOffset:         1,
          throttleTimeout:        moduleOptions.throttleTimeout
        });
      });
    }, // END initToccerCore
    // -------------------------------------------------------------------------
    // messageHandler: MessageHandler for J1 NAV module
    // Manage messages (paylods) send from other J1 modules
    // -------------------------------------------------------------------------
    messageHandler: function (sender, message) {
      var json_message = JSON.stringify(message, undefined, 2);
      logText = '\n' + 'received message from ' + sender + ': ' + json_message;
      logger.debug(logText);
      // -----------------------------------------------------------------------
      //  Process commands|actions
      // -----------------------------------------------------------------------
      if (message.type === 'command' && message.action === 'module_initialized') {
        //
        // Place handling of command|action here
        //
        logger.info('\n' + message.text);
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




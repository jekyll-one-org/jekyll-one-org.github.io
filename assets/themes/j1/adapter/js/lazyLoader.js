

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/lazyLoader.js
 # J1 Adapter for the lazyLoader module (core)
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-09-22 02:53:34 +0200
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.lazyLoader = (function (j1, window) {
var environment     = 'development';
var cookie_names    = j1.getCookieNames();
var user_state      = j1.readCookie(cookie_names.user_state);
var state           = 'not_started';
var lazyLoaderDefaults;
var lazyLoaderSettings;
var lazyLoaderOptions;
var frontmatterOptions;
var _this;
var logger;
var logText;
  // ---------------------------------------------------------------------------
  // Main object
  // ---------------------------------------------------------------------------
  return {
    // -------------------------------------------------------------------------
    // init()
    // adapter initializer
    // -------------------------------------------------------------------------
    init: function (options) {
      // -----------------------------------------------------------------------
      // Default module settings
      // -----------------------------------------------------------------------
      var settings = $.extend({
        module_name: 'j1.adapter.lazyLoader',
        generated:   '2023-09-22 02:53:34 +0200'
      }, options);
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      // create settings object from module options
      //
      lazyLoaderDefaults = $.extend({}, {"enabled":false});
      lazyLoaderSettings = $.extend({}, {"enabled":true, "loaders":[{"loader":null, "enabled":true, "description":"MDI Icons (light)", "src":"/assets/themes/j1/core/css/icon-fonts/mdil.min.css", "selector":".mdil", "rootMargin":"150px 0px"}, {"loader":null, "enabled":true, "description":"MDI Icon CSS (regular)", "src":"/assets/themes/j1/core/css/icon-fonts/mdi.min.css", "selector":".mdi", "rootMargin":"150px 0px"}, {"loader":null, "enabled":true, "description":"FA Icon CSS", "src":"/assets/themes/j1/core/css/icon-fonts/fontawesome.min.css", "selector":".fa", "rootMargin":"150px 0px"}, {"loader":null, "enabled":true, "description":"CountryFlag Icon CSS", "src":"/assets/themes/j1/core/country-flags/css/theme/uno.min.css", "selector":".flag-icon", "rootMargin":"150px 0px"}, {"loader":null, "enabled":true, "description":"rTable CSS", "src":"/assets/themes/j1/modules/rtable/css/theme/uno/rtable.min.css", "selector":".rtable", "rootMargin":"150px 0px"}]});
      lazyLoaderOptions  = $.extend(true, {}, lazyLoaderDefaults, lazyLoaderSettings);
      _this  = j1.adapter.lazyLoader;
      logger = log4javascript.getLogger('j1.adapter.lazyLoader');
      var dependencies_met_lazy_loader = setInterval(function() {
        var pageFinished = (j1.getState() == 'finished') ? true: false;
        if (pageFinished) {
          _this.setState('started');
          logger.info('\n' + 'initialize moodule lazyLoader: started');
          _this.registerLoaders(lazyLoaderOptions);
          _this.setState('finished');
          logger.info('\n' + 'initialize moodule lazyLoader: finished');
          clearInterval(dependencies_met_lazy_loader);
        }
      }, 10);
    }, // END init
    // -------------------------------------------------------------------------
    // registerLoaders()
    // Lazy load CSS to speed up page rendering
    //
    // Requires the following settings:
    //
    //    src:        the 'location' of the CSS file
    //    selector:   the 'selector' that triggers the observer
    //    rootMargin: the 'margin' before the load is trigged
    //
    // -------------------------------------------------------------------------
    //
    registerLoaders: function () {
        j1.lazyCSS().observe({
          src:        '/assets/themes/j1/core/css/icon-fonts/mdil.min.css',
          selector:   '.mdil',
          rootMargin: '150px 0px'
        });
        logger.info('\n' + 'register lazy loading for: MDI Icons (light)');
        j1.lazyCSS().observe({
          src:        '/assets/themes/j1/core/css/icon-fonts/mdi.min.css',
          selector:   '.mdi',
          rootMargin: '150px 0px'
        });
        logger.info('\n' + 'register lazy loading for: MDI Icon CSS (regular)');
        j1.lazyCSS().observe({
          src:        '/assets/themes/j1/core/css/icon-fonts/fontawesome.min.css',
          selector:   '.fa',
          rootMargin: '150px 0px'
        });
        logger.info('\n' + 'register lazy loading for: FA Icon CSS');
        j1.lazyCSS().observe({
          src:        '/assets/themes/j1/core/country-flags/css/theme/uno.min.css',
          selector:   '.flag-icon',
          rootMargin: '150px 0px'
        });
        logger.info('\n' + 'register lazy loading for: CountryFlag Icon CSS');
        j1.lazyCSS().observe({
          src:        '/assets/themes/j1/modules/rtable/css/theme/uno/rtable.min.css',
          selector:   '.rtable',
          rootMargin: '150px 0px'
        });
        logger.info('\n' + 'register lazy loading for: rTable CSS');
    }, // END registerLoaders
    // -------------------------------------------------------------------------
    // messageHandler()
    // manage messages send from other J1 modules
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




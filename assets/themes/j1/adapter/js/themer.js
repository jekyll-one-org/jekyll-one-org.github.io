

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/themer.js
 # JS Adapter for J1 themer (bootstrapThemeSwitcher)
 #
 # Product/Info:
 # https://jekyll.one
 # https://github.com/jguadagno/bootstrapThemeSwitcher
 #
 # Copyright (C) 2021 Juergen Adams
 # Copyright (C) 2014 Joseph Guadagno
 #
 # J1 Template is licensed under the MIT License.
 # For details, see https://jekyll.one
 # bootstrapThemeSwitcher is licensed under the MIT License.
 # For details, see https://github.com/jguadagno/bootstrapThemeSwitcher/blob/master/LICENSE
 # -----------------------------------------------------------------------------
 # NOTE:
 #  Setup of theme loaders for local_themes|remote_themes moved
 #  to adapter navigator.js
 # -----------------------------------------------------------------------------
 # Adapter generated: 2021-04-19 18:54:40 +0000
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
/* eslint quotes: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter['themer'] = (function (j1, window) {
  // ---------------------------------------------------------------------------
  // globals
  // ---------------------------------------------------------------------------
  var environment                 = 'development';
  var themerOptions               = $.extend({}, {"enabled":true, "retries":30, "saveToCookie":true, "debug":false, "preview_page":"/pages/public/previewer/theme/", "menu_icon_family":"MDI", "menu_icon_color":"#9E9E9E", "menu_icon_size":"mdi-sm", "cssThemeLink":"bootstrapTheme", "defaultCssFile":"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css", "bootswatchApiUrl":"https://bootswatch.com/api", "bootswatchApiVersion":4, "loadFromBootswatch":true, "localThemes":"/assets/data/themes.json", "excludeBootswatch":"Default, default, Lux, Sketchy", "includeBootswatch":"", "skipIncludeBootswatch":""});
  var user_state                  = {};
  var cookie_names                = j1.getCookieNames();
  var cookie_user_state_name      = cookie_names.user_state;
  var user_state_detected         = false;
  var styleLoaded                 = false;
  var id                          = 'default';
  var user_state_cookie;
  var theme_css_html;
  var _this;
  var logger;
  var logText;
  var default_theme_name        = 'Uno light';
  var default_theme_author      = 'J1 Team';
  var default_theme_author_url  = '';
  var default_theme_css_name    = default_theme_name.toLowerCase().replace(' ', '-');
  var default_theme_css         = (environment == 'production')
                                  ? '/assets/themes/j1/core/css/themes/' +default_theme_css_name+ '/bootstrap.min.css'
                                  : '/assets/themes/j1/core/css/themes/' +default_theme_css_name+ '/bootstrap.css';
  // ---------------------------------------------------------------------------
  // helper functions
  // ---------------------------------------------------------------------------
  // Example: var styleLoaded = styleSheetLoaded('');
  function styleSheetLoaded(styleSheet) {
    var sheets = document.styleSheets, stylesheet = sheets[(sheets.length - 1)];
    // find CSS file 'styleSheetName' in document
    for(var i in document.styleSheets) {
      if(sheets[i].href && sheets[i].href.indexOf(styleSheet) > -1) {
        return true;
      }
    }
    return false;
  }
  // ---------------------------------------------------------------------------
  // Main object
  // ---------------------------------------------------------------------------
  return {
    // -------------------------------------------------------------------------
    // initializer
    // -------------------------------------------------------------------------
    init: function () {
      // -----------------------------------------------------------------------
      // globals
      // -----------------------------------------------------------------------
      _this     = j1.adapter.themer;
      logger    = log4javascript.getLogger('j1.adapter.themer');
      // initialize state flag
      _this.state = 'started';
      logger.info('state: ' + _this.getState());
      // Detect|Set J1 UserState
      user_state_detected = j1.existsCookie(cookie_user_state_name);
      if (user_state_detected) {
        user_state            = j1.readCookie(cookie_user_state_name);
      }
      // initial user_state cookie
      //
      if ( user_state.theme_name == '') {
        user_state.theme_name       = default_theme_name;
        user_state.theme_css        = default_theme_css;
        user_state.theme_author     = default_theme_author;
        user_state.theme_author_url = default_theme_author_url;
      }
      styleLoaded     = styleSheetLoaded(user_state.theme_css);
      theme_css_html  = '<link rel="stylesheet" id="' + id + '" href="' + user_state.theme_css + '" type="text/css" />';
      // skip loading UNO CSS file except it is NOT loaded
      //
      if (!user_state.theme_name.includes('Uno') || !styleLoaded) {
        $('head').append(theme_css_html);
      }
      // store if theme_switcher is enabled
      //
      user_state.theme_switcher = themerOptions.enabled;
      j1.writeCookie({
        name: cookie_user_state_name,
        data: user_state,
        expires: 365                                                            // was missing
      });
      // jadams, 2021-01-03: dependency has to be checked in more detail
      //
      var dependencies_met_j1_finished = setInterval (function () {
        if (j1.getState() == 'finished') {
          if (themerOptions.enabled) {
            // enable BS ThemeSwitcher
            //
            logger.info('themes detected as: enabled');
            logger.info('theme is being initialized: ' + user_state.theme_name);
            // jadams, 2021-02-22: make sure that remote themes are loaded
            // max retries = max_count
            // load list of remote themes
            //
            if ( $('#remote_themes').length ) {
              var themes_count;
              var interval_count = 0;
              var max_count      = themerOptions.retries;
              /* eslint-disable */
              // initialize Bootswatch Theme Switcher
              $('#remote_themes').bootstrapThemeSwitcher.defaults = {
                debug:                    themerOptions.debug,
                saveToCookie:             themerOptions.saveToCookie,
                cssThemeLink:             themerOptions.cssThemeLink,
                cookieThemeName:          themerOptions.cookieThemeName,
                cookieDefaultThemeName:   themerOptions.cookieDefaultThemeName,
                cookieThemeCss:           themerOptions.cookieThemeCss,
                cookieThemeExtensionCss:  themerOptions.cookieThemeExtensionCss,
                cookieExpiration:         themerOptions.cookieExpiration,
                cookiePath:               themerOptions.cookiePath,
                defaultCssFile:           themerOptions.defaultCssFile,
                bootswatchApiUrl:         themerOptions.bootswatchApiUrl,
                bootswatchApiVersion:     themerOptions.bootswatchApiVersion,
                loadFromBootswatch:       themerOptions.loadFromBootswatch,
                localFeed:                themerOptions.localThemes,
                excludeBootswatch:        themerOptions.excludeBootswatch,
                includeBootswatch:        themerOptions.includeBootswatch,
                skipIncludeBootswatch:    themerOptions.skipIncludeBootswatch
              }
              /* eslint-enable */
              var dependencies_met_remote_themes_loaded = setInterval(function() {
                interval_count += 1;
                themes_count = document.getElementById("remote_themes").getElementsByTagName("li").length;
                if ( themes_count > 0  ) {
                  logger.info('remote themes loaded: successfully');
                  logger.info('remote themes loaded: successfully after: ' + interval_count * 25 + ' ms');
                  clearInterval(dependencies_met_remote_themes_loaded);
                } else {
                    logger.debug('wait for theme to be loaded: ' + user_state.theme_name);
                }
                if (interval_count > max_count) {
                  logger.warn('remote themes loading: failed');
                  logger.warn('continue processing');
                  clearInterval(dependencies_met_remote_themes_loaded);
                }
              }, 25);
              logger.info('theme loaded: ' + user_state.theme_name);
              logger.info('theme css file: ' + user_state.theme_css);
              _this.setState('finished');
              logger.info('state: ' + _this.getState());
              logger.info('module initialized successfully');
              logger.info('met dependencies for: j1.adapter');
            }
          } else {
            _this.setState('finished');
            logger.info('state: ' + _this.getState());
            logger.info('themes detected as: disabled');
          }
          clearInterval(dependencies_met_j1_finished);
        }
      }, 25); // END 'dependencies_met_j1_finished'
    }, // END init
    // -------------------------------------------------------------------------
    // messageHandler
    // Manage messages send from other J1 modules
    // -------------------------------------------------------------------------
    messageHandler: function (sender, message) {
      var json_message = JSON.stringify(message, undefined, 2);
      logText = 'received message from ' + sender + ': ' + json_message;
      logger.info(logText);
      // -----------------------------------------------------------------------
      //  Process commands|actions
      // -----------------------------------------------------------------------
      if (message.type === 'command' && message.action === 'module_initialized') {
        logger.info(message.text);
        //
        // Place handling of other command|action here
        //
      }
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






  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/analytics.js
 # J1 Adapter for the analytics module
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2022 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2022-05-08 17:36:23 +0000
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.analytics = (function (j1, window) {
var url               = new liteURL(window.location.href);
var hostname          = url.hostname;
var environment       = 'development';
var gaScript          = document.createElement('script');
var providerID        = '<your-tracking-id>';
var skipAllHosts      = 'localhost, 127.0.0.1';
var validProviderID   = (providerID.includes('your')) ? false : true;
var optInOut          = true;
var anonymizeIP       = true;
var cookie_names      = j1.getCookieNames();
var date              = new Date();
var timestamp_now     = date.toISOString();
var skipHost          = false;
var skipHosts;
var gaCookies;
var user_consent;
var gaExists;
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
      var dependencies_met_page_ready = setInterval(function() {
        if (j1.getState() == 'finished') {
          logger = log4javascript.getLogger('j1.adapter.analytics.google');
          logger.info('\n' + 'Google Analytics: disabled');
          clearInterval(dependencies_met_page_ready);
        }
      }, 25);
      return;
    }, // END init
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




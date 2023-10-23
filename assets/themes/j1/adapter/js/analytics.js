

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/analytics.js
 # J1 Adapter for the analytics module
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-10-23 05:07:32 +0200
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
var cookie_names      = j1.getCookieNames();
var date              = new Date();
var timestamp_now     = date.toISOString();
var skipHost          = false;
var state             = 'not_started';
var analyticsDefaults;
var analyticsSettings;
var analyticsOptions;
var providerID;
var skipAllHosts;
var optInOut;
var anonymizeIP;
var validProviderID;
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
      var dependencies_met_page_ready = setInterval (function (options) {
        var pageState   = $('#no_flicker').css("display");
        var pageVisible = (pageState == 'block') ? true: false;
        if ( j1.getState() === 'finished' && pageVisible ) {
            // Load  module DEFAULTS|CONFIG
            analyticsDefaults = $.extend({}, {"enabled":false, "provider":"webwhiz", "trackingID":"your-tracking-id", "skipAllHosts":"localhost, 127.0.0.1", "google":{"optInOut":true, "anonymizeIP":true}});
            analyticsSettings = $.extend({}, {"enabled":true, "skipAllHosts":"localhost, 127.0.0.1", "trackingID":"<your-tracking-id>", "google":{"anonymizeIP":false}});
            analyticsOptions  = $.extend(true, {}, analyticsDefaults, analyticsSettings);
            // [INFO   ] [j1.adapter.analytics                    ] [ detected analytics provider (j1_config): webwhiz} ]
            // [INFO   ] [j1.adapter.analytics                    ] [ start processing load region head, layout:  ]
            // [INFO   ] [j1.adapter.analytics                    ] [ end processing ]
        }
      }, 10);
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




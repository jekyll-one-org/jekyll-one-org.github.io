
/*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/cookiebar.js
 # JS Adapter for Cookiebar
 #
 # Product/Info:
 # http://jekyll.one
 # http://www.primebox.co.uk/projects/jquery-cookiebar/
 #
 # Copyright (C) 2020 Juergen Adams
 # Copyright (C) 2016 Ant Parsons (primebox.co.uk)
 #
 # J1 Template is licensed under the MIT License.
 # For details, see https://jekyll.one
 # jQuery Cookibar is licensed under Creative Commons Attribution 3.0 Unported License.
 # For details, see http://www.primebox.co.uk/projects/jquery-cookiebar/
 #
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2020-07-25 00:45:21 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';
j1.adapter['cookiebar'] = (function (j1, window) {
  var environment   = 'production';
  var moduleOptions = {};
  var _this;
  var logger;
  var logText;
  // ---------------------------------------------------------------------------
  // Helper functions
  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------
  // Main object
  // ---------------------------------------------------------------------------
  return {
    // -------------------------------------------------------------------------
    // Initializer
    // -------------------------------------------------------------------------
    init: function () {
      // -----------------------------------------------------------------------
      // globals
      // -----------------------------------------------------------------------
      _this   = j1.adapter.cookiebar;
      logger  = log4javascript.getLogger('j1.adapter.cookiebar');
      _this.setState('started');
      logger.info('state: ' + _this.getState());
      logger.info('module is being initialized');
      $.cookieBar ({
        stopScrolling:          true,
        autoEnable:             true,
        message:                "</br>\n  <p>\n  Some of these pages use so-called Cookies,\n  which serve the content of this site to be\n  user-friendly, more effective and safer.\n  </p>\n</br>\n",
        acceptButton:           true,
        acceptText:             "I understand and agree",
        acceptFunction:         null,
        declineButton:          false,
        declineText:            "Disable Cookies",
        declineFunction:        null,
        policyButton:           true,
        policyText:             "Privacy",
        policyURL:              "/pages/public/legal/en/privacy/",
        acceptOnContinue:       false,
        acceptOnScroll:         false,
        acceptAnyClick:         false,
        expireDays:             3650,
        renewOnVisit:           false,
        forceShow:              false,
        effect:                 "slide",
        element:                "#no_flicker",
        append:                 false,
        fixed:                  false,
        bottom:                 false,
        zindex:                 99999,
        domain:                 "www.example.com",
        referrer:               "www.example.com"
      });
      _this.setState('finished');
      logger.info('state: ' + _this.getState());
      logger.info('initializing module finished');
      return true;
    }, // END init
    // -------------------------------------------------------------------------
    // messageHandler: MessageHandler for J1 CookieConsent module
    // Manage messages send from other J1 modules
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



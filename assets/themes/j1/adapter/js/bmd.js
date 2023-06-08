

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/bmd.js
 # J1 Adapter for BMD
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-06-07 07:10:34 +0200
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.bmd = (function (j1, window) {
  var environment   = 'development';
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
    init: function (options) {
      // -----------------------------------------------------------------------
      // Default module settings
      // -----------------------------------------------------------------------
      var settings = $.extend({
        module_name: 'j1.adapter.bmd',
        generated:   '2023-06-07 07:10:34 +0200'
      }, options);
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      _this   = j1.adapter.bmd;
      logger  = log4javascript.getLogger('j1.adapter.bmd');
      var dependencies_met_j1_finished = setInterval(function() {
        if (j1.getState() == 'finished') {
          // initialize state flag
          _this.setState('started');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module is being initialized');
          var log_text = '\n' + 'BMD is being initialized';
          logger.info(log_text);
          // BMD initializer
          $('body').bmd();
          _this.setState('finished');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'initializing module finished');
          clearInterval(dependencies_met_j1_finished);
        } // END dependencies_met_j1_finished
      }, 25);
    }, // END init
    // -------------------------------------------------------------------------
    // messageHandler: MessageHandler for J1 CookieConsent module
    // Manage messages send from other J1 modules
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




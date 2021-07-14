

  /*
 # -----------------------------------------------------------------------------
 #  ~/assets/themes/j1/adapter/js/framer.js
 #  J1 Adapter for J1 iFrameResizer
 #
 #  Product/Info:
 #  https://jekyll.one
 #  http://davidjbradshaw.github.io/iframe-resizer/
 #
 #  Copyright (C) 2021 Juergen Adams
 #  Copyright (C) 2013-15 David J. Bradshaw
 #
 #  J1 Template is licensed under the MIT License.
 #  For details, see https://jekyll.one
 #  iFrameResizer is licensed under under the MIT License.
 #  For details, see http://davidjbradshaw.github.io/iframe-resizer/
 #
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2021-07-14 11:51:45 +0000
 # -----------------------------------------------------------------------------
 */
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter['framer'] = (function (j1, window) {
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
      var dependencies_met_page_finished = setInterval (function () {
        if (j1.getState() === 'finished') {
            // -----------------------------------------------------------------------
            // globals
            // -----------------------------------------------------------------------
            _this   = j1.adapter.framer;
            logger  = log4javascript.getLogger('j1.adapter.framer');
            // initialize state flag
            _this.setState('started');
            logger.info('state: ' + _this.getState());
            logger.info('module is being initialized');
            // -----------------------------------------------------------------------
            // Default module settings
            // -----------------------------------------------------------------------
            var settings = $.extend({
              module_name: 'j1.adapter.example',
              generated:   '2021-07-14 11:51:45 +0000'
            }, options);
            // Load  module DEFAULTS|CONFIG
            /* eslint-disable */
            moduleOptions = $.extend({}, {"enabled":true, "load":"sync", "log":false, "autoResize":true, "bodyBackground":"", "bodyMargin":0, "checkOrigin":true, "inPageLinks":false, "interval":32, "heightCalculationMethod":"bodyOffset", "widthCalculationMethod":"scroll", "maxHeight":100000000, "minHeight":512, "maxWidth":100000000, "minWidth":0, "resizeFrom":"parent", "scrolling":false, "sizeHeight":true, "sizeWidth":false, "tolerance":0});
            /* eslint-enable */
            if (typeof settings !== 'undefined') {
              moduleOptions = j1.mergeData(moduleOptions, settings);
            }
            iFrameResize({
              log:                      moduleOptions.log,
              autoResize:               moduleOptions.autoResize,
              bodyBackground:           moduleOptions.bodyBackground,
              bodyMargin:               moduleOptions.bodyMargin,
              checkOrigin:              moduleOptions.checkOrigin,
              inPageLinks:              moduleOptions.inPageLinks,
              interval:                 moduleOptions.interval,
              heightCalculationMethod:  moduleOptions.heightCalculationMethod,
              maxHeight:                moduleOptions.maxHeight,
              minWidth:                 moduleOptions.minWidth,
              maxWidth:                 moduleOptions.maxWidth,
              minHeight:                moduleOptions.minHeight,
              resizeFrom:               moduleOptions.resizeFrom,
              scrolling:                moduleOptions.scrolling,
              sizeHeight:               moduleOptions.sizeHeight,
              sizeWidth:                moduleOptions.sizeWidth,
              tolerance:                moduleOptions.tolerance,
              widthCalculationMethod:   moduleOptions.widthCalculationMethod,
              targetOrigin:             moduleOptions.checkOrigin
            });
            _this.setState('finished');
            logger.info('state: ' + _this.getState());
            logger.info('initializing module finished');
            clearInterval(dependencies_met_page_finished);
            return true;
        }
      }, 25);
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
    // getState
    // Returns the current (processing) state of the module
    // -------------------------------------------------------------------------
    getState: function () {
      return j1.adapter.navigator.state;
    }, // END getState
    // -------------------------------------------------------------------------
    // setXhrState
    // Set the final (loading) state of an element (partial) loaded via Xhr
    // -------------------------------------------------------------------------
    setXhrState: function (obj, stat) {
      j1.adapter.navigator.xhrData[obj] = stat;
    }, // END setXhrState
    // -------------------------------------------------------------------------
    // getState
    // Returns the final (loading) state of an element (partial) loaded via Xhr
    // -------------------------------------------------------------------------
    getXhrState: function (obj) {
      return j1.adapter.navigator.xhrData[obj];
    } // END getXhrState
  }; // END return
})(j1, window);




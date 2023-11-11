

  /*
 # -----------------------------------------------------------------------------
 #  ~/assets/themes/j1/adapter/js/iframer.js
 #  J1 Adapter for J1 Module iFramer
 #
 #  Product/Info:
 #  https://jekyll.one
 #  http://davidjbradshaw.github.io/iframe-resizer/
 #
 #  Copyright (C) 2023, 2024 Juergen Adams
 #  Copyright (C) 2013-2023  David J. Bradshaw
 #
 #  J1 Template is licensed under the MIT License.
 #  For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 #  iFrameResizer is licensed under under the MIT License.
 #  For details, see http://davidjbradshaw.github.io/iframe-resizer/
 #
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-11-11 21:02:44 +0100
 # -----------------------------------------------------------------------------
 */
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.iframer = (function (j1, window) {
  var environment   = 'development';
  var state         = 'not_started';
  var iframerDefaults;
  var iframerSettings;
  var iframerOptions;
  var _this;
  var logger;
  var logText;
  var url;
  var origin;
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
      url               = new URL(window.location.href);
      origin            = url.origin;
      // -----------------------------------------------------------------------
      // Default module settings
      // -----------------------------------------------------------------------
      var settings = $.extend({
        module_name: 'j1.adapter.iframer',
        generated:   '2023-11-11 21:02:44 +0100'
      }, options);
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      _this   = j1.adapter.iframer;
      logger  = log4javascript.getLogger('j1.adapter.iframer');
      // Load  module DEFAULTS|CONFIG
      iframerDefaults = $.extend({}, {"enabled":false, "xhr_data_path":"/assets/data/iframes", "delay_iframer":1000, "inject_contentWindowScript":false, "delay_inject_contentWindowScript":500, "attributes":{"allow":false, "allowfullscreen":true, "height":false, "loading":"eager", "name":false, "referrerpolicy":"no-referrer", "src":"", "scrolling":false, "title":false, "width":false}, "options":{"autoResize":true, "bodyBackground":null, "bodyMargin":null, "bodyMarginV1":8, "bodyPadding":null, "checkOrigin":true, "inPageLinks":false, "enablePublicMethods":true, "heightCalculationMethod":"bodyOffset", "id":"iFrameResizer", "interval":32, "log":false, "maxHeight":"Infinity", "maxWidth":"Infinity", "minHeight":0, "minWidth":0, "mouseEvents":true, "resizeFrom":"parent", "scrolling":false, "sizeHeight":true, "sizeWidth":false, "warningTimeout":5000, "tolerance":0, "widthCalculationMethod":"scroll", "onClose":"function () { return true }", "onClosed":"function () {}", "onInit":"function () {}", "onMessage":"function () { warn('onMessage function not defined') }", "onMouseEnter":"function () {}", "onMouseLeave":"function () {}", "onResized":"function () {}", "onScroll":"function () { return true }"}});
      iframerSettings = $.extend({}, {"enabled":true, "iframes":[{"iframe":null, "enabled":true, "id":"magic_iframe", "inject_contentWindowScript":true, "attributes":{"loading":"lazy", "name":"iframe document", "src":"/pages/public/tools/previewer/iframer_documents/iframe.content.html", "width":"100%", "scrolling":false}, "options":{"log":true, "inPageLinks":true, "onResized":"function(messageData) {\n  // Callback when page is resized\n  $('p#resize_stats').html (\n    '<b>iFrame ID:</b> ' +\n      messageData.iframe.id +\n      '&nbsp;&nbsp; <b>Height:</b> ' +\n      messageData.height +\n      '&nbsp;&nbsp; <b>Width:</b> ' +\n      messageData.width +\n      '&nbsp;&nbsp; <b>Event type:</b> ' +\n      messageData.type\n  )\n}\n"}}, {"iframe":null, "enabled":true, "id":"documind", "inject_contentWindowScript":true, "attributes":{"loading":"lazy", "src":"//documind.chat/dashboard/sharing/b2fb904e44d604f9ea70ccd5bf5af242", "title":"", "allowtransparency":true, "style":"background: #FAFAFA;", "height":600, "width":"100%"}, "options":{"checkOrigin":false}}]});
      iframerOptions  = $.extend(true, {}, iframerDefaults, iframerSettings);
      // load HTML portion for all grids
      console.debug('loading HTML portion for all iFrames configured');
      _this.loadIframeHTML(iframerOptions, iframerOptions.iframes);
      // initialize state flag
      _this.setState('started');
      logger.debug('\n' + 'state: ' + _this.getState());
      logger.info('\n' + 'module is being initialized');
      var dependencies_met_j1_finished = setInterval(function() {
        var pageState     = $('#no_flicker').css("display");
        var pageVisible   = (pageState == 'block') ? true : false;
        var atticFinished = (j1.adapter.attic.getState() == 'finished') ? true: false;
        if (j1.getState() == 'finished' && pageVisible) {
          // initialize state flag
          _this.setState('started');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module is being initialized');
          _this.initialize(iframerOptions);
          clearInterval(dependencies_met_j1_finished);
        } // END 'finished' && 'pageVisible'
      }, 10);
    }, // END init
    // -----------------------------------------------------------------------
    // Load AJAX data and initialize the jg gallery
    // -----------------------------------------------------------------------
    initialize: function (options) {
      var iframerOptions    = options;
      var xhrLoadState      = 'pending';                                        // (initial) load state for the HTML portion of the slider
      var load_dependencies = {};
      var dependency;
      // logger = log4javascript.getLogger('j1.adapter.gallery');
      _this.setState('running');
      logger.debug('\n' + 'state: ' + _this.getState());
        logger.info('\n' + 'found iframe on id: ' + 'magic_iframe');
          // create dynamic loader variable to setup the grid on id magic_iframe
          dependency = 'dependencies_met_html_loaded_magic_iframe';
          load_dependencies[dependency] = '';
          // initialize the iframe if HTML portion successfully loaded
          //
          load_dependencies['dependencies_met_html_loaded_magic_iframe'] = setInterval (function (options) {
            // check if HTML portion of the iframe is loaded successfully
            xhrLoadState = j1.xhrDOMState['#magic_iframe_parent'];
            if ( xhrLoadState === 'success' ) {
              var $iframe_magic_iframe = $('#magic_iframe');                  // used for later access
              logger.info('\n' + 'dyn_loader, initialize iframe on id: ' + 'magic_iframe');
              // Inject contentWindow script into the docoment to be loaded
              // into an iframe element
              if ('true' == 'true') {
                setTimeout (function() {
                  var iframe;
                  var iframeSelector;
                  var iframeDocument;
                  var contentWindowScript;
                  // create DOM selector
                  //
                  iframeSelector            = 'magic_iframe'
                  iframe                    = document.getElementById(iframeSelector);
                  iframeDocument            = iframe.contentDocument || iframe.contentWindow.document;
                  // create contentWindow script
                  //
                  contentWindowScript       = iframeDocument.createElement('script');
                  contentWindowScript.id    = 'contentWindowScript';
                  contentWindowScript.async = true;
                  contentWindowScript.src   = origin + '/assets/themes/j1/modules/iframeResizer/js/client/iframeResizer.contentWindow.min.js';
                  iframeDocument.head.appendChild(contentWindowScript);
                }, iframerOptions.delay_inject_contentWindowScript);
            } // END if iframerOptions.inject_contentWindowScript
            setTimeout (function() {
              /* eslint-disable */
              var $iframe_magic_iframe = iFrameResize({
                  log: true,
                  inPageLinks: true,
                  onResized: function(messageData) {
  // Callback when page is resized
  $('p#resize_stats').html (
    '<b>iFrame ID:</b> ' +
      messageData.iframe.id +
      '&nbsp;&nbsp; <b>Height:</b> ' +
      messageData.height +
      '&nbsp;&nbsp; <b>Width:</b> ' +
      messageData.width +
      '&nbsp;&nbsp; <b>Event type:</b> ' +
      messageData.type
  )
}
,
                },
                '#magic_iframe'
              )
              /* eslint-enable */
            }, 1000);
            clearInterval(load_dependencies['dependencies_met_html_loaded_magic_iframe']);
          } // END  if xhrLoadState === 'success'
          }, 10); // END dependencies_met_html_loaded
         // ENDIF iframe enabled
        logger.info('\n' + 'found iframe on id: ' + 'documind');
          // create dynamic loader variable to setup the grid on id documind
          dependency = 'dependencies_met_html_loaded_documind';
          load_dependencies[dependency] = '';
          // initialize the iframe if HTML portion successfully loaded
          //
          load_dependencies['dependencies_met_html_loaded_documind'] = setInterval (function (options) {
            // check if HTML portion of the iframe is loaded successfully
            xhrLoadState = j1.xhrDOMState['#documind_parent'];
            if ( xhrLoadState === 'success' ) {
              var $iframe_documind = $('#documind');                  // used for later access
              logger.info('\n' + 'dyn_loader, initialize iframe on id: ' + 'documind');
              // Inject contentWindow script into the docoment to be loaded
              // into an iframe element
              if ('true' == 'true') {
                setTimeout (function() {
                  var iframe;
                  var iframeSelector;
                  var iframeDocument;
                  var contentWindowScript;
                  // create DOM selector
                  //
                  iframeSelector            = 'documind'
                  iframe                    = document.getElementById(iframeSelector);
                  iframeDocument            = iframe.contentDocument || iframe.contentWindow.document;
                  // create contentWindow script
                  //
                  contentWindowScript       = iframeDocument.createElement('script');
                  contentWindowScript.id    = 'contentWindowScript';
                  contentWindowScript.async = true;
                  contentWindowScript.src   = origin + '/assets/themes/j1/modules/iframeResizer/js/client/iframeResizer.contentWindow.min.js';
                  iframeDocument.head.appendChild(contentWindowScript);
                }, iframerOptions.delay_inject_contentWindowScript);
            } // END if iframerOptions.inject_contentWindowScript
            setTimeout (function() {
              /* eslint-disable */
              var $iframe_documind = iFrameResize({
                  checkOrigin: false,
                },
                '#documind'
              )
              /* eslint-enable */
            }, 1000);
            clearInterval(load_dependencies['dependencies_met_html_loaded_documind']);
          } // END  if xhrLoadState === 'success'
          }, 10); // END dependencies_met_html_loaded
         // ENDIF iframe enabled
      _this.setState('finished');
      logger.debug('\n' + 'state: ' + _this.getState());
      logger.info('\n' + 'module initialized successfully');
    }, // END function initialize
    // -------------------------------------------------------------------------
    // loadIframeHTML()
    // loads the HTML portion via AJAX for all iFrames configured.
    // NOTE: Make sure the placeholder DIV is available in the content
    // page as generated using the Asciidoc extension iframe::
    // -------------------------------------------------------------------------
    loadIframeHTML: function (options, iframe) {
      var numIFrames  = Object.keys(iframe).length;
      var activeIFrames  = numIFrames;
      var xhr_data_path = options.xhr_data_path + '/index.html';
      var xhr_container_id;
      console.debug('number of iframes found: ' + activeIFrames);
      _this.setState('load_data');
      Object.keys(iframe).forEach(function(key) {
        if (iframe[key].enabled) {
          xhr_container_id = iframe[key].id + '_parent';
          console.debug('load HTML portion on iframe id: ' + iframe[key].id);
          j1.loadHTML({
            xhr_container_id: xhr_container_id,
            xhr_data_path:    xhr_data_path,
            xhr_data_element: iframe[key].id
          });
        } else {
          console.debug('iframe found disabled on id: ' + iframe[key].id);
          activeIFrames--;
        }
      });
      console.debug('iframes loaded in page enabled|all: ' + activeIFrames + '|' + numIFrames);
      _this.setState('data_loaded');
    }, // END loadIframeHTML
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




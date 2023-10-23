

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/chatgpt.js
 # J1 Adapter for the chatgpt module
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-10-23 10:00:46 +0200
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.chatgpt = (function (j1, window) {
var url               = new URL(window.location.href);
var hostname          = url.hostname;
var environment       = 'development';
var apiScript     = document.createElement('script');
var cookie_names      = j1.getCookieNames();
var date              = new Date();
var timestamp_now     = date.toISOString();
var skipHost          = false;
var state             = 'not_started';
var chatgptDefaults;
var chatgptSettings;
var chatgptOptions;
var chatbotID;
var validchatbotID;
var user_consent;
var apiExists;
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
            chatgptDefaults = $.extend({}, {"enabled":false, "provider":"chatbob", "chatbotID":"<your-chatbot-id>"});
            chatgptSettings = $.extend({}, {"enabled":true, "chatbotID":"qhtrvti8SjKDaf9QFKn6xw", "provider":"chatbob"});
            chatgptOptions  = $.extend(true, {}, chatgptDefaults, chatgptSettings);
            // [INFO   ] [j1.adapter.chatgpt                    ] [ detected chatgpt provider (j1_config): chatbob} ]
            // [INFO   ] [j1.adapter.chatgpt                    ] [ start processing load region head, layout:  ]
            // [INFO   ] [j1.adapter.chatgpt                    ] [ place provider: WebWhiz ]
            chatbotID        = chatgptOptions.chatbotID;
            validchatbotID   = (chatbotID.includes('your')) ? false : true;
            // -----------------------------------------------------------------
            // Default module settings
            // -----------------------------------------------------------------
            var settings = $.extend({
              module_name: 'j1.adapter.chatgpt',
              generated:   '2023-10-23 10:00:46 +0200'
            }, options);
            // -----------------------------------------------------------------
            // Global variable settings
            // -----------------------------------------------------------------
            _this = j1.adapter.chatgpt;
            logger = log4javascript.getLogger('j1.adapter.chatgpt');
            // initialize state flag
            _this.setState('started');
            logger.debug('\n' + 'state: ' + _this.getState());
            logger.info('\n' + 'module initializing: started');
            apiExists = document.getElementById("") === null ? false : true;
            user_consent  = j1.readCookie(cookie_names.user_consent);
            if (user_consent.personalization) {
              if (validchatbotID) {
                logger.info('\n' + 'user consent on personalization: ' + user_consent.personalization);
                logger.info('\n' + 'enable ChatBob on ID: ' + chatbotID);
                apiScript.async = true;
                apiScript.id    = chatbotID;
                apiScript.src   = 'https://www.chatbob.co/embed.js';
                document.head.appendChild(apiScript);
                logger.info('\n' + 'ChatBob API added in section: head');
              } else {
                logger.warn('\n' + 'invalid chatbotID detected: ' + chatbotID);
                logger.warn('\n' + 'module chatGPT: disabled');
              }
            } else {
              logger.info('\n' + 'user consent on personalization: ' + user_consent.personalization);
              logger.warn('\n' + 'disable ChatBob on ID: ' + chatbotID);
            }
            _this.setState('finished');
            logger.debug('\n' + 'state: ' + _this.getState());
            logger.info('\n' + 'module initializing: finished');
            clearInterval(dependencies_met_page_ready);
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




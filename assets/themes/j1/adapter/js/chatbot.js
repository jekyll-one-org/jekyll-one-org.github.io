

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/chat.js
 # J1 Adapter for the Chat module
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023, 2024 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-11-11 19:20:03 +0100
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.chatbot = (function (j1, window) {
var url               = new URL(window.location.href);
var hostname          = url.hostname;
var environment       = 'development';
var apiScript         = document.createElement('script');
var cookie_names      = j1.getCookieNames();
var date              = new Date();
var timestamp_now     = date.toISOString();
var skipHost          = false;
var state             = 'not_started';
var chatDefaults;
var chatSettings;
var chatOptions;
var chatbot;
var chatbotID;
var chatBotWidget;
var validChatbot;
var validChatbotID;
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
        var pageState     = $('#no_flicker').css("display");
        var pageVisible   = (pageState == 'block') ? true: false;
        var atticFinished = (j1.adapter.attic.getState() == 'finished') ? true: false;
        if ( j1.getState() === 'finished' && pageVisible ) {
//      if (j1.getState() == 'finished' && pageVisible && atticFinished) {
//      if (j1.getState() == 'finished') {
            // Load  module DEFAULTS|CONFIG
            //
            chatDefaults = $.extend({}, {"enabled":false, "provider":"<your-chatbot>", "chatbotID":"<your-chatbot-id>"});
            chatSettings = $.extend({}, {"enabled":true, "provider":"vivochat", "chatbotID":"3d0b29f1-623a-4915-a817-e436d328f18f"});
            chatOptions  = $.extend(true, {}, chatDefaults, chatSettings);
            // -----------------------------------------------------------------
            // Global variable settings
            // -----------------------------------------------------------------
            _this   = j1.adapter.chatbot;
            logger  = log4javascript.getLogger('j1.adapter.chatbot');
            chatbot        = chatOptions.provider;
            chatbotID      = chatOptions.chatbotID;
            validChatbot   = (chatbot.includes('your')) ? false : true;
            validChatbotID = (chatbotID.includes('your')) ? false : true;
            if (validChatbot) {
              logger.info('\n' + 'chatbot detected: ' + chatbot);
            } else {
              logger.info('\n' + 'invalid chatbot detected: ' + chatbot);
              logger.warn('\n' + 'module chat: disabled');
              clearInterval(dependencies_met_page_ready);
            }
            // [INFO   ] [j1.adapter.chatbot                 ] [ detected chat provider (j1_config): vivochat} ]
            // [INFO   ] [j1.adapter.chatbot                 ] [ start processing load region head, layout:  ]
            // [INFO   ] [j1.adapter.chatbot                 ] [ place provider: VivoChat ]
            // initialize state flag
            _this.setState('started');
            logger.debug('\n' + 'state: ' + _this.getState());
            logger.info('\n' + 'module initializing: started');
            apiExists = document.getElementById("") === null ? false : true;
            user_consent  = j1.readCookie(cookie_names.user_consent);
            if (user_consent.personalization) {
              logger.info('\n' + 'user consent on personalization: ' + user_consent.personalization);
              if (validChatbotID) {
                logger.info('\n' + 'enable VivoChat on ID: ' + chatbotID);
                setTimeout (function() {
                  logger.info('\n' + 'set fab button position');
                  $('.fab-btn').css('bottom', '5rem');
                }, 1000);
                apiScript.id    = 'VivoChat';
                apiScript.async = true;
                apiScript.src   = 'https://www.vivochat.ai/dist/widget.js';
                apiScript.setAttribute("vivochat-bot-id", chatbotID);
                document.head.appendChild(apiScript);
                logger.info('\n' + 'VivoChat API added in section: head');
              } else {
                logger.warn('\n' + 'invalid chatbotID detected: ' + chatbotID);
                logger.warn('\n' + 'module chat: disabled');
              }
            } else {
              logger.info('\n' + 'user consent on personalization: ' + user_consent.personalization);
              logger.warn('\n' + 'disable VivoChat on ID: ' + chatbotID);
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




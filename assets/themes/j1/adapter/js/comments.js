

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/comments.js
 # J1 Adapter for the comments module
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-06-11 21:20:43 +0200
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.comments = (function (j1, window) {
var environment       = 'development';
var date              = new Date();
var timestamp_now     = date.toISOString();
var cookie_names      = j1.getCookieNames();
var comments_provider = 'hyvor';
var dqApiScript       = document.createElement('script');
var hvApiScript       = document.createElement('script');
var hvCallbackScript  = document.createElement('script');
var comments_headline = 'Leave a comment';
var providerID;
var validProviderID;
var commentsDefaults;
var commentsSettings;
var commentsOptions;
var frontmatterOptions;
var user_consent;
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
      // Global variable settings
      // -----------------------------------------------------------------------
      // create settings object from frontmatter (page settings)
      frontmatterOptions  = options != null ? $.extend({}, options) : {};
      // Load  module DEFAULTS|CONFIG
      commentsDefaults          = $.extend({}, {"enabled":false, "provider":"disqus", "site_id":"your-site-id", "comments_headline":{"en":"Leave a comment", "bg":"Оставите коментар", "de":"Kommentieren", "dk":"Efterlad en kommentar", "nl":"Laat een reactie achter", "fr":"Laissez un commentaire", "gr":"Αφήστε ένα σχόλιο", "hr":"Ostavite komentar", "es":"Deja un comentario", "it":"Lascia un commento", "pt":"Deixe um comentário", "se":"Lämna en kommentar", "si":"Zanechať komentár", "fi":"Jätä kommentti", "no":"Legg igjen en kommentar", "hu":"Szólj hozzá", "cz":"Zanechat komentář", "tr":"Yorum yap", "ee":"Jäta kommentaar", "lv":"Atstājiet savu komentāru", "lt":"Palikite komentarą", "pl":"Zostaw komentarz", "ro":"Lasa un comentariu", "ru":"Оставить комментарий"}});
      commentsSettings          = $.extend({}, {"enabled":false, "provider":"hyvor", "site_id":"your-site-id"});
      commentsOptions           = $.extend(true, {}, commentsDefaults, commentsSettings, frontmatterOptions);
      // overload module config from page settings (frontmatter)
      if (typeof commentsOptions.comments !== 'undefined' ) {
        commentsOptions.enabled = (commentsOptions.comments) === 'true' ? true : false;
      }
      if (commentsOptions.enabled) {
        // [INFO   ] [j1.adapter.comments                    ] [ detected comments provider (j1_config): hyvor} ]
        // [INFO   ] [j1.adapter.comments                    ] [ start processing load region head, layout:  ]
        // ---------------------------------------------------------------------
        // Default module settings
        // ---------------------------------------------------------------------
        var settings = $.extend({
          module_name: 'j1.adapter.comments',
          generated:   '2023-06-11 21:20:43 +0200'
        }, options);
        _this = j1.adapter.comments;
        logger = log4javascript.getLogger('j1.adapter.comments');
        // check the site ID to be used for a provider
        providerID      = (typeof commentsOptions.site_id == "number") ? commentsOptions.site_id.toString() : commentsOptions.site_id;
        validProviderID = (providerID.includes('your')) ? false : true;
        // [INFO   ] [j1.adapter.comments                    ] [ place provider: Hyvor Talk ]
        var dependencies_met_page_ready = setInterval(function() {
          if (j1.getState() == 'finished') {
            if (!validProviderID) {
              logger.debug('\n' + 'invalid site id detected for Hyvor Talk: ' + providerID);
              logger.info('\n' + 'skip initialization for provider: ' + comments_provider);
              clearInterval(dependencies_met_page_ready);
              return false;
            }
            // initialize state flag, issue init message
            // -----------------------------------------------------------------
            _this.setState('started');
            logger.debug('\n' + 'state: ' + _this.getState());
            logger.info('\n' + 'module is being initialized for provider: ' + comments_provider);
            // place|remove initialization code
            // -----------------------------------------------------------------
            user_consent  = j1.readCookie(cookie_names.user_consent);
            if (user_consent.personalization) {
              // enable Hyvor Talk
              // ---------------------------------------------------------------
              $('#main-content').append('<h2 id="leave-a-comment" class="mt-4">Leave a comment</h2>');
              logger.info('\n' + 'user consent on comments: ' + user_consent.personalization);
              logger.info('\n' + 'enable comments provider' + ' hyvor on siteID: ' + providerID);
              // add Hyvor Talk Web API
              // NOTE: don't change the script id
              // ---------------------------------------------------------------
              hvApiScript.id    = 'hyvor-embed';
              hvApiScript.src   = '//talk.hyvor.com/web-api/embed.js';
              hvApiScript.async = true;
              document.head.appendChild(hvApiScript);
              // add Hyvor Talk callback script
              // ---------------------------------------------------------------
              hvCallbackScript.id   = 'hyvor-callback';
              hvCallbackScript.text  = '\n';
              hvCallbackScript.text += 'var HYVOR_TALK_WEBSITE = "' + providerID + '"\n';
              hvCallbackScript.text += 'var HYVOR_TALK_CONFIG = {' + '\n';
              hvCallbackScript.text += '		  url: false,' + '\n';
              hvCallbackScript.text += '      id: false' + '\n';
              hvCallbackScript.text += '	  };' + '\n';
              document.head.appendChild(hvCallbackScript);
              // add Hyvor Talk comment container
              // NOTE: don't change the div id
              // ---------------------------------------------------------------
              $('#main-content').append('<div id="hyvor-talk-view"></div>');
              // add recommended title to the comments iframe for SEO optimization
              // ---------------------------------------------------------------
              var dependencies_met_load_provider_finished = setInterval (function () {
                if ($('#hyvor-talk-view').children().length) {
                  $('#hyvor-talk-iframe').prop('title', 'Hyvor comments iframe');
                  clearInterval(dependencies_met_load_provider_finished);
                }
              }, 10);
            } else {
              // disable Hyvor Talk
              // ---------------------------------------------------------------
              logger.info('\n' + 'user consent on comments: ' + user_consent.personalization);
              logger.debug('\n' + 'disable Hyvor Talk on site id: ' + providerID);
              // remove Hyvor Talk resources
              // ---------------------------------------------------------------
              $('#leave-a-comment').remove();
              $('#hyvor-embed').remove();
              $('#hyvor-callback').remove();
              $('#hyvor-talk-view').remove();
            }
            clearInterval(dependencies_met_page_ready);
          } // END if getState 'finished'
        }, 10);
      } else {
        var dependencies_met_page_ready = setInterval(function() {
          if (j1.getState() == 'finished') {
            logger = log4javascript.getLogger('j1.adapter.comments');
            logger.info('\n' + 'comment services: disabled');
            clearInterval(dependencies_met_page_ready);
          }
        }, 10);
      } // END if 'commentsOptions.comments'
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




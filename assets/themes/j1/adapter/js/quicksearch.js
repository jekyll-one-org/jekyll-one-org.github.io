

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/quicksearch.js
 # J1 Adapter for J1 QuickSearch (Lunr)
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2021 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see https://jekyll.one
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2021-08-05 19:04:05 +0000
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter['quicksearch'] = (function (j1, window) {
  var environment   = 'development';
  var searchOptions = {};
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
      // globals
      // -----------------------------------------------------------------------
      _this   = j1.adapter.quicksearch;
      logger  = log4javascript.getLogger('j1.adapter.quicksearch');
      // initialize state flag
      _this.setState('started');
      logger.info('\n' + 'state: ' + _this.getState());
      logger.info('\n' + 'module is being initialized');
      // -----------------------------------------------------------------------
      // defaults
      // -----------------------------------------------------------------------
      var settings = $.extend({
        module_name: 'j1.adapter.quicksearch',
        generated:   '2021-08-05 19:04:05 +0000'
      }, options);
      // -----------------------------------------------------------------------
      // options loader
      // -----------------------------------------------------------------------
      /* eslint-disable */
      searchOptions = $.extend({}, {"enabled":true, "placement":"navbar", "target":"_blank", "rebuild":true, "full_index":false, "stopwords":"/assets/themes/j1/modules/lunrSearch/stopwords/en.txt", "stopwords_locale":"en", "strip_index_html":false, "strip_categories":["pages", "posts", "series", "public", "featured", "wikipedia"], "min_length":3, "date_format":"mmm dd, yyyy", "module_dir":"/assets/themes/j1/modules/lunrSearch/js", "index_dir":"/assets/data", "index_name":"lunr-index.json", "index_file":"/assets/data/lunr-index.json", "search_input":"#search-query", "results":"#search-results", "template":"#search-results-template", "titleMsg":"", "emptyMsg":""});
      // -----------------------------------------------------------------------
      // lunr_search initializer
      // -----------------------------------------------------------------------
      var log_text = '\n' + 'module is being initialized';
      logger.info(log_text);
      var dependencies_met_j1_finished = setInterval(function() {
        if (j1.getState() == 'finished') {
          $(searchOptions.search_input).lunrSearch({
            index_file: searchOptions.index_file,
            results:    searchOptions.results,
            template:   searchOptions.template,
            titleMsg:   searchOptions.titleMsg,
            emptyMsg:   searchOptions.emptyMsg
          });
          _this.setState('finished');
          logger.info('\n' + 'state: ' + _this.getState());
          clearInterval(dependencies_met_j1_finished);
        } // END dependencies_met_j1_finished
      }, 25);
       _this.eventHandler();
    }, // END init
    // -------------------------------------------------------------------------
    // event handler
    // -------------------------------------------------------------------------
    eventHandler: function () {
      // hide|clear results from top search
      $('#clear-topsearch').on('click', function() {
        $(this).addClass('d-none').prevAll(':input').val('');
        $('#search-results').hide();
        $('#search-results').html('');
      });
    }, // END eventHandler
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






  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/searcher.js
 # JS Adapter for J1 Searcher (SimpleJekyllSearch)
 #
 # Product/Info:
 # https://jekyll.one
 # https://github.com/christian-fei/Simple-Jekyll-Search
 #
 # Copyright (C) 2020 Juergen Adams
 # Copyright (C) 2015 Christian Fei
 #
 # J1 Template is licensed under the MIT License.
 # For details, see https://jekyll.one
 # SimpleJekyllSearch is licensed under the MIT License.
 # For details, see https://github.com/christian-fei/Simple-Jekyll-Search
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2020-09-28 19:58:45 +0200
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter['searcher'] = (function (j1, window) {
  var environment   = 'development';
  var moduleOptions = {};
  var _this;
  var logger;
  var logText;
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
      _this   = j1.adapter.searcher;
      logger  = log4javascript.getLogger('j1.adapter.searcher');
      // initialize state flag
      _this.setState('pending');
      logger.info('state: ' + _this.getState());
      logger.info('Module is being started');
      // -----------------------------------------------------------------------
      // Default module settings
      // -----------------------------------------------------------------------
      var settings = $.extend({
        module_name: 'j1.adapter.searcher',
        generated:   '2020-09-28 19:58:45 +0200'
      }, options);
      // Load  module DEFAULTS|CONFIG
      /* eslint-disable */
      moduleOptions = $.extend({}, {"enabled":true, "placement":"navbar", "target":"_blank", "search_input":"jss-input", "results_output":"jss-panel", "results_container":"jss-results", "index_data":"/assets/data/search.json", "result_limit":1000, "result_truncate":100, "no_results_text":"The search has no results", "min_search_item_len":3, "search_fuzzy":false, "search_exlude":["Impress", "License"], "result_template":"<li>\n  <div>\n    <h4 class=\"result-item\"> <a href=\"{url}\" target=\"{target}\">{title} - {tagline}</a> </h4>\n    <p class=\"result-group-item-text\">{excerpt}</p>\n    <p class=\"result-group-item-text small text-muted mb-3\">\n      <i class=\"mdi mdi-calendar-blank mdi-18px mr-1\"></i>{date}\n      <i class=\"mdi mdi-tag mdi-18px ml-2 mr-1\"></i>{tags}\n    </p>\n  </div>\n</li>\n"});
      /* eslint-enable */
      if (typeof settings !== 'undefined') {
        moduleOptions = j1.mergeData(moduleOptions, settings);
      }
      if (moduleOptions.enabled) {
        _this.setState('started');
        logger.info('state: ' + _this.getState());
        logger.info('Module is being initialized');
        var jekyllSearch = SimpleJekyllSearch({
          searchInput:          document.getElementById(moduleOptions.search_input),
          resultsOutput:        document.getElementById(moduleOptions.results_output),
          resultsContainer:     document.getElementById(moduleOptions.results_container),
          json:                 moduleOptions.index_data,
          searchResultTemplate: moduleOptions.result_template,
          results_output:       moduleOptions.results_output,
          limit:                moduleOptions.result_limit,
          minSearchItemLen:     moduleOptions.min_search_item_len,
          fuzzy:                moduleOptions.search_fuzzy,
          exclude:              moduleOptions.search_exlude,
          noResultsText:        moduleOptions.no_results_text
        });
        _this.setState('finished');
        logger.info('state: ' + _this.getState());
        logger.info('module initialized successfully');
      } else {
        _this.setState('finished');
        logger.info('state: ' + _this.getState());
        logger.info('module disabled');
      }
      return true;
    }, // END init
    // -------------------------------------------------------------------------
    // messageHandler: MessageHandler for J1 CookieConsent module
    // Manage messages send from other J1 modules
    // -------------------------------------------------------------------------
    messageHandler: function (sender, message) {
      var json_message = JSON.stringify(message, undefined, 2);
      logText = 'received message from ' + sender + ': ' + json_message;
      logger.info(logText);
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




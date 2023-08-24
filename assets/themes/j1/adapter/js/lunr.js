

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/lunr.js
 # J1 Adapter for J1 Lunr
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-08-24 19:35:46 +0200
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.lunr = (function (j1, window) {
  var environment = 'development';
  var state       = 'not_started';
  var searchDefaults;
  var searchSettings;
  var searchOptions;
  var _this;
  var logger;
  var logText;
  var modalBody;
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
        module_name: 'j1.adapter.lunr',
        generated:   '2023-08-24 19:35:46 +0200'
      }, options);
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      _this   = j1.adapter.lunr;
      logger  = log4javascript.getLogger('j1.adapter.lunr');
      // Load  module DEFAULTS|CONFIG
      searchDefaults = $.extend({},   {"enabled":false, "placement":"navbar", "target":"_blank", "rebuild":false, "full_index":true, "stopwords":"/assets/themes/j1/modules/lunr/stopwords/en.txt", "stopwords_locale":"en", "strip_index_html":false, "min_length":3, "date_format":"mmm dd, yyyy", "module_dir":"/assets/themes/j1/modules/lunr/js", "index_dir":"/assets/data", "index_name":"lunr-index.json", "index_file":"/assets/data/lunr-index.json", "search_input":"#search-query", "results":"#search-results", "template":"#search-results-template", "titleMsg":null, "emptyMsg":null, "topsearch":{"enabled":false, "container_id":"search_modal", "type":"quicksearch", "icon_family":"mdib", "icon_color":"#FFFFFF", "icon_size":"mdib-2x", "search_icon":"magnify", "close_icon":"close", "clear_icon":"format-clear", "input_color":"rgba(0, 0, 0, 0.7)", "background_color":"transparent", "placeholder":"Your search expression", "search_heading_lead":"", "result_heading_lead":""}});
      searchSettings = $.extend({},   {"enabled":true, "topsearch":{"enabled":true}});
      searchOptions  = $.extend(true, {}, searchDefaults, searchSettings);
      // -----------------------------------------------------------------------
      // lunr initializer
      // -----------------------------------------------------------------------
      var dependencies_met_j1_finished = setInterval(function() {
        if (j1.getState() == 'finished') {
          // initialize state flag
          _this.setState('started');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module is being initialized');
          $(searchOptions.search_input).lunrSearch({
            index_file: searchOptions.index_file,
            results:    searchOptions.results,
            template:   searchOptions.template,
            titleMsg:   searchOptions.titleMsg,
            emptyMsg:   searchOptions.emptyMsg
          });
          _this.setState('finished');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'initializing module finished');
          clearInterval(dependencies_met_j1_finished);
        } // END dependencies_met_j1_finished
      }, 10);
       _this.eventHandler();
    }, // END init
    // -------------------------------------------------------------------------
    // loadDialog (modal)
    // -------------------------------------------------------------------------
    loadDialog: function () {
      logger.info('\n' + 'create|append search modal, id: ' + 'bratze');
      _this.modal = document.createElement('div');
      _this.modal.id = "topInfoModalContainer";
      document.body.append(_this.modal);
      _this.modalScript       = document.createElement('script');
      _this.modalScript.type  = 'text/mustache';
      _this.modalScript.id    = 'search-results-template';
      _this.modalScript.text  = '<ul style="list-style: none; margin-left: .5rem; margin-right: 4.25rem">' + '\n';
      _this.modalScript.text += '{{#docs}}' + '\n';
      _this.modalScript.text += '  <li>' + '\n';
      _this.modalScript.text += '    <h4 class="result-item"> <a class="link-no-decoration" href="{{url}}" target="_blank">{{title}} · {{tagline}}</a> </h4>' + '\n';
      _this.modalScript.text += '    <p class="result-item-text small text-muted mt-2 mb-0"> <i class="mdib mdib-calendar-blank mdib-18px mr-1"></i>{{displaydate}} </p>' + '\n';
      _this.modalScript.text += '    <p class="result-item-text">{{description}}</p>' + '\n';
      _this.modalScript.text += '      <i class="mdib mdib-tag-text-outline mdib-18px mr-1"></i><span class="sr-categories">{{#categories}} {{.}} · {{/categories}}</span>' + '\n';
      _this.modalScript.text += '      <i class="mdib mdib-tag mdib-18px mr-1 ml-2"></i><span class="sr-tags">{{#tags}} {{.}} · {{/tags}}</span>' + '\n';
      _this.modalScript.text += '    </p>' + '\n';
      _this.modalScript.text += '  </li>' + '\n';
      _this.modalScript.text += '{{/docs}}' + '\n';
      _this.modalScript.text += '<ul>' + '\n';
      document.body.append(_this.modalScript);
    }, // END loadDialog
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




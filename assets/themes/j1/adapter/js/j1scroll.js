

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/j1Scroll.js
 # J1 Adapter for j1Scroll
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2021 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see https://jekyll.one
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2021-11-01 15:37:58 +0000
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter['j1Scroll'] = (function (j1, window) {
  var environment   = 'development';
  var language      = 'en';
  var user_agent    = platform.ua;
  var moduleOptions = {};
  var _this;
  var lastPageInfo;
  var logger;
  var logText;
  // ---------------------------------------------------------------------------
  // Helper functions
  // ---------------------------------------------------------------------------
  function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
    return;
  }
  // ---------------------------------------------------------------------------
  // Main object
  // ---------------------------------------------------------------------------
  return {
    // -------------------------------------------------------------------------
    // Initializer
    // -------------------------------------------------------------------------
    init: function (options) {
      _this = j1.adapter.j1Scroll;
      logger = log4javascript.getLogger('j1.adapter.j1Scroll');
      // initialize state flag
      _this.setState('started');
      logger.info('\n' + 'state: ' + _this.getState());
      logger.info('\n' + 'module is being initialized');
      // -----------------------------------------------------------------------
      // Default module settings
      // -----------------------------------------------------------------------
      var settings = $.extend({
        module_name: 'j1.adapter.j1Scroll',
        generated:   '2021-11-01 15:37:58 +0000'
      }, options);
      _this.initialize();
      _this.setState('finished');
      logger.info('\n' + 'state: ' + _this.getState());
      logger.info('\n' + 'module initialized successfully');
    }, // END init
    // -----------------------------------------------------------------------
    // Generate scrollers configured/enabled
    // -----------------------------------------------------------------------
    initialize: function () {
      logger = log4javascript.getLogger('j1.adapter.j1Scroll');
      var log_text = '\n' + 'j1Scroll is being initialized';
      logger.info(log_text);
      // START generate scrollers
      var dependencies_met_page_ready = setInterval (function (options) {
        if (j1.getState() === 'finished') {
          // scroller_id: home_news_panel
          var log_text = '\n' + 'j1Scroll is being initialized on: ' + 'home_news_panel';
          logger.info(log_text);
          var container = '#' + 'home_news_panel-scroll-group';
          var pagePath  = '/assets/data/news_panel_posts/page';
          if (language === 'en') {
            lastPageInfo =  '<div class="page-scroll-last"><p class="infinite-scroll-last">';
            lastPageInfo += 'More articles can be found with the <a href="/pages/public/blog/navigator/">Blog Navigator</a>';
            lastPageInfo += '</p></div>';
          } else if (language === 'de') {
            lastPageInfo =  '<div class="page-scroll-last"><p class="infinite-scroll-last">';
            lastPageInfo += 'Weitere Artikel finden Sie im <a href="/pages/public/blog/navigator/">Blog Navigator</a>';
            lastPageInfo += '</p></div>';
          } else {
            lastPageInfo =  '<div class="page-scroll-last"><p class="infinite-scroll-last">';
            lastPageInfo += 'More articles can be found with the <a href="/pages/public/blog/navigator/">Blog Navigator</a>';
            lastPageInfo += '</p></div>';
          }
          // Create an j1Scroll instance if container exists
          if ($(container).length) {
            $(container).j1Scroll({
              path:                 pagePath,
              elementScroll:        true,
              scrollOffset:         100,
              lastPage:             3,
              infoLastPage:         true,
              lastPageInfo:         lastPageInfo,
            });
          }
          // END scroller_id: home_news_panel
          // scroller_id: blog_navigator_preview
          var log_text = '\n' + 'j1Scroll is being initialized on: ' + 'blog_navigator_preview';
          logger.info(log_text);
          var container = '#' + 'timeline';
          var pagePath  = '/pages/public/blog/navigator/page';
          if (language === 'en') {
            lastPageInfo =  '<div class="page-scroll-last"><p class="infinite-scroll-last">';
            lastPageInfo += '';
            lastPageInfo += '</p></div>';
          } else if (language === 'de') {
            lastPageInfo =  '<div class="page-scroll-last"><p class="infinite-scroll-last">';
            lastPageInfo += '';
            lastPageInfo += '</p></div>';
          } else {
            lastPageInfo =  '<div class="page-scroll-last"><p class="infinite-scroll-last">';
            lastPageInfo += '';
            lastPageInfo += '</p></div>';
          }
          // Create an j1Scroll instance if container exists
          if ($(container).length) {
            $(container).j1Scroll({
              path:                 pagePath,
              elementScroll:        true,
              scrollOffset:         200,
              lastPage:             4,
              infoLastPage:         false,
              lastPageInfo:         lastPageInfo,
            });
          }
          // END scroller_id: blog_navigator_preview
          clearInterval(dependencies_met_page_ready);
        }
      });
      // END generate scrollers
    },
    // -------------------------------------------------------------------------
    // messageHandler: MessageHandler for j1Scroll module
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




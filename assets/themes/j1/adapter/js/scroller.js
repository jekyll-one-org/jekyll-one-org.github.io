

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/scroller.js
 # J1 Adapter for the J1 Scroller jQuery plugin
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-07-15 16:17:28 +0200
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.scroller = (function (j1, window) {
var environment   = 'development';
var language      = 'en';
var user_agent    = platform.ua;
var state         = 'not_started';
var scrollerDefaults;
var scrollerSettings;
var scrollerOptions;
var _this;
var logger;
var logText;
var lastPageInfo;
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
      // Default module settings
      // -----------------------------------------------------------------------
      var settings = $.extend({
        module_name: 'j1.adapter.scroller',
        generated:   '2023-07-15 16:17:28 +0200'
      }, options);
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      _this = j1.adapter.scroller;
      logger = log4javascript.getLogger('j1.adapter.scroller');
      // load  module DEFAULTS|CONFIG
      //
      scrollerDefaults = $.extend({}, {"enabled":false, "smoothscroll":{"offsetCorrection":0, "offsetCorrectionLocal":0}});
      scrollerSettings = $.extend({}, {"enabled":true, "smoothscroll":{"offsetCorrection":-9, "offsetCorrectionLocal":-90}, "scrollers":[{"scroller":{"enabled":true, "type":"showOnScroll", "id":"panel_home_intro", "container":"panel_home_intro", "showDelay":1000, "scrollOffset":500}}, {"scroller":{"enabled":false, "type":"showOnScroll", "id":"panel_home_service", "container":"panel_home_service", "showDelay":700, "scrollOffset":200}}, {"scroller":{"enabled":true, "type":"infiniteScroll", "id":"preview_content", "container":"panel_home_news-scroll-group", "pagePath":"/assets/data/news_panel_posts/page", "elementScroll":true, "scrollOffset":200, "lastPage":2, "infoLastPage":true, "lastPageInfo_en":"More articles can be found with the <a href=\"/pages/public/blog/navigator/\" class=\"link-no-decoration\">Navigator</a>\n", "lastPageInfo_de":"Weitere Artikel finden Sie im <a href=\"/pages/public/blog/navigator/\" class=\"link-no-decoration\">Navigator</a>\n"}}, {"scroller":{"enabled":true, "type":"infiniteScroll", "id":"preview_content", "container":"timeline", "pagePath":"/pages/public/blog/navigator/page", "elementScroll":true, "scrollOffset":200, "lastPage":1000000, "infoLastPage":false, "lastPageInfo_en":"", "lastPageInfo_de":""}}]});
      scrollerOptions  = $.extend(true, {}, scrollerDefaults, scrollerSettings);
      // initialize state flag
      //
      _this.setState('started');
      logger.debug('\n' + 'state: ' + _this.getState());
      logger.info('\n' + 'module is being initialized');
      var dependencies_met_page_ready = setInterval (function (options) {
        var contentState    = $('#content').css("display");
        var ContentVisible  = (contentState == 'block') ? true: false;
        // initialize scrollers if content is fully available|visible
        //
        if (j1.getState() === 'finished' && ContentVisible) {
          _this.generate_scrollers();
          _this.setState('finished');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module initialized successfully');
          clearInterval(dependencies_met_page_ready);
        }
      }, 10);
    }, // END init
    // -------------------------------------------------------------------------
    // generate_scrollers()
    // generate scrollers configured|enabled
    // -------------------------------------------------------------------------
    generate_scrollers: function () {
      logger = log4javascript.getLogger('j1.adapter.scroller');
      logText = '\n' + 'scrollers are being initialized';
      logger.info(logText);
      var container = '#' + 'panel_home_intro';
      // scroller_id: panel_home_intro
      //
      logText = '\n' + 'scroller of type showOnScroll is being initialized on: ' + 'panel_home_intro';
      logger.info(logText);
      // create an (scroller) instance of 'showOnScroll'
      //
      if ($(container).length) {
        $(container).scroller({
          id:             'panel_home_intro',
          type:           'showOnScroll',
          container:      'panel_home_intro',
          showDelay:      1000,
          scrollOffset:   500,
        });
      }
      // END scroller_id: panel_home_intro
      // scroller_id: preview_content
      //
      logText = '\n' + 'scroller of type infiniteScroll is being initialized on: ' + 'preview_content';
      logger.info(logText);
      var container = '#' + 'panel_home_news-scroll-group';
      var pagePath  = '/assets/data/news_panel_posts/page';
      if (language === 'en') {
        lastPageInfo =  '<div class="page-scroll-last"><p class="infinite-scroll-last">';
        lastPageInfo += 'More articles can be found with the <a href="/pages/public/blog/navigator/" class="link-no-decoration">Navigator</a>';
        lastPageInfo += '</p></div>';
      } else if (language === 'de') {
        lastPageInfo =  '<div class="page-scroll-last"><p class="infinite-scroll-last">';
        lastPageInfo += 'Weitere Artikel finden Sie im <a href="/pages/public/blog/navigator/" class="link-no-decoration">Navigator</a>';
        lastPageInfo += '</p></div>';
      } else {
        lastPageInfo =  '<div class="page-scroll-last"><p class="infinite-scroll-last">';
        lastPageInfo += 'More articles can be found with the <a href="/pages/public/blog/navigator/" class="link-no-decoration">Navigator</a>';
        lastPageInfo += '</p></div>';
      }
      // create an (scroller) instance of 'infiniteScroll'
      //
      if ($(container).length) {
        $(container).scroller({
          id:             'preview_content',
          type:           'infiniteScroll',
          pagePath:       '/assets/data/news_panel_posts/page',
          elementScroll:  true,
          scrollOffset:   200,
          lastPage:       2,
          infoLastPage:   true,
          lastPageInfo:   lastPageInfo,
        });
      }
      // END scroller_id: preview_content
      // scroller_id: preview_content
      //
      logText = '\n' + 'scroller of type infiniteScroll is being initialized on: ' + 'preview_content';
      logger.info(logText);
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
      // create an (scroller) instance of 'infiniteScroll'
      //
      if ($(container).length) {
        $(container).scroller({
          id:             'preview_content',
          type:           'infiniteScroll',
          pagePath:       '/pages/public/blog/navigator/page',
          elementScroll:  true,
          scrollOffset:   200,
          lastPage:       1000000,
          infoLastPage:   false,
          lastPageInfo:   lastPageInfo,
        });
      }
      // END scroller_id: preview_content
      // END generate scrollers
    },
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




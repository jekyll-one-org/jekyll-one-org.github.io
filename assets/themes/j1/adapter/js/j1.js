

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/j1_template.js
 # JS Adapter for J1 Theme
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 # Adapter generated: 2023-06-10 02:34:48 +0200
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
/* eslint quotes: "off"                                                       */
/* eslint semi: "off"                                                         */
// -----------------------------------------------------------------------------
'use strict';
var j1 = (function (options) {
  // ---------------------------------------------------------------------------
  // globals
  // ---------------------------------------------------------------------------
  // base page resources
  var rePager          =  new RegExp('navigator|dateview|tagview|archive');
  var environment      = 'production';
  var moduleOptions    = {};
  var j1_runtime_data  = {};
  var scrollerSettings = {};
  var scrollerOptions  = {};
  var scrollerDefaults = {};
  var _this            = j1;;
  var settings;
  var json_data;
  var ep;
  var baseUrl;
  var referrer;
  var documentHeight;
  var banner            = [];
  var scrollOffset;
  var scrollOffsetCorrection;
  // defaults for status information
  var state                         = 'not_started';
  var mode                          = 'not_detected';
  // defaults for tracking providers
  var tracking_enabled              = ('' === 'true') ? true: false;
  var tracking_id                   = '';
  var tracking_id_valid             = (tracking_id.includes('tracking-id')) ? false : true;
  // defaults for comment providers
  var comment_provider              = '';
  var site_id                       = '';
  var checkCookies                  = true;
  var expireCookiesOnRequiredOnly   = ('true' === 'true') ? true: false;
  // animation on page load
  var bodyAnimation                 = ('true' === 'true') ? true: false;
  var bodyAnimationType             = 'fadeIn';
  var bodyAnimationDuration         = '2';
  // defaults for dynamic pages
  var timeoutScrollDynamicPages     = '2000';
  var scrollDynamicPagesTopOnChange = 'false';
  var pageGrowthRatio               = 0;                                          // ratio a dynamic page has grown in height
  var pageBaseHeigth                = 0;                                          // base height of a dynamic page (not grown)
  var staticPage                    = false;                                      // defalt: false, but decided in ResizeObserver
  var pageHeight;
  var pageBaseHeight;                                                              // height of a page dynamic detected in ResizeObserver
  var growthRatio                   = 0.00;
  var previousGrowthRatio           = 0.00;
  var previousPageHeight;
  var documentHeight;
  // defaults for the cookie management
  var current_user_data;
  var current_page;
  var previous_page;
  var last_pager;
  var last_pager_url;
  var app_detected;
  var user_session_detected;
  var cookie_written;
  // defaults for the template
  var template_version;
  var template_previous_version;
  var template_version_changed;
  // defaults for themes
  var themeName;
  var themeCss;
  var cssExtension                = (environment === 'production')
                                    ? '.min.css'
                                    : '.css'
  // defaults for data files
  var colors_data_path            = '/assets/data/colors.json';
  var font_size_data_path         = '/assets/data/font_sizes.json';
  var runtime_data_path           = '/assets/data/runtime-data.yml';
  var message_catalog_data_path   = '/assets/data/messages.yml';
  // Logger resources
  var logger;
  var logText;
  // initial cookie settings
  var cookie_names = {
    'app_session':    'j1.app.session',
    'user_session':   'j1.user.session',
    'user_state':     'j1.user.state',
    'user_consent':   'j1.user.consent',
    'user_translate': 'j1.user.translate'
  };
  var user_consent = {};
  var user_session = {
    'mode':                 'web',
    'writer':               'j1.adapter',
    'locale':               navigator.language || navigator.userLanguage,
    'user_name':            'guest',
    'provider':             'j1',
    'provider_membership':  'guest',
    'provider_permissions': 'public,public',
    'provider_site_url':    'https://jekyll.one',
    'provider_home_url':    'https://jekyll.one',
    'provider_blog_url':    '/pages/public/blog/navigator/',
    'provider_member_url':  '/pages/public/learn/whats_up/',
    'provider_privacy_url': '/pages/public/legal/en/privacy/',
    'requested_page':       'na',
    'previous_page':        'na',
    'last_pager':           '/pages/public/blog/navigator/'
  };
  var user_state   = {
    'writer':               'j1.adapter',
    'template_version':     '2023.3.5',
//
//  for testing only
//  'template_version':     'undefined',
//  'template_version':     '2022.4.4',
//
    'theme_name':           'UnoLight',
    'theme_css':            '',
    'theme_author':         'J1 Team',
    'theme_version':        '2023.3.5',
    'session_active':       false,
    'google_translate':     'disabled',
    'translate_all_pages':  true,
    'translate_locale':     navigator.language || navigator.userLanguage,
    'last_session_ts':      ''
  };
  // ---------------------------------------------------------------------------
  // Helper functions
  // ---------------------------------------------------------------------------
  // See: https://stackoverflow.com/questions/359788/how-to-execute-a-javascript-function-when-i-have-its-name-as-a-string
  //
  function executeFunctionByName(functionName, context /*, args */) {
    var args = Array.prototype.slice.call(arguments, 2);
    var namespaces = functionName.split('.');
    var func = namespaces.pop();
    for(var i = 0; i < namespaces.length; i++) {
      context = context[namespaces[i]];
    }
    return context[func].apply(context, args);
  }
  function isOdd(num) {
    var test = (num % 2).toString();
    return j1.stringToBoolean(test);
  }
  // ---------------------------------------------------------------------------
  // main object
  // ---------------------------------------------------------------------------
  return {
    // -------------------------------------------------------------------------
    // init()
    // -------------------------------------------------------------------------
    init: function (options) {
      // -----------------------------------------------------------------------
      // Default module settings
      // -----------------------------------------------------------------------
      var settings = $.extend({
        module_name: 'j1',
        generated:   '2023-06-10 02:34:48 +0200'
      }, options);
      // create settings object from frontmatter options
      var frontmatterOptions  = options != null ? $.extend({}, options) : {};
      // Load scroller module DEFAULTS|CONFIGs
      scrollerDefaults = $.extend({}, {"enabled":false, "smoothscroll":{"offsetCorrection":0, "offsetCorrectionLocal":0}});
      scrollerSettings = $.extend({}, {"enabled":true, "smoothscroll":{"offsetCorrection":-10, "offsetCorrectionLocal":-90}, "scrollers":[{"scroller":{"enabled":true, "type":"showOnScroll", "id":"home_intro_panel", "container":"home_intro_panel", "showDelay":1000, "scrollOffset":500}}, {"scroller":{"enabled":false, "type":"showOnScroll", "id":"home_service_panel", "container":"home_service_panel", "showDelay":700, "scrollOffset":200}}, {"scroller":{"enabled":true, "type":"infiniteScroll", "id":"home_news_panel", "container":"home_news_panel-scroll-group", "pagePath":"/assets/data/news_panel_posts/page", "elementScroll":true, "scrollOffset":200, "lastPage":2, "infoLastPage":true, "lastPageInfo_en":"More articles can be found with the <a href=\"/pages/public/blog/navigator/\" class=\"link-no-decoration\">Navigator</a>\n", "lastPageInfo_de":"Weitere Artikel finden Sie im <a href=\"/pages/public/blog/navigator/\" class=\"link-no-decoration\">Navigator</a>\n"}}, {"scroller":{"enabled":true, "type":"infiniteScroll", "id":"blog_navigator_preview", "container":"timeline", "pagePath":"/pages/public/blog/navigator/page", "elementScroll":true, "scrollOffset":200, "lastPage":1000000, "infoLastPage":false, "lastPageInfo_en":"", "lastPageInfo_de":""}}]});
      scrollerOptions  = $.extend(true, {}, scrollerDefaults, scrollerSettings);
      // settings for dynamic pages
      scrollDynamicPagesTopOnChange = frontmatterOptions.scrollDynamicPagesTopOnChange ? frontmatterOptions.scrollDynamicPagesTopOnChange : 'false';
      scrollDynamicPagesTopOnChange = j1.stringToBoolean(scrollDynamicPagesTopOnChange);
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      var logger            = log4javascript.getLogger('j1.init');
      var url               = new liteURL(window.location.href);
      var baseUrl           = url.origin;
      var hostname          = url.hostname;
      var domain            = hostname.substring(hostname.lastIndexOf('.', hostname.lastIndexOf('.') - 1) + 1);
      var secure            = (url.protocol.includes('https')) ? true : false;
      var date              = new Date();
      var timestamp_now     = date.toISOString();
      var curr_state        = 'started';
      var gaCookies         = j1.findCookie('_ga');
      var themerOptions     = $.extend({}, {"enabled":true, "debug":false, "saveToCookie":true, "reloadPageOnChange":false, "retries":30, "preview_page":"/pages/public/previewer/current_theme/", "menu_icon_family":"MDI", "menu_icon_color":"#9E9E9E", "menu_icon_size":"mdi-sm", "cssThemeLink":"bootstrapTheme", "defaultCssFile":"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css", "bootswatchApiUrl":"https://bootswatch.com/api", "bootswatchApiVersion":5, "loadFromBootswatch":true, "localThemes":"/assets/data/themes.json", "excludeBootswatch":"Default, default, Lux, Sketchy", "includeBootswatch":"", "skipIncludeBootswatch":""});
      // current template version
      template_version  = j1.getTemplateVersion();
      // -----------------------------------------------------------------------
      // status settings
      // save status into the adapter object for (later) global access
      // -----------------------------------------------------------------------
      j1['xhrDataState'] = {};
      j1['xhrDOMState']  = {};
      j1['pageMonitor']  = {
        eventNo:              0,
        pageType:             'unknown',
        pageBaseHeight:       0,
//      totalGrowthRatio:     0,
        currentPageHeight:    0,
        previousPageHeight:   0,
        currentGrowthRatio:   0,
        previousGrowthRatio:  0
      };
      // -----------------------------------------------------------------------
      // initialize|load user cookies
      // -----------------------------------------------------------------------
      user_session.created    = timestamp_now;
      user_session.timestamp  = timestamp_now;
      user_consent  = j1.readCookie(cookie_names.user_consent);
      user_session  =  j1.existsCookie(cookie_names.user_session)
                        ? j1.readCookie(cookie_names.user_session)
                        : cookie_written = j1.writeCookie({
                            name:     cookie_names.user_session,
                            data:     user_session,
                            secure:   secure,
                            expires:  0
                          });
      user_state    =  j1.existsCookie(cookie_names.user_state)
                        ? j1.readCookie(cookie_names.user_state)
                        : cookie_written = j1.writeCookie({
                            name:     cookie_names.user_state,
                            data:     user_state,
                            secure:   secure,
                            expires:  365
                          });
      if (typeof user_state.template_version == 'undefined') {
        // add for compatibility reasons
        template_version_changed = true;
        user_state.template_version = template_version;
        logger.warn('\n' + 'template_version not found, set value to: ' +  template_version);
        cookie_written = j1.writeCookie({
          name:     cookie_names.user_state,
          data:     user_state,
          secure:   secure,
          expires:  365
        });
      } else if (user_state.template_version != template_version) {
        // update for changed template version
        template_previous_version = user_state.template_version;
        template_version_changed = true;
        user_state.template_version = template_version;
      } else {
        template_version_changed = false;
      }
      if (!user_consent.analysis || !user_consent.personalization)  {
        if (expireCookiesOnRequiredOnly) {
          // expire permanent cookies to session
          j1.expireCookie({ name: cookie_names.user_state });
          j1.expireCookie({ name: cookie_names.user_consent });
          j1.expireCookie({ name: cookie_names.user_translate });
        }
      }
      logger.info('\n' + 'register monitors');
      j1.registerMonitors();
      // detect middleware (mode 'app') and update user session cookie
      // -----------------------------------------------------------------------
      if (user_session.mode === 'app') {
        var url           = new liteURL(window.location.href);
        var ep_status     = baseUrl + '/status' + '?page=' + window.location.pathname;
        var detectTimeout =  50;
        baseUrl = url.origin;
        // See: https://stackoverflow.com/questions/3709597/wait-until-all-jquery-ajax-requests-are-done
        $.when (
          $.ajax(ep_status)
        )
        .then(function(data) {
          var logger                  = log4javascript.getLogger('j1.init');
          user_session                = j1.readCookie(cookie_names.user_session);
          user_session.mode           = 'app';
          user_session.requested_page = window.location.pathname;
          user_session.timestamp      = timestamp_now;
          user_session                = j1.mergeData(user_session, data);
          logText                     = '\n' + 'mode detected: ' + user_session.mode;
          logger.info(logText);
          logger.info('\n' + 'update user session cookie');
          logger.debug('\n' + 'write to cookie : ' + cookie_names.user_session);
          cookie_written = j1.writeCookie({
            name:     cookie_names.user_session,
            data:     user_session,
            secure:   secure,
            expires:  0
          });
          j1.setState(curr_state);
          logger.debug('\n' + 'state: ' + j1.getState());
          var dependencies_met_page_displayed = setInterval (function () {
            if (j1.getState() == 'finished') {
              if (j1.authEnabled()) {
                if (user_session.authenticated === 'true') {
                  // set signout
                  logger.info('\n' + 'show signout icon');
                  $('#navLinkSignInOut').attr('data-bs-target','#modalOmniSignOut');
                  $('#iconSignInOut').removeClass('mdi-login').addClass('mdi-logout');
                } else {
                  // set signin
                  logger.info('\n' + 'show signin icon');
                  $('#navLinkSignInOut').attr('data-bs-target','#modalOmniSignIn');
                  $('#iconSignInOut').removeClass('mdi-logout').addClass('mdi-login');
                }
                logger.info('\n' + 'authentication detected as: ' + user_session.authenticated);
                $('#quickLinksSignInOutButton').css('display', 'block');
                logger.debug('\n' + 'met dependencies for: j1');
                clearInterval(dependencies_met_page_displayed);
              }
            }
          }, 10);
        })
        .catch(function(error) {
          // jadams, 2018-08-31
          // TODO:  Check why a timeout is required
          setTimeout (function() {
            var logger                  = log4javascript.getLogger('j1.init');
            user_session                = j1.readCookie(cookie_names.user_session);
            user_session.mode           = 'web';
            user_session.requested_page = window.location.pathname;
            user_session.timestamp      = timestamp_now;
            logText                     = '\n' + 'mode detected: ' + user_session.mode;
            logger.info(logText);
            logger.debug('\n' + 'write to cookie : ' + cookie_names.user_session);
            cookie_written = j1.writeCookie({
              name:     cookie_names.user_session,
              data:     user_session,
              secure:   secure,
              expires:  0
            });
            j1.setState(curr_state);
            logger.debug('\n' + 'state: ' + j1.getState());
          }, detectTimeout);
        });
      } else {
        // web mode
        state = 'started';
        logger.debug('\n' + 'state: ' + state);
        logger.info('\n' + 'page is being initialized');
      }
      state = 'started';
      logger.debug('\n' + 'state: ' + state);
      logger.info('\n' + 'page is being initialized');
      if ( settings.scrollbar === 'false'  ) {
        $('body').addClass('hide-scrollbar');
        $('html').addClass('hide-scrollbar-moz');
      }
      logger.info('\n' + 'read user state from cookie');
      user_session = j1.readCookie(cookie_names.user_session);
      // process|update user state cookie
      themeName                 = user_session.theme_name;
      themeCss                  = user_session.theme_css;
      // -----------------------------------------------------------------------
      // Save last page access
      // see: https://stackoverflow.com/questions/3528324/how-to-get-the-previous-url-in-javascript
      // see: https://developer.mozilla.org/de/docs/Web/API/Window/history
      //
      user_session.timestamp      = timestamp_now;
      referrer                    = new liteURL(document.referrer);
      current_page                = window.location.pathname;
      user_session.requested_page = current_page;
      user_session.previous_page  = referrer.search === '' ?
                                    (referrer.pathname === '' ? current_page : referrer.pathname) :
                                    (user_session.previous_page === '' || user_session.previous_page === 'na'
                                      ? '/'
                                      : user_session.previous_page
                                    );
      // calculate last 'pager' if any
      if (rePager.test(user_session.previous_page)) {
        last_pager                = user_session.previous_page;
        user_session.last_pager   = last_pager;
      } else {
        last_pager                = user_session.last_pager;
      }
      logger.info('\n' + 'update user session cookie');
      logger.debug('\n' + 'write to cookie : ' + cookie_names.user_session);
      cookie_written = j1.writeCookie({
        name:     cookie_names.user_session,
        data:     user_session,
        secure:   secure,
        expires:  0
      });
      // -----------------------------------------------------------------------
      // load|initialize page resources for block elements
      // NOTE: asynchronous calls should be rewitten to xhrData
      // -----------------------------------------------------------------------
      var dependencies_met_page_ready = setInterval (function (options) {
        var pageState     = $('#no_flicker').css("display");
        var pageVisible   = (pageState == 'block') ? true : false;
        var atticFinished = (j1.adapter.attic.getState() == 'finished') ? true: false;
        if (j1.getState() === 'finished' && pageVisible) {
          logger.info('\n' + 'load block elements');
          j1.initBanner(settings);
          j1.initPanel(settings);
          j1.initFooter(settings);
          var dependencies_met_blocks_ready = setInterval (function (settings) {
            var banner_state        = j1.getXhrDataState('#home_teaser_banner');
            var service_panel_state = j1.getXhrDataState('#home_service_panel');
            var news_panel_state    = j1.getXhrDataState('#home_news_panel');
            var footer_state        = j1.getXhrDataState('#j1_footer');
            // show content section for dynamic 'block elements' to optimze CLS
            if (banner_state == 'success' && service_panel_state == 'success' && news_panel_state == 'success' && footer_state == 'success') {
              // show main content
              $('#content').show();
              clearInterval(dependencies_met_blocks_ready);
            }
          }, 10);
          // show content for (dynamic) 'page content' to optimze CLS
          $('#content').show();
          clearInterval(dependencies_met_page_ready);
        }
      }, 10);
      j1.xhrDOMState["#home_teaser_banner"] == 'success'
      state = 'running';
      logger.debug('\n' + 'state: ' + state);
      user_session.timestamp = timestamp_now;
      logger.debug('\n' + 'write to cookie : ' + cookie_names.user_session);
      cookie_written = j1.writeCookie({
        name:     cookie_names.user_session,
        data:     user_session,
        secure:   secure,
        expires:  0
      });
      // -----------------------------------------------------------------------
      // run additional helpers from j1.core
      // -----------------------------------------------------------------------
      j1.core.bsFormClearButton();
      // -----------------------------------------------------------------------
      // finalize current page
      // -----------------------------------------------------------------------
      //
      j1.finalizePage();
    },
    // -------------------------------------------------------------------------
    // initBanner()
    // AJAX fetcher to load and place all banner used for a page
    // -------------------------------------------------------------------------
    initBanner: function (options) {
      var logger            = log4javascript.getLogger('j1.initBanner');
      var banner            = [];
      var bannerOptions     = [];
      var mod               = 'j1';
      var logText;
      var cb_load_closure = function(banner_id) {
        return function ( responseTxt, statusTxt, xhr ) {
          if ( statusTxt ==  'success' ) {
            // var logger = log4javascript.getLogger('j1.adapter.xhrData');
            logText = '\n' + 'loading banner completed on id: ' +banner_id;
            logger.info(logText);
            j1.setXhrDataState(banner_id, statusTxt);
            j1.setXhrDomState(banner_id, statusTxt);
            logger.info('\n' + 'XHR data loaded in the DOM: ' + banner_id);
          }
          if ( statusTxt == 'error' ) {
            logText = '\n' + 'loading banner failed on id: ' +banner_id+ ', error: ' + xhr.status + ': ' + xhr.statusText;
            logger.error(logText);
            j1.setXhrDataState(banner_id, statusTxt);
            j1.setXhrDomState(banner_id, statusTxt);
            // Set|Log status
            state = 'failed';
            logger.error('\n' + 'state: ' + state);
          }
        };
      };
            banner.push('divider-1');
            banner.push('divider-2');
            banner.push('home_teaser_banner');
            banner.push('home_parallax_banner');
            banner.push('home_image_banner');
      banner.push('exception_container');
      if ( banner.length ) {
        for (var i in banner) {
          var id = '#' + banner[i];
          var selector = $(id);
          if (selector.length) {
            logText = '\n' + 'loading banner on id: ' +banner[i];
            logger.info(logText);
            var banner_data_path = '/assets/data/banner/index.html ' + id + '_content';
            selector.load(banner_data_path, cb_load_closure(id));
          }
        }
      }  else {
        logText = '\n' + 'no banner found in site';
        logger.debug(logText);
        return false;
      }
      return true;
    },
    // -------------------------------------------------------------------------
    // initPanel()
    // AJAX fetcher to load and place all panel used for a page
    // -------------------------------------------------------------------------
    initPanel: function ( options ) {
      var logger            = log4javascript.getLogger('j1.initPanel');
      var panel             = [];
      var mod               = 'j1';
      var logText;
      var cb_load_closure = function(panel_id) {
        return function ( responseTxt, statusTxt, xhr ) {
          var logger = log4javascript.getLogger('j1.adapter.xhrData');
          if ( statusTxt == 'success' ) {
            logText = '\n' + 'loading panel completed on id: ' +panel_id;
            logger.info(logText);
            j1.setXhrDataState(panel_id, statusTxt);
            j1.setXhrDomState(panel_id, statusTxt);
            logger.info('\n' + 'XHR data loaded in the DOM: ' + panel_id);
          }
          if ( statusTxt == 'error' ) {
            logText = '\n' + 'loading panel failed on id: ' +panel_id+ ', error ' + xhr.status + ': ' + xhr.statusText;
            logger.error(logText);
            j1.setXhrDataState(panel_id, statusTxt);
            j1.setXhrDomState(panel_id, statusTxt);
            // Set|Log status
            state = 'Error';
            logger.error('\n' + 'state: ' + state);
          }
        };
      };
      panel.push('home_intro_panel');
      panel.push('home_plan_panel');
      panel.push('home_service_panel');
      panel.push('home_news_panel');
      if (panel.length) {
        for (var i in panel) {
          var id = '#' + panel[i];
          var selector = $(id);
          if ( selector.length ) {
            logText = '\n' + 'loading panel on id: ' +panel[i];
            logger.info(logText);
            var panel_data_path = '/assets/data/panel/index.html ' + id + '_content';
            selector.load(panel_data_path, cb_load_closure(id));
          }
        }
      } else {
        logText = '\n' + 'no panel found in site';
        logger.debug(logText);
        return false;
      }
      return true;
    },
    // -------------------------------------------------------------------------
    // initFooter()
    // AJAX fetcher to load and place the footer used for a page
    // -------------------------------------------------------------------------
    initFooter: function ( options ) {
      var logger            = log4javascript.getLogger('j1.initFooter');
      var mod               = 'j1';
      var logText;
      logText = '\n' + 'loading footer started';
      logger.info(logText);
      var cb_load_closure = function(footer_id) {
        return function ( responseTxt, statusTxt, xhr ) {
          var logger = log4javascript.getLogger('j1.adapter.xhrData');
          if ( statusTxt ==  'success' ) {
            logText = '\n' + 'footer loaded successfully on id: ' + footer_id;
            logger.info(logText);
            j1.setXhrDataState(footer_id, statusTxt);
            j1.setXhrDomState(footer_id, statusTxt);
            logger.info('\n' + 'XHR data loaded in the DOM: ' + footer_id);
            logText = '\n' + 'initialization finished';
            logger.info(logText);
          }
          if ( statusTxt == 'error' ) {
            logText = '\n' + 'loading footer failed on id: ' +footer_id+ ', error ' + xhr.status + ': ' + xhr.statusText;
            logger.error(logText);
            j1.setXhrDataState(footer_id, statusTxt);
            j1.setXhrDomState(footer_id, statusTxt);
            // Set|Log status
            state = 'failed';
            logger.error('\n' + 'state: ' + state);
            logText = '\n' + 'initialization finished';
            logger.info(logText);
          }
        };
      };
      var id = '#' + 'j1_footer';
      var selector = $(id);
      if ( selector.length ) {
        var footer_data_path = '/assets/data/footer/index.html ' + id;
        selector.load(footer_data_path, cb_load_closure(id));
      } else {
        logText = '\n' + 'data not loaded';
        logger.debug(logText);
        j1.setXhrDataState(id, 'not loaded');
        j1.setXhrDomState(id, 'pending');
        return false;
      }
      return true;
    },
    // -------------------------------------------------------------------------
    // finalizePage
    // DISABLED: show the page after timeout of  ms
    // -------------------------------------------------------------------------
    // NOTE:
    //  jadams, 2019-08-21: for unknown reason, the user state data
    //  (read from cookie) seems not correct (or loaded too late).
    //  To make correct data sure for APP mode, a status request is done
    //  to load the current state from the middleware (skipped in WEB mode)
    // -------------------------------------------------------------------------
    finalizePage: function (options) {
      var logger              = log4javascript.getLogger('j1.adapter.finalizePage');
//    var flickerTimeout      = ;
      var url                 = new liteURL(window.location.href);
      var baseUrl             = url.origin;
      var secure              = (url.protocol.includes('https')) ? true : false;
      var ep_status           = baseUrl + '/status' + '?page=' + window.location.pathname;
      var user_session        = j1.readCookie(cookie_names.user_session);
      var user_state          = j1.readCookie(cookie_names.user_state);
      var user_consent        = j1.readCookie(cookie_names.user_consent);
      var user_translate      = j1.readCookie(cookie_names.user_translate);
      var current_url         = new liteURL(window.location.href);
      var providerPermissions = {};
      var provider;
      var previous_page;
      var appDetected;
      var categoryAllowed;
      // provider APIs require user consent
      // -----------------------------------------------------------------------
      var meta_analytics        = $('meta[name=analytics]').attr('content');
      var analytics             = (meta_analytics === 'true') ? true: false;
      var meta_comments         = $('meta[name=comments]').attr('content');
      var comments              = (meta_comments === 'true') ? true: false;
      var meta_advertising      = $('meta[name=advertising]').attr('content');
      var advertising           = (meta_advertising === 'true') ? true: false;
      var meta_youtube          = $('meta[name=youtube]').attr('content');
      var youtube               = (meta_youtube === 'true') ? true: false;
      var meta_vimeo            = $('meta[name=vimeo]').attr('content');
      var vimeo                 = (meta_vimeo === 'true') ? true: false;
      // personalized content require user consent
      var meta_personalization  = $('meta[name=personalization]').attr('content');
      var personalization       = (meta_personalization === 'true') ? true: false;
      const cb = (list) => {
          list.getEntries().forEach(entry => {
              console.log(entry);
          });
      }
      // if personalized content detected, page requires user consent
      // -----------------------------------------------------------------------
      if (personalization && !user_consent.personalization) {
        // redirect to error page: blocked content
        window.location.href = '/444.html';
      }
      logger.info('\n' + 'finalize page');
      logText= '\n' + 'loading page partials: started';
      logger.info(logText);
      if (j1.appDetected()) {
        // app mode
        // ---------------------------------------------------------------------
        logger.info('\n' + 'mode detected: app');
        $.when ($.ajax(ep_status))
        .then(function(data) {
          var logger = log4javascript.getLogger('j1.finalizePage');
          user_session = j1.mergeData(user_session, data);
          user_session.current_page = current_url.pathname;
          logger.debug('\n' + 'write to cookie : ' + cookie_names.user_session);
          cookie_written = j1.writeCookie({
            name:     cookie_names.user_session,
            data:     user_session,
            secure:   secure,
            expires:  0
          });
          providerPermissions = user_session.provider_permissions;
          categoryAllowed     = providerPermissions.includes(user_session.page_permission);
          // -------------------------------------------------------------------
          // check protected pages (applies for APP only)
          // make sure that protected pages are ALWAYS checked for permissions
          //
          if (
            j1.authEnabled() &&
            user_session.page_permission !== 'public' &&
            categoryAllowed === false
          ){
            // redirect to middleware|page_authentication
            if (data.authenticated === 'true') {
              var ep_post_authentication = baseUrl + '/post_authentication';
              window.location.href = ep_post_authentication;
          } else if (j1.authEnabled()) {
              var ep_page_validation = baseUrl + '/page_validation?page=' + window.location.pathname;
              window.location.href = ep_page_validation;
              return false;
            }
          }
          // enable (body) animation on page load if enabled
          if (bodyAnimation) {
            var body_animation_fadein  = '<style id="body_animation">';
            body_animation_fadein     += '  body {';
            body_animation_fadein     += '    animation: fadeInAnimation ease ' + bodyAnimationDuration + 's;';
            body_animation_fadein     += '    animation-iteration-count: 1;';
            body_animation_fadein     += '    animation-fill-mode: forwards;';
            body_animation_fadein     += '  }';
            body_animation_fadein     += '  @keyframes fadeInAnimation {';
            body_animation_fadein     += '    0% {';
            body_animation_fadein     += '    	opacity: 0;';
            body_animation_fadein     += '    }';
            body_animation_fadein     += '    100% {';
            body_animation_fadein     += '    	opacity: 1;';
            body_animation_fadein     += '    }';
            body_animation_fadein     += '  }';
            body_animation_fadein     += '</style>';
            $('head').append(body_animation_fadein);
          }
          // display the page loaded is managed by module "themer"
          // $('#no_flicker').css('display', 'block');
          // $('#no_flicker').show();
          // jadams, 2021-12-06: Check if access to cookies for this site failed.
          // Possibly, a third-party domain or an attacker tries to access it.
          if (checkCookies) {
            var j1Cookies = j1.findCookie('j1');
            if (!j1.existsCookie(cookie_names.user_state)) {
              logger.error('\n' + 'Access to cookie failed or cookie not found: ' + cookie_names.user_state);
              logger.info('\n' + 'j1 cookies found:' + j1Cookies.length);
              // redirect to error page: blocked content
              window.location.href = '/446.html';
            } else {
              logger.info('\n' + 'j1 cookies found:' + j1Cookies.length);
            }
          }
          // manage Dropcaps if translation is enabled|disabled
          // -----------------------------------------------------------------
          if (user_translate.translationEnabled) {
           logger.info('\n' + 'translation enabled: ' + user_translate.translationEnabled);
           logger.debug('\n' + 'skipped processing of dropcaps');
          } else {
           // initialize dropcaps
           logger.info('\n' + 'post processing: createDropCap');
           j1.core.createDropCap();
          }
          // TODO: should MOVED to Cookiebar ???
          // show|hide cookie icon
          if (j1.existsCookie(cookie_names.user_consent)) {
            // Display cookie icon
            logText = '\n' + 'show cookie icon';
            logger.info(logText);
            $('#quickLinksCookieButton').css('display', 'block');
          } else {
            logText = '\n' + 'hide cookie icon';
            logger.info(logText);
            // Display cookie icon
            $('#quickLinksCookieButton').css('display', 'none');
          }
          // TODO: should MOVED to ControlCenter Adapter ???
          // -----------------------------------------------------------------
          // show cc icon (currently NOT supported)
          // $('#quickLinksControlCenterButton').css('display', 'block');
          if (j1.authEnabled()) {
            if (user_session.authenticated === 'true') {
              // set signout
              logger.info('\n' + 'show signout icon');
              $('#navLinkSignInOut').attr('data-bs-target','#modalOmniSignOut');
              $('#iconSignInOut').removeClass('mdi-login').addClass('mdi-logout');
            } else {
              // set signin
              logger.info('\n' + 'show signin icon');
              $('#navLinkSignInOut').attr('data-bs-target','#modalOmniSignIn');
              $('#iconSignInOut').removeClass('mdi-logout').addClass('mdi-login');
            }
            logger.info('\n' + 'authentication detected as: ' + user_session.authenticated);
            $('#quickLinksSignInOutButton').css('display', 'block');
          }
          // TODO: should MOVED to Themer ???
          // jadams, 2021-07-25: hide|show themes menu on cookie consent
          // (analysis|personalization) settings. BootSwatch is a 3rd party
          // is using e.g GA. Because NO control is possible on 3rd parties,
          // for GDPR compliance, themes feature may disabled on
          // privacy settings
          if (!user_consent.personalization)  {
            logger.debug('\n' + 'disable themes feature because of privacy settings');
            logger.debug('\n' + 'personalization not allowed, privacy settings for personalization: ' + user_consent.personalization);
            $("#themes_menu").hide();
          } else {
            $("#themes_menu").show();
          }
          // detect if a loaded page has been chenged
          if (user_session.previous_page !== user_session.current_page) {
            logText = '\n' + 'page change detected';
            logger.info(logText);
            logText = '\n' + 'previous page: ' + user_session.previous_page;
            logger.info(logText);
            logText = '\n' + 'current page: ' + user_session.current_page;
            logger.info(logText);
          }
          // update sidebar for changed theme data
          logger.info('\n' + 'update sidebar');
          user_state        = j1.readCookie(cookie_names.user_state);
          current_user_data = j1.mergeData(user_session, user_state);
          j1.core.navigator.updateSidebar(current_user_data);
          // initiate smooth scroller if page is ready and visible
          var dependencies_met_page_ready = setInterval (function (options) {
            var pageState   = $('#no_flicker').css("display");
            var pageVisible = (pageState == 'block') ? true: false;
            if ( j1.getState() === 'finished' && pageVisible ) {
              setTimeout (function() {
                // scroll to an anchor in current page if given in URL
                j1.scrollToAnchor();
              }, 10 );
              clearInterval(dependencies_met_page_ready);
            }
          }, 10);
          // set|log status
          state = 'finished';
          j1.setState(state);
          logText = '\n' + 'state: ' + state;
          logger.info(logText);
          logText = '\n' + 'page finalized successfully';
          logger.info(logText);
        });
      } else {
        // web mode
        // ---------------------------------------------------------------------
        logger.info('\n' + 'state: finished');
        logger.info('\n' + 'page initialization: finished');
        // enable (body) animation on page load if enabled
        if (bodyAnimation) {
          var body_animation_fadein  = '<style id="body_animation">';
          body_animation_fadein     += '  body {';
          body_animation_fadein     += '    animation: fadeInAnimation ease ' + bodyAnimationDuration + 's;';
          body_animation_fadein     += '    animation-iteration-count: 1;';
          body_animation_fadein     += '    animation-fill-mode: forwards;';
          body_animation_fadein     += '  }';
          body_animation_fadein     += '  @keyframes fadeInAnimation {';
          body_animation_fadein     += '    0% {';
          body_animation_fadein     += '    	opacity: 0;';
          body_animation_fadein     += '    }';
          body_animation_fadein     += '    100% {';
          body_animation_fadein     += '    	opacity: 1;';
          body_animation_fadein     += '    }';
          body_animation_fadein     += '  }';
          body_animation_fadein     += '</style>';
          $('head').append(body_animation_fadein);
        }
        // display the page loaded is managed by module "themer"
        // $('#no_flicker').css('display', 'block');
        // $('#no_flicker').show();
        // jadams, 2021-12-06: Check if access to cookies for this site failed.
        // Possibly, a third-party domain or an attacker tries to access it.
        if (checkCookies) {
          var j1Cookies = j1.findCookie('j1');
          if (!j1.existsCookie(cookie_names.user_state)) {
            logger.error('\n' + 'Access to cookie failed or cookie not found: ' + cookie_names.user_state);
            logger.info('\n' + 'j1 cookies found:' + j1Cookies.length);
            // redirect to error page: blocked content
            window.location.href = '/446.html';
          } else {
            logger.info('\n' + 'j1 cookies found:' + j1Cookies.length);
          }
        }
        // jadams, 2021-11-19: test code for 'tapTarget' of 'materializeCss'
        // See:
        //  https://stackoverflow.com/questions/49422111/opening-tap-target-in-materialize-css-for-2-seconds
        // -------------------------------------------------------------------
        // $('#features').tapTarget();
        // $('#features').click(function(e) {
        //   logger.info('\n' + 'call default action');
        //   $('#features').tapTarget('open');
        // });
        // jadams, 2021-11-19: additional code for accordions (collapsible)
        // used e.g for the 'SERVICE Panel'
        // -------------------------------------------------------------------
        // Add minus icon for collapse element which is open by default
        $(".collapse.show").each(function(){
            $(this).prev(".card-header").addClass("highlight");
        });
        // Highlight open collapsed element
        $(".card-header .btn").click(function(){
            $(".card-header").not($(this).parents()).removeClass("highlight");
            $(this).parents(".card-header").toggleClass("highlight");
        });
        // manage Dropcaps if translation is enabled|disabled
        // -------------------------------------------------------------------
        if (user_translate.translationEnabled) {
          logger.info('\n' + 'translation enabled: ' + user_translate.translationEnabled);
          logger.debug('\n' + 'skipped processing of dropcaps');
        } else {
          // initialize dropcaps
          logger.info('\n' + 'post processing: createDropCap');
          j1.core.createDropCap();
        }
        logger.info('\n' + 'mode detected: web');
        logger.info('\n' + 'hide signin icon');
        $('#quickLinksSignInOutButton').css('display', 'none');
        user_session.current_page = current_url.pathname;
        logger.debug('\n' + 'write to cookie : ' + cookie_names.user_session);
        cookie_written = j1.writeCookie({
            name:     cookie_names.user_session,
            data:     user_session,
            secure:   secure,
            expires:  0
        });
        // TODO: should MOVED to ControlCenter Adapter ???
        // -----------------------------------------------------------------
        // show cc icon (currently NOT supported)
        // $('#quickLinksControlCenterButton').css('display', 'block');
        // TODO: should MOVED to Cookiebar ???
        // show|hide cookie icon
        if (j1.existsCookie(cookie_names.user_consent)) {
          // Display cookie icon
          logText = '\n' + 'show cookie icon';
          logger.info(logText);
          $('#quickLinksCookieButton').css('display', 'block');
        } else {
          logText = '\n' + 'hide cookie icon';
          logger.info(logText);
          // Display cookie icon
          $('#quickLinksCookieButton').css('display', 'none');
        }
        // TODO: should MOVED to Themer ???
        // jadams, 2021-07-25: hide|show themes menu on cookie consent
        // (analysis|personalization) settings. BootSwatch is a 3rd party
        // is using e.g GA. Because NO control is possible on 3rd parties,
        // for GDPR compliance, themes feature may disabled on
        // privacy settings
        if (!user_consent.personalization)  {
          logger.debug('\n' + 'disable themes feature because of privacy settings');
          logger.debug('\n' + 'personalization not allowed, privacy settings for personalization: ' + user_consent.personalization);
          $("#themes_menu").hide();
        } else {
          $("#themes_menu").show();
        }
        // detect if a loaded page has been chenged
        if (user_session.previous_page !== user_session.current_page) {
          logText = '\n' + 'page change detected';
          logger.info(logText);
          logText = '\n' + 'previous page: ' + user_session.previous_page;
          logger.info(logText);
          logText = '\n' + 'current page: ' + user_session.current_page;
          logger.info(logText);
        }
        // update sidebar for changed theme data
        logger.info('\n' + 'update sidebar');
        user_state        = j1.readCookie(cookie_names.user_state);
        if (template_version_changed) {
          if (typeof template_previous_version == 'undefined') template_previous_version = 'na';
          logger.warn('\n' + 'template version detected as changed');
          logger.warn('\n' + 'template version previous|current: ' +  template_previous_version + '|' + template_version);
          // Update the user_state cookie
          // TODO:  replace theme_version by template_version as they
          //        are alwas the same
          //        disable: user_state.theme_version = template_version;
          //
          user_state.template_version = template_version;
          cookie_written = j1.writeCookie({
          	name:     cookie_names.user_state,
          	data:     user_state,
          	secure:   secure,
          	expires:  365
          });
          logger.warn('\n' + 'template version updated to: ' +  template_version);
        } else {
          logger.info('\n' + 'template version detected: ' +  user_state.template_version);
        }
        // set current user data
        current_user_data = j1.mergeData(user_session, user_state);
        j1.core.navigator.updateSidebar(current_user_data);
        // initiate smooth scroller if page is ready and visible
        var dependencies_met_page_ready = setInterval (function (options) {
          var pageState   = $('#no_flicker').css("display");
          var pageVisible = (pageState == 'block') ? true: false;
          if ( j1.getState() === 'finished' && pageVisible ) {
            // TODO: Hide GoogleTranslator
            // $('.skiptranslate').hide();
            setTimeout (function() {
              // scroll to an anchor in current page if given in URL
              j1.scrollToAnchor();
            }, 10 );
            clearInterval(dependencies_met_page_ready);
          }
        }, 10);
        // set|log status
        state = 'finished';
        j1.setState(state);
        logText = '\n' + 'state: ' + state;
        logger.info(logText);
        logText = '\n' + 'page finalized successfully';
        logger.info(logText);
      }
    },
    // -------------------------------------------------------------------------
    // Helper functions
    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------
    // mergeData()
    // merge two objects (properties) and returns the resulting object
    // see: https://stackoverflow.com/questions/43109229/merge-default-options-containing-object-with-json-object
    // TODO:  Improve comment, give synopsis and example
    // -------------------------------------------------------------------------
    mergeData: function () {
      var a = [].slice.call(arguments), o = a.shift();
      for(var i=0,l=a.length; i<l; i++){
        for(var p in a[i]){
          o[p] = a[i][p];
        }
      }
      return o;
    },
    // -------------------------------------------------------------------------
    // getPrevPage()
    // Returns the last vistited page
    // -------------------------------------------------------------------------
    getPrevPage: function () {
      return previous_page;
    },
    // -------------------------------------------------------------------------
    // getLanguage()
    // Returns the preferred language taken form window.navigator
    // See:
    // https://stackoverflow.com/questions/1043339/javascript-for-detecting-browser-language-preference
    // -------------------------------------------------------------------------
    getLanguage: function () {
      var language = navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage);
    },
    // -------------------------------------------------------------------------
    // getTemplateVersion()
    // Returns the template version taken from site config (_config.yml)
    // -------------------------------------------------------------------------
    getTemplateVersion: function () {
      return '2023.3.5';
    },
    // -------------------------------------------------------------------------
    // getScrollOffset()
    // Calculate offset for a correct (smooth) scroll position
    // -------------------------------------------------------------------------
    getScrollOffset: function (offsetCorrection) {
//     var scrollOffset;
//      var offsetCorrection = 0;
      var $pagehead     = $('.attic');
      var $navbar       = $('#navigator_nav_navbar');
      var $adblock      = $('#adblock');
      var navbarType    = $navbar.hasClass('navbar-fixed') ? 'fixed' : 'scrolled';
      var fontSize      = $('body').css('font-size').replace('px','');
      var f             = parseInt(fontSize);
      var h             = $pagehead.length ? $pagehead.height() : 0;
      var n             = $navbar.length ? $navbar.height() : 0;
      var a             = $adblock.length ? $adblock.height() : 0;
      // Unclear why or what element cause the need of a correction
      // TODO: General revision of scrollOffset needed
      // NOTE: Disabled for now
      //
      // offsetCorrection  = navbarType == 'fixed' ? 10 : -25;
      scrollOffset      = navbarType == 'fixed'
                            ? -1*(n + a + f) + offsetCorrection
                            : -1*(n + a + f) + h + offsetCorrection;
      return scrollOffset;
    },
    // -------------------------------------------------------------------------
    // scrollTo()
    // Scrolls smooth to any anchor referenced by an page URL on
    // e.g. a page reload. Values e.g for delay are taken from
    // TOCCER module
    // NOTE: crollTo() is triggered by 'onDocumentHeigthChange'
    // -------------------------------------------------------------------------
    scrollTo: function (offset) {
      var logger          = log4javascript.getLogger('j1.scrollTo');
      var anchor          = window.location.href.split('#')[1];
      var anchor_id       = (typeof anchor !== 'undefined') && (anchor != '') ? '#' + anchor : false;
      var scrollDuration  = 300;
      var scrollOffset    = offset ; // j1.getScrollOffset();
      var isSlider        = false;
      var selector        = $(anchor_id);
      // skip invalid anchors|selectors
      //
      if (typeof anchor === 'undefined' || anchor.includes('slide') || anchor.includes('googtrans') || !$(selector).length) {
        return false;
      }
      // Check if the anchor is an slider/gallery element
      //
      if (typeof anchor !== 'undefined') {
        isSlider = anchor.includes('slide');
      }
      if (anchor_id && anchor_id !== '#' && !isSlider) {
        // scroll only, if an anchor is given with an URL
        selector = $(anchor_id);
        if (selector.length) {
          logger.info('\n' + 'scrollTo header: ' + anchor_id);
          j1.core.scrollSmooth.scroll(anchor_id, {
            duration:   scrollDuration,
            offset:     scrollOffset,
            callback:   false
          });
        } else {
          // scroll the page one pixel back and forth (trigger)
          // to get the right position for the Toccer and adjust the
          // Navigator to display the (tranparent) navbar correctly
          //
          $(window).scrollTop($(window).scrollTop()+1);
          $(window).scrollTop($(window).scrollTop()-1);
        }
      } else if (anchor_id === '#') {
        logger.info('\n' + 'bound click event to "#", suppress default action');
        $(window).scrollTop($(window).scrollTop()+1);
        $(window).scrollTop($(window).scrollTop()-1);
        return false;
      }
    },
    // -------------------------------------------------------------------------
    //  authEnabled()
    //  Returns the state of the authentication module
    // -------------------------------------------------------------------------
    authEnabled: function () {
      var logger      = log4javascript.getLogger('j1.authentication');
      var authEnabled = false;
      return authEnabled;
    },
    // -------------------------------------------------------------------------
    //  appDetected()
    //  Returns true if a web session cookie exists
    // -------------------------------------------------------------------------
    appDetected: function () {
      var user_session;
      var cookieExists = j1.existsCookie(cookie_names.user_session);
      var detected = false;
      if (cookieExists) {
        user_session = j1.readCookie(cookie_names.user_session);
        detected     = user_session.mode === 'app' ? true : false;
      } else {
        // detected = 'unknown';
        detected = false;
      }
      return detected;
    },
    // -------------------------------------------------------------------------
    // loadHTML()
    // Load HTML data asychronously using XHR|jQuery on an element (e.g. <div>)
    // specified by xhr_container_id, xhr_data_path (options)
    // -------------------------------------------------------------------------
    loadHTML: function (options, mod, status) {
      var logger            = log4javascript.getLogger('j1.adapter.loadHTML');
      var selector          = $('#' + options.xhr_container_id);
      var state             = status;
      var observer_options  = {
        attributes:     false,
        childList:      true,
        characterData:  false,
        subtree:        true
      };
      var observer;
      var logText;
      var cb_load_closure = function(mod, id) {
        return function (responseTxt, statusTxt, xhr) {
          var logger = log4javascript.getLogger('j1.adapter.loadHTML');
          if ( statusTxt === 'success' ) {
            j1.setXhrDataState(id, statusTxt);
            j1.setXhrDomState(id, 'pending');
            logText = '\n' + 'data loaded successfully on id: ' +id;
            logger.info(logText);
            state = true;
          }
          if ( statusTxt === 'error' ) {
            // jadams, 2020-07-21: to be checked why id could be UNDEFINED
            if (typeof(id) != "undefined") {
              state = 'failed';
              logger.info('\n' + 'set state for ' +mod+ ' to: ' + state);
              // jadams, 2020-07-21: intermediate state should DISABLED
              // executeFunctionByName(mod + '.setState', window, state);
              j1.setXhrDataState(id, statusTxt);
              j1.setXhrDomState(id, 'pending');
              logText = '\n' + 'loading data failed on id: ' +id+ ', error ' + xhr.status + ': ' + xhr.statusText;
              logger.error(logText);
              state = false;
            }
          }
        };
      };
      // see: https://stackoverflow.com/questions/20420577/detect-added-element-to-dom-with-mutation-observer
      //
      var html_data_path = options.xhr_data_path + ' #' + options.xhr_data_element;
      var id        = '#' + options.xhr_container_id;
      var container = '#' + options.xhr_container_id + '_container';
      var $selector = $(id);
      // NOTE: Unclear why some pages (e.g. about/site) affected (fam button).
      // All pages should have FRONTMATTER defaults (by _config.yml) setting
      // all relevant defaults.
      // failsafe - prevent XHR load errors
      if (options.xhr_data_element !== '') {
        logger.info('\n' + 'XHR data element found: ' + options.xhr_data_element);
      } else  {
        logger.debug('\n' + 'no XHR data element found, loading data aborted');
        return;
      }
      if ( $selector.length ) {
        $selector.load( html_data_path, cb_load_closure( mod, id ) );
        var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
        var xhrObserver = new MutationObserver (mutationHandler);
        var obsConfig = {
            childList: true,
            characterData: false,
            attributes: false,
            subtree: false };
        selector.each(function(){
            xhrObserver.observe(this, obsConfig);
        });
        function mutationHandler (mutationRecords) {
          mutationRecords.forEach ( function (mutation) {
            if (mutation.addedNodes.length) {
              logger.info('\n' + 'XHR data loaded in the DOM: ' + id);
              j1.setXhrDomState(id, 'success');
            }
          });
        }
      } else {
        // jadams, 2020-07-21: To be clarified why a id is "undefined"
        // failsafe - prevent XHR load errors
        if (id != '#undefined') {
          logText = '\n' + 'data not loaded on id:' + id;
          logger.debug(logText);
          j1.setXhrDataState(id, 'not loaded');
          j1.setXhrDomState(id, 'not loaded');
          // Set processing state to 'finished' to complete module load
          state = 'finished';
          logger.debug('\n' + 'state: ' + state);
          // jadams, 2020-07-21: intermediate state should DISABLED
          // executeFunctionByName(mod + '.setState', window, state);
          state = false;
        }
      }
      return state;
    },
    // -------------------------------------------------------------------------
    // loadJS()
    // Load JS data asychronously using jQuery (XHR)
    // -------------------------------------------------------------------------
    loadJS: function (options, mod, status) {
      var logger  = log4javascript.getLogger('j1.adapter.loadJS');
      var state   = status;
      var logText;
      var cb_load_closure = function(mod, id) {
        return function (responseTxt, statusTxt, xhr) {
          var logger = log4javascript.getLogger('j1.adapter.loadJS');
          if ( statusTxt === 'success' ) {
            j1.setXhrDataState(id, statusTxt);
            logText = '\n' + 'data loaded successfully for: ' +id;
            logger.info(logText);
            state = true;
          }
          if ( statusTxt === 'error' ) {
            state = 'failed';
            logger.info('\n' + 'set state for ' +mod+ ' to: ' + state);
            j1.setXhrDataState(id, statusTxt);
            logText = '\n' + 'loading data failed for: ' +id+ ', error ' + xhr.status + ': ' + xhr.statusText;
            logger.error(logText);
            state = false;
          }
        };
      };
      $.ajax({
        url:      options.xhr_data_path,
        dataType: 'script',
        success:  cb_load_closure(mod, options.xhr_data_element)
      });
      return state;
    },
    // -------------------------------------------------------------------------
    // removeRessource (Vanilla JS)
    // -------------------------------------------------------------------------
    removeRessource: function (filename, filetype) {
      // determine element type to create nodelist from
      var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none"
      // determine corresponding attribute to test for
      var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none"
      var allsuspects=document.getElementsByTagName(targetelement)
      // search backwards within nodelist for matching elements to remove
      // remove element by calling parentNode.removeChild()
      for (var i=allsuspects.length; i>=0; i--) {
        if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
            allsuspects[i].parentNode.removeChild(allsuspects[i])
      }
    },
    // -------------------------------------------------------------------------
    // subdomain()
    // Returns true|false if a subdomain is used for a given URL
    // -------------------------------------------------------------------------
    subdomain: function (url) {
      // See: https://snipplr.com/view/5449/check-if-a-url-contains-a-subdomain
      // IF THERE, REMOVE WHITE SPACE FROM BOTH ENDS
      url = url.replace(new RegExp(/^\s+/),""); // START
      url = url.replace(new RegExp(/\s+$/),""); // END
      // IF FOUND, CONVERT BACK SLASHES TO FORWARD SLASHES
      url = url.replace(new RegExp(/\\/g),"/");
      // IF THERE, REMOVES 'http://', 'https://' or 'ftp://' FROM THE START
      url = url.replace(new RegExp(/^http\:\/\/|^https\:\/\/|^ftp\:\/\//i),"");
      // IF THERE, REMOVES 'www.' FROM THE START OF THE STRING
      url = url.replace(new RegExp(/^www\./i),"");
      // REMOVE COMPLETE STRING FROM FIRST FORWARD SLASH ON
      url = url.replace(new RegExp(/\/(.*)/),"");
      // REMOVES '.??.??' OR '.???.??' FROM END - e.g. '.CO.UK', '.COM.AU'
      if (url.match(new RegExp(/\.[a-z]{2,3}\.[a-z]{2}$/i))) {
            url = url.replace(new RegExp(/\.[a-z]{2,3}\.[a-z]{2}$/i),"");
      // REMOVES '.??' or '.???' or '.????' FROM END - e.g. '.US', '.COM', '.INFO'
      } else if (url.match(new RegExp(/\.[a-z]{2,4}$/i))) {
            url = url.replace(new RegExp(/\.[a-z]{2,4}$/i),"");
      }
      // CHECK TO SEE IF THERE IS A DOT '.' LEFT IN THE STRING
      var isSubDomain = (url.match(new RegExp(/\./g))) ? true : false;
      return(isSubDomain);
    }, // END subdomain
    // -------------------------------------------------------------------------
    //  readCookie (Vanilla JS)
    // -------------------------------------------------------------------------
    readCookie: function (name) {
      var data;
      var data_json;
      var cookieExists = j1.existsCookie(name);
      if (cookieExists) {
        data_json = window.atob(Cookies.get(name));
        data      = JSON.parse(data_json);
        if (data) {
          return data;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    // -------------------------------------------------------------------------
    // writeCookie (Cookie lib)
    // Write 'data' to a cookie 'name'. If not exists, the cookie gets
    // created. Returns 'true' if cookie was written, otherwise 'false'.
    // -------------------------------------------------------------------------
    // NOTE:
    //    https://web.dev/samesite-cookies-explained/
    //    https://developer.mozilla.org/de/docs/Web/HTTP/Headers/Set-Cookie/SameSite
    //    https://www.smarketer.de/blog/chrome-update-80-cookies/
    // -------------------------------------------------------------------------
    // SESSION Cookies:
    // NOT putting an EXPIRES part in will create a session cookie.
    // -------------------------------------------------------------------------
    // REMOVING Cookies: Cookies get removed immediately, if the expires
    // part points to a PAST date (e.g. 01 Jan 1970 00:00:00 UTC).
    // -------------------------------------------------------------------------
    // MAX-AGE Cookies: To leave cookies for a specific time, set the expires
    // part into a FUTUTE date. FOR GDPR compliance, MAX-AGE is 365 days.
    // TODO:  Change attribute "Secure" to true, if HTTPS is used.
    //        Checks and config changes are to be done.
    // -------------------------------------------------------------------------
    // TODO: Handling of  attribute "SameSite".
    //    Config to use this attribute should be configurable
    //    (what config file?).
    //    Disabled use for now in general.
    //
    //    The SameSite attribute of the Set-Cookie HTTP response header
    //    allows you to declare if your cookie should be restricted to a
    //    first-party or same-site context. Cookies with SameSite=None
    //    must now also specify the Secure attribute (they require a secure
    //    context/HTTPS).
    // -------------------------------------------------------------------------
    writeCookie: function (options /*name, data, [path, expires, domain, samesite, http_only, secure]*/) {
      var date                  = new Date();
      var timestamp_now         = date.toISOString();
      var url                   = new liteURL(window.location.href);
      var baseUrl               = url.origin;;
      var hostname              = url.hostname;
      var auto_domain           = hostname.substring(hostname.lastIndexOf('.', hostname.lastIndexOf('.') - 1) + 1);
      var auto_secure           = (url.protocol.includes('https')) ? true : false;
      var stringifiedAttributes = '';
      var cookie_data           = {};
      var data_json;
      var data_encoded;
      var defaults = {
        path:         '/',
        expires:      '365',
        domain:       ('false' === 'false') ? false : 'false',
        samesite:     'Strict',
        http_only:    ('false' === 'true'),
        secure:       ('auto' === 'false') ? false : 'auto'
      };
      var settings = $.extend(defaults, options);
      // Failsafe: if 'None' is given for samesite in non-secure environments
      // -----------------------------------------------------------------------
      if (settings.samesite == 'None' && !settings.secure) {
        settings.samesite = 'Lax';
      }
      cookie_data.timestamp = timestamp_now;
      if (j1.existsCookie(settings.name)) {
        cookie_data   = j1.readCookie(settings.name);
        cookie_data   = j1.mergeData(cookie_data, settings.data);
        data_json     = JSON.stringify( cookie_data );
        data_encoded  = window.btoa(data_json);
      } else {
        cookie_data   = settings.data;
        data_json     = JSON.stringify(settings.data);
        data_encoded  = window.btoa(data_json);
      }
      // collect the cookie attributes
      // -----------------------------------------------------------------------
      stringifiedAttributes += '; ' + 'Path=' + settings.path;
      if (settings.expires > 0) {
        date.setTime(date.getTime() + (settings.expires * 24 * 60 * 60 * 1000));
        stringifiedAttributes += '; ' + 'Expires=' + date.toUTCString();
      }
      stringifiedAttributes += '; ' + 'SameSite=' + settings.samesite;
      // set domain used by cookies
      if (settings.domain) {
        if (settings.domain == 'auto') {
          stringifiedAttributes += '; ' + 'Domain=' + auto_domain;
        } else {
          stringifiedAttributes += '; ' + 'Domain=' + settings.domain;
        }
      }
      // set secure attribute
      if (settings.secure) {
        if (settings.secure == 'auto') {
          stringifiedAttributes += '; ' + 'Secure=' + auto_secure;
        } else {
          stringifiedAttributes += '; ' + 'Secure=' + settings.secure;
        }
      }
      // write the cookie
      // -----------------------------------------------------------------------
      document.cookie = settings.name + '=' + data_encoded + stringifiedAttributes;
      if (j1.existsCookie(settings.name)) {
        return cookie_data;
      } else {
        return false;
      }
    },
    // -------------------------------------------------------------------------
    // findCookie (Vanilla JS)
    // Search for cookies (by name) in the page header that matches a given
    // (name) string. A cookie name can be given as full name, like 'j1.user.state',
    // or as a partial like 'j1'
    // Returns all names found as an array.
    // -------------------------------------------------------------------------
    // See: https://stackoverflow.com/questions/52287989/javascript-cookie-remove-or-delete-with-regex-regular-expression
    // -------------------------------------------------------------------------
    findCookie: function (name) {
      var rCookie=[];
      document.cookie.replace(new RegExp(name + '[^= ]*', 'g'), function(a){ rCookie.push(a.trim()); });
      return rCookie;
    },
    // -------------------------------------------------------------------------
    // removeCookie (Vanilla JS)
    // -------------------------------------------------------------------------
    removeCookie: function (options /*name, [path, domain]*/) {
      var url                   = new liteURL(window.location.href);
      var baseUrl               = url.origin;;
      var hostname              = url.hostname;
      var auto_domain           = hostname.substring(hostname.lastIndexOf('.', hostname.lastIndexOf('.') - 1) + 1);
      var auto_secure           = (url.protocol.includes('https')) ? true : false;
      var stringifiedAttributes = '';
      var defaults = {
        path:         '/',
        expires:      'Thu, 01 Jan 1970 00:00:00 UTC',                          // clear cookies by settting the expiry date in the PAST
        domain:       ('false' === 'false') ? false : 'false',
        samesite:     'Strict',
        http_only:    ('false' === 'true'),
        secure:       ('auto' === 'false') ? false : 'auto'
      };
      var settings  = $.extend(defaults, options);
      // collect the cookie attributes
      // -----------------------------------------------------------------------
      stringifiedAttributes += '; ' + 'Path=' + settings.path;
      stringifiedAttributes += '; ' + 'SameSite=' + settings.samesite;
      stringifiedAttributes += '; ' + 'Expires=' + settings.expires;
      // set domain used by cookies
      if (settings.domain) {
        if (settings.domain == 'auto') {
          stringifiedAttributes += '; ' + 'Domain=' + auto_domain;
        } else if (typeof settings.domain == 'string') {
          stringifiedAttributes += '; ' + 'Domain=' + settings.domain;
        }
      }
      // set secure attribute
      if (settings.secure) {
        if (settings.secure == 'auto') {
          stringifiedAttributes += '; ' + 'Secure=' + auto_secure;
        } else {
          stringifiedAttributes += '; ' + 'Secure=' + settings.secure;
        }
      }
      // clear|remove the cookie if exists
      // -----------------------------------------------------------------------
      if (j1.findCookie(settings.name)) {
        document.cookie = settings.name + '=;' + stringifiedAttributes;
        return true;
      } else {
        return false;
      }
    },
    // -------------------------------------------------------------------------
    // expireCookie (Vanilla JS)
    // Expires given cookies by name except cookies set to httpOnly. For all
    // cookies the expiry date is REMOVED. This results in cookies are set
    // to 'session' for the expiry date. All session cookies are deleted
    // automatically by the browser if the last session (browser tab|window)
    // is closed.
    // -------------------------------------------------------------------------
    // expireCookie() returns 'true' if cookie is set successfully
    // (to session), otherwise 'false' (e.g. NOT found)
    // -------------------------------------------------------------------------
    // NOTE:
    // See: https://stackoverflow.com/questions/179355/clearing-all-cookies-with-javascript
    //
    // NOTE:
    // There is NO way you could get a trace of Path, Domain and other
    // attributes of cookies as they are only read by browsers and NOT shown
    // to JavaScript. For that reason, attributes needs to be set explicitly
    // to already KNOWN values.
    //
    // -------------------------------------------------------------------------
    expireCookie: function (options /*name [,path, samesite, secure]*/) {
      var url                   = new liteURL(window.location.href);
      var baseUrl               = url.origin;;
      var hostname              = url.hostname;
      var auto_domain           = hostname.substring(hostname.lastIndexOf('.', hostname.lastIndexOf('.') - 1) + 1);
      var auto_secure           = (url.protocol.includes('https')) ? true : false;
      var stringifiedAttributes = '';
      var defaults = {
        path:         '/',
        expires:      '365',
        domain:       ('false' === 'false') ? false : 'false',
        samesite:     'Strict',
        http_only:    ('false' === 'true'),
        secure:       ('auto' === 'false') ? false : 'auto'
      };
      var settings  = $.extend(defaults, options);
      // collect the cookie attributes
      // -----------------------------------------------------------------------
      stringifiedAttributes += '; ' + 'Path=' + settings.path;
      stringifiedAttributes += '; ' + 'SameSite=' + settings.samesite;
      // set domain used by cookies
      if (settings.domain) {
        if (settings.domain == 'auto') {
          stringifiedAttributes += '; ' + 'Domain=' + auto_domain;
        } else if (typeof settings.domain == 'string') {
          if (settings.domain !== 'false') {
            stringifiedAttributes += '; ' + 'Domain=' + settings.domain;
          }
        }
      }
      // set secure attribute
      if (settings.secure) {
        if (settings.secure == 'auto') {
          stringifiedAttributes += '; ' + 'Secure=' + auto_secure;
        } else {
          stringifiedAttributes += '; ' + 'Secure=' + settings.secure;
        }
      }
      var dc        = document.cookie;                                          // all cookies in page
      var end       = dc.length;                                                // default to end of the string
      var prefix    = settings.name + '=';                                      // search string for the cookie name given
      var begin     = dc.indexOf('; ' + prefix);
      var content   = '';
      // collect the cookie content
      // -----------------------------------------------------------------------
      // found, and not in the first position
      if (begin !== -1) {
        // exclude the "; "
        begin += 2;
      } else {
        // see if cookie is in first position
        begin = dc.indexOf(prefix);
        // not found at all or found as a portion of another cookie name
        if (begin === -1 || begin !== 0 ) return false;
      }
      // if ";" is found somewhere after the prefix position then "end" is
      // that position, otherwise it defaults to the end of the string
      if (dc.indexOf(';', begin) !== -1) {
        end = dc.indexOf(';', begin);
      }
      // write the cookie content, expire to session
      // -----------------------------------------------------------------------
      content = decodeURI(dc.substring(begin + prefix.length, end) ).replace(/"/g, '');
      document.cookie = settings.name + '=' + content + stringifiedAttributes;
      return true;
    },
    // -------------------------------------------------------------------------
    // existsCookie (Vanilla JS)
    // returns true if a cookie of given name exists
    // -------------------------------------------------------------------------
    existsCookie: function (name) {
      var dc            = document.cookie;
      var prefix        = name + '=';
      var begin         = dc.indexOf('; ' + prefix);
      var end           = dc.length;                                            // default to end of the string
      var cookieExists  = false;
      var cookieContent = '';
      // collect the cookie content
      // -----------------------------------------------------------------------
      // found, and not in first position
      if (begin !== -1) {
        // exclude the "; "
        begin += 2;
      } else {
        //see if cookie is in first position
        begin = dc.indexOf(prefix);
        // not found at all or found as a portion of another cookie name
        if (begin === -1 || begin !== 0 ) return false;
      }
      // if ";" is found somewhere after the prefix position then "end" is
      // that position, otherwise it defaults to the end of the string
      if (dc.indexOf(';', begin) !== -1) {
        end = dc.indexOf(';', begin);
      }
      // check if the cookie exists
      // -----------------------------------------------------------------------
      cookieContent = decodeURI(dc.substring(begin + prefix.length, end) ).replace(/"/g, '');
      cookieExists  = cookieContent.length ? true : false;
      return cookieExists;
    },
    // -------------------------------------------------------------------------
    // Resolve MACROs
    //
    // See:
    //  https://stackoverflow.com/questions/5376431/wildcards-in-jquery-selectors
    //  https://stackoverflow.com/questions/16400072/jquery-each-only-affects-last-element
    //  https://dzone.com/articles/why-does-javascript-loop-only-use-last-value
    //  https://stackoverflow.com/questions/179713/how-to-change-the-href-for-a-hyperlink-using-jquery
    //  https://stackoverflow.com/questions/5223/length-of-a-javascript-object
    // -------------------------------------------------------------------------
    resolveMacros: function (user_data) {
      var logger = log4javascript.getLogger('j1.resolveMacros');
      var sidebarLoaded = setInterval(function() {
        if ($('#sidebar_mmenu').length) {
          if (Object.keys(user_data).length) {
            $('[id^=macro-]').each(function() {
              $('#macro-provider').each(function() {
                var $this = $(this);
                var $html = $this.html();
                $this.html($html.replace('??provider', user_data.provider));
                this.href = this.href.replace(/.*\/??provider-site-url/, user_data.provider_site_url);
              });
              $('#macro-user-name').each(function() {
                var $this = $(this);
                var $html = $this.html();
                $this.html($html.replace('??user-name', user_data.user_name));
                this.href = this.href.replace(/.*\/??provider_member_url/, user_data.provider_member_url);
              });
              $('#macro-provider-permissions').each(function() {
                var $this = $(this);
                var $html = $this.html();
                $this.html($html.replace('??provider-permissions', user_data.provider_permissions));
                this.href = this.href.replace(/.*\/??provider_member_url/, user_data.provider_member_url);
              });
              $('#macro-provider-membership').each(function() {
                var $this = $(this);
                var $html = $this.html();
                $this.html($html.replace('??provider-membership', user_data.provider_membership));
                this.href = this.href.replace(/.*\/??provider_member_url/, user_data.provider_member_url);
              });
              $('#macro-cookie-state').each(function() {
                var $this = $(this);
                var $html = $this.html();
                $this.html($html.replace('??cookie-state', user_data.cookies_accepted));
                this.href = this.href.replace(/.*\/??provider_privacy_url/, user_data.provider_privacy_url);
              });
              $('#macro-theme-name').each(function() {
                var $this = $(this);
                var $html = $this.html();
                $this.html($html.replace('??theme-name', user_data.theme_name));
              });
              $('#macro-theme-author').each(function() {
                var $this = $(this);
                var $html = $this.html();
                $this.html($html.replace('??theme-author', user_data.theme_author));
                this.href = this.href.replace(/.*\/??theme-author-url/, user_data.theme_author_url);
              });
              $('#macro-theme-version').each(function() {
                var $this = $(this);
                var $html = $this.html();
                $this.html($html.replace('??theme-version', user_data.template_version));
              });
            });
            logger.debug('\n' + 'met dependencies for: sidebarLoaded');
            clearInterval(sidebarLoaded);
            return true;
          } else {
            logger.error('\n' + 'no user data provided');
            clearInterval(sidebarLoaded);
            return false;
          }
        }
      }, 10);
    },
    // -------------------------------------------------------------------------
    // Update MACROs
    // Update the values, NOT the placeholders
    // -------------------------------------------------------------------------
    updateMacros: function (user_data) {
      var logger = log4javascript.getLogger('j1.updateMacros');
      var sidebarLoaded = setInterval(function() {
        if ($('#sidebar_mmenu').length) {
          if (Object.keys(user_data).length) {
            $('[id^=macro-]').each(function() {
              $('#macro-provider').each(function() {
                var $this = $(this);
                var $html = $this.html();
                $this.html($html.replace(/Provider:.*/, 'Provider: ' + user_data.provider));
                $('#macro-provider').attr('href', user_data.provider_site_url);
              });
              $('#macro-user-name').each(function() {
                var $this = $(this);
                var $html = $this.html();
                $this.html($html.replace(/User:.*/, 'User: ' + user_data.user_name));
                $('#macro-user-name').attr('href', user_data.provider_member_url);
              });
              $('#macro-provider-permissions').each(function() {
                var $this = $(this);
                var $html = $this.html();
                // $this.html($html.replace(/public|protected|private|blocked/, user_data.provider_permissions));
                $this.html($html.replace(/public.*|protected.*|private.*|blocked.*/, user_data.provider_permissions));
                $('#macro-provider-permissions').attr('href', user_data.provider_member_url);
              });
              $('#macro-provider-membership').each(function() {
                var $this = $(this);
                var $html = $this.html();
                $this.html($html.replace(/guest|member/, user_data.provider_membership));
                $('#macro-provider-membership').attr('href', user_data.provider_member_url);
              });
              $('#macro-cookie-state').each(function() {
                var $this = $(this);
                var $html = $this.html();
                $this.html($html.replace(/accepted|declined|pending/, user_data.cookies_accepted));
                $('#macro-cookie-state').attr('href', user_data.provider_privacy_url);
              });
            });
            logger.debug('\n' + 'met dependencies for: sidebarLoaded');
            clearInterval(sidebarLoaded);
            return true;
          } else {
            logger.error('\n' + 'no user data provided');
            clearInterval(sidebarLoaded);
            return false;
          }
        }
      }, 10);
    },
    // -------------------------------------------------------------------------
    // getMessage
    // Get a log message from the log message catalog object
    // -------------------------------------------------------------------------
    getMessage: function (level, message, property) {
      var message = j1.messages[level][message]['message'][property];
      return message;
    },
    // -------------------------------------------------------------------------
    // logger
    // Log a message
    // -------------------------------------------------------------------------
    logger: function (logger, level, message) {
      var logger = log4javascript.getLogger(logger);
      logger[level](message);
      return true;
    },
    // -------------------------------------------------------------------------
    // Send message
    // -------------------------------------------------------------------------
    sendMessage: function ( sender, receiver, message ) {
      var logger        = log4javascript.getLogger('j1.sendMessage');
      // var json_message  = JSON.stringify(message, undefined, 2);             // multiline
      var json_message  = JSON.stringify(message);
      if ( receiver === 'j1' ) {
        logText = '\n' + 'send message from ' + sender + ' to' + receiver + ': ' + json_message;
        logger.debug(logText);
        executeFunctionByName('j1' + '.messageHandler', window, sender, message);
      } else {
        logText = '\n' + 'send message from ' + sender + ' to ' + receiver + ': ' + json_message;
        logger.debug(logText);
        //executeFunctionByName('j1.' + receiver + '.messageHandler', window, sender, message)
        executeFunctionByName(receiver + '.messageHandler', window, sender, message);
      }
    },
    // -------------------------------------------------------------------------
    // messageHandler: MessageHandler for J1 CookieConsent module
    // Manage messages send from other J1 modules
    // -------------------------------------------------------------------------
    messageHandler: function ( sender, message ) {
      // var json_message  = JSON.stringify(message, undefined, 2);             // multiline
      var json_message  = JSON.stringify(message);
      logText = '\n' + 'received message from ' + sender + ': ' + json_message;
      logger.debug(logText);
      // -----------------------------------------------------------------------
      //  Process commands|actions
      // -----------------------------------------------------------------------
      if ( message.type === 'command' && message.action === 'module_initialized' ) {
        _this.setState('finished');
        logger.info('\n' + message.text);
      }
      //
      // Place handling of other command|action here
      //
      return true;
    },
    // -------------------------------------------------------------------------
    // getStyleValue:
    // Returns the value of a style from a css class definition
    // example: j1.getStyleValue('uno-primary', 'background-color')
    getStyleValue: function (className, style) {
      var elementId = 'test-' + className,
        testElement = document.getElementById(elementId),
        val;
      if (testElement === null) {
        testElement = document.createElement('div');
        testElement.className = className;
        testElement.style.display = 'none';
        document.body.appendChild(testElement);
      }
      val = $(testElement).css(style);
      document.body.removeChild(testElement);
      return val;
    },
    // -------------------------------------------------------------------------
    // getStyleSheetLoaded:
    // NOTE:
    // EXAMPLE: getStyleSheetLoaded('bootstrap');
    //
    getStyleSheetLoaded: function (styleSheet) {
      // var styleSheet  = styleSheetName.toLowerCase() + '.css';
      var sheets      = document.styleSheets, stylesheet = sheets[(sheets.length - 1)];
      // find CSS file 'styleSheetName' in document
      for(var i in document.styleSheets) {
        if(sheets[i].href && sheets[i].href.indexOf(styleSheet) > -1) {
          return true;;
        }
      }
    },
    // -------------------------------------------------------------------------
    //  Returns the names of cookies used for J1 Theme
    // -------------------------------------------------------------------------
    getCookieNames: function () {
      return cookie_names;
    },
    // -------------------------------------------------------------------------
    // Set dynamic styles
    // -------------------------------------------------------------------------
    // setCss: function () {
    //   var logger        = log4javascript.getLogger('j1.setCss');
    //   var bg_primary    = j1.getStyleValue('bg-primary', 'background-color');
    //   var bg_secondary  = j1.getStyleValue('bg-secondary', 'background-color');
    //
    //   logger.info('\n' + 'set color scheme for selected theme');
    //
    //   // globals
    //   // -----------------------------------------------------------------------
    //   $('head').append('<style>.g-bg-primary { background-color: ' +bg_primary+ ' !important; }</style>');
    //
    //   // mdi icons
    //   // -----------------------------------------------------------------------
    //   $('head').append('<style>.iconify-md-bg-primary { color: ' +bg_primary+ ' !important; }</style>');
    //   $('head').append('<style>.fa-md-bg-primary { color: ' +bg_primary+ ' !important; }</style>');
    //   $('head').append('<style>.fas-md-bg-primary { color: ' +bg_primary+ ' !important; }</style>');
    //   $('head').append('<style>.mdi-md-bg-primary { color: ' +bg_primary+ ' !important; }</style>');
    //
    //   // asciidoc
    //   // -----------------------------------------------------------------------
    //   var admonitionblock_note_color      = bg_primary;
    //   var admonitionblock_tip_color       = j1.getStyleValue('btn-success', 'background-color');
    //   var admonitionblock_important_color = j1.getStyleValue('btn-info', 'background-color');
    //   var admonitionblock_warning_color   = j1.getStyleValue('icon-warning', 'color');
    //   var admonitionblock_caution_color   = j1.getStyleValue('btn-danger', 'background-color');
    //
    //   $('head').append('<style>.icon-note { color: ' +admonitionblock_note_color+ ' !important; }</style>');
    //   $('head').append('<style>.icon-tip { color: ' +admonitionblock_tip_color+ ' !important; }</style>');
    //   $('head').append('<style>.icon-important { color: ' +admonitionblock_important_color+ ' !important; }</style>');
    //   $('head').append('<style>.icon-warning { color: ' +admonitionblock_warning_color+ ' !important; }</style>');
    //   $('head').append('<style>.icon-caution { color: ' +admonitionblock_caution_color+ ' !important; }</style>');
    //
    //   // bs base styles (2020-09-20: diabled. Taken for BS CSS code)
    //   // -----------------------------------------------------------------------
    //   // $('head').append('<style>code { color: ' +bg_secondary+ ' !important; }</style>');
    //
    //   // bs tool tips
    //   // -----------------------------------------------------------------------
    //   // $('head').append('<style>.tooltip-inner { background-color: ' +bg_primary+ ' !important; }</style>');
    //   // $('head').append('<style>.bs-tooltip-top .tooltip-arrow::before { border-top-color: ' +bg_primary+ ' !important; }</style>');
    //   // $('head').append('<style>.bs-tooltip-end .tooltip-arrow::before { border-right-color: ' +bg_primary+ ' !important; }</style>');
    //   // $('head').append('<style>.bs-tooltip-bottom .tooltip-arrow::before { border-bottom-color: ' +bg_primary+ ' !important; }</style>');
    //   // $('head').append('<style>.bs-tooltip-start .tooltip-arrow::before { border-left-color: ' +bg_primary+ ' !important; }</style>');
    //
    //   // asciidoc results viewer
    //   // -----------------------------------------------------------------------
    //   $('head').append('<style>.btn-viewer:hover { background-color: ' +bg_primary+ ' !important; }</style>');
    //
    //   // extended modals
    //   // -----------------------------------------------------------------------
    //   // var tabs_pills_link_color_active    = j1.setColorData('md_blue');         // j1.getStyleValue('btn-info', 'background-color');
    //   // var tabs_pills_link_color_hover     = j1.setColorData('md_gray_300');     // j1.getStyleValue('btn-secondary', 'background-color');
    //
    //   // var tabs_pills_link_color_active    = 'mdi-blue';
    //   // var tabs_pills_link_color_hover     = 'mdi-gray-300';
    //
    //   // nav module
    //   // -----------------------------------------------------------------------
    //   // $('head').append('<style>.nav-link:hover { background-color: ' +tabs_pills_link_color_hover+ ' !important; }</style>');
    //   // $('head').append('<style>.nav-link.active { background-color: ' +tabs_pills_link_color_active+ ' !important; }</style>');
    //
    //   return true;
    // },
    // -------------------------------------------------------------------------
    // setState()
    // Set the current (processing) state of the module
    // -------------------------------------------------------------------------
    setState: function (stat) {
      state = stat;
    },
    // -------------------------------------------------------------------------
    // getState()
    // Returns the current (processing) state of the module
    // -------------------------------------------------------------------------
    getState: function () {
      return state;
    },
    // -------------------------------------------------------------------------
    // setXhrDataState()
    // Set the final (loading) state of an element (partial) loaded via Xhr
    // -------------------------------------------------------------------------
    setXhrDataState: function (obj, stat) {
      j1.xhrDataState[obj] = stat;
    },
    // -------------------------------------------------------------------------
    // getXhrDataState()
    // Returns the final (loading) state of an element (partial) loaded via Xhr
    // -------------------------------------------------------------------------
    getXhrDataState: function (obj) {
      return j1.xhrDataState[obj];
    },
    // -------------------------------------------------------------------------
    // setXhrDomState()
    // Set the state of an element loaded via Xhr that is
    // successfully added to the DOM
    // -------------------------------------------------------------------------
    setXhrDomState: function (obj, stat) {
      j1.xhrDOMState[obj] = stat;
    },
    // -------------------------------------------------------------------------
    // getXhrDataState()
    // Returns the state of an element loaded via Xhr that is
    // successfully added to the DOM
    // -------------------------------------------------------------------------
    getXhrDOMState: function (obj) {
      return j1.xhrDOMState[obj];
    },
    // -------------------------------------------------------------------------
    // setMode()
    // Set the current mode of the site (web|app)
    // -------------------------------------------------------------------------
    setMode: function (mod) {
      mode = mod;
    },
    // -------------------------------------------------------------------------
    // getMode()
    // Returns the current mode of the site (web|app)
    // -------------------------------------------------------------------------
    getMode: function () {
      return mode;
    },
    // -------------------------------------------------------------------------
    // checkUserAgent()
    // Returns the name (UA) of the web browser
    // -------------------------------------------------------------------------
    checkUserAgent: function () {
      if (navigator.userAgent.search(ua_name) >= 0) {
        return true;
      } else {
        return false;
      }
    },
    // -------------------------------------------------------------------------
    // generateId()
    // Generate a unique (thread) id used by the logger
    // -------------------------------------------------------------------------
    generateId: function (length) {
     var result           = '';
     var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
     var charactersLength = characters.length;
     for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
     }
     return result;
    },
    // -------------------------------------------------------------------------
    // getTrue()
    // Returns always true (for testing purposes)
    // -------------------------------------------------------------------------
    getTrue: function () {
      return true;
    },
    // -------------------------------------------------------------------------
    // getFalse()
    // Returns always false (for testing purposes)
    // -------------------------------------------------------------------------
    getFalse: function () {
      return false;
    },
    // -------------------------------------------------------------------------
    // goHome()
    // Redirect current page to the browser homepage
    // -------------------------------------------------------------------------
    goHome: function () {
      // most browsers
      if (typeof window.home == 'function') {
        window.home();
      } else if (document.all) {
        // for IE
        window.location.href = 'about:home';
      } else {
        window.location.href = 'about:blank';
      }
    },
    // -------------------------------------------------------------------------
    // goBack()
    // Redirect current page to last visited page (referrer)
    // -------------------------------------------------------------------------
    goBack: function () {
      // where visitor has come from
      window.location.href = document.referrer;
    },
    // -------------------------------------------------------------------------
    // scrollToAnchor()
    // Scroll to an anchor in current page if given in URL
    // TODO: Find a better solution for 'dynamic' pages to detect
    // the content if fully loaded instead using a timeout
    // -------------------------------------------------------------------------
    scrollToAnchor: function () {
      var logger = log4javascript.getLogger('j1.adapter.scrollToAnchor');
      var scrollOffset;
      var dependencies_met_page_displayed = setInterval (function () {
        var pageState   = $('#no_flicker').css("display");
        var pageVisible = (pageState == 'block') ? true: false;
        if (j1.getState() == 'finished' && j1['pageMonitor'].pageType !== 'unknown' && pageVisible) {
          // TODO: Check why a timeout is required to run the smmoth scroller (j1.scrollTo)
          if (j1['pageMonitor'].pageType == 'static') {
            setTimeout (function() {
              logger.debug('\n' + 'Scroller: Scroll static page');
              scrollOffsetCorrection = scrollerOptions.smoothscroll.offsetCorrection;
              scrollOffset = j1.getScrollOffset(scrollOffsetCorrection);
              j1.scrollTo(scrollOffset);
            },  );
            clearInterval(dependencies_met_page_displayed);
          } else if (j1['pageMonitor'].pageType == 'dynamic') {
            setTimeout (function() {
              scrollOffsetCorrection = scrollerOptions.smoothscroll.offsetCorrection;
              scrollOffset = j1.getScrollOffset(scrollOffsetCorrection);
              j1.scrollTo(scrollOffset);
              logger.debug('\n' + 'Scroller: Scroll dynamic page on timeout');
          }, 2000 );
            clearInterval(dependencies_met_page_displayed);
          } else {
            // failsave fallback
            setTimeout (function() {
              logger.debug('\n' + 'Scroller: Scroll page of unknown type');
              scrollOffsetCorrection = scrollerOptions.smoothscroll.offsetCorrection;
              scrollOffset = j1.getScrollOffset(scrollOffsetCorrection);
              j1.scrollTo(scrollOffset);
            }, 10 );
            clearInterval(dependencies_met_page_displayed);
          }
        }
      }, 10);
    },
    // -------------------------------------------------------------------------
    // stringToBoolean()
    // convert a string to boolean
    // -------------------------------------------------------------------------
    stringToBoolean: function (string) {
      switch(string.toLowerCase().trim()) {
        case "true":
        case "yes":
        case "1":
          return true;
        case "false":
        case "no":
        case "0":
        case null:
          return false;
        default:
          return Boolean(string);
      }
    }, // END stringToBoolean
    // -------------------------------------------------------------------------
    // registerMonitors()
    //
    // -------------------------------------------------------------------------
    registerMonitors: function () {
      // add PerformanceObserver to monitor the 'LCP' of a page load
      // see: https://developer.mozilla.org/en-US/docs/Web/API/LargestContentfulPaint
      //
      var lcp;
      var cumulated_lcp = 0;
      const performanceObserverLCP = new PerformanceObserver((entryList) => {
        var logger        = log4javascript.getLogger('PerformanceObserver');
        const entries     = entryList.getEntries();
        // Use the latest LCP candidate
        const lastEntry   = entries[entries.length - 1];
        var lastEntryText = JSON.stringify(lastEntry, null, 2);
        cumulated_lcp += lastEntry.renderTime;
        var lcp_full = cumulated_lcp/1000;
        lcp = lcp_full.toFixed(3);
        if ( lastEntry.url != '' ) {
          logger.debug('\n' + 'Largest Contentful Paint (LCP), image/url:', lastEntry.url);
        } else {
          // jadams, 2023-06-07:
          // logger.debug('\n' + 'Largest Contentful Paint (LCP), text:' + '\n', lastEntry.element.innerText.substring(0, 80) + ' ...');
        }
        // logger.debug('\n' + 'Largest Contentful Paint (LCP):', lastEntryText);
        if (lcp > 2.5) {
            logger.warn('\n' + 'Largest Contentful Paint (LCP), cumulated:', lcp);
        } else {
            logger.info('\n' + 'Largest Contentful Paint (LCP), cumulated:', lcp);
        }
      }); // END observer
      var cls;
      var cumulated_cls = 0;
      const performanceObserverCLS = new PerformanceObserver(entryList => {
        var logger  = log4javascript.getLogger('PerformanceObserver');
        var entries = entryList.getEntries() || [];
        entries.forEach(entry => {
          // var entryID = entry.sources[0].node.firstElementChild.id;
          // logger.debug('\n' + 'Cumulative Layout Shift (CLS), entry object:', entryID);
          // var entryText = JSON.stringify(entry.sources[0], null, 2);
          // logger.debug('\n' + 'Cumulative Layout Shift (CLS), entry object:', entryText);
          if (entry.sources) {
            // omit entries likely caused by user input
            if (!entry.hadRecentInput) {
              // cumulate values
              cumulated_cls += entry.value;
              cls = cumulated_cls.toFixed(3);
            }
            for (const {node, currentRect, previousRect} of entry.sources) {
              if (typeof node.firstElementChild != 'null' && typeof node.firstElementChild != 'undefined') {
                var id = '';
                try {
                  id = node.firstElementChild.id;
                }
                catch(err) {
                  id = 'missing';
                }
                if (id !== 'missing' && id !== '' && cls > 0.01) {
                  if (cls > 0.1) {
                    logger.warn('\n' + 'Cumulative Layout Shift (CLS), entry id: ', id);
                    logger.warn('\n' + 'Cumulative Layout Shift (CLS): ', cls);
                  } else {
                    logger.info('\n' + 'Cumulative Layout Shift (CLS), entry id: ', id);
                    logger.info('\n' + 'Cumulative Layout Shift (CLS): ', cls);
                  }
                }
              } // END if typeof
            } // END for
          } // END if  entry.sources
        }); // END forEach entry
      }); // END observer
      // add ResizeObserver to monitor the page height of dynamic pages
      // see: https://stackoverflow.com/questions/14866775/detect-document-height-change
      //
      const resizeObserver = new ResizeObserver(entries => {
        var scrollOffsetCorrection  = scrollerOptions.smoothscroll.offsetCorrection;
        var logger                = log4javascript.getLogger('ResizeObserver');
        const body                  = document.body,
              html                  = document.documentElement,
              scrollOffset          = j1.getScrollOffset(scrollOffsetCorrection);
        // get the page height from the DOM
        //
        var documentHeight = Math.max (
          body.scrollHeight,
          body.offsetHeight,
          html.clientHeight,
          html.scrollHeight,
          html.offsetHeight
        );
        j1['pageMonitor'].eventNo += 1;
        // skip first Observer event
        //
        if (j1['pageMonitor'].eventNo == 2) {
          // Set initial data from second event
          //
          j1['pageMonitor'].pageBaseHeight      = document.body.scrollHeight;
          j1['pageMonitor'].currentPageHeight   = document.body.scrollHeight;
          j1['pageMonitor'].previousPageHeight  = document.body.scrollHeight;
          j1['pageMonitor'].previousGrowthRatio = 0.00;
          pageBaseHeight      = document.body.scrollHeight;
          previousGrowthRatio = 100;
          growthRatio         = 0.00;
        } else {
          // collect 'pageHeight' from 'entries'
          //
          for (const entry of entries) {
            pageBaseHeight = j1['pageMonitor'].pageBaseHeight;
            if (pageBaseHeight > 0) {
              // get the page height (rounded to int) from observer
              //
              pageHeight = Math.round(entry.contentRect.height);
              j1['pageMonitor'].currentPageHeight = pageHeight;
              // total growth ratio
              //
              pageGrowthRatio = pageHeight / pageBaseHeight * 100;
              pageGrowthRatio = pageGrowthRatio.toFixed(2);
              j1['pageMonitor'].currentGrowthRatio = pageGrowthRatio;
              growthRatio = ((pageGrowthRatio / previousGrowthRatio) - 1) * 100;
              growthRatio = growthRatio.toFixed(2);
              j1['pageMonitor'].growthRatio = growthRatio;
            }
          } // END for entries
          // detect the 'page type'
          //
          if (growthRatio >= 5) {
            j1['pageMonitor'].pageType = 'dynamic';
            logger.debug('\n' + 'growthRatio: ' + j1['pageMonitor'].growthRatio + '%');
            logger.debug('\n' + 'page detected as: dynamic');
          } else {
            // set the page type to 'static' if low growth detected
            //
            if (typeof j1['pageMonitor'].growthRatio != 'undefined' && j1['pageMonitor'].growthRatio > 0) {
              logger.debug('\n' + 'growthRatio: ' + j1['pageMonitor'].growthRatio + '%');
              j1['pageMonitor'].pageType = 'static';
              logger.debug('\n' + 'page detected as: static');
            }
          } // END if growthRatio
        } // END if j1['pageMonitor']
      }); // END Observer
      // -----------------------------------------------------------------------
      // run all observers for page monitoring
      // -----------------------------------------------------------------------
      // monitor 'LCP'
      //
      performanceObserverLCP.observe({
         type: 'largest-contentful-paint',
         buffered: true
      });
      // monitor 'CLS'
      //
      performanceObserverCLS.observe({
         type: 'layout-shift',
         buffered: true
      });
      // monitor 'GROWTH'
      resizeObserver.observe(
        document.querySelector('body')
      );
      // -----------------------------------------------------------------------
      // final updates before browser page|tab
      // see: https://stackoverflow.com/questions/3888902/detect-browser-or-tab-closing
      // -----------------------------------------------------------------------
      window.addEventListener('beforeunload', function (event) {
        var cookie_names  = j1.getCookieNames();
        var date          = new Date();
        var timestamp_now = date.toISOString();
        var user_state    = j1.readCookie(cookie_names.user_state);
        var user_consent  = j1.readCookie(cookie_names.user_consent);
        var url           = new liteURL(window.location.href);
        var secure        = (url.protocol.includes('https')) ? true : false;
        var ep_status;
        var url;
        var baseUrl;
        // final update of the user state cookie
        user_state.session_active     = false;
        user_state.last_session_ts    = timestamp_now;
        if (!user_consent.analysis || !user_consent.personalization) {
          cookie_written = j1.writeCookie({
            name:     cookie_names.user_state,
            data:     user_state,
            secure:   secure,
            expires:  0
          });
        } else {
          cookie_written = j1.writeCookie({
            name:     cookie_names.user_state,
            data:     user_state,
            secure:   secure,
            expires:  365
          });
        }
      }); // END beforeunload
      // initialize event handler for window/history/back on <ESC>
      //
      window.onkeyup = function (event) {
        if (event.keyCode == 27) window.history.back();
      };
      $("a[href*='#']:not([href='#'])").click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          var scrollOffsetCorrection  = scrollerOptions.smoothscroll.offsetCorrectionLocal;
          var offset                  = target.offset().top + scrollOffsetCorrection;
          $('html,body').animate({
            scrollTop: offset
          }, 1000);
          return false;
        }
      }
     });
   } // END registerMonitors
  };
}) (j1, window);






  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/j1_template.js
 # JS Adapter for J1 Template
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2021 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see https://jekyll.one
 # -----------------------------------------------------------------------------
 #  TODO:
 #
 # -----------------------------------------------------------------------------
 # Adapter generated: 2021-07-16 07:33:28 +0000
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
var j1 = (function () {
  // ---------------------------------------------------------------------------
  // globals
  // ---------------------------------------------------------------------------
  var rePager                   =  new RegExp('navigator|dateview|tagview|archive');
  var environment               = 'development';
  var moduleOptions             = {};
  var j1_runtime_data           = {};
  // Status information
  var state                     = 'not_started';
  var mode                      = 'not_detected';
  // Tracking information (GA)
  var tracking_enabled          = ('true' === 'true') ? true: false;
  var tracking_id               = 'G-8ZGNE0WE42';
  var tracking_id_valid         = (tracking_id.includes('tracking-id')) ? false : true;
  var current_user_data;
  var current_page;
  var previous_page;
  var last_pager;
  var last_pager_url;
  var app_detected;
  var user_session_detected;
  var cookie_written;
  // Translatior settings (currently NOT supported)
  // var translation_enabled       = ;
  // Theme information
  var themeName;
  var themeCss;
  var cssExtension              = (environment === 'production')
                                  ? '.min.css'
                                  : '.css';
   // Pathes of J1 data files
  var colors_data_path          = '/assets/data/colors.json';
  var font_size_data_path       = '/assets/data/font_sizes.json';
  var runtime_data_path         = '/assets/data/runtime-data.yml';
  var message_catalog_data_path = '/assets/data/messages.yml';
  // Logger
  var logger;
  var logText;
  var _this;
  var settings;
  var json_data;
  var ep;
  var baseUrl;
  var referrer;
  // initial cookie values
  var cookie_names = {
    'app_session':  'j1.app.session',
    'user_session': 'j1.user.session',
    'user_state':   'j1.user.state',
    'user_consent': 'j1.user.consent'
  };
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
  var user_state = {
    'writer':               'j1.adapter',
    'theme_css':            '',
    'theme_css':            '',
    'theme_name':           '',
    'theme_author':         '',
    'theme_version':        '2021.1.12',
    'session_active':       false,
    'last_session_ts':      ''
  };
  var user_consent = {};
  // ---------------------------------------------------------------------------
  // helper functions
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
  // ---------------------------------------------------------------------------
  // main object
  // ---------------------------------------------------------------------------
  return {
    // -------------------------------------------------------------------------
    // init()
    // -------------------------------------------------------------------------
    init: function (options) {
      // -----------------------------------------------------------------------
      // global var (function)
      // -----------------------------------------------------------------------
      var logger            = log4javascript.getLogger('j1.init');
      var url               = new liteURL(window.location.href);
      var baseUrl           = url.origin;
      var date              = new Date();
      var timestamp_now     = date.toISOString();
      var curr_state        = 'started';
      // -----------------------------------------------------------------------
      // options loader
      // -----------------------------------------------------------------------
      var settings = $.extend(
        {
          foo: 'foo_option',
          bar: 'bar_option'
        },
        options
      );
      // -----------------------------------------------------------------------
      // status settings
      // save status into the adapter object for (later) global access
      // -----------------------------------------------------------------------
      j1['xhrDataState'] = {};
      j1['xhrDOMState']  = {};
      // -----------------------------------------------------------------------
      // update cookies if browser window get closed
      // see: https://stackoverflow.com/questions/3888902/detect-browser-or-tab-closing
      // -----------------------------------------------------------------------
      window.addEventListener('beforeunload', function (event) {
        var cookie_names              = j1.getCookieNames();
        var date                      = new Date();
        var timestamp_now             = date.toISOString();
        var user_state                = j1.readCookie(cookie_names.user_state);
        var user_consent              = j1.readCookie(cookie_names.user_consent);
        var ep_status;
        var url;
        var baseUrl;
        // final update of the user state cookie before browser page|tab
        // get closed
        if (user_state) {
          user_state.session_active     = false;
          user_state.last_session_ts    = timestamp_now;
          if (!user_consent.analyses || !user_consent.personalization)  {
            // expire consent|state cookies to session
            cookie_written = j1.writeCookie({
              name:     cookie_names.user_consent,
              data:     user_consent,
              samesite: 'Strict'
            });
            if (!cookie_written) {
              logger.error('failed to write cookie: ' + cookie_names.user_consent);
            }
            cookie_written = j1.writeCookie({
              name:     cookie_names.user_state,
              data:     user_state,
              samesite: 'Strict'
            });
            if (!cookie_written) {
            	logger.error('failed to write cookie: ' + cookie_names.user_consent);
            }
          } else {
            cookie_written = j1.writeCookie({
              name:     cookie_names.user_state,
              data:     user_state,
              samesite: 'Strict',
              expires:  365
            });
            if (!cookie_written) {
            	logger.error('failed to write cookie: ' + cookie_names.user_state);
            }
          }
        } else {
          // jadams, 2021-07-11: on beforeunload, a vaild state cookie
          // is expected
          logger.fatal('missing cookie detected: ' + cookie_names.user_state);
        }
      }); // END beforeunload
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
                            samesite: 'Strict'
                          });
      if (!cookie_written) {
      	logger.error('failed to write cookie: ' + cookie_names.user_session);
      }
      user_state    =  j1.existsCookie(cookie_names.user_state)
                        ? j1.readCookie(cookie_names.user_state)
                        : cookie_written = j1.writeCookie({
                            name:     cookie_names.user_state,
                            data:     user_state,
                            samesite: 'Strict',
                            expires:  365
                          });
      if (!cookie_written) {
      	logger.error('failed to write cookie: ' + cookie_names.user_state);
      }
      // jadams, 2021-07-11: Found situation that user_state NOT initialized
      // correctly (user_state == false).
      // TODO: Check if/why user state (cookie NOT created?) NOT initialized
      // for what reason.
      if (!user_state) {
        logger.error('cookie not found: ' + cookie_names.user_state);
        user_state = j1.readCookie(cookie_names.user_state);
        user_state.session_active = true;
      }
      if (!user_consent.analyses || !user_consent.personalization)  {
        // expire consent|state cookies to session
        cookie_written = j1.writeCookie({
          name:     cookie_names.user_state,
          data:     user_state,
          samesite: 'Strict'
        });
        if (!cookie_written) {
        	logger.error('failed to write cookie: ' + cookie_names.user_state);
        }
      } else {
        cookie_written = j1.writeCookie({
          name:     cookie_names.user_state,
          data:     user_state,
          samesite: 'Strict',
          expires:  365
        });
        if (!cookie_written) {
        	logger.error('failed to write cookie: ' + cookie_names.user_state);
        }
      }
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
          logText                     = 'mode detected: ' + user_session.mode;
          logger.info(logText);
          logger.info('update user session cookie');
          cookie_written = j1.writeCookie({
            name:     cookie_names.user_session,
            data:     user_session,
            samesite: 'Strict'
          });
          if (!cookie_written) {
          	logger.error('failed to write cookie: ' + cookie_names.user_session);
          }
          j1.setState(curr_state);
          logger.info('state: ' + j1.getState());
          var dependencies_met_page_displayed = setInterval (function () {
            if (j1.getState() == 'finished') {
              if (j1.authEnabled()) {
                if (user_session.authenticated === 'true') {
                  // set signout
                  logger.info('show signout icon');
                  $('#navLinkSignInOut').attr('data-target','#modalOmniSignOut');
                  $('#iconSignInOut').removeClass('mdi-login').addClass('mdi-logout');
                } else {
                  // set signin
                  logger.info('show signin icon');
                  $('#navLinkSignInOut').attr('data-target','#modalOmniSignIn');
                  $('#iconSignInOut').removeClass('mdi-logout').addClass('mdi-login');
                }
                logger.info('authentication detected as: ' + user_session.authenticated);
                $('#quickLinksSignInOutButton').css('display', 'block');
                logger.info('met dependencies for: j1');
                clearInterval(dependencies_met_page_displayed);
              }
            }
          }, 25); // END dependencies_met_page_displayed
        })
        .catch(function(error) {
          // jadams, 2018-08-31: Why a hell a setTimeout is needed ???
          setTimeout (function() {
            var logger                  = log4javascript.getLogger('j1.init');
            user_session                = j1.readCookie(cookie_names.user_session);
            user_session.mode           = 'web';
            user_session.requested_page = window.location.pathname;
            user_session.timestamp      = timestamp_now;
            logText                     = 'mode detected: ' + user_session.mode;
            logger.info(logText);
            cookie_written = j1.writeCookie({
              name:     cookie_names.user_session,
              data:     user_session,
              samesite: 'Strict'
            });
            if (!cookie_written) {
            	logger.error('failed to write cookie: ' + cookie_names.user_session);
            }
            j1.setState(curr_state);
            logger.info('state: ' + j1.getState());
          }, detectTimeout);
        });
      } else { // web mode
        state = 'started';
        logger.info('state: ' + state);
        logger.info('page is being initialized');
      }
      state = 'started';
      logger.info('state: ' + state);
      logger.info('page is being initialized');
      if ( settings.scrollbar === 'false'  ) {
        $('body').addClass('hide-scrollbar');
        $('html').addClass('hide-scrollbar-moz');
      }
      logger.info('read user state from cookie');
      user_session = j1.readCookie(cookie_names.user_session);
      // process|update user state cookie
      themeName                 = user_session.theme_name;
      themeCss                  = user_session.theme_css;
      // save last page access
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
      logger.info('update user session cookie');
      cookie_written = j1.writeCookie({
        name:     cookie_names.user_session,
        data:     user_session,
        samesite: 'Strict'
      });
      if (!cookie_written) {
      	logger.error('failed to write cookie: ' + cookie_names.user_session);
      }
      // NOTE: asynchronous calls should be rewitten to xhrData
      // initialize page resources for blocks
      j1.initBanner(settings);
      j1.initPanel(settings);
      j1.initFooter(settings);
      state = 'running';
      logger.info('state: ' + state);
      logger.info(logText);
      user_session.timestamp = timestamp_now;
      cookie_written = j1.writeCookie({
        name:     cookie_names.user_session,
        data:     user_session,
        samesite: 'Strict'
      });
      if (!cookie_written) {
      	logger.error('failed to write cookie: ' + cookie_names.user_session);
      }
      // -----------------------------------------------------------------------
      // additional BS helpers from j1.core
      // -----------------------------------------------------------------------
      j1.core.bsFormClearButton();
      // finalize and display page
      j1.displayPage();
    }, // END init
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
            var logger = log4javascript.getLogger('j1.adapter.xhrData');
            logText = 'loading banner completed on id: ' +banner_id;
            logger.info(logText);
            j1.setXhrDataState(banner_id, statusTxt);
            j1.setXhrDomState(banner_id, statusTxt);
            logger.info('XHR data loaded in the DOM: ' + banner_id);
          }
          if ( statusTxt == 'error' ) {
            logText = 'loading banner failed on id: ' +banner_id+ ', error: ' + xhr.status + ': ' + xhr.statusText;
            logger.error(logText);
            j1.setXhrDataState(banner_id, statusTxt);
            j1.setXhrDomState(banner_id, statusTxt);
            // Set|Log status
            state = 'failed';
            logger.error('state: ' + state);
          }
        };
      };
            banner.push('divider-1');
            banner.push('divider-2');
            banner.push('divider-3');
            banner.push('home_teaser_banner');
            banner.push('home_welcome_banner');
            banner.push('home_image_banner');
            banner.push('home_parallax_banner');
      banner.push('exception_container');
      if ( banner.length ) {
        for (var i in banner) {
          var id = '#' + banner[i];
          var selector = $(id);
          if (selector.length) {
            logText = 'loading banner on id: ' +banner[i];
            logger.info(logText);
            var banner_data_path = '/assets/data/banner/index.html ' + id;
            selector.load(banner_data_path, cb_load_closure(id));
          }
        } // END for
      }  else {
        logText = 'no banner found in site';
        logger.info(logText);
        return false;
      }
      return true;
    }, // END initBanner
    // -------------------------------------------------------------------------
    // initPanel()
    // AJAX fetcher to load and place all panel used for a page
    // -------------------------------------------------------------------------
    // ToDo:
    initPanel: function ( options ) {
      var logger            = log4javascript.getLogger('j1.initPanel');
      var panel             = [];
      var mod               = 'j1';
      var logText;
      var cb_load_closure = function(panel_id) {
        return function ( responseTxt, statusTxt, xhr ) {
          var logger = log4javascript.getLogger('j1.adapter.xhrData');
          if ( statusTxt == 'success' ) {
            logText = 'loading panel completed on id: ' +panel_id;
            logger.info(logText);
            j1.setXhrDataState(panel_id, statusTxt);
            j1.setXhrDomState(panel_id, statusTxt);
            logger.info('XHR data loaded in the DOM: ' + panel_id);
          }
          if ( statusTxt == 'error' ) {
            logText = 'loading panel failed on id: ' +panel_id+ ', error ' + xhr.status + ': ' + xhr.statusText;
            logger.error(logText);
            j1.setXhrDataState(panel_id, statusTxt);
            j1.setXhrDomState(panel_id, statusTxt);
            // Set|Log status
            state = 'Error';
            logger.error('state: ' + state);
          }
        };
      };
      panel.push('home_intro_panel');
      panel.push('home_service_panel');
      panel.push('home_news_panel');
      if (panel.length) {
        for (var i in panel) {
          var id = '#' + panel[i];
          var selector = $(id);
          if ( selector.length ) {
            logText = 'loading panel on id: ' +panel[i];
            logger.info(logText);
            var panel_data_path = '/assets/data/panel/index.html ' + id;
            selector.load(panel_data_path, cb_load_closure(id));
          }
        } // END for
      } else {
        logText = 'no panel found in site';
        logger.info(logText);
        return false;
      }
      return true;
    }, // END initPanel
    // -------------------------------------------------------------------------
    // initFooter()
    // AJAX fetcher to load and place the footer used for a page
    // -------------------------------------------------------------------------
    initFooter: function ( options ) {
      var logger            = log4javascript.getLogger('j1.initFooter');
      var mod               = 'j1';
      var logText;
      logText = 'loading footer started';
      logger.info(logText);
      var cb_load_closure = function(footer_id) {
        return function ( responseTxt, statusTxt, xhr ) {
          var logger = log4javascript.getLogger('j1.adapter.xhrData');
          if ( statusTxt ==  'success' ) {
            logText = 'footer loaded successfully on id: ' + footer_id;
            logger.info(logText);
            j1.setXhrDataState(footer_id, statusTxt);
            j1.setXhrDomState(footer_id, statusTxt);
            logger.info('XHR data loaded in the DOM: ' + footer_id);
            logText = 'initialization finished';
            logger.info(logText);
          }
          if ( statusTxt == 'error' ) {
            logText = 'loading footer failed on id: ' +footer_id+ ', error ' + xhr.status + ': ' + xhr.statusText;
            logger.error(logText);
            j1.setXhrDataState(footer_id, statusTxt);
            j1.setXhrDomState(footer_id, statusTxt);
            // Set|Log status
            state = 'failed';
            logger.error('state: ' + state);
            logText = 'initialization finished';
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
        logText = 'data not loaded';
        logger.warn(logText);
        j1.setXhrDataState(id, 'not loaded');
        j1.setXhrDomState(id, 'pending');
        return false;
      }
      return true;
    }, // END initFooter
    // -------------------------------------------------------------------------
    // displayPage
    // show the page after timeout of  ms
    // -------------------------------------------------------------------------
    // NOTE:
    //  jadams, 2019-08-21: for unknown reason, the user state data
    //  (read from cookie) seems not correct (or loaded too late).
    //  To make correct data sure for APP mode, a status request is done
    //  to load the current state from the middleware (skipped in WEB mode)
    // -------------------------------------------------------------------------
    displayPage: function (options) {
      var logger              = log4javascript.getLogger('j1.adapter.displayPage');
      var flickerTimeout      = 150;
      var url                 = new liteURL(window.location.href);
      var baseUrl             = url.origin;
      var ep_status           = baseUrl + '/status' + '?page=' + window.location.pathname;
      var user_session        = j1.readCookie(cookie_names.user_session);
      var user_state          = j1.readCookie(cookie_names.user_state);
      var current_url         = new liteURL(window.location.href);
      var providerPermissions = {};
      var provider;
      var previous_page;
      var appDetected;
      var categoryAllowed;
      logger.info('finalize page');
      j1.setCss();
      logText= 'loading page partials: started';
      logger.info(logText);
      if (j1.appDetected()) { // app mode
        logger.info('mode detected: app');
        $.when ($.ajax(ep_status))
        .then(function(data) {
          var logger = log4javascript.getLogger('j1.displayPage');
          user_session = j1.mergeData(user_session, data);
          user_session.current_page = current_url.pathname;
          cookie_written = j1.writeCookie({
            name:     cookie_names.user_session,
            data:     user_session,
            samesite: 'Strict'
          });
          if (!cookie_written) {
          	logger.error('failed to write cookie: ' + cookie_names.user_session);
          }
          providerPermissions = user_session.provider_permissions;
          categoryAllowed     = providerPermissions.includes(user_session.page_permission);
          // check protected pages (applies for APP only)
          // make sure that protected pages are ALWAYS checked for permissions
          // -------------------------------------------------------------------
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
          } // END check protected pages
          // show the page delayed
          setTimeout (function() {
            // display page
            $('#no_flicker').css('display', 'block');
            // NOTE: Placed tracking warning/info here because page may reloaded
            // after cookie consent selection
            //
            if (tracking_enabled && !tracking_id_valid) {
              logger.error('tracking enabled, but invalid tracking id found: ' + tracking_id);
            } else {
              logger.warn('tracking enabled, tracking id found: ' + tracking_id);
            }
            // show|hide cookie icon (should MOVED to Cookiebar ???)
            if (j1.existsCookie(cookie_names.user_consent)) {
              // Display cookie icon
              logText = 'show cookie icon';
              logger.info(logText);
              $('#quickLinksCookieButton').css('display', 'block');
            } else {
              logText = 'hide cookie icon';
              logger.info(logText);
              // Display cookie icon
              $('#quickLinksCookieButton').css('display', 'none');
            }
            // show|hide translator icon (currently NOT supported)
            // if (translation_enabled) {
            //   logger.info('translator detected: google');
            //   logger.info('initialize language selector');
            //   $('.goog-te-combo').addClass('form-control');
            // }
            // show cc icon (currently NOT supported)
            // $('#quickLinksControlCenterButton').css('display', 'block');
            if (j1.authEnabled()) {
              if (user_session.authenticated === 'true') {
                // set signout
                logger.info('show signout icon');
                $('#navLinkSignInOut').attr('data-target','#modalOmniSignOut');
                $('#iconSignInOut').removeClass('mdi-login').addClass('mdi-logout');
              } else {
                // set signin
                logger.info('show signin icon');
                $('#navLinkSignInOut').attr('data-target','#modalOmniSignIn');
                $('#iconSignInOut').removeClass('mdi-logout').addClass('mdi-login');
              }
              logger.info('authentication detected as: ' + user_session.authenticated);
              $('#quickLinksSignInOutButton').css('display', 'block');
            }
            // if the page requested contains an anchor element,
            // do a smooth scroll to
            j1.scrollTo();
            if (user_session.previous_page !== user_session.current_page) {
              logText = 'page change detected';
              logger.info(logText);
              logText = 'previous page: ' + user_session.previous_page;
              logger.info(logText);
              logText = 'current page: ' + user_session.current_page;
              logger.info(logText);
            }
            // update sidebar for changed theme data
            logger.info('update sidebar');
            user_state        = j1.readCookie(cookie_names.user_state);
            current_user_data = j1.mergeData(user_session, user_state);
            j1.core.navigator.updateSidebar(current_user_data);
            // Set|Log status
            state = 'finished';
            logText = 'state: ' + state;
            logger.info(logText);
            logText = 'page finalized successfully';
            logger.info(logText);
          }, flickerTimeout);
        }); // END APP mode
      } else { // web mode
        // show the page delayed
        setTimeout (function() {
          j1.setState('finished');
          logger.info('state: finished');
          logger.info('page initialization: finished');
          // display page
          $('#no_flicker').css('display', 'block');
          // NOTE: Placed tracking warning/info here because page may reloaded
          // after cookie consent selection
          //
          if (tracking_enabled && !tracking_id_valid) {
            logger.error('tracking enabled, but invalid tracking id found: ' + tracking_id);
          } else {
            logger.warn('tracking enabled, tracking id found: ' + tracking_id);
          }
          logger.info('mode detected: web');
          logger.info('hide signin icon');
          $('#quickLinksSignInOutButton').css('display', 'none');
          user_session.current_page = current_url.pathname;
          cookie_written = j1.writeCookie({
              name:     cookie_names.user_session,
              data:     user_session,
              samesite: 'Strict'
          });
          if (!cookie_written) {
          	logger.error('failed to write cookie: ' + cookie_names.user_session);
          }
          // show|hide translator icon (currently NOT supported)
          // if (translation_enabled) {
          //   logger.info('translator detected: google');
          //   logger.info('initialize language selector');
          //   $('.goog-te-combo').addClass('form-control');
          // }
          // show cc icon (currently NOT supported)
          // $('#quickLinksControlCenterButton').css('display', 'block');
          // show|hide cookie icon
          if (j1.existsCookie(cookie_names.user_consent)) {
            // Display cookie icon
            logText = 'show cookie icon';
            logger.info(logText);
            $('#quickLinksCookieButton').css('display', 'block');
          } else {
            logText = 'hide cookie icon';
            logger.info(logText);
            // Display cookie icon
            $('#quickLinksCookieButton').css('display', 'none');
          }
          // If the page requested contains an anchor element,
          // do a smooth scroll
          j1.scrollTo();
          if (user_session.previous_page !== user_session.current_page) {
            logText = 'page change detected';
            logger.info(logText);
            logText = 'previous page: ' + user_session.previous_page;
            logger.info(logText);
            logText = 'current page: ' + user_session.current_page;
            logger.info(logText);
          }
          // update sidebar for changed theme data
          logger.info('update sidebar');
          user_state        = j1.readCookie(cookie_names.user_state);
          current_user_data = j1.mergeData(user_session, user_state);
          j1.core.navigator.updateSidebar(current_user_data);
          // set|log status
          state = 'finished';
          logText = 'state: ' + state;
          logger.info(logText);
          logText = 'page finalized successfully';
          logger.info(logText);
        }, flickerTimeout);
      } // END WEB mode
    }, // END displayPage
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
    },  // END mergeData
    // -------------------------------------------------------------------------
    // getPrevPage()
    // Returns the last vistited page
    // -------------------------------------------------------------------------
    getPrevPage: function () {
      return previous_page;
    }, // END getPrevPage
    // -------------------------------------------------------------------------
    // getLanguage()
    // Returns the preferred language taken form window.navigator
    // See:
    // https://stackoverflow.com/questions/1043339/javascript-for-detecting-browser-language-preference
    // -------------------------------------------------------------------------
    getLanguage: function () {
      var language = navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage);
    }, // END getLanguage
    // -------------------------------------------------------------------------
    // getTemplateVersion()
    // Returns the template version taken from site config (_config.yml)
    // -------------------------------------------------------------------------
    getTemplateVersion: function () {
      return '2021.1.12';
    }, // END getTemplateVersion
    // -------------------------------------------------------------------------
    // scrollTo()
    // Scrolls smooth to any anchor referenced by an page URL on
    // e.g. a page reload. Values for delay|offset are taken from
    // TOCCER module
    // -------------------------------------------------------------------------
    scrollTo: function () {
      var anchor    = window.location.href.split('#')[1];
      var anchor_id = '#' + anchor;
      var selector;
      var logger        = log4javascript.getLogger('j1.scrollTo');
      var toccerScrollDuration = 300;
      var toccerScrollOffset   = 10;
      // calculate offset for correct (smooth) scroll position
      var $pagehead       = $('.attic');
      var $navbar         = $('nav.navbar');
      var $adblock        = $('#adblock');
      var navbarType      = $navbar.hasClass('navbar-fixed') ? 'fixed' : 'scrolled';
      var fontSize        = $('body').css('font-size').replace('px','');
      var start           = window.pageYOffset;
      var l               = parseInt(fontSize);
      var h               = $pagehead.length ? $pagehead.height() : 0;
      var n               = $navbar.length ? $navbar.height() : 0;
      var a               = $adblock.length ? $adblock.height() : 0;
      var scrollOffset    = navbarType == 'fixed' ? -1*(n + a + l) : -1*(h + n + a + l);
      // static offset, to be checked why this is needed
      scrollOffset        = scrollOffset + toccerScrollOffset;
      if (anchor_id && anchor_id !== '#') {
        // scroll only, if an anchor is given with URL
        selector = $(anchor_id);
        if (selector.length) {
          j1.core.scrollSmooth.scroll( anchor_id, {
            duration: toccerScrollDuration,
            offset: scrollOffset,
            callback: null
          });
        } else {
          // scroll the page one pixel back and forth (trigger)
          // to get the right position for the Toccer and adjust the
          // Navigator to display the (tranparent) navbar correctly
          //
          $(window).scrollTop($(window).scrollTop()+1);
          $(window).scrollTop($(window).scrollTop()-1);
        } // END if anchor_id
      } else if (anchor_id === '#') {
        logger.info('bound click event to "#", suppress default action');
        $(window).scrollTop($(window).scrollTop()+1);
        $(window).scrollTop($(window).scrollTop()-1);
        return false;
      }
    }, // END scrollTo
    // -------------------------------------------------------------------------
    //  authEnabled()
    //  Returns the state of the authentication module
    // -------------------------------------------------------------------------
    authEnabled: function () {
      var logger      = log4javascript.getLogger('j1.authentication');
      var authEnabled = false;
      return authEnabled;
    }, // END authEnabled
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
    }, // END appDetected
    // -------------------------------------------------------------------------
    // xhrData()
    // Load data asychronously using XHR|jQuery on an HTML element (e.g. <div>)
    // specified by xhr_container_id, xhr_data_path (options)
    // -------------------------------------------------------------------------
    xhrData: function (options, mod, status) {
      var logger            = log4javascript.getLogger('j1.adapter.xhrData');
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
          var logger = log4javascript.getLogger('j1.adapter.xhrData');
          if ( statusTxt === 'success' ) {
            j1.setXhrDataState(id, statusTxt);
            j1.setXhrDomState(id, 'pending');
            logText = 'data loaded successfully on id: ' +id;
            logger.info(logText);
            state = true;
          }
          if ( statusTxt === 'error' ) {
            // jadams, 2020-07-21: to be checked why id could be UNDEFINED
            if (typeof(id) != "undefined") {
              state = 'failed';
              logger.info('set state for ' +mod+ ' to: ' + state);
              // jadams, 2020-07-21: intermediate state should DISABLED
              // executeFunctionByName(mod + '.setState', window, state);
              j1.setXhrDataState(id, statusTxt);
              j1.setXhrDomState(id, 'pending');
              logText = 'loading data failed on id: ' +id+ ', error ' + xhr.status + ': ' + xhr.statusText;
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
        logger.info('XHR data element found: ' + options.xhr_data_element);
      } else  {
        logger.warn('no XHR data element found, loading data aborted');
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
              logger.info('XHR data loaded in the DOM: ' + id);
              j1.setXhrDomState(id, 'success');
            }
          });
        }
      } else {
        // jadams, 2020-07-21: To be clarified why a id is "undefined"
        // failsafe - prevent XHR load errors
        if (id != '#undefined') {
          logText = 'data not loaded on id:' + id;
          logger.warn(logText);
          j1.setXhrDataState(id, 'not loaded');
          j1.setXhrDomState(id, 'not loaded');
          // Set processing state to 'finished' to complete module load
          state = 'finished';
          logger.info('state: ' + state);
          // jadams, 2020-07-21: intermediate state should DISABLED
          // executeFunctionByName(mod + '.setState', window, state);
          state = false;
        }
      }
      return state;
    }, // END xhrData
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
    }, // END readCookie
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
    // TODO:
    //    Change attribute "Secure" to true, if HTTPS is used.
    //    Checks and config changes are to be done.
    // -------------------------------------------------------------------------
    // TODO:
    //    Handling of  attribute "SameSite".
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
    //
    // writeCookie: function (options /*name, data, [path, expires, samesite, http_only, secure]*/) {
    //   var defaults = {
    //       data: {},
    //       name: '',
    //       path: '/',
    //       expires: 0,
    //       samesite: 'Lax',
    //       http_only: false,
    //       secure: false
    //   };
    //   var settings = $.extend(defaults, options);
    //   var date          = new Date();
    //   var timestamp_now = date.toISOString();
    //   var cookie_data   = {};
    //   var data_json;
    //   var data_encoded;
    //
    //   if (j1.existsCookie(settings.name)) {
    //     cookie_data           = j1.readCookie(settings.name);
    //     cookie_data.timestamp = timestamp_now;
    //     cookie_data           = j1.mergeData(cookie_data, settings.data);
    //     data_json             = JSON.stringify( cookie_data );
    //     data_encoded          = window.btoa(data_json);
    //
    //     if (settings.expires > 0) {
    //       Cookies.set(settings.name, data_encoded, {
    //         expires: settings.expires,
    //         SameSite: settings.samesite
    //       });
    //     } else {
    //       Cookies.set(settings.name, data_encoded, {
    //       SameSite: settings.samesite
    //       });
    //     }
    //   } else {
    //     cookie_data   = settings.data;
    //     data_json     = JSON.stringify(settings.data);
    //     data_encoded  = window.btoa(data_json);
    //
    //     if (settings.expires > 0) {
    //       Cookies.set(settings.name, data_encoded, {
    //         expires: settings.expires,
    //         SameSite: settings.samesite
    //       });
    //     } else {
    //       Cookies.set(settings.name, data_encoded, {
    //         SameSite: settings.samesite
    //       });
    //     }
    //   }
    //
    //   if (j1.existsCookie(settings.name)) {
    //     return cookie_data;
    //   } else {
    //     return false;
    //   }
    //
    // }, // END writeCookie
    writeCookie: function (options /*name, data, [path, expires, samesite, http_only, secure]*/) {
      var defaults = {
          data: {},
          name: '',
          path: '/',
          expires: 0,
          samesite: 'Strict',
          http_only: false,
          secure: false
      };
      var settings = $.extend(defaults, options);
      var date          = new Date();
      var timestamp_now = date.toISOString();
      var cookie_data   = {};
      var data_json;
      var data_encoded;
      var expires;
      var stringifiedAttributes = '';
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
//    if (settings.path !== '/') {
        stringifiedAttributes += '; ' + 'path=' + settings.path;
//    }
      if (settings.expires > 0) {
        settings.expires = new Date(new Date() * 1 + settings.expires * 864e+5);
        stringifiedAttributes += '; ' + 'expires=' + settings.expires;
      }
//    if (settings.samesite !== 'Strict') {
        stringifiedAttributes += '; ' + 'SameSite=' + settings.samesite;
//    }
      // stringify cookie attributes
      if (settings.secure) {
        stringifiedAttributes += '; ' + 'secure=' + settings.secure;
        // document.cookie = settings.name + '=' + content +'; path=' + settings.path + '; ' + 'SameSite=' + settings.samesite + '; secure';
      }
      // write the cookie
      document.cookie = settings.name + '=' + data_encoded + stringifiedAttributes;
      if (j1.existsCookie(settings.name)) {
        return cookie_data;
      } else {
        return false;
      }
    }, // END writeCookie
    // -------------------------------------------------------------------------
    // findCookie (Vanilla JS)
    // Search for cookies (names) in the page header that matches a given
    // name. Cookie name can be give as full name, like 'j1.user.state', or
    // as a partial like 'j1'
    // Returns all names found as an array.
    // -------------------------------------------------------------------------
    // See: https://stackoverflow.com/questions/52287989/javascript-cookie-remove-or-delete-with-regex-regular-expression
    // -------------------------------------------------------------------------
    findCookie: function (name) {
      var rCookie=[];
      document.cookie.replace(new RegExp(name + '[^= ]*', 'g'), function(a){ rCookie.push(a.trim()); });
      return rCookie;
    }, // END findCookie
    // -------------------------------------------------------------------------
    // removeCookie (Vanilla JS)
    // -------------------------------------------------------------------------
    // removeCookie: function (options /*name [, path]*/) {
    //   var cookieExists;
    //   var defaults = {
    //       name: '',
    //       path: '/'
    //   };
    //   var settings = $.extend(defaults, options);
    //
    //   Cookies.remove(settings.name, { path: settings.path });
    //
    // }, // END removeCookie
    removeCookie: function (name) {
      if (j1.findCookie(name)) {
        // clear cookie content and set expiry date in the past
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        return true;
      } else {
        return false;
      }
    }, // END removeCookie
    // -------------------------------------------------------------------------
    // expireCookie (Vanilla JS)
    // Expires given cookies by name except cookies set to httpOnly. For all
    // cookies the expiry date is REMOVED. This results in cookies are set
    // to 'session' for the expiry date. All session cookies are deleted
    // automatically by the browser if the last session (browser tab|window)
    // is closed.
    // -------------------------------------------------------------------------
    // expireCookie() returns 'true' if cookie is set successfully,
    // otherwise 'false' (e.g NOT found)
    // -------------------------------------------------------------------------
    // NOTE:
    // See: https://stackoverflow.com/questions/179355/clearing-all-cookies-with-javascript
    // NOTE:
    // There is NO way you could get a trace of Path, Domain and other
    // attributes of cookies as they are only read by browsers and NOT shown
    // to JavaScript. For that reason, attributes needs to be set explicitly.
    // -------------------------------------------------------------------------
    expireCookie: function (options /*name [,path, samesite, secure]*/) {
      var defaults = {
          path: '/',
          samesite: 'Strict',
          secure: false
      };
      var settings  = $.extend(defaults, options);
      var dc        = document.cookie;                                            // all cookies in page
      var end       = dc.length;                                                  // default to end of the string
      var prefix    = settings.name + '=';                                                 // search string for the cookie name given
      var begin     = dc.indexOf('; ' + prefix);
      var content   = '';
      // collect the cookie content
      //
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
      // expire cookie to session
      content = decodeURI(dc.substring(begin + prefix.length, end) ).replace(/"/g, '');
      if (settings.secure) {
        document.cookie = settings.name + '=' + content +'; path=' + settings.path + '; ' + 'SameSite=' + settings.samesite + '; secure';
      } else {
        document.cookie = settings.name + '=' + content +'; path=' + settings.path + '; ' + 'SameSite=' + settings.samesite;
      }
      return true;
    }, // END expireCookie
    // -------------------------------------------------------------------------
    // existsCookie (Vanilla JS)
    // returns true if a given cookie exists
    // -------------------------------------------------------------------------
    existsCookie: function (name) {
      var dc            = document.cookie;
      var prefix        = name + '=';
      var begin         = dc.indexOf('; ' + prefix);
      var end           = dc.length;                                            // default to end of the string
      var cookieExists  = false;
      var cookieContent = '';
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
      cookieContent = decodeURI(dc.substring(begin + prefix.length, end) ).replace(/"/g, '');
      cookieExists  = cookieContent.length ? true : false;
      return cookieExists;
    }, // END existsCookie
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
                $this.html($html.replace('??theme-version', user_data.theme_version));
              });
            });
            logger.info('met dependencies for: sidebarLoaded');
            clearInterval(sidebarLoaded);
            return true;
          } else {
            logger.error('no user data provided');
            clearInterval(sidebarLoaded);
            return false;
          }
        }
      }, 25); // END 'sidebarLoaded'
    }, // END resolveMacros
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
            logger.info('met dependencies for: sidebarLoaded');
            clearInterval(sidebarLoaded);
            return true;
          } else {
            logger.error('no user data provided');
            clearInterval(sidebarLoaded);
            return false;
          }
        }
      }, 25); // END 'sidebarLoaded'
    }, // END updateMacros
    // -------------------------------------------------------------------------
    // getMessage
    // Get a log message from the log message catalog object
    // -------------------------------------------------------------------------
    getMessage: function (level, message, property) {
      var message = j1.messages[level][message]['message'][property];
      return message;
    }, // END getMessage
    // -------------------------------------------------------------------------
    // logger
    // Log a message
    // -------------------------------------------------------------------------
    logger: function (logger, level, message) {
      var logger = log4javascript.getLogger(logger);
      logger[level](message);
      return true;
    }, // END logger
    // -------------------------------------------------------------------------
    // Send message
    // -------------------------------------------------------------------------
    sendMessage: function ( sender, receiver, message ) {
      var logger        = log4javascript.getLogger('j1.sendMessage');
      // var json_message  = JSON.stringify(message, undefined, 2);             // multiline
      var json_message  = JSON.stringify(message);
      if ( receiver === 'j1' ) {
        logText = 'send message from ' + sender + ' to' + receiver + ': ' + json_message;
        logger.debug(logText);
        executeFunctionByName('j1' + '.messageHandler', window, sender, message);
      } else {
        logText = 'send message from ' + sender + ' to ' + receiver + ': ' + json_message;
        logger.debug(logText);
        //executeFunctionByName('j1.' + receiver + '.messageHandler', window, sender, message)
        executeFunctionByName(receiver + '.messageHandler', window, sender, message);
      }
    }, // END sendMessage
    // -------------------------------------------------------------------------
    // messageHandler: MessageHandler for J1 CookieConsent module
    // Manage messages send from other J1 modules
    // -------------------------------------------------------------------------
    messageHandler: function ( sender, message ) {
      // var json_message  = JSON.stringify(message, undefined, 2);             // multiline
      var json_message  = JSON.stringify(message);
      logText = 'received message from ' + sender + ': ' + json_message;
      logger.debug(logText);
      // -----------------------------------------------------------------------
      //  Process commands|actions
      // -----------------------------------------------------------------------
      if ( message.type === 'command' && message.action === 'module_initialized' ) {
        _this.setState('finished');
        logger.info(message.text);
      }
      //
      // Place handling of other command|action here
      //
      return true;
    }, // END messageHandler
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
    }, // END getStyleValue
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
    //  Returns the names of cookies used for J1 Template
    // -------------------------------------------------------------------------
    getCookieNames: function () {
      return cookie_names;
    }, // end getCookieNames
    // -------------------------------------------------------------------------
    // Set dynamic styles
    // -------------------------------------------------------------------------
    setCss: function () {
      var logger        = log4javascript.getLogger('j1.setCss');
      var bg_primary    = j1.getStyleValue('bg-primary', 'background-color');
      var bg_secondary  = j1.getStyleValue('bg-secondary', 'background-color');
      logger.info('set color scheme for selected theme');
      // globals
      // -----------------------------------------------------------------------
      $('head').append('<style>.g-bg-primary { background-color: ' +bg_primary+ ' !important; }</style>');
      // mdi icons
      // -----------------------------------------------------------------------
      $('head').append('<style>.iconify-md-bg-primary { color: ' +bg_primary+ ' !important; }</style>');
      $('head').append('<style>.fa-md-bg-primary { color: ' +bg_primary+ ' !important; }</style>');
      $('head').append('<style>.fas-md-bg-primary { color: ' +bg_primary+ ' !important; }</style>');
      $('head').append('<style>.mdi-md-bg-primary { color: ' +bg_primary+ ' !important; }</style>');
      // asciidoc
      // -----------------------------------------------------------------------
      var admonitionblock_note_color      = bg_primary;
      var admonitionblock_tip_color       = j1.getStyleValue('btn-success', 'background-color');
      var admonitionblock_important_color = j1.getStyleValue('btn-info', 'background-color');
      var admonitionblock_warning_color   = j1.getStyleValue('icon-warning', 'color');
      var admonitionblock_caution_color   = j1.getStyleValue('btn-danger', 'background-color');
      $('head').append('<style>.icon-note { color: ' +admonitionblock_note_color+ ' !important; }</style>');
      $('head').append('<style>.icon-tip { color: ' +admonitionblock_tip_color+ ' !important; }</style>');
      $('head').append('<style>.icon-important { color: ' +admonitionblock_important_color+ ' !important; }</style>');
      $('head').append('<style>.icon-warning { color: ' +admonitionblock_warning_color+ ' !important; }</style>');
      $('head').append('<style>.icon-caution { color: ' +admonitionblock_caution_color+ ' !important; }</style>');
      // bs base styles (2020-09-20: diabled. Taken for BS CSS code)
      // -----------------------------------------------------------------------
      // $('head').append('<style>code { color: ' +bg_secondary+ ' !important; }</style>');
      // bs tool tips
      // -----------------------------------------------------------------------
      $('head').append('<style>.tooltip-inner { background-color: ' +bg_primary+ ' !important; }</style>');
//    $('head').append('<style>.tooltip-arrow { background-color: ' +bg_primary+ ' !important; }</style>');
      $('head').append('<style>.bs-tooltip-auto[x-placement^=bottom] .arrow::before, .bs-tooltip-bottom .arrow::before { border-bottom-color: ' +bg_primary+ ' !important; }</style>');
      // asciidoc results viewer
      // -----------------------------------------------------------------------
      $('head').append('<style>.btn-viewer:hover { background-color: ' +bg_primary+ ' !important; }</style>');
      // extended modals
      // -----------------------------------------------------------------------
      // var tabs_pills_link_color_active    = j1.setColorData('md_blue');         // j1.getStyleValue('btn-info', 'background-color');
      // var tabs_pills_link_color_hover     = j1.setColorData('md_gray_300');     // j1.getStyleValue('btn-secondary', 'background-color');
      // var tabs_pills_link_color_active    = 'mdi-blue';
      // var tabs_pills_link_color_hover     = 'mdi-gray-300';
      // nav module
      // -----------------------------------------------------------------------
      // $('head').append('<style>.nav-link:hover { background-color: ' +tabs_pills_link_color_hover+ ' !important; }</style>');
      // $('head').append('<style>.nav-link.active { background-color: ' +tabs_pills_link_color_active+ ' !important; }</style>');
      return true;
    }, // END setCss
    // -------------------------------------------------------------------------
    // setState()
    // Set the current (processing) state of the module
    // -------------------------------------------------------------------------
    setState: function (stat) {
      state = stat;
    }, // end setState
    // -------------------------------------------------------------------------
    // getState()
    // Returns the current (processing) state of the module
    // -------------------------------------------------------------------------
    getState: function () {
      return state;
    }, // end getState
    // -------------------------------------------------------------------------
    // setXhrDataState()
    // Set the final (loading) state of an element (partial) loaded via Xhr
    // -------------------------------------------------------------------------
    setXhrDataState: function (obj, stat) {
      j1.xhrDataState[obj] = stat;
    }, // END setXhrDataState
    // -------------------------------------------------------------------------
    // getXhrDataState()
    // Returns the final (loading) state of an element (partial) loaded via Xhr
    // -------------------------------------------------------------------------
    getXhrDataState: function (obj) {
      return j1.xhrDataState[obj];
    }, // END getXhrDataState
    // -------------------------------------------------------------------------
    // setXhrDomState()
    // Set the state of an element loaded via Xhr that is
    // successfully added to the DOM
    // -------------------------------------------------------------------------
    setXhrDomState: function (obj, stat) {
      j1.xhrDOMState[obj] = stat;
    }, // END setXhrDomState
    // -------------------------------------------------------------------------
    // getXhrDataState()
    // Returns the state of an element loaded via Xhr that is
    // successfully added to the DOM
    // -------------------------------------------------------------------------
    getXhrDOMState: function (obj) {
      return j1.xhrDOMState[obj];
    }, // END getXhrDOMState
    // -------------------------------------------------------------------------
    // setMode()
    // Set the current mode of the site (web|app)
    // -------------------------------------------------------------------------
    setMode: function (mod) {
      mode = mod;
    }, // END setMode
    // -------------------------------------------------------------------------
    // getMode()
    // Returns the current mode of the site (web|app)
    // -------------------------------------------------------------------------
    getMode: function () {
      return mode;
    }, // END getMode
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
    }, // END checkUserAgent
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
    }, // END generateId
    // -------------------------------------------------------------------------
    // getTrue()
    // Returns always true (for testing purposes)
    // -------------------------------------------------------------------------
    getTrue: function () {
      return true;
    }, // END isTrue
    // -------------------------------------------------------------------------
    // getFalse()
    // Returns always false (for testing purposes)
    // -------------------------------------------------------------------------
    getFalse: function () {
      return false;
    }, // END isTrue
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
    }, // END gohome
    // -------------------------------------------------------------------------
    // goBack()
    // Redirect current page to last visited page (referrer)
    // -------------------------------------------------------------------------
    goBack: function () {
      // where visitor has come from
      window.location.href = document.referrer;
    } // END goBack
  }; // END j1 (return)
}) (j1, window);






  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/advertising.js
 # J1 Adapter for advertising
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2022 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see https://jekyll.one
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2022-02-24 13:44:36 +0000
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.advertising = (function (j1, window) {
var environment             = 'development';
var date                    = new Date();
var timestamp_now           = date.toISOString();
var gadScript               = document.createElement('script');
var adInitializerScript     = document.createElement('script');
var autoHideOnUnfilled      = false;
var addBorderOnUnfilled     = true;
var checkTrackingProtection = true;
var showErrorPageOnBlocked  = true;
var adInitializerScriptText;
var tracking_protection;
var url;
var baseUrl;
var hostname;
var cookie_names;
var user_consent;
var advertisingProvider;
var providerID;
var validProviderID;
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
      // [INFO   ] [j1.adapter.advertising                  ] [ detected advertising provider (j1_config): google} ]
      // [INFO   ] [j1.adapter.advertising                  ] [ start processing load region head, layout:  ]
      // -----------------------------------------------------------------------
      // Default module settings
      // -----------------------------------------------------------------------
      var settings = $.extend({
        module_name: 'j1.adapter.advertising',
        generated:   '2022-02-24 13:44:36 +0000'
      }, options);
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      cookie_names          = j1.getCookieNames();
      user_consent          = j1.readCookie(cookie_names.user_consent);
      url                   = new liteURL(window.location.href);
      hostname              = url.hostname;
      // [INFO   ] [j1.adapter.advertising                  ] [ place provider: Google Adsense ]
      _this = j1.adapter.advertising;
      logger = log4javascript.getLogger('j1.adapter.advertising.google');
      // initialize state flag
      _this.setState('started');
      logger.info('\n' + 'state: ' + _this.getState());
      logger.info('\n' + 'module is being initialized');
      var dependencies_met_page_ready = setInterval(function() {
        if (j1.getState() == 'finished') {
          providerID          = '<your-publisher-id>';
          advertisingProvider = 'Google Adsense';
          validProviderID = (providerID.includes('your')) ? false : true;
          if (!validProviderID) {
            logger.warn('\n' + 'invalid publisherID detected for Google Adsense (GAS): ' + providerID);
            logger.info('\n' + 'skip initialization for provider: ' + advertisingProvider);
            clearInterval(dependencies_met_page_ready);
            return false;
          }
          if (user_consent.personalization) {
            // place all ads configured for the page
            // NOTE: currently NOT implemented/used
            // -----------------------------------------------------------------
            // _this.place_ads();
            // add gad api dynamically in the head section
            // -----------------------------------------------------------------
            logger.info('\n' + 'add gas api in section: head');
            gadScript.async = true;
            gadScript.id    = 'gas-api';
            gadScript.src   = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
            gadScript.setAttribute('data-ad-client', 'ca-pub-3885670015316130');
            document.head.appendChild(gadScript);
            // setup monitor for state changes on all ads configured
            // ---------------------------------------------------------------
            logger.debug('\n' + 'setup monitoring');
            _this.monitor_ads();
            // run protection check
            // -------------------------------------------------------------------
            if (checkTrackingProtection) {
              logger.debug('\n' + 'run checks for tracking protection');
              _this.check_tracking_protection();
              var dependencies_met_tracking_check_ready = setInterval (function (options) {
                if (typeof tracking_protection !== 'undefined' ) {
                  var browser_tracking_feature = navigator.DoNotTrack;
                  if (!tracking_protection && !browser_tracking_feature) {
                    logText = '\n' + 'tracking protection: disabled';
                    logger.info(logText);
                  } else {
                    logText = '\n' + 'tracking protection: enabled';
                    logger.warn(logText);
                    if (showErrorPageOnBlocked) {
                      logger.error('\n' + 'redirect to error page (blocked content): HTML-447');
                      // redirect to error page: blocked content
                      window.location.href = '/447.html';
                    }
                  }
                }
                clearInterval(dependencies_met_tracking_check_ready);
              }, 25);
            } else {
              // setup monitor for state changes on all ads configured
              // ---------------------------------------------------------------
              logger.info('\n' + 'setup monitoring');
              _this.monitor_ads();
              _this.setState('finished');
              logger.info('\n' + 'state: ' + _this.getState());
              logger.info('\n' + 'module initialized successfully');
              clearInterval(dependencies_met_tracking_check_ready);
            }
            clearInterval(dependencies_met_page_ready);
          } else {
            // manage GAD cookies if no consent is given|rejected
            // -----------------------------------------------------------------
            var gasCookies = j1.findCookie('__ga');
            logger.warn('\n' + 'consent on cookies disabled for personalization');
            logger.warn('\n' + 'initialization of module advertising skipped');
            // remove cookies on invalid GAS config or left from a previous
            // session/page view if they exists
            // ---------------------------------------------------------------------
            gasCookies.forEach(function (item) {
              // Remove cookies from Google Ads
              if (hostname == 'localhost') {
                j1.removeCookie({ name: item, domain: false, secure: false });
              } else {
                j1.removeCookie({ name: item, domain: '.' + hostname, secure: false });
              }
            });
            // manage tracking protection
            // -----------------------------------------------------------------
            if (checkTrackingProtection) {
              if (!user_consent.personalization) {
                logText = '\n' + 'consent on cookies disabled for personalization';
                logger.warn(logText);
                if (showErrorPageOnBlocked) {
                  logger.error('\n' + 'redirect to error page (blocked content): HTML-447');
                  // redirect to error page: blocked content
                  window.location.href = '/448.html';
                }
              }
            }
            clearInterval(dependencies_met_page_ready);
          } // END if user_consent.personalization
        } // END if getState 'finished'
      }, 25);
      // [INFO   ] [j1.adapter.advertising                  ] [ end processing ]
      return;
    }, // END init
    // -------------------------------------------------------------------------
    // monitor_ads()
    // monitor for state changes on the ad placed in pages (if any)
    //
    // NOTE: Check visibility state of the adSlot to prevent multiple
    // processing of the same slot
    // -------------------------------------------------------------------------
    monitor_ads: function () {
      var logger = log4javascript.getLogger('j1.adapter.advertising.monitor.ads');
      $('.adsbygoogle').attrchange({
        trackValues: true,
        callback: function (event) {
          if (event.newValue === 'unfilled') {
            var elm             = event.target.dataset;
            var adSlotIsVisible = $('#' + elm.adSlot ).is(":visible");
            if (adSlotIsVisible) {
              if (addBorderOnUnfilled) { $('.adsbygoogle').addClass('border--dotted'); }
              if (elm.adClient) {
                logger.warn('\n' + 'found ad state ' + event.newValue + ' for slot: ' + elm.adSlot);
                if (autoHideOnUnfilled) {
                  logger.warn('\n' + ' hide ad for slot: ' + elm.adSlot);
                  $('#' + elm.adSlot ).hide();
                }
              }
            }
          }
        }
      });
    },
    // -------------------------------------------------------------------------
    // check_tracking_protection()
    // detect if a user is using tracking protection
    // NOTE:
    // Firefox uses a list obtained from 'https://disconnect.me/trackerprotection'
    // for its tracking protection. The checker use an image loaded from a
    // domain that is on that list (facebook.com), and an image that will
    // exist (tracking pixel).
    //
    // See for more details:
    //  https://stackoverflow.com/questions/33959324/how-to-detect-if-a-user-is-using-tracking-protection-in-firefox-42
    // -------------------------------------------------------------------------
    check_tracking_protection: function () {
      var logger = log4javascript.getLogger('j1.adapter.advertising.monitor.tracking');
      logText = '\n' + 'check for trackingprotection';
      logger.info(logText);
      function checkTrackingProtection() {
        if (!checkTrackingProtection.promise) {
          checkTrackingProtection.promise = new Promise(function(resolve, reject) {
            var time = Date.now();
            var img = new Image();
            img.onload = resolve;
            img.onerror = function() {
              if ((Date.now() - time) < 50) {
                reject(new Error("Rejected."));
              } else {
                resolve(new Error("Takes too long."));
              }
            };
            img.src = '//www.facebook.com/tr/';
          }).then((result) => {
            tracking_protection = false;
          }).catch(e => {
            tracking_protection = true;
            logger.debug('\n' + 'detection details: ' + e);
          });
        }
      }
      checkTrackingProtection();
    }, // END check_tracking_protection
    // -------------------------------------------------------------------------
    // place_ads()
    // place ads configured|enabled
    // -------------------------------------------------------------------------
    place_ads: function () {
      logText = '\n' + 'ads are being placed';
      logger.info(logText);
      // START loadig ads
      var dependencies_met_page_ready = setInterval (function (options) {
        if (j1.getState() === 'finished') {
          clearInterval(dependencies_met_page_ready);
        }
      });
      // END place ads
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




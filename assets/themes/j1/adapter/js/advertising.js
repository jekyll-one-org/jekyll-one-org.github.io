

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/advertising.js
 # J1 Adapter for advertising
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2021 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see https://jekyll.one
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2021-12-24 20:09:46 +0000
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
var domain;
var domainAttribute;
var cookie_option_domain;
var cookie_domain;
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
      var dependencies_met_page_ready = setInterval(function() {
        if (j1.getState() == 'finished') {
          var ads_found = document.getElementsByClassName('adsbygoogle').length;
          logger = log4javascript.getLogger('j1.adapter.advertising.google');
          logger.warn('\n' + 'found ads in page: #' + ads_found);
          logger.warn('\n' + 'no ads initialized, advertising disabled');
          clearInterval(dependencies_met_page_ready);
        }
      }, 25);
      return;
    }, // END init
    // -------------------------------------------------------------------------
    // monitor_ads()
    // monitor for state changes on the ad placed in pages (if any)
    // -------------------------------------------------------------------------
    monitor_ads: function () {
      $('.adsbygoogle').attrchange({
        trackValues: true,
        callback: function (event) {
          if (event.newValue === 'unfilled') {
            var elm = event.target.dataset;
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
      var logger = log4javascript.getLogger('j1.adapter.advertising.tracking.monitor');
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




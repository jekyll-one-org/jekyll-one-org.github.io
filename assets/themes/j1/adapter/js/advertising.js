

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/advertising.js
 # J1 Adapter for advertising
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-09-28 22:54:13 +0200
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.advertising = (function (j1, window) {
var environment           = 'development';
var production            = (environment.includes('prod') ? true : false);
var development           = (environment.includes('dev') ? true : false);
var date                  = new Date();
var timestamp_now         = date.toISOString();
var gasScript             = document.createElement('script');
var gasDiv                = document.createElement('div');
var gasIns                = document.createElement('ins');
var adInitializerScript   = document.createElement('script');
var advertisingProvider   = 'Google Adsense';
var state                 = 'not_started';
var layout;
var advertisingDefaults;
var advertisingSettings;
var advertisingOptions;
var frontmatterOptions;
var autoHideOnUnfilled;
var addBorderOnUnfilled;
var checkTrackingProtection;
var showErrorPageOnBlocked;
var adInitializerScriptText;
var tracking_protection;
var url;
var baseUrl;
var hostname;
var cookie_names;
var user_consent;
var publisherID;
var validpublisherID;
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
      // Default module settings
      // -----------------------------------------------------------------------
      var settings = $.extend({
        module_name: 'j1.adapter.advertising',
        generated:   '2023-09-28 22:54:13 +0200'
      }, options);
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      logger                = log4javascript.getLogger('j1.adapter.advertising');
      _this                 = j1.adapter.advertising;
      cookie_names          = j1.getCookieNames();
      user_consent          = j1.readCookie(cookie_names.user_consent);
      url                   = new liteURL(window.location.href);
      hostname              = url.hostname;
      // create settings object from frontmatter
      //
      frontmatterOptions      = options != null ? $.extend({}, options) : {};
      // initialze advertisingOptions
      //
      advertisingDefaults     = $.extend({},   {"enabled":false, "provider":"google", "google":{"placement":"manual", "autoPlaceAds":false, "autoHideOnUnfilled":false, "addBorderOnUnfilled":true, "checkTrackingProtection":false, "showErrorPageOnBlocked":false}});
      advertisingSettings     = $.extend({},   {"enabled":true, "google":{"publisherID":"<your-publisher-id>", "ads":[{"ad":null, "enabled":true, "id":"ad_<your-slot-id>", "layout":"home", "content_page":"home", "publisherID":"<your-publisher-id>", "test":"on", "styles":"display:block;", "slot":"<your-slot-id>", "ad_layout":"display", "ad_format":"auto", "ad_responsive":true}, {"ad":null, "enabled":true, "id":"ad_<your-slot-id>", "layout":"page", "content_page":"preview_google_adsense", "publisherID":"<your-publisher-id>", "test":"on", "styles":"display:block;", "slot":"<your-slot-id>", "ad_layout":"display", "ad_format":"auto", "ad_responsive":true}]}});
      advertisingOptions      = $.extend(true, {}, advertisingDefaults, advertisingSettings, frontmatterOptions);
      layout                  = advertisingOptions.layout;
      publisherID             = advertisingOptions.google.publisherID;
      validpublisherID        = (publisherID.includes('pub-')) ? true : false;
      autoHideOnUnfilled      = advertisingOptions.google.autoHideOnUnfilled;
      addBorderOnUnfilled     = advertisingOptions.google.addBorderOnUnfilled;
      checkTrackingProtection = advertisingOptions.google.checkTrackingProtection;
      showErrorPageOnBlocked  = advertisingOptions.google.showErrorPageOnBlocked;
      // run initialization on 'contentVisible'
      //
      var dependencies_met_page_ready = setInterval (function (options) {
        var contentState      = $('#content').css("display");
        var contentVisible    = (contentState == 'block') ? true: false;
        if (j1.getState() === 'finished' && contentVisible) {
          _this.ad_initializer();
          if (!validpublisherID) {
            if (development) {
              logger.warn('\n' + 'invalid publisher id: ' + publisherID);
              logger.info('\n' + 'module disabled' );
            }
            clearInterval(dependencies_met_page_ready);
            return false;
          }
          // [INFO   ] [j1.adapter.advertising                              ] [ place provider: Google Adsense ]
          // initialize state flag
          //
          _this.setState('started');
          if (development) {
            logger.debug('\n' + 'state: ' + _this.getState());
          }
          if (user_consent.personalization) {
            if (development) {
              logger.info('\n' + 'adsense api is being initialized');
            }
            if (!validpublisherID) {
              if (development) {
                logger.debug('\n' + 'invalid publisherID detected for Google Adsense: ' + publisherID);
                logger.info('\n' + 'skip initialization for provider: ' + advertisingProvider);
              }
              return false;
            } else {
              if (development) {
                logger.info('\n' + 'use publisherID for Google Adsense: ' + publisherID);
              }
            }
            // add Google Adsense API dynamically in head section loaded async
            //
            if (development) {
              logger.info('\n' + 'add Google AdsenseAPI in section: head');
            }
            gasScript.async = true;
            gasScript.id    = 'gas-api';
            gasScript.src   = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
            gasScript.setAttribute('data-ad-client', publisherID);
            document.head.appendChild(gasScript);
            if (development) {
              logger.info('\n' + 'adsense api initialized');
            }
            // setup monitor for state changes on all ads configured
            //
            setTimeout(function () {
              var ads_found = (document.getElementsByClassName('adsbygoogle').length > 0) ? true : false;
              if (ads_found > 0) {
                if (development) {
                  logger.info('\n' + 'setup Google Ad monitoring');
                }
                _this.ad_monitor();
              } else {
                if (development) {
                  logger.warn('\n' + 'no initialized Google Ads found in page');
                }
              }
            }, 1000);
            // run protection check
            //
            if (checkTrackingProtection) {
              if (development) {
                logger.debug('\n' + 'run checks for tracking protection');
              }
              _this.check_tracking_protection();
              var dependencies_met_tracking_check_ready = setInterval (function (options) {
                if (typeof tracking_protection !== 'undefined' ) {
                  var browser_tracking_feature = navigator.DoNotTrack;
                  if (!tracking_protection && !browser_tracking_feature) {
                    if (development) {
                      logText = '\n' + 'tracking protection: disabled';
                      logger.info(logText);
                    }
                  } else {
                    if (development) {
                      logText = '\n' + 'tracking protection: enabled';
                      logger.debug(logText);
                    }
                    if (showErrorPageOnBlocked) {
                      if (development) {
                        logger.error('\n' + 'redirect to error page (blocked content): HTML-447');
                      }
                      // redirect to error page: blocked content
                      window.location.href = '/447.html';
                    }
                  }
                }
                clearInterval(dependencies_met_tracking_check_ready);
              }, 10);
            } else {
              // no protection check enabled
              _this.setState('finished');
              if (development) {
                logger.debug('\n' + 'state: ' + _this.getState());
                logger.info('\n' + 'module initialized successfully');
              }
              clearInterval(dependencies_met_tracking_check_ready);
            }
          } else {
            // user consent on personalization "false"
            //
           if (production) {
              console.debug('cookies for personalization rejected');
              console.debug('initialization of module advertising skipped');
            } else {
              logger.warn('\n' + 'user consent on personalization: ' + user_consent.personalization);
              logger.warn('\n' + 'initializing module: skipped');
            }
            // if consent is rejected, detect and remove Adsense cookies
            //
            var gasCookies = j1.findCookie('__g');
            gasCookies.forEach(function (item) {
              // remove Google Ad cookies
              //
              if (hostname == 'localhost') {
                j1.removeCookie({ name: item, domain: false, secure: false });
              } else {
                j1.removeCookie({ name: item, domain: '.' + hostname, secure: false });
              }
            });
            // manage tracking protection
            //
            if (checkTrackingProtection) {
              if (!user_consent.personalization) {
                if (development) {
                  logText = '\n' + 'consent on cookies disabled for personalization';
                  logger.debug(logText);
                }
                if (showErrorPageOnBlocked) {
                  if (development) {
                    logger.error('\n' + 'redirect to error page (blocked content): HTML-447');
                  }
                  // redirect to error page: blocked content
                  window.location.href = '/448.html';
                }
              }
            }
          } // END if user_consent.personalization
          // [INFO   ] [j1.adapter.advertising                  ] [ end processing ]
           // END if 'advertising'
          clearInterval(dependencies_met_page_ready);
        }
      }, 10);
    }, // END init
    // -------------------------------------------------------------------------
    // ad_initializer()
    // initialze all ad units in a page (ins elements)
    // -------------------------------------------------------------------------
    ad_initializer: function () {
      var dependencies_met_page_visible = setInterval (function (options) {
        var contentState    = $('#content').css("display");
        var contentVisible  = (contentState == 'block') ? true: false;
        var ads_found       = (document.getElementsByClassName('adsbygoogle').length > 0) ? true : false;
        var ads_initialized = 0;
        var ad_containers;
        if (j1.getState() === 'finished' && contentVisible && ads_found) {
          if (!validpublisherID) {
            // skip setup processes
            //
            clearInterval(dependencies_met_page_visible);
            return false;
          }
          // create|loading adverting for containers enabled
          //
          ad_containers = advertisingOptions.google.ads;
          ad_containers.forEach(function (ad) {
            if (user_consent.personalization) {
              var currentDiv = document.getElementById(ad.id);
              if (currentDiv !== null && ad.enabled && ad.layout == layout) {
                var ins = document.createElement('ins');
                currentDiv.appendChild(ins);
                var insID = 'ins_' + ad.id;
                ins.setAttribute('id', insID);
                ins.className = "adsbygoogle";
                document.getElementById(insID).setAttribute('style', ad.styles);
                document.getElementById(insID).setAttribute('data-ad-test', ad.test)
                document.getElementById(insID).setAttribute('data-ad-client', ad.publisherID);
                document.getElementById(insID).setAttribute('data-ad-slot', ad.slot);
                document.getElementById(insID).setAttribute('data-ad-format', ad.ad_format);
                if (ad.ad_layout == 'display') {
                  document.getElementById(insID).setAttribute('data-full-width-responsive', ad.ad_responsive);
                }
                // if (ad.ad_layout == 'in-article') {
                //   document.getElementById(insID).setAttribute('data-ad-format', ad.ad_format);
                // }
                if (ad.ad_layout == 'multiplex') {
                  document.getElementById(insID).setAttribute('data-matched-content-ui-typ', ad.ui_type);
                  document.getElementById(insID).setAttribute('data-matched-content-columns-num', ad.ui_columns);
                  document.getElementById(insID).setAttribute('data-matched-content-rows-num', ad.ui_rows);
                }
                ads_initialized ++;
              } else {
                if (ad.layout == layout) {
                  if (development) {
                    logger.warn('\n' + 'ad disabled on id ' + ad.id + ' for slot: ' + ad.slot);
                  }
                }
              }
            } else {
              if (development) {
                logger.warn('\n' + 'skipped add settings on all ad containers');
              }
            } // END if user_consent.personalization
          });
          // END loading adverting containers
          if (ads_initialized > 0) {
            if (development) {
              logger.info('\n' + 'ads enabled found in page (total): ' + ads_initialized);
            }
            var google_ads = document.getElementsByClassName('adsbygoogle');
            var counter    = document.getElementsByClassName('adsbygoogle').length;
            // jadams, 2023-06-22:
            // skip last element in google_ads (adsbygoogle-noablate)
            // TODO: clarify for what reason an 'ins' element with
            // class 'adsbygoogle-noablate' is added by Googgle Adsense
            // Possible reason: publisherID is 'wrong|fake' or NOT 'verified'
            //
            counter--;
            [].forEach.call(google_ads, function() {
              // skip last element in google_ads (adsbygoogle-noablate)
              if (counter > 0) {
                (adsbygoogle = window.adsbygoogle || []).push({});
              }
              counter --;
            });
          } else {
            if (development) {
              logger.warn('\n' + 'no ads found in page for layout: ' + layout);
            }
          } // END if ads_initialized
          clearInterval(dependencies_met_page_visible);
        } // END contentVisible|ads_found
      }, 10); // END dependencies_met_page_visible
    }, // END ad_initializer
    // -------------------------------------------------------------------------
    // ad_monitor()
    // monitor for state changes on the ad placed in pages (if any)
    //
    // NOTE: Check visibility state of the adSlot to prevent multiple
    // processing of the same slot
    //
    // NOTE: Skip ad containers with class 'adsbygoogle-noablate'
    //
    // -------------------------------------------------------------------------
    ad_monitor: function () {
      $('.adsbygoogle').attrchange({
        trackValues: true,
        callback: function (event) {
          var elm               = event.target.dataset;
          var elm_classes       = event.target.className;
          var validAdContainer  = (elm_classes.includes('adsbygoogle-noablate')) ? false : true;
          var environment       = 'development';
          var production        = (environment.includes('prod') ? true : false);
          var adSlotIsVisible   = $('.adsbygoogle').is(":visible");
          if (adSlotIsVisible && validAdContainer && event.newValue !== event.oldValue) {
            if (event.newValue === 'unfilled') {
              if (production) {
                console.debug('detected ad blocks in state: unfilled');
              } else {
                logger.warn('\n' + 'detected ad on slot ' + elm.adSlot + ' in state: ' + event.newValue);
              }
              if (addBorderOnUnfilled) {
                $('.adsbygoogle').addClass('border--dotted');
              }
              if (autoHideOnUnfilled) {
                if (development) {
                  logger.info('\n' + ' hide ad on slot: ' + elm.adSlot);
                }
                $('.adsbygoogle').hide();
              }
            } else if (event.newValue === 'filled') {
              if (development) {
                logger.info('\n' + 'detected ad on slot ' + elm.adSlot + ' in state: ' + event.newValue);
              }
            } else {
              var filled = (event.newValue.includes('display') ? true : false);
              var unfilled = (event.newValue.includes('dotted') ? true : false);
              if (filled) {
                if (production) {
                  console.info('detected ad blocks in state: filled');
                } else {
                  logger.info('\n' + 'detected ad block on slot ' + elm.adSlot + ' in state: filled');
                }
              } else if (unfilled) {
                if (production) {
                  console.info('detected ad blocks in state: unfilled');
                } else {
                  logger.info('\n' + 'detected ad block on slot ' + elm.adSlot + ' in state: unfilled');
                }
              } else {
                if (production) {
                  console.warn('unknown ad state detected: ' + event.newValue);
                } else {
                  logger.warn('\n' + 'unknown ad state detected on slot ' + elm.adSlot + ' : ' + event.newValue);
                }
              }
            } // END if 'event.newValue'
          } // END if 'adSlotIsVisible'
        } // END 'callback'
      }); // END 'attrchange'
    }, // END ad_monitor
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
      if (development) {
        logText = '\n' + 'check for trackingprotection';
        logger.info(logText);
      }
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
            if (development) {
              logger.debug('\n' + 'detection details: ' + e);
            }
          });
        }
      }
      checkTrackingProtection();
    }, // END check_tracking_protection
    // -------------------------------------------------------------------------
    // messageHandler()
    // manage messages send from other J1 modules
    // -------------------------------------------------------------------------
    messageHandler: function (sender, message) {
      var json_message = JSON.stringify(message, undefined, 2);
      if (development) {
        logText = '\n' + 'received message from ' + sender + ': ' + json_message;
        logger.debug(logText);
      }
      // -----------------------------------------------------------------------
      //  Process commands|actions
      // -----------------------------------------------------------------------
      if (message.type === 'command' && message.action === 'module_initialized') {
        //
        // Place handling of command|action here
        //
        if (development) {
          logger.info('\n' + message.text);
        }
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




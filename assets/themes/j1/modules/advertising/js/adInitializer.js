

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/modules/advertising/js/adInitializer.js
 # JS helper to initialze all ad units in a page
 #
 #  Product/Info:
 #  http://jekyll.one
 #
 #  Copyright (C) 2023 Juergen Adams
 #
 #  J1 Theme is licensed under MIT License.
 #  See: https://github.com/jekyll-one/J1 Theme/blob/master/LICENSE
 # -----------------------------------------------------------------------------
*/
$(function () {
  var dependencies_met_page_visible = setInterval (function (options) {
    var pageState     = $('#no_flicker').css("display");
    var pageVisible   = (pageState == 'block') ? true: false;
    if (j1.getState() === 'finished' && pageVisible) {
        var logger                = log4javascript.getLogger('j1.core.advertising');
        var cookie_names          = j1.getCookieNames();
        var user_consent          = j1.readCookie(cookie_names.user_consent);
        var providerID            = 'pub-123456789012345';
        var validProviderID       = (providerID.includes('pub-')) ? true : false;
        var advertisingProvider   = 'Google Adsense';
        var advertisingDefaults   = $.extend({},   {"enabled":false, "provider":"google", "google":{"autoHideOnUnfilled":true, "addBorderOnUnfilled":true, "checkTrackingProtection":false, "showErrorPageOnBlocked":false}});
        var aadvertisingSettings  = $.extend({},   {"enabled":true, "google":{"publisherID":"pub-123456789012345", "autoHideOnUnfilled":false, "addBorderOnUnfilled":true, "ads":[{"ad":null, "enabled":true, "id":"ad_1234567890", "publisherID":"pub-123456789012345", "test":"on", "styles":"display: block;", "slot":1234567890, "format":"auto", "responsive":true}, {"ad":null, "enabled":true, "id":"ad_1234567890-2", "publisherID":"pub-123456789012345", "test":"on", "styles":"display: block;", "slot":1234567890, "format":"auto", "responsive":true}, {"ad":null, "enabled":false, "id":"ad_1929248609", "publisherID":"<your-publisher-id>", "test":"off", "styles":"display: block;", "slot":1929248609, "format":"auto", "responsive":true}]}});
        var advertisingOptions    = $.extend(true, {}, advertisingDefaults, aadvertisingSettings);
        var ad_containers;
        var ads_found;
        if (!validProviderID) {
          // skip setup processes
          clearInterval(dependencies_met_page_visible);
          return false;
        }
        // START create|loading adverting for containers enabled
        ad_containers = advertisingOptions.google.ads;
        ad_containers.forEach(function (ad) {
          if (user_consent.personalization) {
            if (ad.enabled) {
              var currentDiv = document.getElementById(ad.id);
              var ins        = document.createElement('ins');
              currentDiv.appendChild(ins);
              var insID = 'ins_' + ad.id;
              ins.setAttribute('id', insID);
              ins.className = "adsbygoogle";
              document.getElementById(insID).setAttribute('style', ad.styles);
              document.getElementById(insID).setAttribute('data-ad-test', ad.test);
              document.getElementById(insID).setAttribute('data-ad-client', ad.publisherID);
              document.getElementById(insID).setAttribute('data-ad-slot', ad.slot);
              document.getElementById(insID).setAttribute('data-ad-format', ad.format);
              document.getElementById(insID).setAttribute('data-full-width-responsive', ad.responsive);
              logger.info('\n' + 'added settings on container id ' + ad.id + ' for slot: ' + ad.slot);
            }
          } else {
            logger.warn('\n' + 'skipped add settings on all ad containers');
          };
        });
        // END loading adverting containers
        ads_found = document.getElementsByClassName('adsbygoogle').length;
        if (ads_found) {
          logger.info('\n' + 'ads found in page (total): ' + ads_found);
          [].forEach.call(document.querySelectorAll('.adsbygoogle'), function() {
            (adsbygoogle = window.adsbygoogle || []).push({});
          });
        } else {
          logger.warn('\n' + 'no ads found in page');
        }
      clearInterval(dependencies_met_page_visible);
    }
  }, 25);
});






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
$(function(){var e=setInterval(function(){var t='block'==$('#no_flicker').css("display");if('finished'===j1.getState()&&t){var n,o=log4javascript.getLogger('j1.core.advertising'),d=j1.getCookieNames(),a=j1.readCookie(d.user_consent),l=!!'pub-123456789012345'.includes('pub-'),s=$.extend({},{enabled:!1,provider:"google",google:{autoHideOnUnfilled:!0,addBorderOnUnfilled:!0,checkTrackingProtection:!1,showErrorPageOnBlocked:!1}}),i=$.extend({},{enabled:!0,google:{publisherID:"pub-123456789012345",autoHideOnUnfilled:!1,addBorderOnUnfilled:!0,ads:[{ad:null,enabled:!0,id:"ad_1234567890",publisherID:"pub-123456789012345",test:"on",styles:"display: block;",slot:1234567890,format:"auto",responsive:!0},{ad:null,enabled:!0,id:"ad_1234567890-2",publisherID:"pub-123456789012345",test:"on",styles:"display: block;",slot:1234567890,format:"auto",responsive:!0},{ad:null,enabled:!1,id:"ad_1929248609",publisherID:"<your-publisher-id>",test:"off",styles:"display: block;",slot:1929248609,format:"auto",responsive:!0}]}}),r=$.extend(!0,{},s,i);if(!l)return clearInterval(e),!1;r.google.ads.forEach(function(e){if(a.personalization){if(e.enabled){var t=document.getElementById(e.id),n=document.createElement('ins');t.appendChild(n);var d='ins_'+e.id;n.setAttribute('id',d),n.className="adsbygoogle",document.getElementById(d).setAttribute('style',e.styles),document.getElementById(d).setAttribute('data-ad-test',e.test),document.getElementById(d).setAttribute('data-ad-client',e.publisherID),document.getElementById(d).setAttribute('data-ad-slot',e.slot),document.getElementById(d).setAttribute('data-ad-format',e.format),document.getElementById(d).setAttribute('data-full-width-responsive',e.responsive),o.info("\nadded settings on container id "+e.id+' for slot: '+e.slot)}}else o.warn("\nskipped add settings on all ad containers")}),(n=document.getElementsByClassName('adsbygoogle').length)?(o.info("\nads found in page (total): "+n),[].forEach.call(document.querySelectorAll('.adsbygoogle'),function(){(adsbygoogle=window.adsbygoogle||[]).push({})})):o.warn("\nno ads found in page"),clearInterval(e)}},10)});



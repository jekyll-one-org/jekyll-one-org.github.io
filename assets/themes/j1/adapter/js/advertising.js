

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
 #  Adapter generated: 2022-01-02 13:07:49 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.advertising=function(e){(new Date).toISOString(),document.createElement('script'),document.createElement('script');var t,n,a,o=!1,r=!0;return{init:function(){var t=setInterval(function(){if('finished'==e.getState()){var a=document.getElementsByClassName('adsbygoogle').length;(n=log4javascript.getLogger('j1.adapter.advertising.google')).warn("\nfound ads in page: #"+a),n.warn("\nno ads initialized, advertising disabled"),clearInterval(t)}},25)},monitor_ads:function(){var e=log4javascript.getLogger('j1.adapter.advertising.monitor.ads');$('.adsbygoogle').attrchange({trackValues:!0,callback:function(t){if('unfilled'===t.newValue){var n=t.target.dataset;$('#'+n.adSlot).is(":visible")&&(r&&$('.adsbygoogle').addClass('border--dotted'),n.adClient&&(e.warn("\nfound ad state "+t.newValue+' for slot: '+n.adSlot),o&&(e.warn("\n hide ad for slot: "+n.adSlot),$('#'+n.adSlot).hide())))}}})},check_tracking_protection:function(){function e(){e.promise||(e.promise=new Promise(function(e,t){var n=Date.now(),a=new Image;a.onload=e,a.onerror=function(){Date.now()-n<50?t(new Error("Rejected.")):e(new Error("Takes too long."))},a.src='//www.facebook.com/tr/'}).then(()=>{!1})["catch"](e=>{!0,t.debug("\ndetection details: "+e)}))}var t=log4javascript.getLogger('j1.adapter.advertising.monitor.tracking');a="\ncheck for trackingprotection",t.info(a),e()},place_ads:function(){a="\nads are being placed",n.info(a);var t=setInterval(function(){'finished'===e.getState()&&clearInterval(t)})},messageHandler:function(e,t){var o=JSON.stringify(t,undefined,2);return a="\nreceived message from "+e+': '+o,n.debug(a),'command'===t.type&&'module_initialized'===t.action&&n.info('\n'+t.text),!0},setState:function(e){t.state=e},getState:function(){return t.state}}}(j1,window);



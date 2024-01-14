

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/advertising.js
 # J1 Adapter for advertising
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023, 2024 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2024-01-14 19:30:12 +0100
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.advertising=function(e,t){var n,a,o,d,l,i,s,r,c,u,g,m,f,p,y,b='production',v=(b.includes('prod'),!!b.includes('dev'));(new Date).toISOString(),document.createElement('script'),document.createElement('div'),document.createElement('ins'),document.createElement('script');return{init:function(y){$.extend({module_name:'j1.adapter.advertising',generated:'2024-01-14 19:30:12 +0100'},y);p=log4javascript.getLogger('j1.adapter.advertising'),f=e.adapter.advertising,c=e.getCookieNames(),u=e.readCookie(c.user_consent),r=new liteURL(t.location.href),r.hostname,l=null!=y?$.extend({},y):{},a=$.extend({},{enabled:!1,provider:"google",google:{placement:"manual",autoPlaceAds:!1,autoHideOnUnfilled:!1,addBorderOnUnfilled:!0,checkTrackingProtection:!1,showErrorPageOnBlocked:!1}}),o=$.extend({},{enabled:!1,google:{publisherID:"<your-publisher-id>",ads:[{ad:null,enabled:!0,id:"ad_<your-slot-id>",layout:"home",content_page:"home",publisherID:"<your-publisher-id>",test:"on",styles:"display:block;",slot:"<your-slot-id>",ad_layout:"display",ad_format:"auto",ad_responsive:!0},{ad:null,enabled:!0,id:"ad_<your-slot-id>",layout:"page",content_page:"preview_google_adsense",publisherID:"<your-publisher-id>",test:"on",styles:"display:block;",slot:"<your-slot-id>",ad_layout:"display",ad_format:"auto",ad_responsive:!0}]}}),d=$.extend(!0,{},a,o,l),n=d.layout,g=d.google.publisherID,m=!!g.includes('pub-'),i=d.google.autoHideOnUnfilled,s=d.google.addBorderOnUnfilled,d.google.checkTrackingProtection,d.google.showErrorPageOnBlocked;var b=setInterval(function(){var t='block'==$('#content').css("display");if('finished'===e.getState()&&t){var n=document.getElementsByClassName('adsbygoogle').length;v&&((p=log4javascript.getLogger('j1.adapter.advertising')).debug("\nfound ads in page: #"+n),p.debug("\nno ads initialized, advertising disabled")),clearInterval(b)}},10)},ad_initializer:function(){var a=setInterval(function(){var o='block'==$('#content').css("display"),l=document.getElementsByClassName('adsbygoogle').length>0,i=0;if('finished'===e.getState()&&o&&l){if(!m)return clearInterval(a),!1;if(d.google.ads.forEach(function(e){if(u.personalization){var t=document.getElementById(e.id);if(null!==t&&e.enabled&&e.layout==n){var a=document.createElement('ins');t.appendChild(a);var o='ins_'+e.id;a.setAttribute('id',o),a.className="adsbygoogle",document.getElementById(o).setAttribute('style',e.styles),document.getElementById(o).setAttribute('data-ad-test',e.test),document.getElementById(o).setAttribute('data-ad-client',e.publisherID),document.getElementById(o).setAttribute('data-ad-slot',e.slot),document.getElementById(o).setAttribute('data-ad-format',e.ad_format),'display'==e.ad_layout&&document.getElementById(o).setAttribute('data-full-width-responsive',e.ad_responsive),'multiplex'==e.ad_layout&&(document.getElementById(o).setAttribute('data-matched-content-ui-typ',e.ui_type),document.getElementById(o).setAttribute('data-matched-content-columns-num',e.ui_columns),document.getElementById(o).setAttribute('data-matched-content-rows-num',e.ui_rows)),i++}else e.layout==n&&v&&p.warn("\nad disabled on id "+e.id+' for slot: '+e.slot)}else v&&p.warn("\nskipped add settings on all ad containers")}),i>0){v&&p.info("\nads enabled found in page (total): "+i);var s=document.getElementsByClassName('adsbygoogle'),r=document.getElementsByClassName('adsbygoogle').length;r--,[].forEach.call(s,function(){r>0&&(adsbygoogle=t.adsbygoogle||[]).push({}),r--})}else v&&p.warn("\nno ads found in page for layout: "+n);clearInterval(a)}},10)},ad_monitor:function(){$('.adsbygoogle').attrchange({trackValues:!0,callback:function(e){var t=e.target.dataset,n=!e.target.className.includes('adsbygoogle-noablate'),a=!!'production'.includes('prod');if($('.adsbygoogle').is(":visible")&&n&&e.newValue!==e.oldValue)if('unfilled'===e.newValue)a?console.debug('detected ad blocks in state: unfilled'):p.warn("\ndetected ad on slot "+t.adSlot+' in state: '+e.newValue),s&&$('.adsbygoogle').addClass('border--dotted'),i&&(v&&p.info("\n hide ad on slot: "+t.adSlot),$('.adsbygoogle').hide());else if('filled'===e.newValue)v&&p.info("\ndetected ad on slot "+t.adSlot+' in state: '+e.newValue);else{var o=!!e.newValue.includes('display'),d=!!e.newValue.includes('dotted');o?a?console.info('detected ad blocks in state: filled'):p.info("\ndetected ad block on slot "+t.adSlot+' in state: filled'):d?a?console.info('detected ad blocks in state: unfilled'):p.info("\ndetected ad block on slot "+t.adSlot+' in state: unfilled'):a?console.warn('unknown ad state detected: '+e.newValue):p.warn("\nunknown ad state detected on slot "+t.adSlot+' : '+e.newValue)}}})},check_tracking_protection:function(){function e(){e.promise||(e.promise=new Promise(function(e,t){var n=Date.now(),a=new Image;a.onload=e,a.onerror=function(){Date.now()-n<50?t(new Error("Rejected.")):e(new Error("Takes too long."))},a.src='//www.facebook.com/tr/'}).then(()=>{!1})["catch"](e=>{!0,v&&t.debug("\ndetection details: "+e)}))}var t=log4javascript.getLogger('j1.adapter.advertising.monitor.tracking');v&&(y="\ncheck for trackingprotection",t.info(y)),e()},messageHandler:function(e,t){var n=JSON.stringify(t,undefined,2);return v&&(y="\nreceived message from "+e+': '+n,p.debug(y)),'command'===t.type&&'module_initialized'===t.action&&v&&p.info('\n'+t.text),!0},setState:function(e){f.state=e},getState:function(){return f.state}}}(j1,window);



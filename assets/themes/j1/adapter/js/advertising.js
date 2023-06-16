

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
 #  Adapter generated: 2023-06-16 02:30:00 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.advertising=function(e,n){(new Date).toISOString();var o,t,i,a,r,d,l,s,c,g,u,f,p,b,m,k,v=document.createElement('script');document.createElement('div'),document.createElement('ins'),document.createElement('script');return{init:function(h){$.extend({module_name:'j1.adapter.advertising',generated:'2023-06-16 02:30:00 +0200'},h);m=log4javascript.getLogger('j1.adapter.advertising'),b=e.adapter.advertising,u=e.getCookieNames(),f=e.readCookie(u.user_consent),c=new liteURL(n.location.href),g=c.hostname,null!=h?$.extend({},h):{},o=$.extend({},{enabled:!1,provider:"google",google:{autoHideOnUnfilled:!0,addBorderOnUnfilled:!0,checkTrackingProtection:!1,showErrorPageOnBlocked:!1}}),t=$.extend({},{enabled:!0,google:{publisherID:"pub-123456789012345",autoHideOnUnfilled:!1,addBorderOnUnfilled:!0,ads:[{ad:null,enabled:!0,id:"ad_1234567890",publisherID:"pub-123456789012345",test:"on",styles:"display: block;",slot:1234567890,format:"auto",responsive:!0},{ad:null,enabled:!0,id:"ad_1234567890-2",publisherID:"pub-123456789012345",test:"on",styles:"display: block;",slot:1234567890,format:"auto",responsive:!0},{ad:null,enabled:!1,id:"ad_1929248609",publisherID:"<your-publisher-id>",test:"off",styles:"display: block;",slot:1929248609,format:"auto",responsive:!0}]}}),i=$.extend(!0,{},o,t),a=i.google.autoHideOnUnfilled,r=i.google.addBorderOnUnfilled,d=i.google.checkTrackingProtection,l=i.google.showErrorPageOnBlocked;var w=setInterval(function(){var o='block'==$('#no_flicker').css("display");e.adapter.attic.getState();if('finished'===e.getState()&&o){var t='Google Adsense',a='pub-123456789012345';if(!!!a.includes('pub-'))return m.warn("\ninvalid publisher id: "+a),m.info("\nmodule disabled"),clearInterval(w),!1;if(b.setState('started'),m.debug("\nstate: "+b.getState()),f.personalization)if(m.info("\nadsense api is being initialized"),p=i.google.publisherID,t='Google Adsense',!p.includes('your')?m.info("\nuse publisherID for Google Adsense (GAS): "+p):(m.debug("\ninvalid publisherID detected for Google Adsense (GAS): "+p),m.info("\nskip initialization for provider: "+t)),m.info("\nadd Google Adsense (GAS) API in section: head"),v.async=!0,v.id='gas-api',v.src='//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',v.setAttribute('data-ad-client',p),document.head.appendChild(v),m.info("\nadsense api initialized"),m.info("\nsetup ad monitoring"),b.ad_monitor(),d){m.debug("\nrun checks for tracking protection"),b.check_tracking_protection();var r=setInterval(function(){if(void 0!==s){var e=navigator.DoNotTrack;s||e?(k="\ntracking protection: enabled",m.debug(k),l&&(m.error("\nredirect to error page (blocked content): HTML-447"),n.location.href='/447.html')):(k="\ntracking protection: disabled",m.info(k))}clearInterval(r)},10)}else b.setState('finished'),m.debug("\nstate: "+b.getState()),m.info("\nmodule initialized successfully"),clearInterval(r);else{m.warn("\nuser consent on personalization: "+f.personalization),m.warn("\ninitializing module: skipped");var c=e.findCookie('__ga');m.debug("\nconsent on cookies disabled for personalization"),m.debug("\ninitialization of module advertising skipped"),c.forEach(function(n){'localhost'==g?e.removeCookie({name:n,domain:!1,secure:!1}):e.removeCookie({name:n,domain:'.'+g,secure:!1})}),d&&(f.personalization||(k="\nconsent on cookies disabled for personalization",m.debug(k),l&&(m.error("\nredirect to error page (blocked content): HTML-447"),n.location.href='/448.html')))}clearInterval(w)}},10)},ad_monitor:function(){$('.adsbygoogle').attrchange({trackValues:!0,callback:function(e){if('unfilled'===e.newValue){var n=e.target.dataset;$('.adsbygoogle').is(":visible")&&(m.warn("\ndetected ad on slot "+n.adSlot+' in state: '+e.newValue),r&&$('.adsbygoogle').addClass('border--dotted'),a&&(m.info("\n hide ad on slot: "+n.adSlot),$('.adsbygoogle').hide()))}}})},check_tracking_protection:function(){function e(){e.promise||(e.promise=new Promise(function(e,n){var o=Date.now(),t=new Image;t.onload=e,t.onerror=function(){Date.now()-o<50?n(new Error("Rejected.")):e(new Error("Takes too long."))},t.src='//www.facebook.com/tr/'}).then(()=>{s=!1})["catch"](e=>{s=!0,n.debug("\ndetection details: "+e)}))}var n=log4javascript.getLogger('j1.adapter.advertising.monitor.tracking');k="\ncheck for trackingprotection",n.info(k),e()},messageHandler:function(e,n){var o=JSON.stringify(n,undefined,2);return k="\nreceived message from "+e+': '+o,m.debug(k),'command'===n.type&&'module_initialized'===n.action&&m.info('\n'+n.text),!0},setState:function(e){b.state=e},getState:function(){return b.state}}}(j1,window);



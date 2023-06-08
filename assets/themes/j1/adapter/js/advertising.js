

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
 #  Adapter generated: 2023-06-08 21:16:43 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.advertising=function(e,n){(new Date).toISOString();var t,o,a,i,r,d,s,c,l,g,f,u,p,m,v,k,h,b=document.createElement('script');document.createElement('script');return{init:function(w){t=$.extend({}),o=$.extend({}),a=$.extend(!0,{},t,o),i=analyticsOptions.google.autoHideOnUnfilled,r=analyticsOptions.google.addBorderOnUnfilled,d=analyticsOptions.google.checkTrackingProtection,s=analyticsOptions.google.showErrorPageOnBlocked;$.extend({module_name:'j1.adapter.advertising',generated:'2023-06-08 21:16:43 +0200'},w);f=e.getCookieNames(),u=e.readCookie(f.user_consent),l=new liteURL(n.location.href),g=l.hostname,v=e.adapter.advertising,k=log4javascript.getLogger('j1.adapter.advertising.google'),v.setState('started'),k.debug("\nstate: "+v.getState()),k.info("\nmodule is being initialized");var S=setInterval(function(){if('finished'==e.getState()){if(m=a.publisherID,p='Google Adsense',!!m.includes('your'))return k.warn("\ninvalid publisherID detected for Google Adsense (GAS): "+m),k.info("\nskip initialization for provider: "+p),clearInterval(S),!1;if(u.personalization){if(k.info("\nadd gas api in section: head"),b.async=!0,b.id='gas-api',b.src='//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',b.setAttribute('data-ad-client','ca-pub-3885670015316130'),document.head.appendChild(b),k.debug("\nsetup monitoring"),v.monitor_ads(),d){k.debug("\nrun checks for tracking protection"),v.check_tracking_protection();var t=setInterval(function(){if(void 0!==c){var e=navigator.DoNotTrack;c||e?(h="\ntracking protection: enabled",k.warn(h),s&&(k.error("\nredirect to error page (blocked content): HTML-447"),n.location.href='/447.html')):(h="\ntracking protection: disabled",k.info(h))}clearInterval(t)},25)}else k.info("\nsetup monitoring"),v.monitor_ads(),v.setState('finished'),k.debug("\nstate: "+v.getState()),k.info("\nmodule initialized successfully"),clearInterval(t);clearInterval(S)}else{var o=e.findCookie('__ga');k.warn("\nconsent on cookies disabled for personalization"),k.warn("\ninitialization of module advertising skipped"),o.forEach(function(n){'localhost'==g?e.removeCookie({name:n,domain:!1,secure:!1}):e.removeCookie({name:n,domain:'.'+g,secure:!1})}),d&&(u.personalization||(h="\nconsent on cookies disabled for personalization",k.warn(h),s&&(k.error("\nredirect to error page (blocked content): HTML-447"),n.location.href='/448.html'))),clearInterval(S)}}},25)},monitor_ads:function(){var e=log4javascript.getLogger('j1.adapter.advertising.monitor.ads');$('.adsbygoogle').attrchange({trackValues:!0,callback:function(n){if('unfilled'===n.newValue){var t=n.target.dataset;$('#'+t.adSlot).is(":visible")&&(r&&$('.adsbygoogle').addClass('border--dotted'),t.adClient&&(e.warn("\nfound ad state "+n.newValue+' for slot: '+t.adSlot),i&&(e.warn("\n hide ad for slot: "+t.adSlot),$('#'+t.adSlot).hide())))}}})},check_tracking_protection:function(){function e(){e.promise||(e.promise=new Promise(function(e,n){var t=Date.now(),o=new Image;o.onload=e,o.onerror=function(){Date.now()-t<50?n(new Error("Rejected.")):e(new Error("Takes too long."))},o.src='//www.facebook.com/tr/'}).then(()=>{c=!1})["catch"](e=>{c=!0,n.debug("\ndetection details: "+e)}))}var n=log4javascript.getLogger('j1.adapter.advertising.monitor.tracking');h="\ncheck for trackingprotection",n.info(h),e()},place_ads:function(){h="\nads are being placed",k.info(h);var n=setInterval(function(){'finished'===e.getState()&&clearInterval(n)})},messageHandler:function(e,n){var t=JSON.stringify(n,undefined,2);return h="\nreceived message from "+e+': '+t,k.debug(h),'command'===n.type&&'module_initialized'===n.action&&k.info('\n'+n.text),!0},setState:function(e){v.state=e},getState:function(){return v.state}}}(j1,window);



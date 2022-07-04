

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
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2022-07-04 10:23:46 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.advertising=function(e,t){(new Date).toISOString();var n,a,o,i,r,d,s,c,l,g,u=document.createElement('script'),f=(document.createElement('script'),!1),p=!0,m=!0,v=!0;return{init:function(f){$.extend({module_name:'j1.adapter.advertising',generated:'2022-07-04 10:23:46 +0000'},f);i=e.getCookieNames(),r=e.readCookie(i.user_consent),a=new liteURL(t.location.href),o=a.hostname,c=e.adapter.advertising,l=log4javascript.getLogger('j1.adapter.advertising.google'),c.setState('started'),l.debug("\nstate: "+c.getState()),l.info("\nmodule is being initialized");var p=setInterval(function(){if('finished'==e.getState()){if(d='Google Adsense',!!(s='<your-publisher-id>').includes('your'))return l.warn("\ninvalid publisherID detected for Google Adsense (GAS): "+s),l.info("\nskip initialization for provider: "+d),clearInterval(p),!1;if(r.personalization){if(l.info("\nadd gas api in section: head"),u.async=!0,u.id='gas-api',u.src='//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',u.setAttribute('data-ad-client','ca-pub-3885670015316130'),document.head.appendChild(u),l.debug("\nsetup monitoring"),c.monitor_ads(),m){l.debug("\nrun checks for tracking protection"),c.check_tracking_protection();var a=setInterval(function(){if(void 0!==n){var e=navigator.DoNotTrack;n||e?(g="\ntracking protection: enabled",l.warn(g),v&&(l.error("\nredirect to error page (blocked content): HTML-447"),t.location.href='/447.html')):(g="\ntracking protection: disabled",l.info(g))}clearInterval(a)},25)}else l.info("\nsetup monitoring"),c.monitor_ads(),c.setState('finished'),l.debug("\nstate: "+c.getState()),l.info("\nmodule initialized successfully"),clearInterval(a);clearInterval(p)}else{var i=e.findCookie('__ga');l.warn("\nconsent on cookies disabled for personalization"),l.warn("\ninitialization of module advertising skipped"),i.forEach(function(t){'localhost'==o?e.removeCookie({name:t,domain:!1,secure:!1}):e.removeCookie({name:t,domain:'.'+o,secure:!1})}),m&&(r.personalization||(g="\nconsent on cookies disabled for personalization",l.warn(g),v&&(l.error("\nredirect to error page (blocked content): HTML-447"),t.location.href='/448.html'))),clearInterval(p)}}},25)},monitor_ads:function(){var e=log4javascript.getLogger('j1.adapter.advertising.monitor.ads');$('.adsbygoogle').attrchange({trackValues:!0,callback:function(t){if('unfilled'===t.newValue){var n=t.target.dataset;$('#'+n.adSlot).is(":visible")&&(p&&$('.adsbygoogle').addClass('border--dotted'),n.adClient&&(e.warn("\nfound ad state "+t.newValue+' for slot: '+n.adSlot),f&&(e.warn("\n hide ad for slot: "+n.adSlot),$('#'+n.adSlot).hide())))}}})},check_tracking_protection:function(){function e(){e.promise||(e.promise=new Promise(function(e,t){var n=Date.now(),a=new Image;a.onload=e,a.onerror=function(){Date.now()-n<50?t(new Error("Rejected.")):e(new Error("Takes too long."))},a.src='//www.facebook.com/tr/'}).then(()=>{n=!1})["catch"](e=>{n=!0,t.debug("\ndetection details: "+e)}))}var t=log4javascript.getLogger('j1.adapter.advertising.monitor.tracking');g="\ncheck for trackingprotection",t.info(g),e()},place_ads:function(){g="\nads are being placed",l.info(g);var t=setInterval(function(){'finished'===e.getState()&&clearInterval(t)})},messageHandler:function(e,t){var n=JSON.stringify(t,undefined,2);return g="\nreceived message from "+e+': '+n,l.debug(g),'command'===t.type&&'module_initialized'===t.action&&l.info('\n'+t.text),!0},setState:function(e){c.state=e},getState:function(){return c.state}}}(j1,window);



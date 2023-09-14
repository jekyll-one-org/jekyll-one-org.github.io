

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/analytics.js
 # J1 Adapter for the analytics module
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-09-14 22:19:01 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.analytics=function(e,n){var t,a,o,i,s,l,d,g,r,c,u,m,f=new liteURL(n.location.href).hostname,y=document.createElement('script'),p=e.getCookieNames(),I=((new Date).toISOString(),!1);return{init:function(){var n=setInterval(function(m){var k='block'==$('#no_flicker').css("display");if('finished'===e.getState()&&k){t=$.extend({},{enabled:!1,provider:"google",trackingID:"your-tracking-id",skipAllHosts:"localhost, 127.0.0.1",google:{optInOut:!0,anonymizeIP:!0}}),a=$.extend({},{enabled:!0,skipAllHosts:"localhost, 127.0.0.1",trackingID:"<your-tracking-id>",google:{anonymizeIP:!1}}),o=$.extend(!0,{},t,a),i=o.trackingID,s=o.skipAllHosts,o.google.optInOut,o.google.anonymizeIP,l=!i.includes('your');$.extend({module_name:'j1.adapter.analytics',generated:'2023-09-14 22:19:01 +0200'},m);c=e.adapter.analytics,u=log4javascript.getLogger('j1.adapter.analytics'),c.setState('started'),u.debug("\nstate: "+c.getState()),u.info("\nmodule initializing: started"),e.findCookie('_ga').forEach(function(n){u.debug("\ndelete cookie created by Google Analytics: "+n),'localhost'==f?e.removeCookie({name:n,domain:!1,secure:!1}):e.removeCookie({name:n,domain:'.'+f,secure:!1})}),r=null!==document.getElementById('google-tag-manager'),d=s.replace(/,/g,' '),I=d.includes(f),(g=e.readCookie(p.user_consent)).analysis&&I&&l&&u.debug("\nGoogle Analytics skipped for: "+f),r||I||(u.info("\nGoogle Analytics added for: "+f),u.info("\nGoogle Analytics API added in section: head"),y.async=!0,y.id='google-tag-manager',y.src='//www.googletagmanager.com/gtag/js?id='+i,document.head.appendChild(y)),(g=e.readCookie(p.user_consent)).analysis&&!I?l?(u.info("\nuser consent on analytics: "+g.analysis),u.info("\nenable Google Analytics on ID: "+i),GTagOptIn.register(i),GTagOptIn.optIn()):u.debug("\ninvalid trackig id detected for Google Analytics: "+i):(u.info("\nuser consent on analytics: "+g.analysis),u.debug("\ndisable Google Analytics on ID: "+i),GTagOptIn.register(i),GTagOptIn.optOut()),c.setState('finished'),u.debug("\nstate: "+c.getState()),u.info("\nmodule initializing: finished"),clearInterval(n)}},10)},messageHandler:function(e,n){var t=JSON.stringify(n,undefined,2);return m="\nreceived message from "+e+': '+t,u.debug(m),'command'===n.type&&'module_initialized'===n.action&&u.info('\n'+n.text),!0},setState:function(e){c.state=e},getState:function(){return c.state}}}(j1,window);



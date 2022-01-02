

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/analytics.js
 # J1 Adapter for the analytics module
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
'use strict';j1.adapter.analytics=function(e,n){var t,a,o,i,s=new liteURL(n.location.href).hostname,r=document.createElement('script'),c='G-299QGW5RJH',d=!c.includes('your'),g=e.getCookieNames();(new Date).toISOString();return{init:function(n){$.extend({module_name:'j1.adapter.analytics',generated:'2022-01-02 13:07:49 +0000'},n);a=e.adapter.analytics,o=log4javascript.getLogger('j1.adapter.analytics.google'),a.setState('started'),o.info("\nstate: "+a.getState()),o.info("\nmodule is being initialized"),e.findCookie('_ga').forEach(function(n){o.warn("\ndelete cookie created by Google Analytics: "+n),'localhost'==s?e.removeCookie({name:n,domain:!1,secure:!1}):e.removeCookie({name:n,domain:'.'+s,secure:!1})});var i=setInterval(function(){'finished'==e.getState()&&(document.getElementById('google-tag-manager')||(o.info("\nGoogle Analytics API added in section: head"),r.async=!0,r.id='google-tag-manager',r.src='//www.googletagmanager.com/gtag/js?id='+c,document.head.appendChild(r)),(t=e.readCookie(g.user_consent)).analysis?d?(o.info("\nuser consent on analytics: "+t.analysis),o.info("\nenable Google Analytics on ID: "+c),GTagOptIn.register(c),GTagOptIn.optIn()):o.warn("\ninvalid trackig id detected for Google Analytics: "+c):(o.info("\nuser consent on analytics: "+t.analysis),o.warn("\ndisable Google Analytics on ID: "+c),GTagOptIn.register(c),GTagOptIn.optOut()),clearInterval(i))},25)},messageHandler:function(e,n){var t=JSON.stringify(n,undefined,2);return i="\nreceived message from "+e+': '+t,o.debug(i),'command'===n.type&&'module_initialized'===n.action&&o.info('\n'+n.text),!0},setState:function(e){a.state=e},getState:function(){return a.state}}}(j1,window);





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
 #  Adapter generated: 2021-12-24 19:59:21 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.analytics=function(e){var n,t,a,i,o=document.createElement('script'),s='G-299QGW5RJH',r=!s.includes('your'),g=e.getCookieNames();(new Date).toISOString();return{init:function(i){$.extend({module_name:'j1.adapter.analytics',generated:'2021-12-24 19:59:21 +0000'},i);t=e.adapter.analytics,a=log4javascript.getLogger('j1.adapter.analytics.google'),t.setState('started'),a.info("\nstate: "+t.getState()),a.info("\nmodule is being initialized"),e.findCookie('_ga').forEach(function(n){a.warn("\ndelete cookie created by Google Analytics: "+n),e.removeCookie({name:n,domain:!1,secure:!1})});var d=setInterval(function(){'finished'==e.getState()&&(document.getElementById('google-tag-manager')||(a.info("\nGoogle Analytics API added in section: head"),o.async=!0,o.id='google-tag-manager',o.src='//www.googletagmanager.com/gtag/js?id='+s,document.head.appendChild(o)),(n=e.readCookie(g.user_consent)).analysis?r?(a.info("\nuser consent on analytics: "+n.analysis),a.info("\nenable Google Analytics on ID: "+s),GTagOptIn.register(s),GTagOptIn.optIn()):a.warn("\ninvalid trackig id detected for Google Analytics: "+s):(a.info("\nuser consent on analytics: "+n.analysis),a.warn("\ndisable Google Analytics on ID: "+s),GTagOptIn.register(s),GTagOptIn.optOut()),clearInterval(d))},25)},messageHandler:function(e,n){var t=JSON.stringify(n,undefined,2);return i="\nreceived message from "+e+': '+t,a.debug(i),'command'===n.type&&'module_initialized'===n.action&&a.info('\n'+n.text),!0},setState:function(e){t.state=e},getState:function(){return t.state}}}(j1,window);





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
 #  Adapter generated: 2021-12-23 14:09:54 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.analytics=function(e){var t,n,a;document.createElement('script'),e.getCookieNames();return{init:function(){var t=setInterval(function(){'finished'==e.getState()&&((n=log4javascript.getLogger('j1.adapter.analytics.google')).info("\nga: disabled"),clearInterval(t))},25)},messageHandler:function(e,t){var i=JSON.stringify(t,undefined,2);return a="\nreceived message from "+e+': '+i,n.debug(a),'command'===t.type&&'module_initialized'===t.action&&n.info('\n'+t.text),!0},setState:function(e){t.state=e},getState:function(){return t.state}}}(j1,window);



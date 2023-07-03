

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
 #  Adapter generated: 2023-07-03 19:37:15 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.analytics=function(e,t){var n,a,i;new liteURL(t.location.href).hostname,document.createElement('script'),e.getCookieNames(),(new Date).toISOString();return{init:function(){var t=setInterval(function(){var n='block'==$('#no_flicker').css("display");'finished'===e.getState()&&n&&(a=log4javascript.getLogger('j1.adapter.analytics.google')).info("\nGoogle Analytics: disabled"),clearInterval(t)},10)},messageHandler:function(e,t){var n=JSON.stringify(t,undefined,2);return i="\nreceived message from "+e+': '+n,a.debug(i),'command'===t.type&&'module_initialized'===t.action&&a.info('\n'+t.text),!0},setState:function(e){n.state=e},getState:function(){return n.state}}}(j1,window);



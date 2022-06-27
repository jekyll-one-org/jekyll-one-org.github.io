

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/analytics.js
 # J1 Adapter for the analytics module
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2022 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2022-06-27 08:20:27 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.analytics=function(e,t){var n,i,a;new liteURL(t.location.href).hostname,document.createElement('script'),'<your-tracking-id>'.includes('your'),e.getCookieNames(),(new Date).toISOString();return{init:function(){var t=setInterval(function(){'finished'==e.getState()&&((i=log4javascript.getLogger('j1.adapter.analytics.google')).info("\nGoogle Analytics: disabled"),clearInterval(t))},25)},messageHandler:function(e,t){var n=JSON.stringify(t,undefined,2);return a="\nreceived message from "+e+': '+n,i.debug(a),'command'===t.type&&'module_initialized'===t.action&&i.info('\n'+t.text),!0},setState:function(e){n.state=e},getState:function(){return n.state}}}(j1,window);



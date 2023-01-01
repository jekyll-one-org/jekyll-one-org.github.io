

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/comments.js
 # J1 Adapter for the comments module
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-01-01 16:45:48 +0100
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.comments=function(e){var t,n,i;(new Date).toISOString(),document.createElement('script'),document.createElement('script'),document.createElement('script'),'<your-hyvor-site-id>'.includes('your'),e.getCookieNames();return{init:function(){var t=setInterval(function(){'finished'==e.getState()&&((n=log4javascript.getLogger('j1.adapter.comments')).info("\ncomment services: disabled"),clearInterval(t))},25)},messageHandler:function(e,t){var r=JSON.stringify(t,undefined,2);return i="\nreceived message from "+e+': '+r,n.debug(i),'command'===t.type&&'module_initialized'===t.action&&n.info('\n'+t.text),!0},setState:function(e){t.state=e},getState:function(){return t.state}}}(j1,window);



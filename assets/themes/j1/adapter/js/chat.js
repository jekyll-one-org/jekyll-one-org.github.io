

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/chat.js
 # J1 Adapter for the Chat module
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023, 2024 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-11-04 20:29:54 +0100
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.chat=function(t,e){var n,a,i;new URL(e.location.href).hostname,document.createElement('script'),t.getCookieNames(),(new Date).toISOString();return{init:function(){var e=setInterval(function(){var n='block'==$('#no_flicker').css("display"),i='finished'==t.adapter.attic.getState();'finished'==t.getState()&&n&&i&&((a=log4javascript.getLogger('j1.adapter.chat')).info("\nchat: disabled"),clearInterval(e))},10)},messageHandler:function(t,e){var n=JSON.stringify(e,undefined,2);return i="\nreceived message from "+t+': '+n,a.debug(i),'command'===e.type&&'module_initialized'===e.action&&a.info('\n'+e.text),!0},setState:function(t){n.state=t},getState:function(){return n.state}}}(j1,window);





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
 #  Adapter generated: 2024-04-01 01:16:05 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.chatbot=((e,t)=>{var a,n,i,o,r;new URL(t.location.href).hostname,document.createElement('script'),e.getCookieNames(),(new Date).toISOString();return{init:()=>{var t=setInterval(()=>{var a='block'===$('#content').css("display");'finished'===e.getState()&&a&&(o=Date.now(),(n=log4javascript.getLogger('j1.adapter.chatbot')).info("\nchatbot: disabled"),r=Date.now(),n.info("\nmodule initializing time: "+(r-o)+'ms'),clearInterval(t))},10)},messageHandler:(e,t)=>{var a=JSON.stringify(t,undefined,2);return i="\nreceived message from "+e+': '+a,n.debug(i),'command'===t.type&&'module_initialized'===t.action&&n.info('\n'+t.text),!0},setState:e=>{a.state=e},getState:()=>a.state}})(j1,window);



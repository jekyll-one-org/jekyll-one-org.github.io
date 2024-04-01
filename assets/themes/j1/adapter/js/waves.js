

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/waves.js
 # J1 Adapter for the waves module
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023, 2024 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 # NOTE: Wave styles defind in /assets/data/panel.html, key 'wave'
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2024-04-01 01:16:05 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.waves=((e,t)=>{var i,n,a,d,s,o,l,r,m,g,h,u,f=e.getCookieNames(),v=e.readCookie(f.user_state);$(t).width();return{init:t=>{$.extend({module_name:'j1.adapter.waves',generated:'2024-04-01 01:16:05 +0200'},t);d=null!=t?$.extend({},t):{},i=$.extend({},{enabled:!1,themes:["UnoLight"]}),n=$.extend({},{enabled:!0,themes:["UnoLight"]}),a=$.extend(!0,{},i,n,d),r=e.adapter.waves,l=v.theme_name,m=log4javascript.getLogger('j1.adapter.wave');var g=setInterval(()=>{var t='block'===$('#content').css("display"),i='finished'===e.getState();e.adapter.attic.getState();i&&t&&(h=Date.now(),s=a.themes.toString(),o=a.themes.indexOf(l)>-1,r.setState('started'),m.debug("\nstate: "+r.getState()),m.info("\nmodule is being initialized"),m.debug("\nthemes allowd: "+s),m.debug("\ntheme detected: "+l),'all'===s?(m.info("\nactivate waves for theme: all"),setTimeout(()=>{$('.wave').show(),m.info("\ninitializing module finished")},1e3)):o?(m.info("\nactivate waves for theme: "+l),setTimeout(()=>{$('.wave').show(),m.info("\ninitializing module finished")},1e3)):(m.warn("\nno valid theme/s found"),m.warn("\ndeactivate (hide) waves"),setTimeout(()=>{$('.wave').hide(),m.info("\ninitializing module finished")},1e3)),r.setState('finished'),m.debug("\nstate: "+r.getState()),m.info("\ninitializing module finished"),u=Date.now(),m.info("\nmodule initializing time: "+(u-h)+'ms'),clearInterval(g))},10)},messageHandler:(e,t)=>{var i=JSON.stringify(t,undefined,2);return g="\nreceived message from "+e+': '+i,m.debug(g),'command'===t.type&&'module_initialized'===t.action&&m.info('\n'+t.text),!0},setState:e=>{r.state=e},getState:()=>r.state}})(j1,window);



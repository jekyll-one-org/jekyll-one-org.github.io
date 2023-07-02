

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/waves.js
 # J1 Adapter for the waves module
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 # NOTE: Wave styles defind in /assets/data/panel.html, key 'wave'
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-07-02 20:26:42 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.waves=function(e,t){var n,i,a,d,o,s,r,l,u,f,m=e.getCookieNames(),g=e.readCookie(m.user_state);$(t).width();return{init:function(t){$.extend({module_name:'j1.adapter.waves',generated:'2023-07-02 20:26:42 +0200'},t);d=null!=t?$.extend({},t):{},n=$.extend({},{enabled:!1,themes:["UnoLight"]}),i=$.extend({},{enabled:!0,themes:["UnoLight"]}),a=$.extend(!0,{},n,i,d),l=e.adapter.waves,r=g.theme_name,u=log4javascript.getLogger('j1.adapter.wave');var f=setInterval(function(){var t='block'==$('#no_flicker').css("display");e.adapter.attic.getState();'finished'===e.getState()&&t&&(o=a.themes.toString(),s=a.themes.indexOf(r)>-1,l.setState('started'),u.debug("\nstate: "+l.getState()),u.info("\nmodule is being initialized"),u.debug("\nthemes allowd: "+o),u.debug("\ntheme detected: "+r),'all'===o?(u.info("\nactivate waves for theme: all"),setTimeout(function(){$('.wave').show(),u.info("\ninitializing module finished")},1e3)):s?(u.info("\nactivate waves for theme: "+r),setTimeout(function(){$('.wave').show(),u.info("\ninitializing module finished")},1e3)):(u.warn("\nno valid theme/s found"),u.warn("\ndeactivate (hide) waves"),setTimeout(function(){$('.wave').hide(),u.info("\ninitializing module finished")},1e3)),clearInterval(f))},10)},messageHandler:function(e,t){var n=JSON.stringify(t,undefined,2);return f="\nreceived message from "+e+': '+n,u.debug(f),'command'===t.type&&'module_initialized'===t.action&&u.info('\n'+t.text),!0},setState:function(e){l.state=e},getState:function(){return l.state}}}(j1,window);



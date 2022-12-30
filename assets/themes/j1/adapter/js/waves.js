

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
 #  Adapter generated: 2022-12-30 16:55:47 +0100
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.waves=function(e,t){var n,a,i,d,s,o,r=e.getCookieNames(),l=e.readCookie(r.user_state);$(t).width();return{init:function(t){$.extend({module_name:'j1.adapter.waves',generated:'2022-12-30 16:55:47 +0100'},t);var o=null!=t?$.extend({},t):{},r=$.extend({},{enabled:!1,themes:["all"]}),m=$.extend({},{enabled:!0,themes:["UnoLight"]}),u=$.extend({},r,m,o);d=e.adapter.waves,i=l.theme_name,s=log4javascript.getLogger('j1.adapter.wave');var v=setInterval(function(){'finished'===e.getState()&&(n=u.themes.toString(),a=u.themes.indexOf(i)>-1,d.setState('started'),s.debug("\nstate: "+d.getState()),s.info("\nmodule is being initialized"),s.debug("\nthemes allowd: "+n),s.debug("\ntheme detected: "+i),'all'===n?(s.info("\nactivate waves for theme: all"),$('.wave').show()):a?(s.info("\nactivate waves for theme: "+i),$('.wave').show()):(s.warn("\nno valid theme/s found"),s.warn("\ndeactivate (hide) waves"),$('.wave').hide()),s.info("\ninitializing module finished"),clearInterval(v))},25)},messageHandler:function(e,t){var n=JSON.stringify(t,undefined,2);return o="\nreceived message from "+e+': '+n,s.debug(o),'command'===t.type&&'module_initialized'===t.action&&s.info('\n'+t.text),!0},setState:function(e){d.state=e},getState:function(){return d.state}}}(j1,window);



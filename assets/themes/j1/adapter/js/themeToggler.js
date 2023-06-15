

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/themeToggler.js
 # J1 Adapter for the Theme Toggler module
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
 #  Adapter generated: 2023-06-15 22:21:02 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.themeToggler=function(e,t){var i,n,s,a,o,r,l,m,c,d,h=e.getCookieNames(),g=e.readCookie(h.user_state),u=($(t).width(),!!new liteURL(t.location.href).protocol.includes('https'));h=e.getCookieNames(),g={};return{init:function(t){c=log4javascript.getLogger('j1.adapter.theme_toggler');$.extend({module_name:'j1.adapter.waves',generated:'2023-06-15 22:21:02 +0200'},t);m=null!=t?$.extend({},t):{},o=$.extend({},{enabled:!1,themes:{light:{name:"UnoLight",css_file:"/assets/themes/j1/core/css/themes/unolight/bootstrap.css"},dark:{name:"UnoDark",css_file:"/assets/themes/j1/core/css/themes/unodark/bootstrap.css"}}}),r=$.extend({},{enabled:!0}),l=$.extend(!0,{},o,r,m),s=l.themes.light.name,i=l.themes.light.css_file,a=l.themes.dark.name,n=l.themes.dark.css_file;var d=setInterval(function(){var t='block'==$('#no_flicker').css("display"),o='finished'==e.adapter.attic.getState();'finished'===e.getState()&&t&&o&&(c.info("\ninitialize module: started"),g=e.readCookie(h.user_state),$('#quickLinksThemeTogglerButton').length&&g.theme_name==a&&$('#quickLinksThemeTogglerButton a i').toggleClass('mdi-lightbulb mdi-lightbulb-outline'),$('#quickLinksThemeTogglerButton').click(function(){g.theme_name==s?(g.theme_name=a,g.theme_css=n,g.theme_icon='mdi-lightbulb'):(g.theme_name=s,g.theme_css=i,g.theme_icon='mdi-lightbulb-outline'),c.info("\nswitch theme to: "+g.theme_name),g.writer='themeToggler',e.writeCookie({name:h.user_state,data:g,secure:u,expires:365})?location.reload(!0):c.error("\nfailed write to cookie: "+h.user_consent)}),c.info("\ninitializing module: finished"),clearInterval(d))},10)},messageHandler:function(e,t){var i=JSON.stringify(t,undefined,2);return d="\nreceived message from "+e+': '+i,c.debug(d),'command'===t.type&&'module_initialized'===t.action&&c.info('\n'+t.text),!0},setState:function(e){_this.state=e},getState:function(){return _this.state}}}(j1,window);



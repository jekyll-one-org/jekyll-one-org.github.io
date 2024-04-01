

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/themeToggler.js
 # J1 Adapter for the Theme Toggler module
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
'use strict';j1.adapter.themeToggler=((e,t)=>{var i,a,n,s,o,r,l,m,d,g,h,c,u,b=e.getCookieNames(),f=e.readCookie(b.user_state),k=($(t).width(),!!new liteURL(t.location.href).protocol.includes('https'));b=e.getCookieNames(),f={};return{init:t=>{$.extend({module_name:'j1.adapter.themeToggler',generated:'2024-04-01 01:16:05 +0200'},t);m=null!=t?$.extend({},t):{},g=log4javascript.getLogger('j1.adapter.themeToggler'),d=e.adapter.themeToggler,o=$.extend({},{enabled:!1,themes:{light:{name:"UnoLight",css_file:"/assets/themes/j1/core/css/themes/unolight/bootstrap.css"},dark:{name:"UnoDark",css_file:"/assets/themes/j1/core/css/themes/unodark/bootstrap.css"}}}),r=$.extend({},{enabled:!0}),l=$.extend(!0,{},o,r,m),n=l.themes.light.name,i=l.themes.light.css_file,s=l.themes.dark.name,a=l.themes.dark.css_file;var h=setInterval(()=>{var t='block'===$('#content').css("display"),o='finished'===e.getState(),r='finished'===e.adapter.navigator.getState();o&&t&&r&&(c=Date.now(),f=e.readCookie(b.user_state),d.setState('started'),g.debug("\nset module state to: "+d.getState()),g.info("\ninitializing module: started"),$('#quickLinksThemeTogglerButton').length&&f.theme_name===s&&$('#quickLinksThemeTogglerButton a i').toggleClass('mdib-lightbulb mdib-lightbulb-outline'),$('#quickLinksThemeTogglerButton').click(function(){f.theme_name===n?(f.theme_name=s,f.theme_css=a,f.theme_icon='mdib-lightbulb'):(f.theme_name=n,f.theme_css=i,f.theme_icon='mdib-lightbulb-outline'),g.info("\nswitch theme to: "+f.theme_name),f.writer='themeToggler',e.writeCookie({name:b.user_state,data:f,secure:k,expires:365})?location.reload(!0):g.error("\nfailed write to cookie: "+b.user_consent)}),d.setState('finished'),g.debug("\nstate: "+d.getState()),g.info("\ninitializing module: finished"),u=Date.now(),g.info("\nmodule initializing time: "+(u-c)+'ms'),clearInterval(h))},10)},messageHandler:(e,t)=>{var i=JSON.stringify(t,undefined,2);return h="\nreceived message from "+e+': '+i,g.debug(h),'command'===t.type&&'module_initialized'===t.action&&g.info('\n'+t.text),!0},setState:e=>{d.state=e},getState:()=>d.state}})(j1,window);



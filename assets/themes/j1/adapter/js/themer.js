

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/themer.js
 # JS Adapter for J1 themer (bootstrapThemeSwitcher)
 #
 # Product/Info:
 # https://jekyll.one
 # https://github.com/jguadagno/bootstrapThemeSwitcher
 #
 # Copyright (C) 2021 Juergen Adams
 # Copyright (C) 2014 Joseph Guadagno
 #
 # J1 Template is licensed under the MIT License.
 # For details, see https://jekyll.one
 # bootstrapThemeSwitcher is licensed under the MIT License.
 # For details, see https://github.com/jguadagno/bootstrapThemeSwitcher/blob/master/LICENSE
 # -----------------------------------------------------------------------------
 # NOTE:
 #  Setup of theme loaders for local_themes|remote_themes moved
 #  to adapter navigator.js
 # -----------------------------------------------------------------------------
 # Adapter generated: 2021-07-20 12:49:08 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.themer=function(e,t){function o(e){var t=document.styleSheets;t[t.length-1];for(var o in document.styleSheets)if(t[o].href&&t[o].href.indexOf(e)>-1)return!0;return!1}var s,i,a,n,r,c,l,h='production',d=$.extend({},{enabled:!0,retries:30,saveToCookie:!0,debug:!1,preview_page:"/pages/public/previewer/theme/",menu_icon_family:"MDI",menu_icon_color:"#9E9E9E",menu_icon_size:"mdi-sm",cssThemeLink:"bootstrapTheme",defaultCssFile:"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",bootswatchApiUrl:"https://bootswatch.com/api",bootswatchApiVersion:4,loadFromBootswatch:!0,localThemes:"/assets/data/themes.json",excludeBootswatch:"Default, default, Lux, Sketchy",includeBootswatch:"",skipIncludeBootswatch:""}),m={},u={},f=e.getCookieNames(),k=!1,p=!1,_='default',w='production'===h?'.min.css':'.css',g='Uno light',b='J1 Team',C='https://jekyll.one/',T='/assets/themes/j1/core/css/themes/'+g.toLowerCase().replace(' ','-')+'/bootstrap'+w,v=0,x=d.retries;return{init:function(){i=e.adapter.themer,l=new liteURL(t.location.href),l.origin,l.origin+'/204.html',r=e.findCookie('j1'),c=e.findCookie('_ga'),a=log4javascript.getLogger('j1.adapter.themer'),i.state='started',a.info("\nstate: "+i.getState());var n=setInterval(function(){k=e.existsCookie(f.user_state),v+=1,k&&(m=e.readCookie(f.user_state),u=e.readCookie(f.user_consent),a.info("\ncookie "+f.user_state+' successfully loaded after: '+25*v+' ms'),''===m.theme_css&&(m.theme_name=g,m.theme_css=T,m.theme_author=b,m.theme_author_url=C),p=o(m.theme_css),s='<link rel="stylesheet" id="'+_+'" href="'+m.theme_css+'" type="text/css" />',Object.keys(m).length>2?m.theme_name.includes('Uno')&&p||$('head').append(s):a.fatal("\ninconsistent state detected for cookie: "+f.user_state),m.theme_switcher=d.enabled,u.analyses&&u.personalization?e.writeCookie({name:f.user_state,data:m,samesite:'Strict',expires:365})||a.error("\nfailed to write cookie: "+f.user_state):e.writeCookie({name:f.user_state,data:m,samesite:'Strict'})||a.error("\nfailed to write cookie: "+f.user_state),d.enabled?(a.info("\nthemes detected as: enabled"),a.info("\ntheme is being initialized: "+m.theme_name),$('#remote_themes').bootstrapThemeSwitcher.defaults={debug:d.debug,saveToCookie:d.saveToCookie,cssThemeLink:d.cssThemeLink,cookieThemeName:d.cookieThemeName,cookieDefaultThemeName:d.cookieDefaultThemeName,cookieThemeCss:d.cookieThemeCss,cookieThemeExtensionCss:d.cookieThemeExtensionCss,cookieExpiration:d.cookieExpiration,cookiePath:d.cookiePath,defaultCssFile:d.defaultCssFile,bootswatchApiUrl:d.bootswatchApiUrl,bootswatchApiVersion:d.bootswatchApiVersion,loadFromBootswatch:d.loadFromBootswatch,localFeed:d.localThemes,excludeBootswatch:d.excludeBootswatch,includeBootswatch:d.includeBootswatch,skipIncludeBootswatch:d.skipIncludeBootswatch},a.info("\ntheme loaded: "+m.theme_name),a.info("\ntheme css file: "+m.theme_css),i.setState('finished'),a.info("\nstate: "+i.getState()),a.info("\nmodule initialized successfully")):(i.setState('finished'),a.info("\nstate: "+i.getState()),a.info("\nthemes detected as: disabled")),clearInterval(n)),v>x&&(a.error("\ninterval max count reached: "+x),a.error("\ncheck failed after: "+25*x+' ms'),a.error("\nloading cookie failed: "+f.user_state),'development'===h&&(c.forEach(e=>console.log('cookieConsent: '+e)),r.forEach(e=>console.log('cookieConsent: '+e))),a.warn("\nredirect to home page"),t.location.href='/',clearInterval(n))},25)},messageHandler:function(e,t){var o=JSON.stringify(t,undefined,2);n="\nreceived message from "+e+': '+o,a.info(n),'command'===t.type&&'module_initialized'===t.action&&a.info('\n'+t.text)},setState:function(e){i.state=e},getState:function(){return i.state}}}(j1,window);



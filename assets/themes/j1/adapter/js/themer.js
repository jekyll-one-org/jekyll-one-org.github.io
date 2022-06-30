

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/themer.js
 # JS Adapter for J1 themer (bootstrapThemeSwitcher)
 #
 # Product/Info:
 # https://jekyll.one
 # https://github.com/jguadagno/bootstrapThemeSwitcher
 #
 # Copyright (C) 2022 Juergen Adams
 # Copyright (C) 2014 Joseph Guadagno
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # bootstrapThemeSwitcher is licensed under the MIT License.
 # For details, see https://github.com/jguadagno/bootstrapThemeSwitcher/blob/master/LICENSE
 # -----------------------------------------------------------------------------
 # NOTE:
 #  Setup of theme loaders for local_themes|remote_themes moved
 #  to adapter navigator.js
 # -----------------------------------------------------------------------------
 # Adapter generated: 2022-06-30 13:11:19 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.themer=function(e,t){function o(e){var t=document.styleSheets;t[t.length-1];for(var o in document.styleSheets)if(t[o].href&&t[o].href.indexOf(e)>-1)return!0;return!1}var s,a,i,n,c,r,h,d='production',l=$.extend({},{enabled:!0,debug:!1,saveToCookie:!0,reloadPageOnChange:!1,retries:30,preview_page:"/pages/public/previewer/theme/",menu_icon_family:"MDI",menu_icon_color:"#9E9E9E",menu_icon_size:"mdi-sm",cssThemeLink:"bootstrapTheme",defaultCssFile:"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",bootswatchApiUrl:"https://bootswatch.com/api",bootswatchApiVersion:5,loadFromBootswatch:!0,localThemes:"/assets/data/themes.json",excludeBootswatch:"Default, default, Lux, Sketchy",includeBootswatch:"",skipIncludeBootswatch:""}),m=!!(h=new liteURL(t.location.href)).protocol.includes('https'),u={},f=e.getCookieNames(),p=!1,g=!1,k='default',w='production'===d?'.min.css':'.css',_='UnoLight',b='J1 Team',C='https://jekyll.one/',T='/assets/themes/j1/core/css/themes/'+_.toLowerCase()+'/bootstrap'+w,v=0,x=l.retries;return{init:function(n){$.extend({module_name:'j1.adapter.themer',generated:'2022-06-30 13:11:19 +0000'},n);a=e.adapter.themer,h=new liteURL(t.location.href),h.origin,h.origin+'/204.html',c=e.findCookie('j1'),r=e.findCookie('_ga'),i=log4javascript.getLogger('j1.adapter.themer'),a.state='started',i.debug("\nstate: "+a.getState());var d=setInterval(function(){p=e.existsCookie(f.user_state),v+=1,p&&(u=e.readCookie(f.user_state),e.readCookie(f.user_consent),i.info("\ncookie "+f.user_state+' successfully loaded after: '+25*v+' ms'),''===u.theme_css&&(u.theme_name=_,u.theme_css=T,u.theme_author=b,u.theme_author_url=C,e.writeCookie({name:f.user_state,data:u,secure:m,expires:365})||i.error("\nfailed to write cookie: "+f.user_consent)),g=o(u.theme_css),s='<link rel="stylesheet" id="'+k+'" href="'+u.theme_css+'" type="text/css" />',Object.keys(u).length>2?u.theme_name.includes('Uno')&&g||$('head').append(s):i.fatal("\ninconsistent state detected for cookie: "+f.user_state),u.theme_switcher=l.enabled,l.enabled?(i.info("\nthemes detected as: enabled"),i.info("\ntheme is being initialized: "+u.theme_name),$('#remote_themes').bootstrapThemeSwitcher.defaults={debug:l.debug,saveToCookie:l.saveToCookie,cssThemeLink:l.cssThemeLink,cookieThemeName:l.cookieThemeName,cookieDefaultThemeName:l.cookieDefaultThemeName,cookieThemeCss:l.cookieThemeCss,cookieThemeExtensionCss:l.cookieThemeExtensionCss,cookieExpiration:l.cookieExpiration,cookiePath:l.cookiePath,defaultCssFile:l.defaultCssFile,bootswatchApiUrl:l.bootswatchApiUrl,bootswatchApiVersion:l.bootswatchApiVersion,loadFromBootswatch:l.loadFromBootswatch,localFeed:l.localThemes,excludeBootswatch:l.excludeBootswatch,includeBootswatch:l.includeBootswatch,skipIncludeBootswatch:l.skipIncludeBootswatch},i.info("\ntheme loaded: "+u.theme_name),i.info("\ntheme css file: "+u.theme_css),a.setState('finished'),i.debug("\nstate: "+a.getState()),i.info("\nmodule initialized successfully")):(a.setState('finished'),i.debug("\nstate: "+a.getState()),i.info("\nthemes detected as: disabled")),clearInterval(d)),v>x&&(i.error("\ninterval max count reached: "+x),i.error("\ncheck failed after: "+25*x+' ms'),i.error("\nloading cookie failed: "+f.user_state),i.debug("\nj1 cookies found:"+c.length),c.forEach(e=>console.log('j1.core.switcher: '+e)),i.debug("\nga cookies found:"+r.length),r.forEach(e=>console.log('j1.core.switcher: '+e)),i.warn("\nredirect to home page"),t.location.href='/',clearInterval(d))},25)},messageHandler:function(e,t){var o=JSON.stringify(t,undefined,2);n="\nreceived message from "+e+': '+o,i.info(n),'command'===t.type&&'module_initialized'===t.action&&i.info('\n'+t.text)},setState:function(e){a.state=e},getState:function(){return a.state}}}(j1,window);



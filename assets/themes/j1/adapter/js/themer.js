

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
 # Adapter generated: 2021-12-15 17:10:20 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.themer=function(e,t){function o(e){var t=document.styleSheets;t[t.length-1];for(var o in document.styleSheets)if(t[o].href&&t[o].href.indexOf(e)>-1)return!0;return!1}var s,i,a,n,c,r,h,l='production',d=$.extend({},{enabled:!0,reloadPageOnChange:!1,retries:30,saveToCookie:!0,debug:!1,preview_page:"/pages/public/previewer/theme/",menu_icon_family:"MDI",menu_icon_color:"#9E9E9E",menu_icon_size:"mdi-sm",cssThemeLink:"bootstrapTheme",defaultCssFile:"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",bootswatchApiUrl:"https://bootswatch.com/api",bootswatchApiVersion:5,loadFromBootswatch:!0,localThemes:"/assets/data/themes.json",excludeBootswatch:"Default, default, Lux, Sketchy",includeBootswatch:"",skipIncludeBootswatch:""}),m=!!(h=new liteURL(t.location.href)).protocol.includes('https'),u={},f=e.getCookieNames(),p=!1,k=!1,g='default',w='production'===l?'.min.css':'.css',_='UnoLight',b='J1 Team',C='https://jekyll.one/',T='/assets/themes/j1/core/css/themes/'+_.toLowerCase()+'/bootstrap'+w,v=0,x=d.retries;return{init:function(){i=e.adapter.themer,h=new liteURL(t.location.href),h.origin,h.origin+'/204.html',c=e.findCookie('j1'),r=e.findCookie('_ga'),a=log4javascript.getLogger('j1.adapter.themer'),i.state='started',a.info("\nstate: "+i.getState());var n=setInterval(function(){p=e.existsCookie(f.user_state),v+=1,p&&(u=e.readCookie(f.user_state),e.readCookie(f.user_consent),a.info("\ncookie "+f.user_state+' successfully loaded after: '+25*v+' ms'),''===u.theme_css&&(u.theme_name=_,u.theme_css=T,u.theme_author=b,u.theme_author_url=C,e.writeCookie({name:f.user_state,data:u,secure:m,expires:365})||a.error("\nfailed to write cookie: "+f.user_consent)),k=o(u.theme_css),s='<link rel="stylesheet" id="'+g+'" href="'+u.theme_css+'" type="text/css" />',Object.keys(u).length>2?u.theme_name.includes('Uno')&&k||$('head').append(s):a.fatal("\ninconsistent state detected for cookie: "+f.user_state),u.theme_switcher=d.enabled,d.enabled?(a.info("\nthemes detected as: enabled"),a.info("\ntheme is being initialized: "+u.theme_name),$('#remote_themes').bootstrapThemeSwitcher.defaults={debug:d.debug,saveToCookie:d.saveToCookie,cssThemeLink:d.cssThemeLink,cookieThemeName:d.cookieThemeName,cookieDefaultThemeName:d.cookieDefaultThemeName,cookieThemeCss:d.cookieThemeCss,cookieThemeExtensionCss:d.cookieThemeExtensionCss,cookieExpiration:d.cookieExpiration,cookiePath:d.cookiePath,defaultCssFile:d.defaultCssFile,bootswatchApiUrl:d.bootswatchApiUrl,bootswatchApiVersion:d.bootswatchApiVersion,loadFromBootswatch:d.loadFromBootswatch,localFeed:d.localThemes,excludeBootswatch:d.excludeBootswatch,includeBootswatch:d.includeBootswatch,skipIncludeBootswatch:d.skipIncludeBootswatch},a.info("\ntheme loaded: "+u.theme_name),a.info("\ntheme css file: "+u.theme_css),i.setState('finished'),a.info("\nstate: "+i.getState()),a.info("\nmodule initialized successfully")):(i.setState('finished'),a.info("\nstate: "+i.getState()),a.info("\nthemes detected as: disabled")),clearInterval(n)),v>x&&(a.error("\ninterval max count reached: "+x),a.error("\ncheck failed after: "+25*x+' ms'),a.error("\nloading cookie failed: "+f.user_state),a.debug("\nj1 cookies found:"+c.length),c.forEach(e=>console.log('j1.core.switcher: '+e)),a.debug("\nga cookies found:"+r.length),r.forEach(e=>console.log('j1.core.switcher: '+e)),a.warn("\nredirect to home page"),t.location.href='/',clearInterval(n))},25)},messageHandler:function(e,t){var o=JSON.stringify(t,undefined,2);n="\nreceived message from "+e+': '+o,a.info(n),'command'===t.type&&'module_initialized'===t.action&&a.info('\n'+t.text)},setState:function(e){i.state=e},getState:function(){return i.state}}}(j1,window);



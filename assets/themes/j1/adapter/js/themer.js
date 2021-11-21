

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
 # Adapter generated: 2021-11-21 14:50:10 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.themer=function(e,t){function o(e){var t=document.styleSheets;t[t.length-1];for(var o in document.styleSheets)if(t[o].href&&t[o].href.indexOf(e)>-1)return!0;return!1}var s,i,a,n,c,r,h,l='production',d=$.extend({},{enabled:!0,reloadPageOnChange:!1,retries:30,saveToCookie:!0,debug:!1,preview_page:"/pages/public/previewer/theme/",menu_icon_family:"MDI",menu_icon_color:"#9E9E9E",menu_icon_size:"mdi-sm",cssThemeLink:"bootstrapTheme",defaultCssFile:"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",bootswatchApiUrl:"https://bootswatch.com/api",bootswatchApiVersion:5,loadFromBootswatch:!0,localThemes:"/assets/data/themes.json",excludeBootswatch:"Default, default, Lux, Sketchy",includeBootswatch:"",skipIncludeBootswatch:""}),m=((h=new liteURL(t.location.href)).protocol.includes('https'),{}),u=e.getCookieNames(),f=!1,p=!1,k='default',g='production'===l?'.min.css':'.css',w='Uno light',_='J1 Team',b='https://jekyll.one/',T='/assets/themes/j1/core/css/themes/'+w.toLowerCase().replace(' ','-')+'/bootstrap'+g,C=0,v=d.retries;return{init:function(){i=e.adapter.themer,h=new liteURL(t.location.href),h.origin,h.origin+'/204.html',c=e.findCookie('j1'),r=e.findCookie('_ga'),a=log4javascript.getLogger('j1.adapter.themer'),i.state='started',a.info("\nstate: "+i.getState());var n=setInterval(function(){f=e.existsCookie(u.user_state),C+=1,f&&(m=e.readCookie(u.user_state),e.readCookie(u.user_consent),a.info("\ncookie "+u.user_state+' successfully loaded after: '+25*C+' ms'),''===m.theme_css&&(m.theme_name=w,m.theme_css=T,m.theme_author=_,m.theme_author_url=b),p=o(m.theme_css),s='<link rel="stylesheet" id="'+k+'" href="'+m.theme_css+'" type="text/css" />',Object.keys(m).length>2?m.theme_name.includes('Uno')&&p||$('head').append(s):a.fatal("\ninconsistent state detected for cookie: "+u.user_state),m.theme_switcher=d.enabled,d.enabled?(a.info("\nthemes detected as: enabled"),a.info("\ntheme is being initialized: "+m.theme_name),$('#remote_themes').bootstrapThemeSwitcher.defaults={debug:d.debug,saveToCookie:d.saveToCookie,cssThemeLink:d.cssThemeLink,cookieThemeName:d.cookieThemeName,cookieDefaultThemeName:d.cookieDefaultThemeName,cookieThemeCss:d.cookieThemeCss,cookieThemeExtensionCss:d.cookieThemeExtensionCss,cookieExpiration:d.cookieExpiration,cookiePath:d.cookiePath,defaultCssFile:d.defaultCssFile,bootswatchApiUrl:d.bootswatchApiUrl,bootswatchApiVersion:d.bootswatchApiVersion,loadFromBootswatch:d.loadFromBootswatch,localFeed:d.localThemes,excludeBootswatch:d.excludeBootswatch,includeBootswatch:d.includeBootswatch,skipIncludeBootswatch:d.skipIncludeBootswatch},a.info("\ntheme loaded: "+m.theme_name),a.info("\ntheme css file: "+m.theme_css),i.setState('finished'),a.info("\nstate: "+i.getState()),a.info("\nmodule initialized successfully")):(i.setState('finished'),a.info("\nstate: "+i.getState()),a.info("\nthemes detected as: disabled")),clearInterval(n)),C>v&&(a.error("\ninterval max count reached: "+v),a.error("\ncheck failed after: "+25*v+' ms'),a.error("\nloading cookie failed: "+u.user_state),a.debug("\nj1 cookies found:"+c.length),c.forEach(e=>console.log('j1.core.switcher: '+e)),a.debug("\nga cookies found:"+r.length),r.forEach(e=>console.log('j1.core.switcher: '+e)),a.warn("\nredirect to home page"),t.location.href='/',clearInterval(n))},25)},messageHandler:function(e,t){var o=JSON.stringify(t,undefined,2);n="\nreceived message from "+e+': '+o,a.info(n),'command'===t.type&&'module_initialized'===t.action&&a.info('\n'+t.text)},setState:function(e){i.state=e},getState:function(){return i.state}}}(j1,window);



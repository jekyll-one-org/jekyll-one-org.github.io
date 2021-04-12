

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
 # Adapter generated: 2021-04-12 21:59:55 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.themer=function(e){function t(e){var t=document.styleSheets;t[t.length-1];for(var o in document.styleSheets)if(t[o].href&&t[o].href.indexOf(e)>-1)return!0;return!1}var o,s,a,i,n='production',c=$.extend({},{enabled:!0,retries:30,saveToCookie:!0,debug:!1,preview_page:"/pages/public/previewer/theme/",menu_icon_family:"MDI",menu_icon_color:"#9E9E9E",menu_icon_size:"mdi-sm",cssThemeLink:"bootstrapTheme",defaultCssFile:"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",bootswatchApiUrl:"https://bootswatch.com/api",bootswatchApiVersion:4,loadFromBootswatch:!0,localThemes:"/assets/data/themes.json",excludeBootswatch:"Default, default, Lux, Sketchy",includeBootswatch:"",skipIncludeBootswatch:""}),m={},r=e.getCookieNames().user_state,h=!1,l='default',d='Uno light',u='J1 Team',f='',p=d.toLowerCase().replace(' ','-'),w='production'==n?'/assets/themes/j1/core/css/themes/'+p+'/bootstrap.min.css':'/assets/themes/j1/core/css/themes/'+p+'/bootstrap.css';return{init:function(){s=e.adapter.themer,a=log4javascript.getLogger('j1.adapter.themer'),s.state='started',a.info('state: '+s.getState()),e.existsCookie(r)&&(m=e.readCookie(r)),''==m.theme_name&&(m.theme_name=d,m.theme_css=w,m.theme_author=u,m.theme_author_url=f),h=t(m.theme_css),o='<link rel="stylesheet" id="'+l+'" href="'+m.theme_css+'" type="text/css" />',m.theme_name.includes('Uno')&&h||$('head').append(o),m.theme_switcher=c.enabled,e.writeCookie({name:r,data:m,expires:365});var i=setInterval(function(){if('finished'==e.getState()){if(c.enabled){if(a.info('themes detected as: enabled'),a.info('theme is being initialized: '+m.theme_name),$('#remote_themes').length){var t=0,o=c.retries;$('#remote_themes').bootstrapThemeSwitcher.defaults={debug:c.debug,saveToCookie:c.saveToCookie,cssThemeLink:c.cssThemeLink,cookieThemeName:c.cookieThemeName,cookieDefaultThemeName:c.cookieDefaultThemeName,cookieThemeCss:c.cookieThemeCss,cookieThemeExtensionCss:c.cookieThemeExtensionCss,cookieExpiration:c.cookieExpiration,cookiePath:c.cookiePath,defaultCssFile:c.defaultCssFile,bootswatchApiUrl:c.bootswatchApiUrl,bootswatchApiVersion:c.bootswatchApiVersion,loadFromBootswatch:c.loadFromBootswatch,localFeed:c.localThemes,excludeBootswatch:c.excludeBootswatch,includeBootswatch:c.includeBootswatch,skipIncludeBootswatch:c.skipIncludeBootswatch};var n=setInterval(function(){t+=1,document.getElementById("remote_themes").getElementsByTagName("li").length>0?(a.info('remote themes loaded: successfully'),a.info('remote themes loaded: successfully after: '+25*t+' ms'),clearInterval(n)):a.debug('wait for theme to be loaded: '+m.theme_name),t>o&&(a.warn('remote themes loading: failed'),a.warn('continue processing'),clearInterval(n))},25);a.info('theme loaded: '+m.theme_name),a.info('theme css file: '+m.theme_css),s.setState('finished'),a.info('state: '+s.getState()),a.info('module initialized successfully'),a.info('met dependencies for: j1.adapter')}}else s.setState('finished'),a.info('state: '+s.getState()),a.info('themes detected as: disabled');clearInterval(i)}},25)},messageHandler:function(e,t){var o=JSON.stringify(t,undefined,2);i='received message from '+e+': '+o,a.info(i),'command'===t.type&&'module_initialized'===t.action&&a.info(t.text)},setState:function(e){s.state=e},getState:function(){return s.state}}}(j1,window);



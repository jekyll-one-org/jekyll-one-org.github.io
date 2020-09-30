

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/themer.js
 # JS Adapter for J1 themer (bootstrapThemeSwitcher)
 #
 # Product/Info:
 # https://jekyll.one
 # https://github.com/jguadagno/bootstrapThemeSwitcher
 #
 # Copyright (C) 2020 Juergen Adams
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
 # Adapter generated: 2020-09-30 20:28:42 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.themer=function(e){function t(e){var t=document.styleSheets;t[t.length-1];for(var o in document.styleSheets)if(t[o].href&&t[o].href.indexOf(e)>-1)return!0;return!1}var o,s,a,i,n='production',c=$.extend({},{enabled:!0,saveToCookie:!0,debug:!1,preview_page:"/pages/public/previewer/theme/",menu_icon_family:"MDI",menu_icon_color:"#9E9E9E",menu_icon_size:"mdi-sm",cssThemeLink:"bootstrapTheme",defaultCssFile:"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",bootswatchApiUrl:"https://bootswatch.com/api",bootswatchApiVersion:4,loadFromBootswatch:!0,localThemes:"/assets/data/themes.json",excludeBootswatch:"Default, default, Lux, Sketchy",includeBootswatch:"",skipIncludeBootswatch:""}),h={},m=e.getCookieNames(),r=m.user_state,l=!1,d=!1,u='default',f='Uno light',p=f.toLowerCase().replace(' ','-'),k='production'==n?'/assets/themes/j1/core/css/themes/'+p+'/bootstrap.min.css':'/assets/themes/j1/core/css/themes/'+p+'/bootstrap.css';return{init:function(){s=e.adapter.themer,a=log4javascript.getLogger('j1.adapter.themer'),s.state='started',a.info('state: '+s.getState()),l=e.existsCookie(r),l&&(h=e.readCookie(r)),''==h.theme_name&&(h.theme_name=f,h.theme_css=k,h.theme_author='J1 Team',h.theme_author_url=''),d=t(h.theme_css),o='<link rel="stylesheet" id="'+u+'" href="'+h.theme_css+'" type="text/css" />',h.theme_name.includes('Uno')&&d||$('head').append(o),e.writeCookie({name:r,data:h}),a.info('themes detected as: enabled'),a.info('theme is being initialized: '+h.theme_name);var i=setInterval(function(){$('#remote_themes').length&&($('#remote_themes').bootstrapThemeSwitcher.defaults={debug:c.debug,saveToCookie:c.saveToCookie,cssThemeLink:c.cssThemeLink,cookieThemeName:c.cookieThemeName,cookieDefaultThemeName:c.cookieDefaultThemeName,cookieThemeCss:c.cookieThemeCss,cookieThemeExtensionCss:c.cookieThemeExtensionCss,cookieExpiration:c.cookieExpiration,cookiePath:c.cookiePath,defaultCssFile:c.defaultCssFile,bootswatchApiUrl:c.bootswatchApiUrl,bootswatchApiVersion:c.bootswatchApiVersion,loadFromBootswatch:c.loadFromBootswatch,localFeed:c.localThemes,excludeBootswatch:c.excludeBootswatch,includeBootswatch:c.includeBootswatch,skipIncludeBootswatch:c.skipIncludeBootswatch},a.info('theme loaded: '+h.theme_name),a.info('theme css file: '+h.theme_css),s.setState('finished'),a.info('state: '+s.getState()),a.info('module initialized successfully'),a.info('met dependencies for: navigator'),clearInterval(i))},25)},messageHandler:function(e,t){var o=JSON.stringify(t,undefined,2);i='received message from '+e+': '+o,a.info(i),'command'===t.type&&'module_initialized'===t.action&&a.info(t.text)},setState:function(e){s.state=e},getState:function(){return s.state}}}(j1,window);



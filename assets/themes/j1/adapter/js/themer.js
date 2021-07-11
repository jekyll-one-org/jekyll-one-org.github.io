

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
 # Adapter generated: 2021-07-11 16:34:22 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.themer=function(e){function t(e){var t=document.styleSheets;t[t.length-1];for(var o in document.styleSheets)if(t[o].href&&t[o].href.indexOf(e)>-1)return!0;return!1}var o,s,a,i,n='production',c=$.extend({},{enabled:!1,retries:30,saveToCookie:!0,debug:!1,preview_page:"/pages/public/previewer/theme/",menu_icon_family:"MDI",menu_icon_color:"#9E9E9E",menu_icon_size:"mdi-sm",cssThemeLink:"bootstrapTheme",defaultCssFile:"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",bootswatchApiUrl:"https://bootswatch.com/api",bootswatchApiVersion:4,loadFromBootswatch:!0,localThemes:"/assets/data/themes.json",excludeBootswatch:"Default, default, Lux, Sketchy",includeBootswatch:"",skipIncludeBootswatch:""}),r={},h={},m=e.getCookieNames(),d=!1,l='default',u='production'===n?'.min.css':'.css',f='Uno light',p='J1 Team',k='https://jekyll.one/',w='/assets/themes/j1/core/css/themes/'+f.toLowerCase().replace(' ','-')+'/bootstrap'+u;return{init:function(){s=e.adapter.themer,a=log4javascript.getLogger('j1.adapter.themer'),s.state='started',a.info('state: '+s.getState());var i=setInterval(function(){e.existsCookie(m.user_state)&&(r=e.readCookie(m.user_state),h=e.readCookie(m.user_consent),''===r.theme_css&&(r.theme_name=f,r.theme_css=w,r.theme_author=p,r.theme_author_url=k),d=t(r.theme_css),o='<link rel="stylesheet" id="'+l+'" href="'+r.theme_css+'" type="text/css" />',r.theme_name.includes('Uno')&&d||$('head').append(o),r.theme_switcher=c.enabled,h.analyses&&h.personalization?e.writeCookie({name:m.user_state,data:r,samesite:'Strict',expires:365}):e.writeCookie({name:m.user_state,data:r,samesite:'Strict'}),c.enabled?(a.info('themes detected as: enabled'),a.info('theme is being initialized: '+r.theme_name),$('#remote_themes').bootstrapThemeSwitcher.defaults={debug:c.debug,saveToCookie:c.saveToCookie,cssThemeLink:c.cssThemeLink,cookieThemeName:c.cookieThemeName,cookieDefaultThemeName:c.cookieDefaultThemeName,cookieThemeCss:c.cookieThemeCss,cookieThemeExtensionCss:c.cookieThemeExtensionCss,cookieExpiration:c.cookieExpiration,cookiePath:c.cookiePath,defaultCssFile:c.defaultCssFile,bootswatchApiUrl:c.bootswatchApiUrl,bootswatchApiVersion:c.bootswatchApiVersion,loadFromBootswatch:c.loadFromBootswatch,localFeed:c.localThemes,excludeBootswatch:c.excludeBootswatch,includeBootswatch:c.includeBootswatch,skipIncludeBootswatch:c.skipIncludeBootswatch},a.info('theme loaded: '+r.theme_name),a.info('theme css file: '+r.theme_css),s.setState('finished'),a.info('state: '+s.getState()),a.info('module initialized successfully')):(s.setState('finished'),a.info('state: '+s.getState()),a.info('themes detected as: disabled')),clearInterval(i))},25)},messageHandler:function(e,t){var o=JSON.stringify(t,undefined,2);i='received message from '+e+': '+o,a.info(i),'command'===t.type&&'module_initialized'===t.action&&a.info(t.text)},setState:function(e){s.state=e},getState:function(){return s.state}}}(j1,window);



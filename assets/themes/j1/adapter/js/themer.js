

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/themer.js
 # JS Adapter for J1 themer (BS Theme themer)
 #
 # Product/Info:
 # https://jekyll.one
 # https://github.com/jguadagno/bootstrapThemethemer
 #
 # Copyright (C) 2020 Juergen Adams
 # Copyright (C) 2014 Joseph Guadagno
 #
 # J1 Template is licensed under the MIT License.
 # For details, see https://jekyll.one
 # BS Theme themer is licensed under the MIT License.
 # For details, see https://github.com/jguadagno/bootstrapThemethemer/blob/master/LICENSE
 # -----------------------------------------------------------------------------
 # NOTE:
 #  Setup of theme selectors (ThemeList|ThemeSelect) moved
 #  to j1_adapter_navigator.js
 # -----------------------------------------------------------------------------
 # Adapter generated: 2020-07-26 17:29:05 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.themer=function(e){var t,s,o,a,i,n,c,r,l,d,h='production',m={},u=e.getCookieNames(),f=u.user_state,p=!1,k='default',g='Uno';return{init:function(){t=e.adapter.themer,l=log4javascript.getLogger('j1.adapter.themer'),t.state='started',l.info('state: '+t.getState()),p=e.existsCookie(f),p&&(m=e.readCookie(f),o=m.theme_name,a=m.theme_css,c=m.theme_extension_css),a?(i='<link rel="stylesheet" id="'+k+'" href="'+a+'" type="text/css" />',r='<link rel="stylesheet" id="'+k+'" href="'+c+'" type="text/css" />'):(o=g,i='<link rel="stylesheet" type="text/css" id="default" href="/assets/themes/j1/core/css/uno.min.css" />',n='<link rel="stylesheet" type="text/css" id="default" href="/assets/themes/j1/core/css/vendor.min.css" />',$('head').append(n)),o!=g&&$('head').append(i),'Uno'===o?$('head link[href*="'+c+'"]').remove():$('head').append(r),l.info('themes detected as: enabled'),l.info('theme is being initialized: '+o);var d=setInterval(function(){'started'==e.adapter.navigator.getState()&&($('#ThemeList').bootstrapThemeSwitcher.defaults={debug:!1,saveToCookie:!0,cssThemeLink:"bootstrapTheme",cookieThemeName:null,cookieDefaultThemeName:null,cookieThemeCss:null,cookieThemeExtensionCss:null,cookieExpiration:null,cookiePath:null,defaultCssFile:"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",bootswatchApiUrl:"https://bootswatch.com/api",bootswatchApiVersion:4,loadFromBootswatch:!0,localFeed:"/assets/data/themes.json",excludeBootswatch:"default,Default,Lux,Sketchy",includeBootswatch:"/assets/themes/j1/core/css/theme_extensions.css",skipIncludeBootswatch:"Uno"},s='Uno'==o||'Bootstrap'==o?'production'===h?o.toLowerCase()+'.min.css':o.toLowerCase()+'.css':'bootstrap.css',l.info('theme loaded: '+o),l.info('theme file: '+s),t.setState('finished'),l.info('state: '+t.getState()),l.info('module initialized successfully'),clearInterval(d))},25)},setCss:function(){e.getStyleValue('bg-primary','background-color')},messageHandler:function(e,t){var s=JSON.stringify(t,undefined,2);d='received message from '+e+': '+s,l.info(d),'command'===t.type&&'module_initialized'===t.action&&l.info(t.text)},setState:function(e){t.state=e},getState:function(){return t.state}}}(j1,window);





  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/themer.js
 # JS Adapter for J1 themer (bootstrapThemeSwitcher)
 #
 # Product/Info:
 # https://jekyll.one
 # https://github.com/jguadagno/bootstrapThemeSwitcher
 #
 # Copyright (C) 2023 Juergen Adams
 # Copyright (C) 2014 Joseph Guadagno
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # bootstrapThemeSwitcher is licensed under the MIT License.
 # For details, see https://github.com/jguadagno/bootstrapThemeSwitcher/blob/master/LICENSE
 # -----------------------------------------------------------------------------
 # NOTE:
 #  Setup of theme loaders for local_themes|remote_themes moved
 #  to adapter navigator.js
 # -----------------------------------------------------------------------------
 # Adapter generated: 2023-06-30 00:59:32 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.themer=function(e,t){function o(e){var t=document.styleSheets;t[t.length-1];for(var o in document.styleSheets)if(t[o].href&&t[o].href.indexOf(e)>-1)return!0;return!1}var s,a,i,n,r,c,l,d,h='production',m=!!h.includes('dev'),u=!!(d=new liteURL(t.location.href)).protocol.includes('https'),f={},p=e.getCookieNames(),_=!1,k='default',w='production'===h?'.min.css':'.css',g='UnoLight',b='J1 Team',v='https://jekyll.one/',C='/assets/themes/j1/core/css/themes/'+g.toLowerCase()+'/bootstrap'+w,x=0,T=function(e,t){if(!$.isFunction(t))throw Error('Not a valid callback');$.ajax({type:'HEAD',url:e,success:$.proxy(t,this,!0),error:$.proxy(t,this,!1)})};return{init:function(n){$.extend({module_name:'j1.adapter.themer',generated:'2023-06-30 00:59:32 +0200'},n);a=e.adapter.themer,i=log4javascript.getLogger('j1.adapter.themer'),r=$.extend({},{enabled:!1,debug:!1,saveToCookie:!0,reloadPageOnChange:!1,retries:30,preview_page:"/pages/public/previewer/current_theme/",menu_icon_family:"MDI",menu_icon_color:"#9E9E9E",menu_icon_size:"mdi-sm",cssThemeLink:"bootstrapTheme",defaultCssFile:"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",bootswatchApiUrl:"https://bootswatch.com/api",bootswatchApiVersion:5,loadFromBootswatch:!0,localThemes:"/assets/data/themes.json",excludeBootswatch:"Default, default, Lux, Sketchy",includeBootswatch:null,skipIncludeBootswatch:null}),c=$.extend({},{enabled:!0}),l=$.extend(!0,{},r,c),l.retries,d=new liteURL(t.location.href),d.origin,d.origin+'/204.html',e.findCookie('j1'),e.findCookie('_ga'),a.state='started',m&&i.debug("\nstate: "+a.getState()),$('#no_flicker').hide(),$('#content').hide(),$('footer_uno').hide();var h=setInterval(function(){_=e.existsCookie(p.user_state),x+=1,_&&(f=e.readCookie(p.user_state),e.readCookie(p.user_consent),m&&i.debug("\ncookie "+p.user_state+' successfully loaded after: '+25*x+' ms'),''===f.theme_css&&(f.theme_name=g,f.theme_css=C,f.theme_author=b,f.theme_author_url=v,e.writeCookie({name:p.user_state,data:f,secure:u,expires:365})||m&&i.error("\nfailed to write cookie: "+p.user_consent)),f.theme_switcher=l.enabled,l.enabled?(m&&(i.info("\nthemes detected as: "+l.enabled),i.info("\nremote themes are being initialized")),$('#remote_themes').bootstrapThemeSwitcher.defaults={debug:l.debug,saveToCookie:l.saveToCookie,cssThemeLink:l.cssThemeLink,cookieThemeName:l.cookieThemeName,cookieDefaultThemeName:l.cookieDefaultThemeName,cookieThemeCss:l.cookieThemeCss,cookieThemeExtensionCss:l.cookieThemeExtensionCss,cookieExpiration:l.cookieExpiration,cookiePath:l.cookiePath,defaultCssFile:l.defaultCssFile,bootswatchApiUrl:l.bootswatchApiUrl,bootswatchApiVersion:l.bootswatchApiVersion,loadFromBootswatch:l.loadFromBootswatch,localFeed:l.localThemes,excludeBootswatch:l.excludeBootswatch,includeBootswatch:l.includeBootswatch,skipIncludeBootswatch:l.skipIncludeBootswatch}):m&&(i.warn("\nthemes detected as: disabled"),i.warn("\nno remote themes are available")),T(f.theme_css,function(t){if(t)var o=setInterval(function(){'finished'==e.getState()&&(s='<link rel="stylesheet" id="'+k+'" href="'+f.theme_css+'" type="text/css" />',$('head').append(s),clearInterval(o))},10);else m&&i.warn("\nthemes CSS invalid: "+f.theme_css),s='<link rel="stylesheet" id="'+k+'" href="'+C+'" type="text/css" />',m&&(i.warn("\nset default theme :"+g),i.debug("\ntheme CSS loaded: "+C)),$('head').append(s),f.theme_name=g,f.theme_css=C,f.theme_author=b,f.theme_author_url=v,e.writeCookie({name:p.user_state,data:f,secure:u,expires:365})||i.error("\nfailed to write cookie: "+p.user_consent),location.reload(!0)}),clearInterval(h))},10),w=setInterval(function(){f=e.readCookie(p.user_state),o(f.theme_css)&&($('#no_flicker').show(),m&&(i.info("\ntheme loaded successfully: "+f.theme_name),i.debug("\ntheme CSS loaded: "+f.theme_css)),a.setState('finished'),m&&(i.debug("\nstate: "+a.getState()),i.info("\nmodule initialized successfully")),clearInterval(w))},10)},messageHandler:function(e,t){var o=JSON.stringify(t,undefined,2);n="\nreceived message from "+e+': '+o,m&&i.info(n),'command'===t.type&&'module_initialized'===t.action&&m&&i.info('\n'+t.text)},setState:function(e){a.state=e},getState:function(){return a.state}}}(j1,window);



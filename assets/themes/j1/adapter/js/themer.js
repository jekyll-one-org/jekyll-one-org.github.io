

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
 # Adapter generated: 2023-07-05 16:42:57 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.themer=function(e,t){function o(e){var t=document.styleSheets;t[t.length-1];for(var o in document.styleSheets)if(t[o].href&&t[o].href.indexOf(e)>-1)return!0;return!1}var s,a,i,n,r,c,l,d,h=!!'production'.includes('dev'),m=!!(d=new liteURL(t.location.href)).protocol.includes('https'),u={},f=e.getCookieNames(),p=!1,_='default',k=h?'.css':'.min.css',w='UnoLight',b='J1 Team',g='https://jekyll.one/',v='/assets/themes/j1/core/css/themes/'+w.toLowerCase()+'/bootstrap'+k,C=0,x=function(e,t){if(!$.isFunction(t))throw Error('Not a valid callback');$.ajax({type:'HEAD',url:e,success:$.proxy(t,this,!0),error:$.proxy(t,this,!1)})};return{init:function(n){$.extend({module_name:'j1.adapter.themer',generated:'2023-07-05 16:42:57 +0200'},n);a=e.adapter.themer,i=log4javascript.getLogger('j1.adapter.themer'),r=$.extend({},{enabled:!1,debug:!1,saveToCookie:!0,reloadPageOnChange:!1,retries:30,preview_page:"/pages/public/tools/previewer/current_theme/",menu_icon_family:"mdib",menu_icon_color:"#9E9E9E",menu_icon_size:"mdib-sm",cssThemeLink:"bootstrapTheme",defaultCssFile:"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",bootswatchApiUrl:"https://bootswatch.com/api",bootswatchApiVersion:5,loadFromBootswatch:!0,localThemes:"/assets/data/themes.json",excludeBootswatch:"Default, default, Lux, Sketchy",includeBootswatch:null,skipIncludeBootswatch:null}),c=$.extend({},{enabled:!1}),l=$.extend(!0,{},r,c),l.retries,d=new liteURL(t.location.href),d.origin,d.origin+'/204.html',e.findCookie('j1'),e.findCookie('__g'),a.state='started',h&&i.debug("\nstate: "+a.getState()),$('#no_flicker').hide(),$('#content').hide(),$('.active_footer').hide();var k=setInterval(function(){p=e.existsCookie(f.user_state),C+=1,p&&(u=e.readCookie(f.user_state),e.readCookie(f.user_consent),h&&i.debug("\ncookie "+f.user_state+' successfully loaded after: '+25*C+' ms'),''===u.theme_css&&(u.theme_name=w,u.theme_css=v,u.theme_author=b,u.theme_author_url=g,e.writeCookie({name:f.user_state,data:u,secure:m,expires:365})||h&&i.error("\nfailed to write cookie: "+f.user_consent)),u.theme_switcher=l.enabled,l.enabled?(h&&(i.info("\nthemes detected as: "+l.enabled),i.info("\nremote themes are being initialized")),$('#remote_themes').bootstrapThemeSwitcher.defaults={debug:l.debug,saveToCookie:l.saveToCookie,cssThemeLink:l.cssThemeLink,cookieThemeName:l.cookieThemeName,cookieDefaultThemeName:l.cookieDefaultThemeName,cookieThemeCss:l.cookieThemeCss,cookieThemeExtensionCss:l.cookieThemeExtensionCss,cookieExpiration:l.cookieExpiration,cookiePath:l.cookiePath,defaultCssFile:l.defaultCssFile,bootswatchApiUrl:l.bootswatchApiUrl,bootswatchApiVersion:l.bootswatchApiVersion,loadFromBootswatch:l.loadFromBootswatch,localFeed:l.localThemes,excludeBootswatch:l.excludeBootswatch,includeBootswatch:l.includeBootswatch,skipIncludeBootswatch:l.skipIncludeBootswatch}):h&&(i.warn("\nthemes detected as: disabled"),i.warn("\nno remote themes are available")),x(u.theme_css,function(t){if(t)var o=setInterval(function(){'finished'==e.getState()&&(s='<link rel="stylesheet" id="'+_+'" href="'+u.theme_css+'" type="text/css" />',$('head').append(s),clearInterval(o))},10);else h&&i.warn("\nthemes CSS invalid: "+u.theme_css),s='<link rel="stylesheet" id="'+_+'" href="'+v+'" type="text/css" />',h&&(i.warn("\nset default theme :"+w),i.debug("\ntheme CSS loaded: "+v)),$('head').append(s),u.theme_name=w,u.theme_css=v,u.theme_author=b,u.theme_author_url=g,e.writeCookie({name:f.user_state,data:u,secure:m,expires:365})||i.error("\nfailed to write cookie: "+f.user_consent),location.reload(!0)}),clearInterval(k))},10),T=setInterval(function(){u=e.readCookie(f.user_state),o(u.theme_css)&&($('#no_flicker').show(),h&&(i.info("\ntheme loaded successfully: "+u.theme_name),i.debug("\ntheme CSS loaded: "+u.theme_css)),a.setState('finished'),h&&(i.debug("\nstate: "+a.getState()),i.info("\nmodule initialized successfully")),clearInterval(T))},10)},messageHandler:function(e,t){var o=JSON.stringify(t,undefined,2);n="\nreceived message from "+e+': '+o,h&&i.info(n),'command'===t.type&&'module_initialized'===t.action&&h&&i.info('\n'+t.text)},setState:function(e){a.state=e},getState:function(){return a.state}}}(j1,window);



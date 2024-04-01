

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/themes.js
 # JS Adapter for J1 themes (ThemeSwitcher)
 #
 # Product/Info:
 # https://jekyll.one
 # https://github.com/jguadagno/ThemeSwitcher
 #
 # Copyright (C) 2023, 2024 Juergen Adams
 # Copyright (C) 2014 Joseph Guadagno
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # ThemeSwitcher is licensed under the MIT License.
 # For details, see https://github.com/jguadagno/ThemeSwitcher/blob/master/LICENSE
 # -----------------------------------------------------------------------------
 # NOTE:
 #  Setup of theme loaders for local_themes|remote_themes moved
 #  to adapter navigator.js
 # -----------------------------------------------------------------------------
 # Adapter generated: 2024-04-01 01:16:05 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.themes=function(e,t){function o(e){var t=document.styleSheets;t[t.length-1];for(var o in document.styleSheets)if(t[o].href&&t[o].href.indexOf(e)>-1)return!0;return!1}var s,a,i,n,r,c,d,l,h,m,u=!!'production'.includes('dev'),f=!!(r=new liteURL(t.location.href)).protocol.includes('https'),p={},g=e.getCookieNames(),_='default',k=u?'.css':'.min.css',w='UnoLight',b='J1 Team',v='https://jekyll.one/',C='/assets/themes/j1/core/css/themes/'+w.toLowerCase()+'/bootstrap'+k,x=function(e,t){if(!$.isFunction(t))throw Error('Not a valid callback');$.ajax({type:'HEAD',url:e,success:$.proxy(t,this,!0),error:$.proxy(t,this,!1)})};return{init:function(l){$.extend({module_name:'j1.adapter.themes',generated:'2024-04-01 01:16:05 +0200'},l);c=e.adapter.themes,d=log4javascript.getLogger('j1.adapter.themes'),a=$.extend({},{enabled:!1,debug:!1,saveToCookie:!0,reloadPageOnChange:!1,retries:30,preview_page:"/pages/public/tools/previewer/current_theme/",menu_icon_family:"mdib",menu_icon_color:"var(--md-gray-500)",menu_icon_size:"mdib-sm",cssThemeLink:"bootstrapTheme",defaultCssFile:"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",bootswatchApiUrl:"https://bootswatch.com/api",bootswatchApiVersion:5,loadFromBootswatch:!0,localThemes:"/assets/data/themes.json",excludeBootswatch:"Default, default, Lux, Sketchy",includeBootswatch:null,skipIncludeBootswatch:null}),i=$.extend({},{enabled:!0}),n=$.extend(!0,{},a,i),n.retries,r=new liteURL(t.location.href),r.origin,r.origin+'/204.html',e.findCookie('j1'),e.findCookie('__g');var u=setInterval(()=>{var t='block'===$('#content').css("display"),o='finished'===e.getState();e.adapter.attic.getState();t&&o&&(h=Date.now(),p=e.readCookie(g.user_state),e.readCookie(g.user_consent),c.setState('started'),d.debug("\nstate: "+c.getState()),d.info("\nmodule is being initialized"),d.info("\nhide page until theme is loaded"),$('#no_flicker').hide(),''===p.theme_css&&(p.theme_name=w,p.theme_css=C,p.theme_author=b,p.theme_author_url=v,e.writeCookie({name:g.user_state,data:p,secure:f,expires:365})||d.error("\nfailed to write cookie: "+g.user_consent)),p.theme_switcher=n.enabled,n.enabled?(d.info("\nthemes detected as: "+n.enabled),d.info("\nremote themes are being initialized"),$('#remote_themes').ThemeSwitcher.defaults={debug:n.debug,saveToCookie:n.saveToCookie,cssThemeLink:n.cssThemeLink,cookieThemeName:n.cookieThemeName,cookieDefaultThemeName:n.cookieDefaultThemeName,cookieThemeCss:n.cookieThemeCss,cookieThemeExtensionCss:n.cookieThemeExtensionCss,cookieExpiration:n.cookieExpiration,cookiePath:n.cookiePath,defaultCssFile:n.defaultCssFile,bootswatchApiUrl:n.bootswatchApiUrl,bootswatchApiVersion:n.bootswatchApiVersion,loadFromBootswatch:n.loadFromBootswatch,localFeed:n.localThemes,excludeBootswatch:n.excludeBootswatch,includeBootswatch:n.includeBootswatch,skipIncludeBootswatch:n.skipIncludeBootswatch}):(d.debug("\nthemes detected as: disabled"),d.debug("\nno remote themes are available")),x(p.theme_css,function(t){if(t)var o=setInterval(function(){'finished'==e.getState()&&(s='<link rel="stylesheet" id="'+_+'" href="'+p.theme_css+'" type="text/css">',$('head').append(s),clearInterval(o))},10);else d.warn("\nthemes CSS invalid: "+p.theme_css),s='<link rel="stylesheet" id="'+_+'" href="'+C+'" type="text/css">',d.debug("\nset default theme :"+w),d.debug("\ntheme CSS loaded: "+C),$('head').append(s),p.theme_name=w,p.theme_css=C,p.theme_author=b,p.theme_author_url=v,e.writeCookie({name:g.user_state,data:p,secure:f,expires:365})||d.error("\nfailed to write cookie: "+g.user_consent),location.reload(!0)}),clearInterval(u))},10),k=setInterval(()=>{p=e.readCookie(g.user_state),o(p.theme_css)&&(d.info("\ntheme loaded successfully: "+p.theme_name),d.debug("\ntheme CSS loaded: "+p.theme_css),d.info("\nshow page on theme loaded"),$('#no_flicker').show(),c.setState('finished'),d.debug("\nstate: "+c.getState()),d.info("\ninitializing module finished"),m=Date.now(),d.info("\nmodule initializing time: "+(m-h)+'ms'),clearInterval(k))},10)},messageHandler:(e,t)=>{var o=JSON.stringify(t,undefined,2);return l="\nreceived message from "+e+': '+o,d.debug(l),'command'===t.type&&'module_initialized'===t.action&&d.info('\n'+t.text),!0},setState:e=>{c.state=e},getState:()=>c.state}}(j1,window);



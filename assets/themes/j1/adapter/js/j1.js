

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/j1_template.js
 # JS Adapter for J1 Template
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2021 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see https://jekyll.one
 # -----------------------------------------------------------------------------
 #  TODO:
 #    MANAGE themeExtensionCss is to be checked
 #
 # -----------------------------------------------------------------------------
 # Adapter generated: 2021-04-19 22:46:09 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';var j1=function(){function e(e,t){for(var a=Array.prototype.slice.call(arguments,2),o=e.split('.'),r=o.pop(),i=0;i<o.length;i++)t=t[o[i]];return t[r].apply(t,a)}var t,a,o,r,i,n,s,d,l=new RegExp('navigator|dateview|tagview|archive'),c='not_started',u='not_detected',p=!1,g=[],h={app_session:'j1.app.session',user_session:'j1.user.session',user_state:'j1.user.state'},m={mode:'web',writer:'web',locale:navigator.language||navigator.userLanguage,user_name:'guest',provider:'j1',provider_membership:'guest',provider_permissions:'public,public',provider_site_url:'https://jekyll.one',provider_home_url:'https://jekyll.one',provider_blog_url:'/pages/public/blog/navigator/',provider_member_url:'/pages/public/learn/whats_up/',provider_privacy_url:'/pages/public/legal/en/privacy/',requested_page:'na',previous_page:'na',last_pager:'/pages/public/blog/navigator/'},f={theme_css:"",theme_name:"",theme_author:"",theme_version:'2021.1.1',cookies_accepted:'pending',whitelistedPages:g,deleteOnDecline:!1,showConsentOnPending:!1,stopScrolling:!0,session_active:!1,last_session_ts:'',cc_authenticated:!1};return{init:function(e){var t=log4javascript.getLogger('j1.init'),o=(p=new liteURL(window.location.href)).origin,i=(new Date).toISOString(),s='started',u=$.extend({foo:'foo_option',bar:'bar_option'},e);if(j1.xhrDataState={},j1.xhrDOMState={},window.addEventListener('beforeunload',function(){var e=j1.getCookieNames(),t=e.user_state,a=(e.user_session,(new Date).toISOString()),o=j1.readCookie(t);o&&(o.session_active=!1,o.last_session_ts=a,j1.writeCookie({name:t,data:o,expires:365}))}),m.created=i,m.timestamp=i,m=j1.existsCookie(h.user_session)?j1.readCookie(h.user_session):j1.writeCookie({name:h.user_session,data:m}),(f=j1.existsCookie(h.user_state)?j1.readCookie(h.user_state):j1.writeCookie({name:h.user_state,data:f,expires:365})).session_active=!0,j1.writeCookie({name:h.user_state,data:f,expires:365}),'app'===m.mode){var p=new liteURL(window.location.href),g=o+"/status?page="+window.location.pathname,v=50;o=p.origin,$.when($.ajax(g)).then(function(e){var t=log4javascript.getLogger('j1.init');(m=j1.readCookie(h.user_session)).mode='app',m.requested_page=window.location.pathname,m.timestamp=i,m=j1.mergeData(m,e),n='mode detected: '+m.mode,t.info(n),t.info('update user session cookie'),j1.writeCookie({name:h.user_session,data:m}),j1.setState(s),t.info('state: '+j1.getState());var a=setInterval(function(){'finished'==j1.getState()&&j1.authEnabled()&&('true'===m.authenticated?(t.info('show signout icon'),$('#navLinkSignInOut').attr('data-target','#modalOmniSignOut'),$('#iconSignInOut').removeClass('mdi-login').addClass('mdi-logout')):(t.info('show signin icon'),$('#navLinkSignInOut').attr('data-target','#modalOmniSignIn'),$('#iconSignInOut').removeClass('mdi-logout').addClass('mdi-login')),t.info('authentication detected as: '+m.authenticated),$('#quickLinksSignInOutButton').css('display','block'),t.info('met dependencies for: j1'),clearInterval(a))},25)})["catch"](function(){setTimeout(function(){var e=log4javascript.getLogger('j1.init');(m=j1.readCookie(h.user_session)).mode='web',m.requested_page=window.location.pathname,m.timestamp=i,n='mode detected: '+m.mode,e.info(n),j1.writeCookie({name:h.user_session,data:m}),j1.setState(s),e.info('state: '+j1.getState())},v)})}else c='started',t.info('state: '+c),t.info('page is being initialized');c='started',t.info('state: '+c),t.info('page is being initialized'),'false'===u.scrollbar&&($('body').addClass('hide-scrollbar'),$('html').addClass('hide-scrollbar-moz')),t.info('read user state from cookie'),m=j1.readCookie(h.user_session),m.theme_name,m.theme_css,m.theme_extension_css,m.timestamp=i,d=new liteURL(document.referrer),a=window.location.pathname,m.requested_page=a,m.previous_page=''===d.search?''===d.pathname?a:d.pathname:''===m.previous_page||'na'===m.previous_page?'/':m.previous_page,l.test(m.previous_page)?(r=m.previous_page,m.last_pager=r):r=m.last_pager,t.info('update user session cookie'),j1.writeCookie({name:h.user_session,data:m}),j1.initBanner(u),j1.initPanel(u),j1.initFooter(u),c='running',t.info('state: '+c),t.info(n),m.timestamp=i,j1.writeCookie({name:h.user_session,data:m}),j1.core.bsFormClearButton(),j1.displayPage()},initBanner:function(){var e,t=log4javascript.getLogger('j1.initBanner'),a=[],o=function(t){return function(a,o,r){if('success'==o){var i=log4javascript.getLogger('j1.adapter.xhrData');e='loading banner completed on id: '+t,i.info(e),j1.setXhrDataState(t,o),j1.setXhrDomState(t,o),i.info('XHR data loaded in the DOM: '+t)}'error'==o&&(e='loading banner failed on id: '+t+', error: '+r.status+': '+r.statusText,i.error(e),j1.setXhrDataState(t,o),j1.setXhrDomState(t,o),c='failed',i.error('state: '+c))}};if(a.push('divider-1'),a.push('divider-2'),a.push('divider-3'),a.push('home_teaser_banner'),a.push('home_welcome_banner'),a.push('home_image_banner'),a.push('home_parallax_banner'),a.push('exception_container'),!a.length)return e='no banner found in site',t.info(e),!1;for(var r in a){var i='#'+a[r],n=$(i);if(n.length){e='loading banner on id: '+a[r],t.info(e);var s='/assets/data/banner/index.html '+i+' > *';n.load(s,o(i))}}return!0},initPanel:function(){var e,t=log4javascript.getLogger('j1.initPanel'),a=[],o=function(t){return function(a,o,r){var i=log4javascript.getLogger('j1.adapter.xhrData');'success'==o&&(e='loading panel completed on id: '+t,i.info(e),j1.setXhrDataState(t,o),j1.setXhrDomState(t,o),i.info('XHR data loaded in the DOM: '+t)),'error'==o&&(e='loading panel failed on id: '+t+', error '+r.status+': '+r.statusText,i.error(e),j1.setXhrDataState(t,o),j1.setXhrDomState(t,o),c='Error',i.error('state: '+c))}};if(a.push('home_intro_panel'),a.push('home_service_panel'),a.push('home_news_panel'),!a.length)return e='no panel found in site',t.info(e),!1;for(var r in a){var i='#'+a[r],n=$(i);if(n.length){e='loading panel on id: '+a[r],t.info(e);var s='/assets/data/panel/index.html '+i+' > *';n.load(s,o(i))}}return!0},initFooter:function(){var e,t=log4javascript.getLogger('j1.initFooter');e='loading footer started',t.info(e);var a=function(t){return function(a,o,r){var i=log4javascript.getLogger('j1.adapter.xhrData');'success'==o&&(e='footer loaded successfully on id: '+t,i.info(e),j1.setXhrDataState(t,o),j1.setXhrDomState(t,o),i.info('XHR data loaded in the DOM: '+t),e='initialization finished',i.info(e)),'error'==o&&(e='loading footer failed on id: '+t+', error '+r.status+': '+r.statusText,i.error(e),j1.setXhrDataState(t,o),j1.setXhrDomState(t,o),c='failed',i.error('state: '+c),e='initialization finished',i.info(e))}},o="#j1_footer",r=$(o);if(!r.length)return e='data not loaded',t.warn(e),j1.setXhrDataState(o,'not loaded'),j1.setXhrDomState(o,'pending'),!1;var i='/assets/data/footer/index.html'+o+' > *';return r.load(i,a(o)),!0},displayPage:function(){var e,a=log4javascript.getLogger('j1.adapter.displayPage'),o=250,r=new liteURL(window.location.href).origin,i=r+"/status?page="+window.location.pathname,s=j1.readCookie(h.user_session),d=j1.readCookie(h.user_state),l=new liteURL(window.location.href),u={};a.info('finalize page'),j1.setCss(),n='loading page partials: started',a.info(n),j1.appDetected()?(a.info('mode detected: app'),$.when($.ajax(i)).then(function(a){var i=log4javascript.getLogger('j1.displayPage');if((s=j1.mergeData(s,a)).current_page=l.pathname,j1.writeCookie({name:h.user_session,data:s}),u=s.provider_permissions,e=u.includes(s.page_permission),j1.authEnabled()&&'public'!==s.page_permission&&!1===e)if('true'===a.authenticated){var g=r+'/post_authentication';window.location.href=g}else if(j1.authEnabled()){var m=r+'/page_validation?page='+window.location.pathname;return window.location.href=m,!1}setTimeout(function(){$('#no_flicker').css('display','block'),'accepted'===d.cookies_accepted?(n='show cookie icon',i.info(n),$('#quickLinksCookieButton').css('display','block')):(n='hide cookie icon',i.info(n),$('#quickLinksCookieButton').css('display','none')),p&&(i.info('translator detected: google'),i.info('initialize language selector'),$('.goog-te-combo').addClass('form-control')),j1.authEnabled()&&('true'===s.authenticated?(i.info('show signout icon'),$('#navLinkSignInOut').attr('data-target','#modalOmniSignOut'),$('#iconSignInOut').removeClass('mdi-login').addClass('mdi-logout')):(i.info('show signin icon'),$('#navLinkSignInOut').attr('data-target','#modalOmniSignIn'),$('#iconSignInOut').removeClass('mdi-logout').addClass('mdi-login')),i.info('authentication detected as: '+s.authenticated),$('#quickLinksSignInOutButton').css('display','block')),j1.scrollTo(),s.previous_page!==s.current_page&&(n='page change detected',i.info(n),n='previous page: '+s.previous_page,i.info(n),n='current page: '+s.current_page,i.info(n)),i.info('update sidebar'),d=j1.readCookie(h.user_state),t=j1.mergeData(s,d),j1.core.navigator.updateSidebar(t),n='state: '+(c='finished'),i.info(n),n='page finalized successfully',i.info(n)},o)})):setTimeout(function(){j1.setState('finished'),a.info('state: finished'),a.info('page initialization: finished'),$('#no_flicker').css('display','block'),a.info('mode detected: web'),a.info('hide signin icon'),$('#quickLinksSignInOutButton').css('display','none'),s.current_page=l.pathname,j1.writeCookie({name:h.user_session,data:s}),p&&(a.info('translator detected: google'),a.info('initialize language selector'),$('.goog-te-combo').addClass('form-control')),'accepted'===d.cookies_accepted?(n='show cookie icon',a.info(n),$('#quickLinksCookieButton').css('display','block')):(n='hide cookie icon',a.info(n),$('#quickLinksCookieButton').css('display','none')),j1.scrollTo(),s.previous_page!==s.current_page&&(n='page change detected',a.info(n),n='previous page: '+s.previous_page,a.info(n),n='current page: '+s.current_page,a.info(n)),a.info('update sidebar'),d=j1.readCookie(h.user_state),t=j1.mergeData(s,d),j1.core.navigator.updateSidebar(t),n='state: '+(c='finished'),a.info(n),n='page finalized successfully',a.info(n)},o)},mergeData:function(){for(var e=[].slice.call(arguments),t=e.shift(),a=0,o=e.length;a<o;a++)for(var r in e[a])t[r]=e[a][r];return t},getPrevPage:function(){return o},getLanguage:function(){navigator.languages?navigator.languages[0]:navigator.language||navigator.userLanguage},getTemplateVersion:function(){return'2021.1.1'},scrollTo:function(){var e='#'+window.location.href.split('#')[1],t=log4javascript.getLogger('j1.scrollTo'),a=300,o=10,r=$('.attic'),i=$('nav.navbar'),n=$('#adblock'),s=i.hasClass('navbar-fixed')?'fixed':'scrolled',d=$('body').css('font-size').replace('px',''),l=(window.pageYOffset,parseInt(d)),c=r.length?r.height():0,u=i.length?i.height():0,p=n.length?n.height():0,g='fixed'==s?-1*(u+p+l):-1*(c+u+p+l);if(g+=o,e&&'#'!==e)$(e).length?j1.core.scrollSmooth.scroll(e,{duration:a,offset:g,callback:null}):($(window).scrollTop($(window).scrollTop()+1),$(window).scrollTop($(window).scrollTop()-1));else if('#'===e)return t.info('bound click event to "#", suppress default action'),$(window).scrollTop($(window).scrollTop()+1),$(window).scrollTop($(window).scrollTop()-1),!1},authEnabled:function(){log4javascript.getLogger('j1.authentication');return!1},appDetected:function(){return!!j1.existsCookie(h.user_session)&&'app'===j1.readCookie(h.user_session).mode},xhrData:function(e,t,a){var o,r,i=log4javascript.getLogger('j1.adapter.xhrData'),n=$('#'+e.xhr_container_id),s=a,d=function(e,t){return function(a,r,i){var n=log4javascript.getLogger('j1.adapter.xhrData');'success'===r&&(j1.setXhrDataState(t,r),j1.setXhrDomState(t,'pending'),o='data loaded successfully on id: '+t,n.info(o),s=!0),'error'===r&&void 0!==t&&(s='failed',n.info('set state for '+e+' to: '+s),j1.setXhrDataState(t,r),j1.setXhrDomState(t,'pending'),o='loading data failed on id: '+t+', error '+i.status+': '+i.statusText,n.error(o),s=!1)}},l='#'+e.xhr_container_id,c=$(l);if(c.length){r=e.xhr_data_element?e.xhr_data_path+' #'+e.xhr_data_element+' > *':e.xhr_data_path+' > *',c.load(r,d(t,l));var u=new(window.MutationObserver||window.WebKitMutationObserver)(g),p={childList:!0,characterData:!1,attributes:!1,subtree:!1};function g(e){e.forEach(function(e){e.addedNodes.length&&(i.info('XHR data loaded in the DOM: '+l),j1.setXhrDomState(l,'success'))})}n.each(function(){u.observe(this,p)})}else'#undefined'!=l&&(o='data not loaded on id:'+l,i.warn(o),j1.setXhrDataState(l,'not loaded'),j1.setXhrDomState(l,'not loaded'),s='finished',i.info('state: '+s),s=!1);return s},readCookie:function(e){var t;return!!j1.existsCookie(e)&&(t=window.atob(Cookies.get(e)),JSON.parse(t)||!1)},writeCookie:function(e){var t,a,o={data:{},name:'',expires:0,path:'/',http_only:!1,secure:!1},r=$.extend(o,e),i=(new Date).toISOString(),n={};return j1.existsCookie(r.name)?((n=j1.readCookie(r.name)).timestamp=i,n=j1.mergeData(n,r.data),t=JSON.stringify(n),a=window.btoa(t),r.expires>0?Cookies.set(r.name,a,{expires:r.expires,SameSite:r.SameSite}):Cookies.set(r.name,a,{SameSite:r.SameSite})):(n=r.data,t=JSON.stringify(r.data),a=window.btoa(t),r.expires>0?Cookies.set(r.name,a,{expires:r.expires,SameSite:r.SameSite}):Cookies.set(r.name,a,{SameSite:r.SameSite})),!!j1.existsCookie(r.name)&&n},removeCookie:function(e){var t={name:'',path:'/'},a=$.extend(t,e);Cookies.remove(a.name,{path:a.path})},deleteCookie:function(e){var t=e,a=document.cookie.split('; ');if('all'===t)for(var o=0;o<a.length;o++)for(var r=window.location.hostname.split('.');r.length>0;){var i=encodeURIComponent(a[o].split(';')[0].split('=')[0])+'=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain='+r.join('.')+' ;path=',n=location.pathname.split('/');for(document.cookie=i+'/';n.length>0;)document.cookie=i+n.join('/'),n.pop();r.shift()}else document.cookie=t+'=;expires=Thu, 01 Jan 1970 00:00:00 GMT';return!0},existsCookie:function(e){var t=document.cookie,a=e+'=',o=t.indexOf('; '+a),r=t.length;if(-1!==o)o+=2;else if(-1===(o=t.indexOf(a))||0!==o)return!1;return-1!==t.indexOf(';',o)&&(r=t.indexOf(';',o)),!!decodeURI(t.substring(o+a.length,r)).replace(/"/g,'').length},resolveMacros:function(e){var t=log4javascript.getLogger('j1.resolveMacros'),a=setInterval(function(){if($('#sidebar_mmenu').length)return Object.keys(e).length?($('[id^=macro-]').each(function(){$('#macro-provider').each(function(){var t=$(this),a=t.html();t.html(a.replace('??provider',e.provider)),this.href=this.href.replace(/.*\/??provider-site-url/,e.provider_site_url)}),$('#macro-user-name').each(function(){var t=$(this),a=t.html();t.html(a.replace('??user-name',e.user_name)),this.href=this.href.replace(/.*\/??provider_member_url/,e.provider_member_url)}),$('#macro-provider-permissions').each(function(){var t=$(this),a=t.html();t.html(a.replace('??provider-permissions',e.provider_permissions)),this.href=this.href.replace(/.*\/??provider_member_url/,e.provider_member_url)}),$('#macro-provider-membership').each(function(){var t=$(this),a=t.html();t.html(a.replace('??provider-membership',e.provider_membership)),this.href=this.href.replace(/.*\/??provider_member_url/,e.provider_member_url)}),$('#macro-cookie-state').each(function(){var t=$(this),a=t.html();t.html(a.replace('??cookie-state',e.cookies_accepted)),this.href=this.href.replace(/.*\/??provider_privacy_url/,e.provider_privacy_url)}),$('#macro-theme-name').each(function(){var t=$(this),a=t.html();t.html(a.replace('??theme-name',e.theme_name))}),$('#macro-theme-author').each(function(){var t=$(this),a=t.html();t.html(a.replace('??theme-author',e.theme_author)),this.href=this.href.replace(/.*\/??theme-author-url/,e.theme_author_url)}),$('#macro-theme-version').each(function(){var t=$(this),a=t.html();t.html(a.replace('??theme-version',e.theme_version))})}),t.info('met dependencies for: sidebarLoaded'),clearInterval(a),!0):(t.error('no user data provided'),clearInterval(a),!1)},25)},updateMacros:function(e){var t=log4javascript.getLogger('j1.updateMacros'),a=setInterval(function(){if($('#sidebar_mmenu').length)return Object.keys(e).length?($('[id^=macro-]').each(function(){$('#macro-provider').each(function(){var t=$(this),a=t.html();t.html(a.replace(/Provider:.*/,'Provider: '+e.provider)),$('#macro-provider').attr('href',e.provider_site_url)}),$('#macro-user-name').each(function(){var t=$(this),a=t.html();t.html(a.replace(/User:.*/,'User: '+e.user_name)),$('#macro-user-name').attr('href',e.provider_member_url)}),$('#macro-provider-permissions').each(function(){var t=$(this),a=t.html();t.html(a.replace(/public.*|protected.*|private.*|blocked.*/,e.provider_permissions)),$('#macro-provider-permissions').attr('href',e.provider_member_url)}),$('#macro-provider-membership').each(function(){var t=$(this),a=t.html();t.html(a.replace(/guest|member/,e.provider_membership)),$('#macro-provider-membership').attr('href',e.provider_member_url)}),$('#macro-cookie-state').each(function(){var t=$(this),a=t.html();t.html(a.replace(/accepted|declined|pending/,e.cookies_accepted)),$('#macro-cookie-state').attr('href',e.provider_privacy_url)})}),t.info('met dependencies for: sidebarLoaded'),clearInterval(a),!0):(t.error('no user data provided'),clearInterval(a),!1)},25)},getMessage:function(e,t,a){return t=j1.messages[e][t].message[a]},logger:function(e,t,a){return(e=log4javascript.getLogger(e))[t](a),!0},sendMessage:function(t,a,o){var r=log4javascript.getLogger('j1.sendMessage'),i=JSON.stringify(o);'j1'===a?(n='send message from '+t+' to'+a+': '+i,r.debug(n),e("j1.messageHandler",window,t,o)):(n='send message from '+t+' to '+a+': '+i,r.debug(n),e(a+'.messageHandler',window,t,o))},messageHandler:function(e,t){var a=JSON.stringify(t);return n='received message from '+e+': '+a,i.debug(n),'command'===t.type&&'module_initialized'===t.action&&(s.setState('finished'),i.info(t.text)),!0},getStyleValue:function(e,t){var a,o='test-'+e,r=document.getElementById(o);return null===r&&((r=document.createElement('div')).className=e,r.style.display='none',document.body.appendChild(r)),a=$(r).css(t),document.body.removeChild(r),a},getStyleSheetLoaded:function(e){var t=document.styleSheets;t[t.length-1];for(var a in document.styleSheets)if(t[a].href&&t[a].href.indexOf(e)>-1)return!0},getCookieNames:function(){return h},setCss:function(){var e=log4javascript.getLogger('j1.setCss'),t=j1.getStyleValue('bg-primary','background-color');j1.getStyleValue('bg-secondary','background-color');e.info('set color scheme for selected theme'),$('head').append('<style>.g-bg-primary { background-color: '+t+' !important; }</style>'),$('head').append('<style>.iconify-md-bg-primary { color: '+t+' !important; }</style>'),$('head').append('<style>.fa-md-bg-primary { color: '+t+' !important; }</style>'),$('head').append('<style>.fas-md-bg-primary { color: '+t+' !important; }</style>'),$('head').append('<style>.mdi-md-bg-primary { color: '+t+' !important; }</style>');var a=t,o=j1.getStyleValue('btn-success','background-color'),r=j1.getStyleValue('btn-info','background-color'),i=j1.getStyleValue('icon-warning','color'),n=j1.getStyleValue('btn-danger','background-color');return $('head').append('<style>.icon-note { color: '+a+' !important; }</style>'),$('head').append('<style>.icon-tip { color: '+o+' !important; }</style>'),$('head').append('<style>.icon-important { color: '+r+' !important; }</style>'),$('head').append('<style>.icon-warning { color: '+i+' !important; }</style>'),$('head').append('<style>.icon-caution { color: '+n+' !important; }</style>'),$('head').append('<style>.tooltip-inner { background-color: '+t+' !important; }</style>'),$('head').append('<style>.bs-tooltip-auto[x-placement^=bottom] .arrow::before, .bs-tooltip-bottom .arrow::before { border-bottom-color: '+t+' !important; }</style>'),$('head').append('<style>.btn-viewer:hover { background-color: '+t+' !important; }</style>'),!0},setState:function(e){c=e},getState:function(){return c},setXhrDataState:function(e,t){j1.xhrDataState[e]=t},getXhrDataState:function(e){return j1.xhrDataState[e]},setXhrDomState:function(e,t){j1.xhrDOMState[e]=t},getXhrDOMState:function(e){return j1.xhrDOMState[e]},setMode:function(e){u=e},getMode:function(){return u},checkUserAgent:function(){return navigator.userAgent.search(ua_name)>=0},generateId:function(e){for(var t='',a='abcdefghijklmnopqrstuvwxyz0123456789',o=a.length,r=0;r<e;r++)t+=a.charAt(Math.floor(Math.random()*o));return t},getTrue:function(){return!0},getFalse:function(){return!1},goHome:function(){'function'==typeof window.home?window.home():document.all?window.location.href='about:home':window.location.href='about:blank'},goBack:function(){window.location.href=document.referrer}}}(window);



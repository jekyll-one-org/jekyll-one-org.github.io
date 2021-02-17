

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
 # Adapter generated: 2021-02-17 19:26:13 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';var j1=function(){function e(e,t){for(var o=Array.prototype.slice.call(arguments,2),a=e.split('.'),r=a.pop(),i=0;i<a.length;i++)t=t[a[i]];return t[r].apply(t,o)}var t,o,a,r,i,n,s,d,l=new RegExp('navigator|dateview|tagview|archive'),c='not_started',u='not_detected',p=!1,g=[],m={app_session:'j1.app.session',user_session:'j1.user.session',user_state:'j1.user.state'},h={mode:'na',locale:navigator.language||navigator.userLanguage,user_name:'guest',provider:'j1',provider_membership:'guest',provider_permissions:'public,public',provider_site_url:'https://jekyll.one',provider_home_url:'https://jekyll.one',provider_blog_url:'/pages/public/blog/navigator/',provider_member_url:'/pages/public/learn/whats_up/',provider_privacy_url:'/pages/public/legal/en/privacy/',requested_page:'na',previous_page:'na',last_pager:'/pages/public/blog/navigator/'},f={theme_css:"",theme_name:"",theme_author:"",theme_version:'2021.0.7',cookies_accepted:'pending',whitelistedPages:g,deleteOnDecline:!1,showConsentOnPending:!1,stopScrolling:!0,session_active:!1,last_session_ts:'',cc_authenticated:!1};return{init:function(e){var t=log4javascript.getLogger('j1.init'),a=(p=new liteURL(window.location.href)).origin,i=(new Date).toISOString(),s='started',u=$.extend({foo:'foo_option',bar:'bar_option'},e);if(j1.xhrDataState={},j1.xhrDOMState={},window.addEventListener('beforeunload',function(){var e=j1.getCookieNames(),t=e.user_state,o=(e.user_session,(new Date).toISOString()),a=j1.readCookie(t);a.session_active=!1,a.last_session_ts=o,j1.writeCookie({name:t,data:a,expires:365})}),h.created=i,h.timestamp=i,h=j1.existsCookie(m.user_session)?j1.readCookie(m.user_session):j1.writeCookie({name:m.user_session,data:h}),(f=j1.existsCookie(m.user_state)?j1.readCookie(m.user_state):j1.writeCookie({name:m.user_state,data:f,expires:365})).session_active=!0,j1.writeCookie({name:m.user_state,data:f,expires:365}),'na'===h.mode){var p=new liteURL(window.location.href),g=a+"/status?page="+window.location.pathname,v=50;a=p.origin,$.when($.ajax(g)).then(function(e){var t=log4javascript.getLogger('j1.init');(h=j1.readCookie(m.user_session)).mode='app',h.requested_page=window.location.pathname,h.timestamp=i,h=j1.mergeData(h,e),n='mode detected: '+h.mode,t.info(n),t.info('update user session cookie'),j1.writeCookie({name:m.user_session,data:h}),j1.setState(s),t.info('state: '+j1.getState());var o=setInterval(function(){'finished'==j1.getState()&&j1.authEnabled()&&('true'===h.authenticated?(t.info('show signout icon'),$('#navLinkSignInOut').attr('data-target','#modalOmniSignOut'),$('#iconSignInOut').removeClass('mdi-login').addClass('mdi-logout')):(t.info('show signin icon'),$('#navLinkSignInOut').attr('data-target','#modalOmniSignIn'),$('#iconSignInOut').removeClass('mdi-logout').addClass('mdi-login')),t.info('authentication detected as: '+h.authenticated),$('#quickLinksSignInOutButton').css('display','block'),t.info('met dependencies for: j1'),clearInterval(o))},25)})["catch"](function(){setTimeout(function(){var e=log4javascript.getLogger('j1.init');(h=j1.readCookie(m.user_session)).mode='web',h.requested_page=window.location.pathname,h.timestamp=i,n='mode detected: '+h.mode,e.info(n),j1.writeCookie({name:m.user_session,data:h}),j1.setState(s),e.info('state: '+j1.getState())},v)})}else c='started',t.info('state: '+c),t.info('page is being initialized');c='started',t.info('state: '+c),t.info('page is being initialized'),'false'===u.scrollbar&&($('body').addClass('hide-scrollbar'),$('html').addClass('hide-scrollbar-moz')),t.info('read user state from cookie'),h=j1.readCookie(m.user_session),h.theme_name,h.theme_css,h.theme_extension_css,h.timestamp=i,d=new liteURL(document.referrer),o=window.location.pathname,h.requested_page=o,h.previous_page=''===d.search?''===d.pathname?o:d.pathname:''===h.previous_page||'na'===h.previous_page?'/':h.previous_page,l.test(h.previous_page)?(r=h.previous_page,h.last_pager=r):r=h.last_pager,t.info('update user session cookie'),j1.writeCookie({name:m.user_session,data:h}),j1.initBanner(u),j1.initPanel(u),j1.initFooter(u),c='running',t.info('state: '+c),t.info(n),h.timestamp=i,j1.writeCookie({name:m.user_session,data:h}),j1.core.bsFormClearButton(),j1.displayPage()},initBanner:function(){var e,t=log4javascript.getLogger('j1.initBanner'),o=[],a=function(t){return function(o,a,r){if('success'==a){var i=log4javascript.getLogger('j1.xhrData');e='loading banner completed on id: '+t,i.info(e),j1.setXhrDataState(t,a),j1.setXhrDomState(t,a),i.info('XHR data loaded in the DOM: '+t)}'error'==a&&(e='loading banner failed on id: '+t+', error: '+r.status+': '+r.statusText,i.error(e),j1.setXhrDataState(t,a),j1.setXhrDomState(t,a),c='failed',i.error('state: '+c))}};if(o.push('divider-1'),o.push('divider-2'),o.push('divider-3'),o.push('home_teaser_banner'),o.push('home_welcome_banner'),o.push('home_image_banner'),o.push('home_parallax_banner'),o.push('exception_container'),!o.length)return e='no banner found in site',t.info(e),!1;for(var r in o){var i='#'+o[r],n=$(i);if(n.length){e='loading banner on id: '+o[r],t.info(e);var s='/assets/data/banner/index.html '+i+' > *';n.load(s,a(i))}}return!0},initPanel:function(){var e,t=log4javascript.getLogger('j1.initPanel'),o=[],a=function(t){return function(o,a,r){var i=log4javascript.getLogger('j1.xhrData');'success'==a&&(e='loading panel completed on id: '+t,i.info(e),j1.setXhrDataState(t,a),j1.setXhrDomState(t,a),i.info('XHR data loaded in the DOM: '+t)),'error'==a&&(e='loading panel failed on id: '+t+', error '+r.status+': '+r.statusText,i.error(e),j1.setXhrDataState(t,a),j1.setXhrDomState(t,a),c='Error',i.error('state: '+c))}};if(o.push('home_intro_panel'),o.push('home_service_panel'),o.push('home_news_panel'),!o.length)return e='no panel found in site',t.info(e),!1;for(var r in o){var i='#'+o[r],n=$(i);if(n.length){e='loading panel on id: '+o[r],t.info(e);var s='/assets/data/panel/index.html '+i+' > *';n.load(s,a(i))}}return!0},initFooter:function(){var e,t=log4javascript.getLogger('j1.initFooter');e='loading footer started',t.info(e);var o=function(t){return function(o,a,r){var i=log4javascript.getLogger('j1.xhrData');'success'==a&&(e='footer loaded successfully on id: '+t,i.info(e),j1.setXhrDataState(t,a),j1.setXhrDomState(t,a),i.info('XHR data loaded in the DOM: '+t),e='initialization finished',i.info(e)),'error'==a&&(e='loading footer failed on id: '+t+', error '+r.status+': '+r.statusText,i.error(e),j1.setXhrDataState(t,a),j1.setXhrDomState(t,a),c='failed',i.error('state: '+c),e='initialization finished',i.info(e))}},a="#j1_footer",r=$(a);if(!r.length)return e='data not loaded',t.warn(e),j1.setXhrDataState(a,'not loaded'),j1.setXhrDomState(a,'pending'),!1;var i='/assets/data/footer/index.html';return r.load(i,o(a)),!0},displayPage:function(){var e,o=log4javascript.getLogger('j1.displayPage'),a=250,r=new liteURL(window.location.href).origin,i=r+"/status?page="+window.location.pathname,s=j1.readCookie(m.user_session),d=j1.readCookie(m.user_state),l=new liteURL(window.location.href),u={};o.info('finalize page'),j1.setCss(),n='loading page partials: started',o.info(n),j1.appDetected()?(o.info('mode detected: app'),$.when($.ajax(i)).then(function(o){var i=log4javascript.getLogger('j1.displayPage');if((s=j1.mergeData(s,o)).current_page=l.pathname,j1.writeCookie({name:m.user_session,data:s}),u=s.provider_permissions,e=u.includes(s.page_permission),j1.authEnabled()&&'public'!==s.page_permission&&!1===e)if('true'===o.authenticated){var g=r+'/post_authentication';window.location.href=g}else if(j1.authEnabled()){var h=r+'/page_validation?page='+window.location.pathname;return window.location.href=h,!1}setTimeout(function(){$('#no_flicker').css('display','block'),'accepted'===d.cookies_accepted?(n='show cookie icon',i.info(n),$('#quickLinksCookieButton').css('display','block')):(n='hide cookie icon',i.info(n),$('#quickLinksCookieButton').css('display','none')),p&&(i.info('translator detected: google'),i.info('initialize language selector'),$('.goog-te-combo').addClass('form-control')),j1.authEnabled()&&('true'===s.authenticated?(i.info('show signout icon'),$('#navLinkSignInOut').attr('data-target','#modalOmniSignOut'),$('#iconSignInOut').removeClass('mdi-login').addClass('mdi-logout')):(i.info('show signin icon'),$('#navLinkSignInOut').attr('data-target','#modalOmniSignIn'),$('#iconSignInOut').removeClass('mdi-logout').addClass('mdi-login')),i.info('authentication detected as: '+s.authenticated),$('#quickLinksSignInOutButton').css('display','block')),j1.scrollTo(),s.previous_page!==s.current_page&&(n='page change detected',i.info(n),n='previous page: '+s.previous_page,i.info(n),n='current page: '+s.current_page,i.info(n)),i.info('update sidebar'),d=j1.readCookie(m.user_state),t=j1.mergeData(s,d),j1.core.navigator.updateSidebar(t),n='state: '+(c='finished'),i.info(n),n='page finalized successfully',i.info(n)},a)})):setTimeout(function(){j1.setState('finished'),o.info('state: finished'),o.info('page initialization: finished'),$('#no_flicker').css('display','block'),o.info('mode detected: web'),o.info('hide signin icon'),$('#quickLinksSignInOutButton').css('display','none'),s.current_page=l.pathname,j1.writeCookie({name:m.user_session,data:s}),p&&(o.info('translator detected: google'),o.info('initialize language selector'),$('.goog-te-combo').addClass('form-control')),'accepted'===d.cookies_accepted?(n='show cookie icon',o.info(n),$('#quickLinksCookieButton').css('display','block')):(n='hide cookie icon',o.info(n),$('#quickLinksCookieButton').css('display','none')),j1.scrollTo(),s.previous_page!==s.current_page&&(n='page change detected',o.info(n),n='previous page: '+s.previous_page,o.info(n),n='current page: '+s.current_page,o.info(n)),o.info('update sidebar'),d=j1.readCookie(m.user_state),t=j1.mergeData(s,d),j1.core.navigator.updateSidebar(t),n='state: '+(c='finished'),o.info(n),n='page finalized successfully',o.info(n)},a)},mergeData:function(){for(var e=[].slice.call(arguments),t=e.shift(),o=0,a=e.length;o<a;o++)for(var r in e[o])t[r]=e[o][r];return t},getPrevPage:function(){return a},getLanguage:function(){navigator.languages?navigator.languages[0]:navigator.language||navigator.userLanguage},getTemplateVersion:function(){return'2021.0.7'},scrollTo:function(){var e=window.location.href.split('#')[1],t='#'+e;e&&t&&($(t).length?j1.core.scrollSmooth.scroll(t,{duration:300,offset:-90,callback:null}):($(window).scrollTop($(window).scrollTop()+1),$(window).scrollTop($(window).scrollTop()-1)))},authEnabled:function(){log4javascript.getLogger('j1.authentication');return!1},appDetected:function(){return!!j1.existsCookie(m.user_session)&&'app'===j1.readCookie(m.user_session).mode},xhrData:function(e,t,o){var a,r,i=log4javascript.getLogger('j1.xhrData'),n=$('#'+e.xhr_container_id),s=o,d=function(e,t){return function(o,r,i){var n=log4javascript.getLogger('j1.xhrData');'success'===r&&(j1.setXhrDataState(t,r),j1.setXhrDomState(t,'pending'),a='data loaded successfully on id: '+t,n.info(a),s=!0),'error'===r&&void 0!==t&&(s='failed',n.info('set state for '+e+' to: '+s),j1.setXhrDataState(t,r),j1.setXhrDomState(t,'pending'),a='loading data failed on id: '+t+', error '+i.status+': '+i.statusText,n.error(a),s=!1)}},l='#'+e.xhr_container_id,c=$(l);if(c.length){r=e.xhr_data_element?e.xhr_data_path+' #'+e.xhr_data_element+' > *':e.xhr_data_path+' > *',c.load(r,d(t,l));var u=new(window.MutationObserver||window.WebKitMutationObserver)(g),p={childList:!0,characterData:!1,attributes:!1,subtree:!1};function g(e){e.forEach(function(e){e.addedNodes.length&&(i.info('XHR data loaded in the DOM: '+l),j1.setXhrDomState(l,'success'))})}n.each(function(){u.observe(this,p)})}else'#undefined'!=l&&(a='data not loaded on id:'+l,i.warn(a),j1.setXhrDataState(l,'not loaded'),j1.setXhrDomState(l,'not loaded'),s='finished',i.info('state: '+s),s=!1);return s},readCookie:function(e){var t;return!!j1.existsCookie(e)&&(t=window.atob(Cookies.get(e)),JSON.parse(t)||!1)},writeCookie:function(e){var t,o,a={data:{},name:'',expires:0,path:'/',secure:!1},r=$.extend(a,e),i=(new Date).toISOString(),n={};return j1.existsCookie(r.name)?((n=j1.readCookie(r.name)).timestamp=i,n=j1.mergeData(n,r.data),t=JSON.stringify(n),o=window.btoa(t),r.expires>0?Cookies.set(r.name,o,{expires:r.expires}):Cookies.set(r.name,o,{})):(n=r.data,t=JSON.stringify(r.data),o=window.btoa(t),r.expires>0?Cookies.set(r.name,o,{expires:r.expires}):Cookies.set(r.name,o,{})),!!j1.existsCookie(r.name)&&n},removeCookie:function(e){var t={name:'',path:'/'},o=$.extend(t,e);Cookies.remove(o.name,{path:o.path})},deleteCookie:function(e){var t=e,o=document.cookie.split('; ');if('all'===t)for(var a=0;a<o.length;a++)for(var r=window.location.hostname.split('.');r.length>0;){var i=encodeURIComponent(o[a].split(';')[0].split('=')[0])+'=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain='+r.join('.')+' ;path=',n=location.pathname.split('/');for(document.cookie=i+'/';n.length>0;)document.cookie=i+n.join('/'),n.pop();r.shift()}else document.cookie=t+'=;expires=Thu, 01 Jan 1970 00:00:00 GMT';return!0},existsCookie:function(e){var t=document.cookie,o=e+'=',a=t.indexOf('; '+o),r=t.length;if(-1!==a)a+=2;else if(-1===(a=t.indexOf(o))||0!==a)return!1;return-1!==t.indexOf(';',a)&&(r=t.indexOf(';',a)),!!decodeURI(t.substring(a+o.length,r)).replace(/"/g,'').length},resolveMacros:function(e){var t=log4javascript.getLogger('j1.resolveMacros'),o=setInterval(function(){if($('#sidebar_mmenu').length)return Object.keys(e).length?($('[id^=macro-]').each(function(){$('#macro-provider').each(function(){var t=$(this),o=t.html();t.html(o.replace('??provider',e.provider)),this.href=this.href.replace(/.*\/??provider-site-url/,e.provider_site_url)}),$('#macro-user-name').each(function(){var t=$(this),o=t.html();t.html(o.replace('??user-name',e.user_name)),this.href=this.href.replace(/.*\/??provider_member_url/,e.provider_member_url)}),$('#macro-provider-permissions').each(function(){var t=$(this),o=t.html();t.html(o.replace('??provider-permissions',e.provider_permissions)),this.href=this.href.replace(/.*\/??provider_member_url/,e.provider_member_url)}),$('#macro-provider-membership').each(function(){var t=$(this),o=t.html();t.html(o.replace('??provider-membership',e.provider_membership)),this.href=this.href.replace(/.*\/??provider_member_url/,e.provider_member_url)}),$('#macro-cookie-state').each(function(){var t=$(this),o=t.html();t.html(o.replace('??cookie-state',e.cookies_accepted)),this.href=this.href.replace(/.*\/??provider_privacy_url/,e.provider_privacy_url)}),$('#macro-theme-name').each(function(){var t=$(this),o=t.html();t.html(o.replace('??theme-name',e.theme_name))}),$('#macro-theme-author').each(function(){var t=$(this),o=t.html();t.html(o.replace('??theme-author',e.theme_author)),this.href=this.href.replace(/.*\/??theme-author-url/,e.theme_author_url)}),$('#macro-theme-version').each(function(){var t=$(this),o=t.html();t.html(o.replace('??theme-version',e.theme_version))})}),t.info('met dependencies for: sidebarLoaded'),clearInterval(o),!0):(t.error('no user data provided'),clearInterval(o),!1)},25)},updateMacros:function(e){var t=log4javascript.getLogger('j1.updateMacros'),o=setInterval(function(){if($('#sidebar_mmenu').length)return Object.keys(e).length?($('[id^=macro-]').each(function(){$('#macro-provider').each(function(){var t=$(this),o=t.html();t.html(o.replace(/Provider:.*/,'Provider: '+e.provider)),$('#macro-provider').attr('href',e.provider_site_url)}),$('#macro-user-name').each(function(){var t=$(this),o=t.html();t.html(o.replace(/User:.*/,'User: '+e.user_name)),$('#macro-user-name').attr('href',e.provider_member_url)}),$('#macro-provider-permissions').each(function(){var t=$(this),o=t.html();t.html(o.replace(/public.*|protected.*|private.*|blocked.*/,e.provider_permissions)),$('#macro-provider-permissions').attr('href',e.provider_member_url)}),$('#macro-provider-membership').each(function(){var t=$(this),o=t.html();t.html(o.replace(/guest|member/,e.provider_membership)),$('#macro-provider-membership').attr('href',e.provider_member_url)}),$('#macro-cookie-state').each(function(){var t=$(this),o=t.html();t.html(o.replace(/accepted|declined|pending/,e.cookies_accepted)),$('#macro-cookie-state').attr('href',e.provider_privacy_url)})}),t.info('met dependencies for: sidebarLoaded'),clearInterval(o),!0):(t.error('no user data provided'),clearInterval(o),!1)},25)},getMessage:function(e,t,o){return t=j1.messages[e][t].message[o]},logger:function(e,t,o){return(e=log4javascript.getLogger(e))[t](o),!0},sendMessage:function(t,o,a){var r=log4javascript.getLogger('j1.sendMessage'),i=JSON.stringify(a);'j1'===o?(n='send message from '+t+' to'+o+': '+i,r.debug(n),e("j1.messageHandler",window,t,a)):(n='send message from '+t+' to '+o+': '+i,r.debug(n),e(o+'.messageHandler',window,t,a))},messageHandler:function(e,t){var o=JSON.stringify(t);return n='received message from '+e+': '+o,i.debug(n),'command'===t.type&&'module_initialized'===t.action&&(s.setState('finished'),i.info(t.text)),!0},getStyleValue:function(e,t){var o,a='test-'+e,r=document.getElementById(a);return null===r&&((r=document.createElement('div')).className=e,r.style.display='none',document.body.appendChild(r)),o=$(r).css(t),document.body.removeChild(r),o},getStyleSheetLoaded:function(e){var t=document.styleSheets;t[t.length-1];for(var o in document.styleSheets)if(t[o].href&&t[o].href.indexOf(e)>-1)return!0},getCookieNames:function(){return m},setCss:function(){var e=log4javascript.getLogger('j1.setCss'),t=j1.getStyleValue('bg-primary','background-color');j1.getStyleValue('bg-secondary','background-color');e.info('set color scheme for selected theme'),$('head').append('<style>.g-bg-primary { background-color: '+t+' !important; }</style>'),$('head').append('<style>.iconify-md-bg-primary { color: '+t+' !important; }</style>'),$('head').append('<style>.fa-md-bg-primary { color: '+t+' !important; }</style>'),$('head').append('<style>.fas-md-bg-primary { color: '+t+' !important; }</style>'),$('head').append('<style>.mdi-md-bg-primary { color: '+t+' !important; }</style>');var o=t,a=j1.getStyleValue('btn-success','background-color'),r=j1.getStyleValue('btn-info','background-color'),i=j1.getStyleValue('icon-warning','color'),n=j1.getStyleValue('btn-danger','background-color');return $('head').append('<style>.icon-note { color: '+o+' !important; }</style>'),$('head').append('<style>.icon-tip { color: '+a+' !important; }</style>'),$('head').append('<style>.icon-important { color: '+r+' !important; }</style>'),$('head').append('<style>.icon-warning { color: '+i+' !important; }</style>'),$('head').append('<style>.icon-caution { color: '+n+' !important; }</style>'),$('head').append('<style>.tooltip-inner { background-color: '+t+' !important; }</style>'),$('head').append('<style>.bs-tooltip-auto[x-placement^=bottom] .arrow::before, .bs-tooltip-bottom .arrow::before { border-bottom-color: '+t+' !important; }</style>'),$('head').append('<style>.btn-viewer:hover { background-color: '+t+' !important; }</style>'),!0},setState:function(e){c=e},getState:function(){return c},setXhrDataState:function(e,t){j1.xhrDataState[e]=t},getXhrDataState:function(e){return j1.xhrDataState[e]},setXhrDomState:function(e,t){j1.xhrDOMState[e]=t},getXhrDOMState:function(e){return j1.xhrDOMState[e]},setMode:function(e){u=e},getMode:function(){return u},checkUserAgent:function(){return navigator.userAgent.search(ua_name)>=0},generateId:function(e){for(var t='',o='abcdefghijklmnopqrstuvwxyz0123456789',a=o.length,r=0;r<e;r++)t+=o.charAt(Math.floor(Math.random()*a));return t},getTrue:function(){return!0},getFalse:function(){return!1},goHome:function(){'function'==typeof window.home?window.home():document.all?window.location.href='about:home':window.location.href='about:blank'},goBack:function(){window.location.href=document.referrer}}}(window);



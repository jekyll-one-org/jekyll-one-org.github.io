

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/mmenu.js
 # JS Adapter for J1 MobileMenu (MMenu Light)
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2020 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see https://jekyll.one
 # -----------------------------------------------------------------------------
 # NOTE: For AJAX (XHR) loads see
 #  https://stackoverflow.com/questions/3709597/wait-until-all-jquery-ajax-requests-are-done
 # -----------------------------------------------------------------------------
 # NOTE: For getStyleValue helper see
 #  https://stackoverflow.com/questions/16965515/how-to-get-a-style-attribute-from-a-css-class-by-javascript-jquery
 # -----------------------------------------------------------------------------
 # Adapter generated: 2020-08-03 18:29:21 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.mmenu=function(e){var n,t,a;e.getCookieNames();return{init:function(a){n=e.adapter.mmenu,t=log4javascript.getLogger('j1.adapter.mmenu'),n.setState('started'),t.info('state: '+n.getState()),t.info('module is being initialized');var i=($.extend({module_name:'j1.adapter.mmenu',generated:'2020-08-03 18:29:21 +0200'},a),$.extend({},{enabled:!0,mmenu_plugin:{node:"null",mediaQuery:"all",max_width:1e5},mmenu_navigator:{selected:"Selected",slidingSubmenus:!0,title:"Navigation",theme:"dark"},mmenu_drawer:{position:"right"},menus:[{menu:{enabled:!0,xhr_container_id:"navigator_nav_mmenu",xhr_data_path:"/assets/data/mmenu/index.html",drawer:{position:"right"},content:{id:"menu_mmenu",type:"navigation",title:"Navigation",theme:"dark",button:"#mmenu-button",button_activated:"always"}}},{menu:{enabled:!0,xhr_container_id:"navigator_sidebar_mmenu",xhr_data_path:"/assets/data/mmenu_sidebar/index.html",drawer:{position:"left"},content:{id:"sidebar_mmenu",type:"drawer",title:"Site Info",theme:"dark",button:"#navbar-brand",button_activated:"always",boxes:[{box:{enabled:!0,type:"user_info",title:"User",links:[{title:"Provider",value:"??provider",href:"??provider-site-url",target:"_blank",icon:"domain"},{title:"User",icon:"account",value:"??user-name",href:"??provider_member_url",target:"none"},{title:"Permissions",icon:"account-check",value:"??provider-permissions",href:"??provider_member_url",target:"none"},{title:"Membership",icon:"account-settings",value:"??provider-membership",href:"??provider_member_url",target:"none"},{title:"Cookies",icon:"cookie",value:"??cookie-state",href:"??provider_privacy_url",target:"none"}]}},{box:{enabled:!0,type:"theme_info",title:"Theme",links:[{title:"Name",icon:"face",value:"??theme-name",href:"/pages/public/previewer/theme/",target:"none"},{title:"Author",icon:"grease-pencil",value:"??theme-author",href:"??theme-author-url",target:"_blank"},{title:"Version",icon:"numeric",value:"??theme-version",href:"/pages/public/previewer/theme/",target:"none"}]}},{box:{enabled:!0,type:"site_info",title:"Site",links:[{title:"About",icon:"home-outline",href:"/pages/public/about/site/",target:"none"},{title:"Impress",icon:"alert-outline",href:"/pages/public/legal/en/impress/",target:"none"},{title:"Privacy",icon:"heart",href:"/pages/public/legal/en/privacy/",target:"none"},{title:"License",icon:"checkbox-multiple-marked-circle-outline",href:"/pages/public/legal/en/license_agreement/",target:"none"}]}}]}}},{menu:{enabled:!0,xhr_container_id:"navigator_toc_mmenu",xhr_data_path:"/assets/data/mmenu_toc/index.html",drawer:{position:"right"},content:{id:"toc_mmenu",type:"drawer",title:"Table of Contents",theme:"dark",button:"#ssm_toc",button_activated:"js-toc-content"}}}]}));if(n.navMenuOptions=i,null!=a){$.extend({},a)}n.setState('started'),t.info('state: '+n.getState()),t.info('module is being initialized'),n.mmenuLoader(i)},mmenuLoader:function(a){n.setState('loading'),t.info('status: '+n.getState()),t.info('load HTML data for navs and drawers'),e.xhrData({xhr_container_id:'navigator_nav_mmenu',xhr_data_path:'/assets/data/mmenu/index.html'},'j1.adapter.mmenu','null'),e.xhrData({xhr_container_id:'navigator_sidebar_mmenu',xhr_data_path:'/assets/data/mmenu_sidebar/index.html'},'j1.adapter.mmenu','null'),e.xhrData({xhr_container_id:'navigator_toc_mmenu',xhr_data_path:'/assets/data/mmenu_toc/index.html'},'j1.adapter.mmenu','data_loaded');var i=setInterval(function(){'success'==e.xhrDataState['#navigator_nav_mmenu']&&'success'==e.xhrDataState['#navigator_sidebar_mmenu']&&'success'==e.xhrDataState['#navigator_toc_mmenu']&&(t.info('load HTML data (AJAX): finished'),n.setState('processing'),t.info('status: '+n.getState()),t.info('initialize navs and drawers'),n.mmenuInitializer(a),n.setState('finished'),t.info('state: '+n.getState()),t.info('module initialized successfully'),t.info('met dependencies for: xhrData'),clearInterval(i))},25)},mmenuInitializer:function(e){if('navigator_nav_mmenu','/assets/data/mmenu/index.html',$('#navigator_nav_mmenu').length){t.info('mmenu is being initialized on id: navigator_nav_mmenu'),t.info('found content type: NAVIGATION'),t.info('initialize mmenu on id: #navigator_nav_mmenu');var n=setInterval(function(){if(navigator_nav_mmenu){const a=document.querySelector('#navigator_nav_mmenu'),i=new MmenuLight(a,'(max-width: '+e.mmenu_plugin.max_width+'px)',{node:e.mmenu_plugin.node,mediaQuery:e.mmenu_plugin.mediaQuery}),o=i.offcanvas({position:e.mmenu_drawer.position});i.navigation({selected:e.mmenu_navigator.selected,slidingSubmenus:e.mmenu_navigator.slidingSubmenus,title:e.mmenu_navigator.title,theme:e.mmenu_navigator.theme});$('#mmenu-button').each(function(){$(this).on('click',function(e){e.preventDefault(),o.open()})}),$('#ThemeList_MMenu').bootstrapThemeSwitcher({localFeed:''}),$('#ThemeSelect_MMenu').bootstrapThemeSwitcher(),t.info('met dependencies for: navigator_nav_mmenu loaded'),clearInterval(n),$('#menu_mmenu').show(),t.info('initializing mmenu finished on id: #navigator_nav_mmenu')}},25)}if('navigator_sidebar_mmenu','/assets/data/mmenu_sidebar/index.html',$('#navigator_sidebar_mmenu').length){t.info('mmenu is being initialized on id: navigator_sidebar_mmenu'),t.info('found content type: DRAWER'),t.info('initialize mmenu on id: #navigator_sidebar_mmenu');var a=setInterval(function(){if(navigator_sidebar_mmenu&&$('#navbar-brand').length){const n=document.querySelector('#navigator_sidebar_mmenu'),i=new MmenuLight(n,'(max-width: '+e.mmenu_plugin.max_width+'px)',{node:e.mmenu_plugin.node,mediaQuery:e.mmenu_plugin.mediaQuery}),o=i.offcanvas({position:'left'});$('#navbar-brand').each(function(){$(this).on('click',function(e){e.preventDefault(),o.open()})}),t.info('met dependencies for: navigator_sidebar_mmenu loaded'),clearInterval(a),$('#sidebar_mmenu').show()}},25);t.info('initializing mmenu finished on id: #navigator_sidebar_mmenu')}if('navigator_toc_mmenu','/assets/data/mmenu_toc/index.html',$('#navigator_toc_mmenu').length){t.info('mmenu is being initialized on id: navigator_toc_mmenu'),t.info('found content type: DRAWER'),t.info('initialize mmenu on id: #navigator_toc_mmenu');var i=setInterval(function(){if(navigator_toc_mmenu&&$('#ssm_toc').length){const n=document.querySelector('#navigator_toc_mmenu'),a=new MmenuLight(n,'(max-width: '+e.mmenu_plugin.max_width+'px)',{node:e.mmenu_plugin.node,mediaQuery:e.mmenu_plugin.mediaQuery}),o=a.offcanvas({position:'right'});$('#ssm_toc').each(function(){$(this).on('click',function(e){$('main').hasClass('js-toc-content')&&(e.preventDefault(),o.open())})}),t.info('met dependencies for: navigator_toc_mmenu loaded'),clearInterval(i),$('#toc_mmenu').show()}},25);t.info('initializing mmenu finished on id: #navigator_toc_mmenu')}},messageHandler:function(e,n){var i=JSON.stringify(n);return a='received message from '+e+': '+i,t.debug(a),'command'===n.type&&'module_initialized'===n.action&&t.info(n.text),'command'===n.type&&'status'===n.action&&t.info('messageHandler: received - '+n.action),!0},setState:function(e){n.state=e},getState:function(){return n.state}}}(j1,window);



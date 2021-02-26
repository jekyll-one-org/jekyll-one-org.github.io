

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/mmenu.js
 # JS Adapter for J1 MobileMenu (MMenu Light)
 #
 # Product/Info:
 # 
 #
 # Copyright (C) 2021 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see 
 # -----------------------------------------------------------------------------
 # NOTE: For AJAX (XHR) loads see
 #  https://stackoverflow.com/questions/3709597/wait-until-all-jquery-ajax-requests-are-done
 # -----------------------------------------------------------------------------
 # NOTE: For getStyleValue helper see
 #  https://stackoverflow.com/questions/16965515/how-to-get-a-style-attribute-from-a-css-class-by-javascript-jquery
 # -----------------------------------------------------------------------------
 # Adapter generated: 2021-02-26 16:54:45 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.mmenu=function(e){var t,n,a,i={},o=(e.getCookieNames(),!0);return{init:function(a){t=e.adapter.mmenu,n=log4javascript.getLogger('j1.adapter.mmenu'),t.setState('started'),n.info('state: '+t.getState()),n.info('module is being initialized');$.extend({module_name:'j1.adapter.mmenu',generated:'2021-02-26 16:54:45 +0000'},a);if(i=$.extend({},{enabled:!0,mmenu_plugin:{node:"null",mediaQuery:"all",max_width:1e5},mmenu_navigator:{selected:"Selected",slidingSubmenus:!0,title:"Navigation",theme:"dark"},mmenu_drawer:{position:"right"},menus:[{menu:{enabled:!0,xhr_container_id:"navigator_nav_mmenu",xhr_data_path:"/assets/data/mmenu/index.html",drawer:{position:"right"},content:{id:"menu_mmenu",type:"navigation",title:"Navigation",theme:"dark",button:"#mmenu-button",button_activated:"always"}}},{menu:{enabled:!1,xhr_container_id:"navigator_sidebar_mmenu",xhr_data_path:"/assets/data/mmenu_sidebar/index.html",drawer:{position:"left"},content:{id:"sidebar_mmenu",type:"drawer",title:"Site Info",theme:"dark",button:"#navbar-brand",button_activated:"always",boxes:[{box:{enabled:!0,type:"user_info",title:"User",links:[{title:"Provider",value:"??provider",href:"??provider-site-url",target:"_blank",icon:"domain"},{title:"User",icon:"account",value:"??user-name",href:"??provider_member_url",target:"none"},{title:"Permissions",icon:"account-check",value:"??provider-permissions",href:"??provider_member_url",target:"none"},{title:"Membership",icon:"account-settings",value:"??provider-membership",href:"??provider_member_url",target:"none"},{title:"Cookies",icon:"cookie",value:"??cookie-state",href:"??provider_privacy_url",target:"none"}]}},{box:{enabled:!0,type:"theme_info",title:"Theme",links:[{title:"Name",icon:"face",value:"??theme-name",href:"/pages/public/previewer/theme/",target:"none"},{title:"Author",icon:"grease-pencil",value:"??theme-author",href:"??theme-author-url",target:"_blank"},{title:"Version",icon:"numeric",value:"??theme-version",href:"/pages/public/previewer/theme/",target:"none"}]}},{box:{enabled:!0,type:"site_info",title:"Site",links:[{title:"About",icon:"home-outline",href:"/pages/public/about/site/",target:"none"},{title:"Impress",icon:"alert-outline",href:"/pages/public/legal/en/impress/",target:"none"},{title:"Privacy",icon:"heart",href:"/pages/public/legal/en/privacy/",target:"none"},{title:"License",icon:"checkbox-multiple-marked-circle-outline",href:"/pages/public/legal/en/license_agreement/",target:"none"}]}}]}}},{menu:{enabled:!0,xhr_container_id:"navigator_toc_mmenu",xhr_data_path:"/assets/data/mmenu_toc/index.html",drawer:{position:"right"},content:{id:"toc_mmenu",type:"drawer",title:"Table of Contents",theme:"dark",button:"#open_mmenu_toc",button_activated:"js-toc-content"}}}]}),$.extend({},{enabled:!0,saveToCookie:!0,debug:!1,preview_page:"/pages/public/previewer/theme/",menu_icon_family:"MDI",menu_icon_color:"#9E9E9E",menu_icon_size:"mdi-sm",cssThemeLink:"bootstrapTheme",defaultCssFile:"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",bootswatchApiUrl:"https://bootswatch.com/api",bootswatchApiVersion:4,loadFromBootswatch:!0,localThemes:"/assets/data/themes.json",excludeBootswatch:"Default, default, Lux, Sketchy",includeBootswatch:"",skipIncludeBootswatch:""}),t.navMenuOptions=i,null!=a)$.extend({},a);t.setState('started'),n.info('state: '+t.getState()),n.info('module is being initialized'),t.mmenuLoader(i)},mmenuLoader:function(a){t.setState('loading'),n.info('status: '+t.getState()),n.info('load HTML data for navs and drawers'),e.xhrData({xhr_container_id:'navigator_nav_mmenu',xhr_data_path:'/assets/data/mmenu/index.html'},'j1.adapter.mmenu','null'),e.xhrData({xhr_container_id:'navigator_toc_mmenu',xhr_data_path:'/assets/data/mmenu_toc/index.html'},'j1.adapter.mmenu','data_loaded'),n.info('initialize navs and drawers'),t.mmenuInitializer(a),t.setState('finished'),n.info('state: '+t.getState()),n.info('module initialized successfully')},mmenuInitializer:function(t){if('navigator_nav_mmenu','/assets/data/mmenu/index.html',$('#navigator_nav_mmenu').length){n.info('mmenu is being initialized on id: navigator_nav_mmenu'),n.info('found content type: NAVIGATION'),n.info('initialize mmenu on id: #navigator_nav_mmenu');var a=setInterval(function(){if('success'==e.xhrDataState['#navigator_nav_mmenu']){n.info('met dependencies for: xhrData/navigator_nav_mmenu');const e=document.querySelector('#navigator_nav_mmenu'),i=new MmenuLight(e,'(max-width: '+t.mmenu_plugin.max_width+'px)',{node:t.mmenu_plugin.node,mediaQuery:t.mmenu_plugin.mediaQuery}),m=i.offcanvas({position:t.mmenu_drawer.position});i.navigation({selected:t.mmenu_navigator.selected,slidingSubmenus:t.mmenu_navigator.slidingSubmenus,title:t.mmenu_navigator.title,theme:t.mmenu_navigator.theme});$('#mmenu-button').each(function(){$(this).on('click',function(e){e.preventDefault(),m.open()})}),o&&($('#remote_themes_mmenu').bootstrapThemeSwitcher({localFeed:''}),$('#local_themes_mmenu').bootstrapThemeSwitcher()),$('#menu_mmenu').show(),n.info('initializing mmenu finished on id: #navigator_nav_mmenu'),n.info('met dependencies for: navigator_nav_mmenu loaded'),clearInterval(a),$('#menu_mmenu').show(),n.info('initializing mmenu finished on id: #navigator_nav_mmenu')}},25)}if('navigator_toc_mmenu','/assets/data/mmenu_toc/index.html',$('#navigator_toc_mmenu').length){n.info('mmenu is being initialized on id: navigator_toc_mmenu'),n.info('found content type: DRAWER'),n.info('initialize mmenu on id: #navigator_toc_mmenu');var i=setInterval(function(){if('success'==e.xhrDataState['#navigator_toc_mmenu']&&$('#open_mmenu_toc').length){n.info('met dependencies for: xhrData/navigator_toc_mmenu');const e=document.querySelector('#navigator_toc_mmenu'),a=new MmenuLight(e,'(max-width: '+t.mmenu_plugin.max_width+'px)',{node:t.mmenu_plugin.node,mediaQuery:t.mmenu_plugin.mediaQuery}).offcanvas({position:'right'});$('#open_mmenu_toc').each(function(){$(this).on('click',function(e){$('main').hasClass('js-toc-content')&&(e.preventDefault(),a.open())})}),n.info('met dependencies for: navigator_toc_mmenu loaded'),clearInterval(i),$('#toc_mmenu').show()}},25);n.info('initializing mmenu finished on id: #navigator_toc_mmenu')}},messageHandler:function(e,t){var i=JSON.stringify(t);return a='received message from '+e+': '+i,n.debug(a),'command'===t.type&&'module_initialized'===t.action&&n.info(t.text),'command'===t.type&&'status'===t.action&&n.info('messageHandler: received - '+t.action),!0},setState:function(e){t.state=e},getState:function(){return t.state}}}(j1,window);





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
 # Adapter generated: 2021-12-15 17:10:20 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.mmenu=function(e){var n,t,a,i={},o={},m=(e.getCookieNames(),!0);return{init:function(a){n=e.adapter.mmenu,t=log4javascript.getLogger('j1.adapter.mmenu'),n.setState('started'),t.info("\nstate: "+n.getState()),t.info("\nmodule is being initialized");$.extend({module_name:'j1.adapter.mmenu',generated:'2021-12-15 17:10:20 +0000'},a);if(i=$.extend({},{enabled:!0,nav_main_menu:"navigator_nav_menu",nav_quicklinks:"quicklinks",mmenu_plugin:{node:"null",mediaQuery:"all",max_width:1e5},mmenu_navigator:{selected:"Selected",slidingSubmenus:!0,title:"Navigation",theme:"dark"},mmenu_drawer:{position:"right"},menus:[{menu:{enabled:!0,xhr_container_id:"navigator_nav_mmenu",xhr_data_element:"menu_mmenu",xhr_data_path:"/assets/data/mmenu/index.html",drawer:{position:"right"},content:{id:"menu_mmenu",type:"navigation",title:"Navigation",theme:"dark",button:"#mmenu-button",button_activated:"always"}}},{menu:{enabled:!0,xhr_container_id:"navigator_toc_mmenu",xhr_data_element:"toc_mmenu",xhr_data_path:"/assets/data/mmenu_toc/index.html",drawer:{position:"right"},content:{id:"toc_mmenu",type:"drawer",title:"Table of Contents",theme:"dark",button:"#open_mmenu_toc",button_activated:"js-toc-content"}}},{menu:{enabled:!1,xhr_container_id:"navigator_sidebar_mmenu",xhr_data_element:"sidebar_mmenu",xhr_data_path:"/assets/data/mmenu_sidebar/index.html",drawer:{position:"left"},content:{id:"sidebar_mmenu",type:"drawer",title:"Site Info",theme:"dark",button:"#navbar-brand",button_activated:"always",boxes:[{box:{enabled:!0,type:"user_info",title:"User",links:[{title:"Provider",value:"??provider",href:"??provider-site-url",target:"_blank",icon:"domain"},{title:"User",icon:"account",value:"??user-name",href:"??provider_member_url",target:"none"},{title:"Permissions",icon:"account-check",value:"??provider-permissions",href:"??provider_member_url",target:"none"},{title:"Membership",icon:"account-settings",value:"??provider-membership",href:"??provider_member_url",target:"none"},{title:"Cookies",icon:"cookie",value:"??cookie-state",href:"??provider_privacy_url",target:"none"}]}},{box:{enabled:!0,type:"theme_info",title:"Theme",links:[{title:"Name",icon:"face",value:"??theme-name",href:"/pages/public/previewer/theme/",target:"none"},{title:"Author",icon:"grease-pencil",value:"??theme-author",href:"??theme-author-url",target:"_blank"},{title:"Version",icon:"numeric",value:"??theme-version",href:"/pages/public/previewer/theme/",target:"none"}]}},{box:{enabled:!0,type:"site_info",title:"Site",links:[{title:"About",icon:"home-outline",href:"/pages/public/about/site/",target:"none"},{title:"Impress",icon:"alert-outline",href:"/pages/public/legal/en/impress/",target:"none"},{title:"Privacy",icon:"heart",href:"/pages/public/legal/en/privacy/",target:"none"},{title:"License",icon:"checkbox-multiple-marked-circle-outline",href:"/pages/public/legal/en/license_agreement/",target:"none"}]}}]}}}]}),o=$.extend({},{enabled:!0,reloadPageOnChange:!1,retries:30,saveToCookie:!0,debug:!1,preview_page:"/pages/public/previewer/theme/",menu_icon_family:"MDI",menu_icon_color:"#9E9E9E",menu_icon_size:"mdi-sm",cssThemeLink:"bootstrapTheme",defaultCssFile:"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",bootswatchApiUrl:"https://bootswatch.com/api",bootswatchApiVersion:5,loadFromBootswatch:!0,localThemes:"/assets/data/themes.json",excludeBootswatch:"Default, default, Lux, Sketchy",includeBootswatch:"",skipIncludeBootswatch:""}),n.navMenuOptions=i,null!=a)$.extend({},a);n.setState('started'),t.info("\nstate: "+n.getState()),t.info("\nmodule is being initialized"),n.mmenuLoader(i)},mmenuLoader:function(a){n.setState('loading'),t.info("\nstatus: "+n.getState()),t.info("\nload HTML data for navs and drawers"),e.loadHTML({xhr_container_id:'navigator_nav_mmenu',xhr_data_path:'/assets/data/mmenu/index.html',xhr_data_element:'menu_mmenu'},'j1.adapter.mmenu','null'),e.loadHTML({xhr_container_id:'navigator_toc_mmenu',xhr_data_path:'/assets/data/mmenu_toc/index.html',xhr_data_element:'toc_mmenu'},'j1.adapter.mmenu','null'),t.info("\ninitialize navs and drawers"),n.mmenuInitializer(a),n.setState('finished'),t.info("\nstate: "+n.getState()),t.info("\nmodule initialized successfully")},mmenuInitializer:function(n){if('navigator_nav_mmenu','/assets/data/mmenu/index.html',$('#navigator_nav_mmenu').length){t.info("\nmmenu is being initialized on id: navigator_nav_mmenu"),t.info("\nfound content type: NAVIGATION"),t.info("\ninitialize mmenu on id: #navigator_nav_mmenu");var a=setInterval(function(){if('success'==e.xhrDataState['#navigator_nav_mmenu']){t.info("\nmet dependencies for: navigator_nav_mmenu");const e=document.querySelector('#navigator_nav_mmenu'),i=new MmenuLight(e,'(max-width: '+n.mmenu_plugin.max_width+'px)',{node:n.mmenu_plugin.node,mediaQuery:n.mmenu_plugin.mediaQuery}),r=i.offcanvas({position:n.mmenu_drawer.position});i.navigation({selected:n.mmenu_navigator.selected,slidingSubmenus:n.mmenu_navigator.slidingSubmenus,title:n.mmenu_navigator.title,theme:n.mmenu_navigator.theme});$('#mmenu-button').each(function(){$(this).on('click',function(e){e.preventDefault(),r.open()})}),m&&($('#remote_themes_mmenu').bootstrapThemeSwitcher({localFeed:'',bootswatchApiVersion:o.bootswatchApiVersion}),$('#local_themes_mmenu').bootstrapThemeSwitcher({localFeed:o.localThemes})),$('#menu_mmenu').show(),t.info("\ninitializing mmenu finished on id: #navigator_nav_mmenu"),t.info("\nmet dependencies for: navigator_nav_mmenu loaded"),clearInterval(a),$('#menu_mmenu').show(),t.info("\ninitializing mmenu finished on id: #navigator_nav_mmenu")}},25)}if('navigator_toc_mmenu','/assets/data/mmenu_toc/index.html',$('#navigator_toc_mmenu').length){t.info("\nmmenu is being initialized on id: navigator_toc_mmenu"),t.info("\nfound content type: DRAWER"),t.info("\ninitialize mmenu on id: #navigator_toc_mmenu");var r=setInterval(function(){if('success'==e.xhrDataState['#navigator_toc_mmenu']&&$('#open_mmenu_toc').length){t.info("\nmet dependencies for: xhrData/navigator_toc_mmenu");const e=document.querySelector('#navigator_toc_mmenu'),a=new MmenuLight(e,'(max-width: '+n.mmenu_plugin.max_width+'px)',{node:n.mmenu_plugin.node,mediaQuery:n.mmenu_plugin.mediaQuery}).offcanvas({position:'right'});a.wrapper.id='drawer_navigator_toc_mmenu',$('#drawer_navigator_toc_mmenu').attrchange({trackValues:!0,callback:function(e){t.debug("\ndrawer changed state: "+e.newValue),t.debug("\nhide|show the main nav menu"),$('#'+i.nav_main_menu).toggle(),$('#'+i.nav_quicklinks).toggle()}}),$('#open_mmenu_toc').each(function(){$(this).on('click',function(e){$('main').hasClass('js-toc-content')&&(e.preventDefault(),a.open())})}),t.info("\nmet dependencies for: navigator_toc_mmenu loaded"),clearInterval(r),$('#toc_mmenu').show()}},25);t.info("\ninitializing mmenu finished on id: #navigator_toc_mmenu")}},messageHandler:function(e,n){var i=JSON.stringify(n);return a="\nreceived message from "+e+': '+i,t.debug(a),'command'===n.type&&'module_initialized'===n.action&&t.info('\n'+n.text),'command'===n.type&&'status'===n.action&&t.info("\nmessageHandler: received - "+n.action),!0},setState:function(e){n.state=e},getState:function(){return n.state}}}(j1,window);



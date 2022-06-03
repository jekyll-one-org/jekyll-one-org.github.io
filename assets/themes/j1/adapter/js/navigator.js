

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/navigator.js
 # JS Adapter for J1 Navigator
 #
 # Product/Info:
 # 
 #
 # Copyright (C) 2022 Juergen Adams
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
 # Adapter generated: 2022-06-03 09:01:43 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.navigator=function(e,o){var t,n,a,i,r='production',d=e.getCookieNames().user_session,l={},s=!0;return{init:function(r){$.extend({module_name:'j1.adapter.navigator',generated:'2022-06-03 09:01:43 +0000'},r);n=e.adapter.navigator,a=log4javascript.getLogger('j1.adapter.navigator'),n.setState('started'),a.debug("\nstate: "+n.getState()),a.info("\nmodule is being initialized");var d={},l={},c={},_={},u={},p={},m={},h={},g={},b={},v={},f={},k=e.getCookieNames().user_state,w={},y=0,x=100,S=e.findCookie('_ga'),C=e.findCookie('j1');if(d=$.extend({},{enabled:!0,icon_family:"MDI",icon_style:"mdi",icon_color:"mdi-grey",icon_size:"mdi-sm",nav_primary_color:"#2196F3",nav_bar:{enabled:!1,translation:"notranslate",container_id:"navigator_nav_navbar",media_breakpoint:"lg",brand_position:"right",brand_type:"image",brand_type_collapsed:"text",fixed:!0,style:"overlay",color:"light",position:"left",bottom_line_height:1,bottom_line_color:"#EEEEEE",background_color_full:"rgba(0, 0, 0, 0.4)",background_color_collapsed:"#2196F3",background_color_scrolled:"#2196F3"},nav_mmenu:{enabled:!1,nav_main_menu:"navigator_nav_menu",nav_quicklinks:"quicklinks",mmenu_plugin:{node:"null",mediaQuery:"all",max_width:1e5},mmenu_navigator:{selected:"Selected",slidingSubmenus:!0,title:"Navigation",theme:"dark"},mmenu_drawer:{position:"right"}},nav_menu:{enabled:!1,xhr_container_id:"navigator_nav_menu",xhr_data_element:"desktop_menu",xhr_data_path:"/assets/data/menu/index.html",raised_level:5,delay_menu_open:200,max_height:550,menu_font_size:"larger",megamenu_font_size:"small",icon_family:"MDI",icon_style:"mdi",icon_color:"#9E9E9E",icon_size:"mdi-sm",menu_item_color:"rgba(255, 255, 255, 0.5)",menu_item_color_hover:"rgba(255, 255, 255, 0.9)",dropdown_style:"raised",dropdown_item_style:"flat",dropdown_animate:!1,dropdown_animate_in:"slideInDown",dropdown_animate_out:"fadeOutDown",dropdown_animate_duration:.75,dropdown_item_min_width:15,dropdown_menu_max_height:25.5,dropdown_font_size:"small",dropdown_padding_x:18,dropdown_padding_y:10,dropdown_item_color:"#212121",dropdown_border_color:"#3f51b5",dropdown_border_top:0,dropdown_border_radius:0,dropdown_background_color_hover:"#ECEFF1",dropdown_background_color_active:"#CFD8DC"},nav_quicklinks:{enabled:!1,xhr_container_id:"navigator_nav_quicklinks",xhr_data_element:"quicklinks",xhr_data_path:"/assets/data/quicklinks/index.html",icon_family:"MDI",icon_color:"rgba(255, 255, 255, 0.5)",icon_color_hover:"rgba(255, 255, 255, 0.9)",icon_size:"mdi-2x",home_icon:"home-variant",home_url:"none",home_label:"Home",back_icon:"subdirectory-arrow-left",back_url:"none",back_label:"Page back",disqus_icon:"disqus",disqus_url:"none",disqus_label:"Disqus",github_icon:"github-circle",github_url:"none",github_label:"Github",patreon_icon:"patreon",patreon_url:"none",patreon_label:"Patreon",facebook_icon:"facebook",facebook_url:"none",facebook_label:"Facebook",twitter_icon:"twitter",twitter_url:"none",twitter_label:"Twitter",quicksearch_icon:"magnify",quicksearch_action:"quicksearch",quicksearch_label:"Search",cookies_icon:"cookie",cookies_action:"cookie-consent",cookies_label:"Cookie Consent",translate_icon:"google-translate",translate_action:"translate",translate_label:"Google Translate",notebooks_icon:"notebook",notebooks_action:"nbi-notebooks",notebooks_label:"NBI Notebooks",r_text_icon:!1,r_text_action:"rtext",r_text_label:"Text Resizer"},nav_topsearch:{enabled:!1,container_id:"navigator_nav_topsearch",type:"quicksearch",icon_family:"MDI",icon_color:"#FFFFFF",icon_size:"mdi-2x",search_icon:"magnify",close_icon:"close",clear_icon:"format-clear",input_color:"rgba(0, 0, 0, 0.7)",background_color:"#FAFAFA",placeholder:"Your search expression",search_heading_lead:"",result_heading_lead:""}}),l=$.extend({},{enabled:!0,translation:"notranslate",container_id:"navigator_nav_navbar",media_breakpoint:"lg",brand_position:"right",brand_type:"image",brand_type_collapsed:"text",fixed:!0,style:"overlay",color:"light",position:"left",bottom_line_height:1,bottom_line_color:"#EEEEEE",background_color_full:"rgba(0, 0, 0, 0.4)",background_color_collapsed:"#2196F3",background_color_scrolled:"#2196F3"}),c=$.extend({},{enabled:!0,xhr_container_id:"navigator_nav_menu",xhr_data_element:"desktop_menu",xhr_data_path:"/assets/data/menu/index.html",raised_level:5,delay_menu_open:200,max_height:550,menu_font_size:"larger",megamenu_font_size:"small",icon_family:"MDI",icon_style:"mdi",icon_color:"#9E9E9E",icon_size:"mdi-sm",menu_item_color:"rgba(255, 255, 255, 0.5)",menu_item_color_hover:"rgba(255, 255, 255, 0.9)",dropdown_style:"raised",dropdown_item_style:"flat",dropdown_animate:!1,dropdown_animate_in:"slideInDown",dropdown_animate_out:"fadeOutDown",dropdown_animate_duration:.75,dropdown_item_min_width:15,dropdown_menu_max_height:25.5,dropdown_font_size:"small",dropdown_padding_x:18,dropdown_padding_y:10,dropdown_item_color:"#212121",dropdown_border_color:"#3f51b5",dropdown_border_top:0,dropdown_border_radius:0,dropdown_background_color_hover:"#ECEFF1",dropdown_background_color_active:"#CFD8DC",delay_open_menu:250}),_=$.extend({},{enabled:!0,xhr_container_id:"navigator_nav_quicklinks",xhr_data_element:"quicklinks",xhr_data_path:"/assets/data/quicklinks/index.html",icon_family:"MDI",icon_color:"rgba(255, 255, 255, 0.5)",icon_color_hover:"rgba(255, 255, 255, 0.9)",icon_size:"mdi-2x",home_icon:"home-variant",home_url:"https://jekyll-one-org.github.io/",home_label:"Home",back_icon:"subdirectory-arrow-left",back_url:"none",back_label:"Page back",disqus_icon:"disqus",disqus_url:"none",disqus_label:"Disqus",github_icon:"github-circle",github_url:"none",github_label:"Github",patreon_icon:"patreon",patreon_url:"none",patreon_label:"Patreon",facebook_icon:"facebook",facebook_url:"none",facebook_label:"Facebook",twitter_icon:"twitter",twitter_url:"none",twitter_label:"Twitter",quicksearch_icon:"magnify",quicksearch_action:"quicksearch",quicksearch_label:"Search",cookies_icon:"cookie",cookies_action:"cookie-consent",cookies_label:"Cookie Consent",translate_icon:"google-translate",translate_action:"translate",translate_label:"Google Translate",notebooks_icon:"notebook",notebooks_action:"nbi-notebooks",notebooks_label:"NBI Notebooks",r_text_icon:!1,r_text_action:"rtext",r_text_label:"Text Resizer",r_text_sizer:!1}),u=$.extend({},{enabled:!0,container_id:"navigator_nav_topsearch",type:"quicksearch",icon_family:"MDI",icon_color:"#FFFFFF",icon_size:"mdi-2x",search_icon:"magnify",close_icon:"close",clear_icon:"format-clear",input_color:"rgba(0, 0, 0, 0.7)",background_color:"#FAFAFA",placeholder:"Your search expression",search_heading_lead:"",result_heading_lead:""}),p=$.extend({},{enabled:!0,xhr_container_id:"authclient_modals",xhr_data_element:"authClientModals",xhr_data_path:"/assets/data/authclient/index.html",signin_modal_id:"modalOmniSignIn",hide_on_cookies_declined:!0,icon_family:"MDI",signin_icon:"login",signout_icon:"logout",auth_signin_modal:{title:"SignIn",body_text:"In order to get *signed in*, check one of the options below and mark a provider for authentication. You'll be *redirected* to authenticate with the provider *selected*. If signed in *successfully*, you get back to this site for the page requested.\n\nNOTE: To get access to secured pages of this site, authentication with a provider is needed only *once*.\n"},auth_signout_modal:{title:"SignOut",body_text:"After signing out from this site, you'll be *redirected* to the *provider* you're currently authenticated. From your home page at the *provider*, you can *sign out* completely.\n\nNOTE: In order to signing out *completely*, check the switch below to *on*.\n"},auth_disqus:{id:1,title:"Disqus",text:"SignIn to Disqus. Get access to all *PROTECTED* content pages of this site."},auth_github:{id:2,title:"Github",text:"SignIn to Github. Get access to all *PROTECTED* content pages of this site."}}),v=$.extend({},{enabled:!0,j1_auth:{enabled:!1,ssl:!1,content:{"public":["\\W*((?i)assets(?-i))\\W*","\\W*((?i)public(?-i))\\W*"],"protected":["\\W*((?i)protected(?-i))\\W*"],"private":["\\W*((?i)private(?-i))\\W*"]},providers:{activated:["github","disqus"],disqus:{provider_url:"https://disqus.com",strategy:"member",scope:[],users:["all"],permissions:["protected"],data_fields:[],conditions:{"protected":{enabled:!0,users:{blacklist:[]}},"private":{enabled:!1,users:{whitelist:["all"],blacklist:[]}}}},github:{provider_url:"https://github.com",strategy:"member",scope:[],users:["all"],permissions:["protected","private"],data_fields:[],conditions:{"protected":{enabled:!0,users:{blacklist:[]}},"private":{enabled:!0,users:{whitelist:["all"],blacklist:[]}}}}}},auth_client:{enabled:!0,auth_signin_modal:{title:"SignIn",body_text:"In order to get *signed in*, check one of the options below and mark a provider for authentication. You'll be *redirected* to authenticate with the provider *selected*. If signed in *successfully*, you get back to this site for the page requested.\n\nNOTE: To get access to secured pages of this site, authentication with a provider is needed only *once*.\n"},auth_signout_modal:{title:"SignOut",body_text:"After signing out from this site, you'll be *redirected* to the *provider* you're currently authenticated. From your home page at the *provider*, you can *sign out* completely.\n\nNOTE: In order to signing out *completely*, check the switch below to *on*.\n"},auth_disqus:{id:1,title:"Disqus",text:"SignIn to Disqus. Get access to all *PROTECTED* content pages of this site."},auth_github:{id:2,title:"Github",text:"SignIn to Github. Get access to all *PROTECTED* content pages of this site."}}}),v.enabled,w=$.extend({},{enabled:!0,debug:!1,saveToCookie:!0,reloadPageOnChange:!1,retries:30,preview_page:"/pages/public/previewer/theme/",menu_icon_family:"MDI",menu_icon_color:"#9E9E9E",menu_icon_size:"mdi-sm",cssThemeLink:"bootstrapTheme",defaultCssFile:"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",bootswatchApiUrl:"https://bootswatch.com/api",bootswatchApiVersion:5,loadFromBootswatch:!0,localThemes:"/assets/data/themes.json",excludeBootswatch:"Default, default, Lux, Sketchy",includeBootswatch:"",skipIncludeBootswatch:""}),m=e.mergeData(l,d.nav_bar),h=e.mergeData(c,d.nav_menu),g=e.mergeData(_,d.nav_quicklinks),b=e.mergeData(u,d.nav_topsearch),p=e.mergeData(p,d.nav_authclient),n.navDefaults=d,n.navBarOptions=m,n.navMenuOptions=h,n.navQuicklinksOptions=g,n.navTopsearchOptions=b,n.navAuthClientConfig=p,n.navAuthManagerConfig=v,null!=r)$.extend({},r);e.loadHTML({xhr_container_id:g.xhr_container_id,xhr_data_path:g.xhr_data_path,xhr_data_element:g.xhr_data_element},'j1.adapter.navigator',null),e.loadHTML({xhr_container_id:p.xhr_container_id,xhr_data_path:p.xhr_data_path,xhr_data_element:p.xhr_data_element},'j1.adapter.navigator',null),e.loadHTML({xhr_container_id:h.xhr_container_id,xhr_data_path:h.xhr_data_path,xhr_data_element:h.xhr_data_element},'j1.adapter.navigator','data_loaded');var q=setInterval(function(){if('success'===e.xhrDOMState['#'+g.xhr_container_id]&&'success'===e.xhrDOMState['#'+p.xhr_container_id]&&'success'===e.xhrDOMState['#'+h.xhr_container_id]){if(n.setState('processing'),a.info("\nstatus: "+n.getState()),a.info("\ninitialize navigator core"),t=e.appDetected(),e.authEnabled(),a.info("\napplication status detected: "+t),e.core.navigator.init(n.navDefaults,n.navMenuOptions),s){i="\ntheme switcher: enabled",a.info(i),e.existsCookie(k)?f=e.readCookie(k):(a.error("\ncookie not found: j1.user.state"),a.debug("\nj1 cookies found:"+C.length),C.forEach(e=>console.log('j1.core.switcher: '+e)),a.debug("\nga cookies found:"+S.length),S.forEach(e=>console.log('j1.core.switcher: '+e)));var o=setInterval(function(){if('core_initialized'==e.adapter.navigator.getState()){i="\nload themes",a.info(i),i="\nload local themes (json file)",a.info(i),$('#local_themes').bootstrapThemeSwitcher({localFeed:w.localThemes}),$('#remote_themes').bootstrapThemeSwitcher({localFeed:'',bootswatchApiVersion:w.bootswatchApiVersion});var t=setInterval(function(){y+=1,document.getElementById("remote_themes").getElementsByTagName("li").length>0?(a.info("\nremote themes loaded: successfully"),a.info("\nremote themes loaded: successfully after: "+25*y+' ms'),clearInterval(t)):a.debug("\nwait for theme to be loaded: "+f.theme_name),y>x&&(a.warn("\nremote themes loading: failed"),a.warn("\ncontinue processing"),clearInterval(t)),clearInterval(o)},25)}n.setState('finished')},25)}else i="\ntheme switcher detected as: disabled",a.info(i),n.setState('finished');var r=setInterval(function(){s?'finished'===e.getState()&&(n.setState('processing'),a.info("\ninitializing dynamic CSS styles"),n.setCSS(d,m,h,g,b),a.info("\ninit auth client"),n.initAuthClient(n.navAuthManagerConfig),n.setState('finished'),a.debug("\nstate: "+n.getState()),a.info("\nmodule initialized successfully"),a.debug("\nmet dependencies for: j1"),clearInterval(r)):(n.setState('processing'),a.info("\napply dynamic CSS styles"),n.setCSS(d,m,h,g,b),a.info("\ninit auth client"),n.initAuthClient(n.navAuthManagerConfig),n.setState('finished'),a.debug("\nstate: "+n.getState()),clearInterval(r))},25);a.debug("\nmet dependencies for: themer"),clearInterval(q)}},25);$(o).on('resize',function(){e.core.navigator.manageDropdownMenu(d,h),setTimeout(function(){e.core.navigator.navbarSticky()},500),$(o).scrollTop($(o).scrollTop()+1),$(o).scrollTop($(o).scrollTop()-1)})},initAuthClient:function(o){log4javascript.getLogger('j1.adapter.navigator.initAuthClient');var t=e.readCookie(d);return n.modalEventHandler(o),e.appDetected()&&e.authEnabled()&&('true'===t.authenticated?($('#navLinkSignInOut').attr('data-bs-target','#modalOmniSignOut'),$('#iconSignInOut').removeClass('mdi-login').addClass('mdi-logout')):($('#navLinkSignInOut').attr('data-bs-target','#modalOmniSignIn'),$('#iconSignInOut').removeClass('mdi-logout').addClass('mdi-login'))),!0},modalEventHandler:function(t){var n,i,s,c=t.j1_auth,_={provider:c.providers.activated[0],users:c.providers[c.providers.activated[0]].users,"do":!1},u={provider:c.providers.activated[0],providerSignOut:!1,"do":!1};return s="\ninitialize button click events",a.info(s),$('ul.nav-pills > li').click(function(e){e.preventDefault(),_.provider=$(this).text().trim(),_.provider=_.provider.toLowerCase(),_.allowed_users=_.users.toString()}),$('a.btn').click(function(){'signInButton'===this.id?_["do"]=!0:_["do"]=!1,'signOutButton'===this.id?u["do"]=!0:u["do"]=!1}),$('input:checkbox[name="providerSignOut"]').on('click',function(e){e.stopPropagation(),u.providerSignOut=$('input:checkbox[name="providerSignOut"]').is(':checked'),'development'===r&&(s="\nprovider signout set to: "+u.providerSignOut,a.info(s))}),$('#modalOmniSignOut').on('show.bs.modal',function(){var o=$(this);a.info("\nplace current user data"),l=e.readCookie(d),o.find('.user-info').text('You are signed in to provider: '+l.provider)}),$('#modalOmniSignIn').on('hidden.bs.modal',function(){if(1==_["do"]){n=_.provider.toLowerCase(),i=_.users.toString(),s="\nprovider detected: "+n,a.info(s);var e='/authentication?request=signin&provider='+n+'&allowed_users='+i;s="\ncall middleware for signin on route: "+e,a.info(s),o.location.href=e}else n=_.provider.toLowerCase(),s="\nprovider detected: "+n,a.info(s),s="\nlogin declined for provider: "+n,a.info(s)}),$('#modalOmniSignOut').on('hidden.bs.modal',function(){if(1==u["do"]){a.info("\nload active provider from cookie: "+d),l=e.readCookie(d),n=l.provider,l.provider_site_url,s="\nprovider detected: "+n,a.info(s),s="\ninitiate signout for provider: "+n,a.info(s);var t='/authentication?request=signout&provider='+n+'&provider_signout='+u.providerSignOut;s="\ncall middleware on route : "+t,a.info(s),o.location.href=t}else n=u.provider.toLowerCase(),s="\nprovider detected: "+n,a.info(s),s="\nsignout declined for provider: "+n,a.info(s)}),s="\ninitialize button click events completed",a.info(s),!0},setCSS:function(e,o,t,n,a){var i=log4javascript.getLogger('j1.adapter.navigator.setCSS'),r='992px',d='768px',l='576px';e.nav_primary_color;i.info("\nset dynamic styles for the theme loaded"),t.dropdown_font_size=t.dropdown_font_size,t.megamenu_font_size=t.megamenu_font_size,o.background_color_full=o.background_color_full,t.menu_item_color=t.menu_item_color,t.menu_item_color_hover=t.menu_item_color_hover,t.menu_item_dropdown_color=t.menu_item_dropdown_color,t.dropdown_item_color=t.dropdown_item_color,t.dropdown_background_color_hover=t.dropdown_background_color_hover,t.dropdown_background_color_active=t.dropdown_background_color_active,t.dropdown_border_color=t.dropdown_border_color,n.icon_color=n.icon_color,n.icon_color_hover=n.icon_color_hover,n.background_color=n.background_color,a.input_color=a.input_color,a.background_color=a.background_color;var s=$('#bg-primary').css('background-color'),c=$('body').css('background-color'),_=s;return $('table').css('background',c),$('head').append('<style>.mdi-bg-primary {color: '+_+';}</style>'),$('head').append('<style>.navbar-brand > img { height: 48px !important; }</style>'),$('head').append('<style>@media (min-width: '+r+') { nav.navbar.navigator.navbar-transparent.light { background-color: '+o.background_color_full+' !important; border-bottom: solid 0px !important; } }</style>'),$('head').append('<style>@media (min-width: '+r+') { nav.navbar.navigator.navbar-scrolled.light { background-color: '+_+' !important; } }</style>'),$('head').append('<style id="dynNav">@media (max-width: '+d+') { nav.navbar.navigator.navbar-transparent.light { background-color: '+o.background_color_full+' !important; border-bottom: solid 0px !important; } }</style>'),$('head').append('<style id="dynNav">@media (max-width: '+d+') { nav.navbar.navigator.navbar-scrolled.light { background-color: '+_+' !important; } }</style>'),$('head').append('<style id="dynNav">@media (min-width: '+d+') { nav.navbar.navigator.navbar-transparent.light { background-color: '+o.background_color_full+' !important; border-bottom: solid 0px !important; } }</style>'),$('head').append('<style id="dynNav">@media (min-width: '+d+') { nav.navbar.navigator.navbar-scrolled.light { background-color: '+_+' !important; } }</style>'),$('head').append('<style id="dynNav">@media (max-width: '+l+') { nav.navbar.navigator.navbar-transparent.light { background-color: '+o.background_color_full+' !important; border-bottom: solid 0px !important; } }</style>'),$('head').append('<style id="dynNav">@media (max-width: '+l+') { nav.navbar.navigator.navbar-scrolled.light { background-color: '+_+' !important; } }</style>'),$('head').append('<style>.quicklink-nav> ul > li > a { color: '+n.icon_color+' !important; }</style>'),$('head').append('<style>.quicklink-nav> ul > li > a:hover { color: '+n.icon_color_hover+' !important; }</style>'),$('head').append('<style>.dropdown-menu > .active > a { background-color: transparent !important; }</style>'),$('head').append('<style>@media (min-width: '+r+') { nav.navbar.navigator .dropdown-item:focus, nav.navbar.navigator .dropdown-item:hover, nav.navbar.navigator .nav-sub-item:focus, nav.navbar.navigator .nav-sub-item:hover { background: '+t.dropdown_background_color_hover+' !important; }}</style>'),$('head').append('<style>@media (min-width: '+r+') { nav.navbar.navigator ul.nav.navbar-right .dropdown-menu .dropdown-menu { left: -'+t.dropdown_item_min_width+'rem !important; } }</style>'),$('head').append('<style>@media (min-width: '+r+') { nav.navbar.navigator li.dropdown ul.dropdown-menu ul.dropdown-menu  { top: -'+t.dropdown_border_top+'px !important; max-height: '+t.dropdown_menu_max_height+'em; } }</style>'),$('head').append('<style>@media (min-width: '+r+') { nav.navbar.navigator ul.nav > li > a { color: '+t.menu_item_color+' !important; } }</style>'),$('head').append('<style>@media (min-width: '+r+') { nav.navbar.navigator ul.nav > li > a:hover { color: '+t.menu_item_color_hover+' !important; } }</style>'),$('head').append('<style>@media (min-width: '+r+') { nav.navbar.navigator li.dropdown ul.dropdown-menu { animation-duration: '+t.dropdown_animate_duration+'s !important; color: #616161 !important; min-width: '+t.dropdown_item_min_width+'rem !important; border-top: solid '+t.dropdown_border_top+'px !important; border-radius: '+t.dropdown_border_radius+'px !important; left: 0; } }</style>'),$('head').append('<style>@media (min-width: '+r+') { nav.navbar.navigator li.dropdown ul.dropdown-menu > li > a { color: '+t.dropdown_item_color+' !important; font-size: '+t.dropdown_font_size+' !important; font-weight: 400; } }</style>'),$('head').append('<style>@media (min-width: '+r+') { nav.navbar.navigator ul.dropdown-menu.megamenu-content .content ul.menu-col li a { color: '+t.dropdown_item_color+' !important; font-size: '+t.megamenu_font_size+' !important; font-weight: 400; } }</style>'),$('head').append('<style>.top-search { background-color: '+a.background_color+' !important; }</style>'),$('head').append('<style>.top-search input.form-control { color: '+a.input_color+' !important; }</style>'),$('head').append('<style>.timeline > li > .timeline-panel:after {border-right-color: '+_+'; border-left-color: '+_+';}</style>'),$('head').append('<style>.tmicon {background: '+_+';}</style>'),$('head').append('<style>.heading:after {background: '+_+' !important;}</style>'),$('head').append('<style>.tag-cloud ul li a {background-color: '+_+' !important;}</style>'),$('head').append('<style>.is-active-link::before {background-color: '+_+' !important;}</style>'),$('head').append('<style>.modal-dialog.modal-notify.modal-primary .modal-header {background-color: '+_+';}</style>'),$('head').append('<style>.nav-pills .nav-link.active, .nav-pills .show > .nav-link {background-color: '+_+' !important;}</style>'),!0},messageHandler:function(e,o){var t=JSON.stringify(o);return n.setState(o.action),i="\nreceived message from "+e+': '+t,a.info(i),i="\nset state to: "+o.action,a.info(i),'command'===o.type&&'module_initialized'===o.action&&a.info('\n'+o.text),'command'===o.type&&'status'===o.action&&a.info("\nmessageHandler: received - "+o.action),!0},setState:function(e){n.state=e},getState:function(){return n.state}}}(j1,window);



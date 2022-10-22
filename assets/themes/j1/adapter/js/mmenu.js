

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/mmenu.js
 # JS Adapter for J1 MobileMenu (MMenu Light)
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
 # Adapter generated: 2022-10-22 14:46:14 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.mmenu=function(e){var t,n,a,i={};e.getCookieNames();return{init:function(a){$.extend({module_name:'j1.adapter.mmenu',generated:'2022-10-22 14:46:14 +0200'},a);if(t=e.adapter.mmenu,n=log4javascript.getLogger('j1.adapter.mmenu'),t.setState('started'),n.debug("\nstate: "+t.getState()),n.info("\nmodule is being initialized"),i=$.extend({},{enabled:!1,nav_main_menu:"navigator_nav_menu",nav_quicklinks:"quicklinks",mmenu_plugin:{node:"null",mediaQuery:"all",max_width:1e5},mmenu_navigator:{selected:"Selected",slidingSubmenus:!0,title:"Navigation",theme:"dark"},mmenu_drawer:{position:"right"}}),$.extend({},{enabled:!0,debug:!1,saveToCookie:!0,reloadPageOnChange:!1,retries:30,preview_page:"/pages/public/previewer/current_theme/",menu_icon_family:"MDI",menu_icon_color:"#9E9E9E",menu_icon_size:"mdi-sm",cssThemeLink:"bootstrapTheme",defaultCssFile:"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",bootswatchApiUrl:"https://bootswatch.com/api",bootswatchApiVersion:5,loadFromBootswatch:!0,localThemes:"/assets/data/themes.json",excludeBootswatch:"Default, default, Lux, Sketchy",includeBootswatch:"",skipIncludeBootswatch:""}),t.navMenuOptions=i,null!=a)$.extend({},a);t.setState('started'),n.debug("\nstate: "+t.getState()),n.info("\nmodule is being initialized"),t.mmenuLoader(i)},mmenuLoader:function(e){t.setState('loading'),n.info("\nstatus: "+t.getState()),n.info("\nload HTML data for navs and drawers"),n.info("\ninitialize navs and drawers"),t.mmenuInitializer(e),t.setState('finished'),n.debug("\nstate: "+t.getState()),n.info("\nmodule initialized successfully")},mmenuInitializer:function(){},messageHandler:function(e,t){var i=JSON.stringify(t);return a="\nreceived message from "+e+': '+i,n.debug(a),'command'===t.type&&'module_initialized'===t.action&&n.info('\n'+t.text),'command'===t.type&&'status'===t.action&&n.info("\nmessageHandler: received - "+t.action),!0},setState:function(e){t.state=e},getState:function(){return t.state}}}(j1,window);



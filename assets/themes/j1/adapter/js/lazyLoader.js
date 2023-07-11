

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/lazyLoader.js
 # J1 Adapter for the lazyLoader module (core)
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-07-11 16:09:25 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.lazyLoader=function(e){var s,o,t,r,n,a,i=e.getCookieNames();e.readCookie(i.user_state);return{init:function(a){$.extend({module_name:'j1.adapter.lazyLoader',generated:'2023-07-11 16:09:25 +0200'},a);s=$.extend({},{enabled:!1}),o=$.extend({},{enabled:!0,loaders:[{loader:null,enabled:!0,description:"MDI Icons (light)",src:"/assets/themes/j1/core/css/icon-fonts/mdil.min.css",selector:".mdil",rootMargin:"150px 0px"},{loader:null,enabled:!0,description:"MDI Icon CSS (regular)",src:"/assets/themes/j1/core/css/icon-fonts/mdi.min.css",selector:".mdi",rootMargin:"150px 0px"},{loader:null,enabled:!0,description:"FA Icon CSS",src:"/assets/themes/j1/core/css/icon-fonts/fontawesome.min.css",selector:".fa",rootMargin:"150px 0px"},{loader:null,enabled:!0,description:"CountryFlag Icon CSS",src:"/assets/themes/j1/core/country-flags/css/theme/uno.min.css",selector:".flag-icon",rootMargin:"150px 0px"},{loader:null,enabled:!0,description:"rTable CSS",src:"/assets/themes/j1/modules/rtable/css/theme/uno/rtable.min.css",selector:".rtable",rootMargin:"150px 0px"}]}),t=$.extend(!0,{},s,o),r=e.adapter.lazyLoader,n=log4javascript.getLogger('j1.adapter.lazyLoader');var i=setInterval(function(){'finished'==e.getState()&&(r.setState('started'),n.info("\ninitialize moodule lazyLoader: started"),r.registerLoaders(t),r.setState('finished'),n.info("\ninitialize moodule lazyLoader: finished"),clearInterval(i))},10)},registerLoaders:function(){e.lazyCSS().observe({src:'/assets/themes/j1/core/css/icon-fonts/mdil.min.css',selector:'.mdil',rootMargin:'150px 0px'}),n.info("\nregister lazy loading for: MDI Icons (light)"),e.lazyCSS().observe({src:'/assets/themes/j1/core/css/icon-fonts/mdi.min.css',selector:'.mdi',rootMargin:'150px 0px'}),n.info("\nregister lazy loading for: MDI Icon CSS (regular)"),e.lazyCSS().observe({src:'/assets/themes/j1/core/css/icon-fonts/fontawesome.min.css',selector:'.fa',rootMargin:'150px 0px'}),n.info("\nregister lazy loading for: FA Icon CSS"),e.lazyCSS().observe({src:'/assets/themes/j1/core/country-flags/css/theme/uno.min.css',selector:'.flag-icon',rootMargin:'150px 0px'}),n.info("\nregister lazy loading for: CountryFlag Icon CSS"),e.lazyCSS().observe({src:'/assets/themes/j1/modules/rtable/css/theme/uno/rtable.min.css',selector:'.rtable',rootMargin:'150px 0px'}),n.info("\nregister lazy loading for: rTable CSS")},messageHandler:function(e,s){var o=JSON.stringify(s,undefined,2);return a="\nreceived message from "+e+': '+o,n.debug(a),'command'===s.type&&'module_initialized'===s.action&&n.info('\n'+s.text),!0},setState:function(e){r.state=e},getState:function(){return r.state}}}(j1,window);



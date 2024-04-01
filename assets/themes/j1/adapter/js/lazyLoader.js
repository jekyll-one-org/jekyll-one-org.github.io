

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/lazyLoader.js
 # J1 Adapter for the lazyLoader module (core)
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023, 2024 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2024-04-01 01:16:05 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.lazyLoader=(e=>{var s,t,o,r,n,a,i,l,c=e.getCookieNames();e.readCookie(c.user_state);return{init:a=>{$.extend({module_name:'j1.adapter.lazyLoader',generated:'2024-04-01 01:16:05 +0200'},a);s=$.extend({},{enabled:!1}),t=$.extend({},{enabled:!0,loaders:[{loader:null,enabled:!0,description:"MDI Icons (light)",src:"/assets/themes/j1/core/css/icon-fonts/mdil.min.css",selector:".mdil",rootMargin:"150px 0px"},{loader:null,enabled:!0,description:"MDI Icon CSS (regular)",src:"/assets/themes/j1/core/css/icon-fonts/mdi.min.css",selector:".mdi",rootMargin:"150px 0px"},{loader:null,enabled:!0,description:"FA Icon CSS",src:"/assets/themes/j1/core/css/icon-fonts/fontawesome.min.css",selector:".fa",rootMargin:"150px 0px"},{loader:null,enabled:!0,description:"CountryFlag Icon CSS",src:"/assets/themes/j1/core/country-flags/css/theme/uno.min.css",selector:".flag-icon",rootMargin:"150px 0px"},{loader:null,enabled:!0,description:"rTable CSS",src:"/assets/themes/j1/modules/rtable/css/theme/uno/rtable.min.css",selector:".rtable",rootMargin:"150px 0px"}]}),o=$.extend(!0,{},s,t),r=e.adapter.lazyLoader,n=log4javascript.getLogger('j1.adapter.lazyLoader');var c=setInterval(()=>{'finished'===e.getState()&&(i=Date.now(),r.setState('started'),n.debug("\nset module state to: "+r.getState()),n.info("\ninitializing module: started"),r.registerLoaders(o),r.setState('finished'),n.debug("\nstate: "+r.getState()),n.info("\ninitializing module: finished"),l=Date.now(),n.info("\nmodule initializing time: "+(l-i)+'ms'),clearInterval(c))},10)},registerLoaders:()=>{e.lazyCSS().observe({src:'/assets/themes/j1/core/css/icon-fonts/mdil.min.css',selector:'.mdil',rootMargin:'150px 0px'}),n.info("\nregister lazy loading for: MDI Icons (light)"),e.lazyCSS().observe({src:'/assets/themes/j1/core/css/icon-fonts/mdi.min.css',selector:'.mdi',rootMargin:'150px 0px'}),n.info("\nregister lazy loading for: MDI Icon CSS (regular)"),e.lazyCSS().observe({src:'/assets/themes/j1/core/css/icon-fonts/fontawesome.min.css',selector:'.fa',rootMargin:'150px 0px'}),n.info("\nregister lazy loading for: FA Icon CSS"),e.lazyCSS().observe({src:'/assets/themes/j1/core/country-flags/css/theme/uno.min.css',selector:'.flag-icon',rootMargin:'150px 0px'}),n.info("\nregister lazy loading for: CountryFlag Icon CSS"),e.lazyCSS().observe({src:'/assets/themes/j1/modules/rtable/css/theme/uno/rtable.min.css',selector:'.rtable',rootMargin:'150px 0px'}),n.info("\nregister lazy loading for: rTable CSS")},messageHandler:(e,s)=>{var t=JSON.stringify(s,undefined,2);return a="\nreceived message from "+e+': '+t,n.debug(a),'command'===s.type&&'module_initialized'===s.action&&n.info('\n'+s.text),!0},setState:e=>{r.state=e},getState:()=>r.state}})(j1,window);



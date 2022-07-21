

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/scroller.js
 # J1 Adapter for scroller
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2022 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2022-07-21 19:31:46 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.scroller=function(e){var l,i,n,a,t='en';platform.ua;return{init:function(n){$.extend({module_name:'j1.adapter.scroller',generated:'2022-07-21 19:31:46 +0000'},n);l=e.adapter.scroller,i=log4javascript.getLogger('j1.adapter.scroller'),l.setState('started'),i.debug("\nstate: "+l.getState()),i.info("\nmodule is being initialized"),l.generate_scrollers(),l.setState('finished'),i.debug("\nstate: "+l.getState()),i.info("\nmodule initialized successfully")},generate_scrollers:function(){i=log4javascript.getLogger('j1.adapter.scroller'),n="\nscrollers are being initialized",i.info(n);var l=setInterval(function(){if('finished'===e.getState()){var o="#home_intro_panel";n="\nscroller of type showOnScroll is being initialized on: home_intro_panel",i.info(n),$(o).length&&$(o).scroller({id:'home_intro_panel',type:'showOnScroll',container:'home_intro_panel',showDelay:1e3,scrollOffset:500});o="#home_service_panel";n="\nscroller of type showOnScroll is being initialized on: home_service_panel",i.info(n),$(o).length&&$(o).scroller({id:'home_service_panel',type:'showOnScroll',container:'home_service_panel',showDelay:700,scrollOffset:200}),n="\nscroller of type infiniteScroll is being initialized on: home_news_panel",i.info(n);o="#home_news_panel-scroll-group";'en'===t?(a='<div class="page-scroll-last"><p class="infinite-scroll-last">',a+='More articles can be found with the <a href="/pages/public/blog/navigator/" class="link-no-decoration">Blog Navigator</a>',a+='</p></div>'):'de'===t?(a='<div class="page-scroll-last"><p class="infinite-scroll-last">',a+='Weitere Artikel finden Sie im <a href="/pages/public/blog/navigator/" class="link-no-decoration">Blog Navigator</a>',a+='</p></div>'):(a='<div class="page-scroll-last"><p class="infinite-scroll-last">',a+='More articles can be found with the <a href="/pages/public/blog/navigator/" class="link-no-decoration">Blog Navigator</a>',a+='</p></div>'),$(o).length&&$(o).scroller({id:'home_news_panel',type:'infiniteScroll',pagePath:'/assets/data/news_panel_posts/page',elementScroll:!0,scrollOffset:100,lastPage:3,infoLastPage:!0,lastPageInfo:a}),n="\nscroller of type infiniteScroll is being initialized on: blog_navigator_preview",i.info(n);o="#timeline";a='<div class="page-scroll-last"><p class="infinite-scroll-last">',a+='',a+='</p></div>',$(o).length&&$(o).scroller({id:'blog_navigator_preview',type:'infiniteScroll',pagePath:'/pages/public/blog/navigator/page',elementScroll:!0,scrollOffset:200,lastPage:4,infoLastPage:!1,lastPageInfo:a}),clearInterval(l)}},25)},messageHandler:function(e,l){var a=JSON.stringify(l,undefined,2);return n="\nreceived message from "+e+': '+a,i.debug(n),'command'===l.type&&'module_initialized'===l.action&&i.info('\n'+l.text),!0},setState:function(e){l.state=e},getState:function(){return l.state}}}(j1,window);



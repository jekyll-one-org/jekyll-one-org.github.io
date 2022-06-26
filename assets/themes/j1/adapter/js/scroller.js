

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
 #  Adapter generated: 2022-06-26 19:49:30 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.scroller=function(e){var l,a,i,t,n='en';platform.ua;return{init:function(i){$.extend({module_name:'j1.adapter.scroller',generated:'2022-06-26 19:49:30 +0000'},i);l=e.adapter.scroller,a=log4javascript.getLogger('j1.adapter.scroller'),l.setState('started'),a.debug("\nstate: "+l.getState()),a.info("\nmodule is being initialized"),l.generate_scrollers(),l.setState('finished'),a.debug("\nstate: "+l.getState()),a.info("\nmodule initialized successfully")},generate_scrollers:function(){a=log4javascript.getLogger('j1.adapter.scroller'),i="\nscrollers are being initialized",a.info(i);var l=setInterval(function(){if('finished'===e.getState()){var o="#home_intro_panel";i="\nscroller of type showOnScroll is being initialized on: home_intro_panel",a.info(i),$(o).length&&$(o).scroller({id:'home_intro_panel',type:'showOnScroll',container:'home_intro_panel',showDelay:1e3,scrollOffset:500}),i="\nscroller of type infiniteScroll is being initialized on: home_news_panel",a.info(i);o="#home_news_panel-scroll-group";'en'===n?(t='<div class="page-scroll-last"><p class="infinite-scroll-last">',t+='More articles can be found with the <a href="/pages/public/blog/navigator/" class="link-no-decoration">Blog Navigator</a>',t+='</p></div>'):'de'===n?(t='<div class="page-scroll-last"><p class="infinite-scroll-last">',t+='Weitere Artikel finden Sie im <a href="/pages/public/blog/navigator/" class="link-no-decoration">Blog Navigator</a>',t+='</p></div>'):(t='<div class="page-scroll-last"><p class="infinite-scroll-last">',t+='More articles can be found with the <a href="/pages/public/blog/navigator/" class="link-no-decoration">Blog Navigator</a>',t+='</p></div>'),$(o).length&&$(o).scroller({id:'home_news_panel',type:'infiniteScroll',pagePath:'/assets/data/news_panel_posts/page',elementScroll:!0,scrollOffset:100,lastPage:3,infoLastPage:!0,lastPageInfo:t}),i="\nscroller of type infiniteScroll is being initialized on: blog_navigator_preview",a.info(i);o="#timeline";t='<div class="page-scroll-last"><p class="infinite-scroll-last">',t+='',t+='</p></div>',$(o).length&&$(o).scroller({id:'blog_navigator_preview',type:'infiniteScroll',pagePath:'/pages/public/blog/navigator/page',elementScroll:!0,scrollOffset:200,lastPage:4,infoLastPage:!1,lastPageInfo:t}),clearInterval(l)}},25)},messageHandler:function(e,l){var t=JSON.stringify(l,undefined,2);return i="\nreceived message from "+e+': '+t,a.debug(i),'command'===l.type&&'module_initialized'===l.action&&a.info('\n'+l.text),!0},setState:function(e){l.state=e},getState:function(){return l.state}}}(j1,window);



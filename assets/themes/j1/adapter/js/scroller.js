

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
 #  Adapter generated: 2022-05-14 12:52:38 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.scroller=function(e){var l,t,a,i,n='en';platform.ua;return{init:function(a){$.extend({module_name:'j1.adapter.scroller',generated:'2022-05-14 12:52:38 +0000'},a);l=e.adapter.scroller,t=log4javascript.getLogger('j1.adapter.scroller'),l.setState('started'),t.debug("\nstate: "+l.getState()),t.info("\nmodule is being initialized"),l.generate_scrollers(),l.setState('finished'),t.debug("\nstate: "+l.getState()),t.info("\nmodule initialized successfully")},generate_scrollers:function(){t=log4javascript.getLogger('j1.adapter.scroller'),a="\nscrollers are being initialized",t.info(a);var l=setInterval(function(){if('finished'===e.getState()){var o="#home_intro_panel";a="\nscroller of type showOnScroll is being initialized on: home_intro_panel",t.info(a),$(o).length&&$(o).scroller({id:'home_intro_panel',type:'showOnScroll',container:'home_intro_panel',showDelay:1e3,scrollOffset:500}),a="\nscroller of type infiniteScroll is being initialized on: home_news_panel",t.info(a);o="#home_news_panel-scroll-group";'en'===n?(i='<div class="page-scroll-last"><p class="infinite-scroll-last">',i+='More articles can be found with the <a href="/pages/public/blog/navigator/">Blog Navigator</a>',i+='</p></div>'):'de'===n?(i='<div class="page-scroll-last"><p class="infinite-scroll-last">',i+='Weitere Artikel finden Sie im <a href="/pages/public/blog/navigator/">Blog Navigator</a>',i+='</p></div>'):(i='<div class="page-scroll-last"><p class="infinite-scroll-last">',i+='More articles can be found with the <a href="/pages/public/blog/navigator/">Blog Navigator</a>',i+='</p></div>'),$(o).length&&$(o).scroller({id:'home_news_panel',type:'infiniteScroll',pagePath:'/assets/data/news_panel_posts/page',elementScroll:!0,scrollOffset:100,lastPage:3,infoLastPage:!0,lastPageInfo:i}),a="\nscroller of type infiniteScroll is being initialized on: blog_navigator_preview",t.info(a);o="#timeline";i='<div class="page-scroll-last"><p class="infinite-scroll-last">',i+='',i+='</p></div>',$(o).length&&$(o).scroller({id:'blog_navigator_preview',type:'infiniteScroll',pagePath:'/pages/public/blog/navigator/page',elementScroll:!0,scrollOffset:200,lastPage:4,infoLastPage:!1,lastPageInfo:i}),clearInterval(l)}},25)},messageHandler:function(e,l){var i=JSON.stringify(l,undefined,2);return a="\nreceived message from "+e+': '+i,t.debug(a),'command'===l.type&&'module_initialized'===l.action&&t.info('\n'+l.text),!0},setState:function(e){l.state=e},getState:function(){return l.state}}}(j1,window);





  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/scroller.js
 # J1 Adapter for scroller
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-06-08 16:06:12 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.scroller=function(e){var a,l,t,n,o,i,r='en';platform.ua;return{init:function(o){$.extend({module_name:'j1.adapter.scroller',generated:'2023-06-08 16:06:12 +0200'},o);t=e.adapter.scroller,n=log4javascript.getLogger('j1.adapter.scroller'),a=$.extend({},{enabled:!1,smoothscroll:{offsetCorrection:0,offsetCorrectionLocal:0}}),l=$.extend({},{enabled:!0,smoothscroll:{offsetCorrection:-10,offsetCorrectionLocal:-90},scrollers:[{scroller:{enabled:!0,type:"showOnScroll",id:"home_intro_panel",container:"home_intro_panel",showDelay:1e3,scrollOffset:500}},{scroller:{enabled:!1,type:"showOnScroll",id:"home_service_panel",container:"home_service_panel",showDelay:700,scrollOffset:200}},{scroller:{enabled:!0,type:"infiniteScroll",id:"home_news_panel",container:"home_news_panel-scroll-group",pagePath:"/assets/data/news_panel_posts/page",elementScroll:!0,scrollOffset:200,lastPage:2,infoLastPage:!0,lastPageInfo_en:"More articles can be found with the <a href=\"/pages/public/blog/navigator/\" class=\"link-no-decoration\">Navigator</a>\n",lastPageInfo_de:"Weitere Artikel finden Sie im <a href=\"/pages/public/blog/navigator/\" class=\"link-no-decoration\">Navigator</a>\n"}},{scroller:{enabled:!0,type:"infiniteScroll",id:"blog_navigator_preview",container:"timeline",pagePath:"/pages/public/blog/navigator/page",elementScroll:!0,scrollOffset:200,lastPage:1e6,infoLastPage:!1,lastPageInfo_en:"",lastPageInfo_de:""}}]}),$.extend(!0,{},a,l),t.setState('started'),n.debug("\nstate: "+t.getState()),n.info("\nmodule is being initialized");var i=setInterval(function(){var a='block'==$('#no_flicker').css("display"),l='finished'==e.adapter.attic.getState();'finished'===e.getState()&&a&&l&&(t.generate_scrollers(),t.setState('finished'),n.debug("\nstate: "+t.getState()),n.info("\nmodule initialized successfully"),clearInterval(i))},25)},generate_scrollers:function(){n=log4javascript.getLogger('j1.adapter.scroller'),o="\nscrollers are being initialized",n.info(o);var a=setInterval(function(){if('finished'===e.getState()){var l="#home_intro_panel";o="\nscroller of type showOnScroll is being initialized on: home_intro_panel",n.info(o),$(l).length&&$(l).scroller({id:'home_intro_panel',type:'showOnScroll',container:'home_intro_panel',showDelay:1e3,scrollOffset:500}),o="\nscroller of type infiniteScroll is being initialized on: home_news_panel",n.info(o);l="#home_news_panel-scroll-group";'en'===r?(i='<div class="page-scroll-last"><p class="infinite-scroll-last">',i+='More articles can be found with the <a href="/pages/public/blog/navigator/" class="link-no-decoration">Navigator</a>',i+='</p></div>'):'de'===r?(i='<div class="page-scroll-last"><p class="infinite-scroll-last">',i+='Weitere Artikel finden Sie im <a href="/pages/public/blog/navigator/" class="link-no-decoration">Navigator</a>',i+='</p></div>'):(i='<div class="page-scroll-last"><p class="infinite-scroll-last">',i+='More articles can be found with the <a href="/pages/public/blog/navigator/" class="link-no-decoration">Navigator</a>',i+='</p></div>'),$(l).length&&$(l).scroller({id:'home_news_panel',type:'infiniteScroll',pagePath:'/assets/data/news_panel_posts/page',elementScroll:!0,scrollOffset:200,lastPage:2,infoLastPage:!0,lastPageInfo:i}),o="\nscroller of type infiniteScroll is being initialized on: blog_navigator_preview",n.info(o);l="#timeline";i='<div class="page-scroll-last"><p class="infinite-scroll-last">',i+='',i+='</p></div>',$(l).length&&$(l).scroller({id:'blog_navigator_preview',type:'infiniteScroll',pagePath:'/pages/public/blog/navigator/page',elementScroll:!0,scrollOffset:200,lastPage:1e6,infoLastPage:!1,lastPageInfo:i}),clearInterval(a)}},25)},messageHandler:function(e,a){var l=JSON.stringify(a,undefined,2);return o="\nreceived message from "+e+': '+l,n.debug(o),'command'===a.type&&'module_initialized'===a.action&&n.info('\n'+a.text),!0},setState:function(e){t.state=e},getState:function(){return t.state}}}(j1,window);



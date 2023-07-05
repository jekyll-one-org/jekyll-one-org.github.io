

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/scroller.js
 # J1 Adapter for the J1 Scroller jQuery plugin
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-07-05 17:16:14 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.scroller=function(e){var l,t,n,a,o,i,r='en';platform.ua;return{init:function(o){$.extend({module_name:'j1.adapter.scroller',generated:'2023-07-05 17:16:14 +0200'},o);n=e.adapter.scroller,a=log4javascript.getLogger('j1.adapter.scroller'),l=$.extend({},{enabled:!1,smoothscroll:{offsetCorrection:0,offsetCorrectionLocal:0}}),t=$.extend({},{enabled:!0,smoothscroll:{offsetCorrection:-9,offsetCorrectionLocal:-90},scrollers:[{scroller:{enabled:!0,type:"showOnScroll",id:"panel_home_intro",container:"panel_home_intro",showDelay:1e3,scrollOffset:500}},{scroller:{enabled:!1,type:"showOnScroll",id:"panel_home_service",container:"panel_home_service",showDelay:700,scrollOffset:200}},{scroller:{enabled:!0,type:"infiniteScroll",id:"preview_content",container:"panel_home_news-scroll-group",pagePath:"/assets/data/news_panel_posts/page",elementScroll:!0,scrollOffset:200,lastPage:2,infoLastPage:!0,lastPageInfo_en:"More articles can be found with the <a href=\"/pages/public/blog/navigator/\" class=\"link-no-decoration\">Navigator</a>\n",lastPageInfo_de:"Weitere Artikel finden Sie im <a href=\"/pages/public/blog/navigator/\" class=\"link-no-decoration\">Navigator</a>\n"}},{scroller:{enabled:!0,type:"infiniteScroll",id:"preview_content",container:"timeline",pagePath:"/pages/public/blog/navigator/page",elementScroll:!0,scrollOffset:200,lastPage:1e6,infoLastPage:!1,lastPageInfo_en:"",lastPageInfo_de:""}}]}),$.extend(!0,{},l,t),n.setState('started'),a.debug("\nstate: "+n.getState()),a.info("\nmodule is being initialized");var i=setInterval(function(){var l='block'==$('#content').css("display");'finished'===e.getState()&&l&&(n.generate_scrollers(),n.setState('finished'),a.debug("\nstate: "+n.getState()),a.info("\nmodule initialized successfully"),clearInterval(i))},10)},generate_scrollers:function(){a=log4javascript.getLogger('j1.adapter.scroller'),o="\nscrollers are being initialized",a.info(o);var e="#panel_home_intro";o="\nscroller of type showOnScroll is being initialized on: panel_home_intro",a.info(o),$(e).length&&$(e).scroller({id:'panel_home_intro',type:'showOnScroll',container:'panel_home_intro',showDelay:1e3,scrollOffset:500}),o="\nscroller of type infiniteScroll is being initialized on: preview_content",a.info(o);e="#panel_home_news-scroll-group";'en'===r?(i='<div class="page-scroll-last"><p class="infinite-scroll-last">',i+='More articles can be found with the <a href="/pages/public/blog/navigator/" class="link-no-decoration">Navigator</a>',i+='</p></div>'):'de'===r?(i='<div class="page-scroll-last"><p class="infinite-scroll-last">',i+='Weitere Artikel finden Sie im <a href="/pages/public/blog/navigator/" class="link-no-decoration">Navigator</a>',i+='</p></div>'):(i='<div class="page-scroll-last"><p class="infinite-scroll-last">',i+='More articles can be found with the <a href="/pages/public/blog/navigator/" class="link-no-decoration">Navigator</a>',i+='</p></div>'),$(e).length&&$(e).scroller({id:'preview_content',type:'infiniteScroll',pagePath:'/assets/data/news_panel_posts/page',elementScroll:!0,scrollOffset:200,lastPage:2,infoLastPage:!0,lastPageInfo:i}),o="\nscroller of type infiniteScroll is being initialized on: preview_content",a.info(o);e="#timeline";i='<div class="page-scroll-last"><p class="infinite-scroll-last">',i+='',i+='</p></div>',$(e).length&&$(e).scroller({id:'preview_content',type:'infiniteScroll',pagePath:'/pages/public/blog/navigator/page',elementScroll:!0,scrollOffset:200,lastPage:1e6,infoLastPage:!1,lastPageInfo:i})},messageHandler:function(e,l){var t=JSON.stringify(l,undefined,2);return o="\nreceived message from "+e+': '+t,a.debug(o),'command'===l.type&&'module_initialized'===l.action&&a.info('\n'+l.text),!0},setState:function(e){n.state=e},getState:function(){return n.state}}}(j1,window);





  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/j1Scroll.js
 # J1 Adapter for j1Scroll
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2021 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see https://jekyll.one
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2021-11-01 19:48:18 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.j1Scroll=function(e){var a,t,i,l,n='en';platform.ua;return{init:function(t){a=e.adapter.j1Scroll,i=log4javascript.getLogger('j1.adapter.j1Scroll'),a.setState('started'),i.info("\nstate: "+a.getState()),i.info("\nmodule is being initialized");$.extend({module_name:'j1.adapter.j1Scroll',generated:'2021-11-01 19:48:18 +0000'},t);a.initialize(),a.setState('finished'),i.info("\nstate: "+a.getState()),i.info("\nmodule initialized successfully")},initialize:function(){var a="\nj1Scroll is being initialized";(i=log4javascript.getLogger('j1.adapter.j1Scroll')).info(a);var l=setInterval(function(){if('finished'===e.getState()){var a="\nj1Scroll is being initialized on: home_news_panel";i.info(a);var s="#home_news_panel-scroll-group",o='/assets/data/news_panel_posts/page';'en'===n?(t='<div class="page-scroll-last"><p class="infinite-scroll-last">',t+='More articles can be found with the <a href="/pages/public/blog/navigator/">Blog Navigator</a>',t+='</p></div>'):'de'===n?(t='<div class="page-scroll-last"><p class="infinite-scroll-last">',t+='Weitere Artikel finden Sie im <a href="/pages/public/blog/navigator/">Blog Navigator</a>',t+='</p></div>'):(t='<div class="page-scroll-last"><p class="infinite-scroll-last">',t+='More articles can be found with the <a href="/pages/public/blog/navigator/">Blog Navigator</a>',t+='</p></div>'),$(s).length&&$(s).j1Scroll({path:o,elementScroll:!0,scrollOffset:100,lastPage:3,infoLastPage:!0,lastPageInfo:t});a="\nj1Scroll is being initialized on: blog_navigator_preview";i.info(a);s="#timeline",o='/pages/public/blog/navigator/page';t='<div class="page-scroll-last"><p class="infinite-scroll-last">',t+='',t+='</p></div>',$(s).length&&$(s).j1Scroll({path:o,elementScroll:!0,scrollOffset:200,lastPage:4,infoLastPage:!1,lastPageInfo:t}),clearInterval(l)}})},messageHandler:function(e,a){var t=JSON.stringify(a,undefined,2);return l="\nreceived message from "+e+': '+t,i.debug(l),'command'===a.type&&'module_initialized'===a.action&&i.info('\n'+a.text),!0},setState:function(e){a.state=e},getState:function(){return a.state}}}(j1,window);



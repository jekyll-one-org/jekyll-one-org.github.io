

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
 #  Adapter generated: 2021-09-20 18:19:50 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.j1Scroll=function(e){var t,i,n;platform.ua;return{init:function(n){t=e.adapter.j1Scroll,i=log4javascript.getLogger('j1.adapter.j1Scroll'),t.setState('started'),i.info("\nstate: "+t.getState()),i.info("\nmodule is being initialized");$.extend({module_name:'j1.adapter.j1Scroll',generated:'2021-09-20 18:19:50 +0000'},n);t.initialize(),t.setState('finished'),i.info("\nstate: "+t.getState()),i.info("\nmodule initialized successfully")},initialize:function(){var t="\nj1Scroll is being initialized";(i=log4javascript.getLogger('j1.adapter.j1Scroll')).info(t);var n=setInterval(function(){if('finished'===e.getState()){var t="\nj1Scroll is being initialized on: home_news_panel";i.info(t);var a="#home_news_panel-scroll-group",l='/assets/data/news_panel_posts/page';$(a).length&&$(a).j1Scroll({path:l,elementScroll:!0,scrollOffset:100,lastPage:4,infoLastPage:!0});t="\nj1Scroll is being initialized on: blog_navigator_preview";i.info(t);a="#timeline",l='/pages/public/blog/navigator/page';$(a).length&&$(a).j1Scroll({path:l,elementScroll:!0,scrollOffset:200,lastPage:6,infoLastPage:!1}),clearInterval(n)}})},messageHandler:function(e,t){var a=JSON.stringify(t,undefined,2);return n="\nreceived message from "+e+': '+a,i.debug(n),'command'===t.type&&'module_initialized'===t.action&&i.info('\n'+t.text),!0},setState:function(e){t.state=e},getState:function(){return t.state}}}(j1,window);



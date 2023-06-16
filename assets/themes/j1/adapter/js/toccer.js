

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/toccer.js
 # JS Adapter for J1 Toccer
 #
 # Product/Info:
 # https://jekyll.one
 # https://tscanlin.github.io/tocbot
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # Tocbot is licensed under under the MIT License.
 # For details, see https://tscanlin.github.io/tocbot
 # -----------------------------------------------------------------------------
 # Adapter generated: 2023-06-16 02:30:00 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.toccer=function(){var e,t,o,l={},n={},a={},i={},s={},r={},c={};return{init:function(o){$.extend({module_name:'j1.adapter.toccer',generated:'2023-06-16 02:30:00 +0200'},o);if(e=j1.adapter.toccer,t=log4javascript.getLogger('j1.adapter.toccer'),c=null!=o?$.extend({},o):{},i=$.extend({},{enabled:!0,log:!1,tocSelector:".js-toc",contentSelector:".js-toc-content",headingSelector:"h2, h3, h4, h5, h6",ignoreSelector:".notoc",collapseDepth:3,activeLinkColor:"#f44336",throttleTimeout:150,scrollSmooth:!0,scrollSmoothDuration:300,scrollSmoothOffset:0,scrollContainer:null}),s=$.extend({},{enabled:!0,log:!1}),r=$.extend(!0,{},i,s,c),a=$.extend({},{enabled:!1,smoothscroll:{offsetCorrection:0,offsetCorrectionLocal:0}}),l=$.extend({},{enabled:!0,smoothscroll:{offsetCorrection:-8,offsetCorrectionLocal:-90},scrollers:[{scroller:{enabled:!0,type:"showOnScroll",id:"panel_home_intro",container:"panel_home_intro",showDelay:1e3,scrollOffset:500}},{scroller:{enabled:!1,type:"showOnScroll",id:"panel_home_service",container:"panel_home_service",showDelay:700,scrollOffset:200}},{scroller:{enabled:!0,type:"infiniteScroll",id:"panel_home_news",container:"panel_home_news-scroll-group",pagePath:"/assets/data/news_panel_posts/page",elementScroll:!0,scrollOffset:200,lastPage:2,infoLastPage:!0,lastPageInfo_en:"More articles can be found with the <a href=\"/pages/public/blog/navigator/\" class=\"link-no-decoration\">Navigator</a>\n",lastPageInfo_de:"Weitere Artikel finden Sie im <a href=\"/pages/public/blog/navigator/\" class=\"link-no-decoration\">Navigator</a>\n"}},{scroller:{enabled:!0,type:"infiniteScroll",id:"blog_navigator_preview",container:"timeline",pagePath:"/pages/public/blog/navigator/page",elementScroll:!0,scrollOffset:200,lastPage:1e6,infoLastPage:!1,lastPageInfo_en:"",lastPageInfo_de:""}}]}),n=$.extend(!0,{},a,l),e.setState('started'),t.debug("\nstate: "+e.getState()),t.info("\nmodule is being initialized"),e.moduleOptions=r,j1.stringToBoolean(r.toc))var d=setInterval(function(){var o='block'==$('#no_flicker').css("display");j1.adapter.attic.getState();'finished'==j1.getState()&&o&&(e.initToccerCore(r),e.setState('finished'),t.debug("\nstate: "+e.getState()),t.info("\nmodule initialized successfully"),t.debug("\nmet dependencies for: j1"),clearInterval(d))},10)},initToccerCore:function(o){var l=n.smoothscroll.offsetCorrection,a=j1.getScrollOffset(l);e.setState('running'),t.debug("\nstate: "+e.getState());var i=setInterval(function(){$('#toc_mmenu').length&&(tocbot.init({log:o.log,activeLinkColor:o.activeLinkColor,tocSelector:o.tocSelector,headingSelector:o.headingSelector,ignoreSelector:o.ignoreSelector,contentSelector:o.contentSelector,collapseDepth:o.collapseDepth,throttleTimeout:o.throttleTimeout,hasInnerContainers:!1,includeHtml:!1,linkClass:'toc-link',extraLinkClasses:'',activeLinkClass:'is-active-link',listClass:'toc-list',extraListClasses:'',isCollapsedClass:'is-collapsed',collapsibleClass:'is-collapsible',listItemClass:'toc-list-item',positionFixedSelector:'',positionFixedClass:'is-position-fixed',fixedSidebarOffset:'auto',scrollContainer:null,scrollSmooth:o.scrollSmooth,scrollSmoothDuration:o.scrollSmoothDuration,scrollSmoothOffset:a,headingsOffset:1,throttleTimeout:o.throttleTimeout}),t.debug("\nmet dependencies for: loadHTML"),clearInterval(i))},10)},messageHandler:function(e,l){var n=JSON.stringify(l,undefined,2);return o="\nreceived message from "+e+': '+n,t.debug(o),'command'===l.type&&'module_initialized'===l.action&&t.info('\n'+l.text),!0},setState:function(t){e.state=t},getState:function(){return e.state}}}(j1,window);



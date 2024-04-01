

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/toccer.js
 # JS Adapter for J1 Toccer
 #
 # Product/Info:
 # https://jekyll.one
 # https://tscanlin.github.io/tocbot
 #
 # Copyright (C) 2023, 2024 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # Tocbot is licensed under under the MIT License.
 # For details, see https://tscanlin.github.io/tocbot
 # -----------------------------------------------------------------------------
 # Adapter generated: 2024-04-01 01:16:05 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.toccer=(()=>{var e,t,o,l,n,a={},i={},s={},r={},c={},d={},g={};return{init:o=>{$.extend({module_name:'j1.adapter.toccer',generated:'2024-04-01 01:16:05 +0200'},o);e=j1.adapter.toccer,t=log4javascript.getLogger('j1.adapter.toccer'),g=null!=o?$.extend({},o):{},r=$.extend({},{enabled:!0,log:!1,tocSelector:".js-toc",contentSelector:".js-toc-content",headingSelector:"h2, h3, h4, h5, h6",ignoreSelector:".notoc",collapseDepth:3,activeLinkColor:"var(--bs-red)",throttleTimeout:150,scrollSmooth:!0,scrollSmoothDuration:300,scrollSmoothOffset:0,scrollContainer:null}),c=$.extend({},{enabled:!0,log:!1}),d=$.extend(!0,{},r,c,g),s=$.extend({},{enabled:!1,smoothscroll:{offsetBase:80,offsetCorrection:0,offsetCorrectionLocal:0}}),a=$.extend({},{enabled:!0,smoothscroll:{offsetBase:80,offsetCorrection:-9,offsetCorrectionLocal:-90},scrollers:[{scroller:{enabled:!1,type:"showOnScroll",id:"panel_home_intro",container:"panel_home_intro",showDelay:1e3,scrollOffset:500}},{scroller:{enabled:!1,type:"showOnScroll",id:"panel_home_service",container:"panel_home_service",showDelay:700,scrollOffset:200}},{scroller:{enabled:!0,type:"infiniteScroll",id:"panel_home_news",container:"panel_home_news-scroll-group",pagePath:"/assets/data/news_panel_posts/page",elementScroll:!0,scrollOffset:200,lastPage:2,infoLastPage:!0,lastPageInfo_en:"More articles can be found with the <a href=\"/pages/public/blog/navigator/\" class=\"link-no-decoration\">Navigator</a>\n",lastPageInfo_de:"Weitere Artikel finden Sie im <a href=\"/pages/public/blog/navigator/\" class=\"link-no-decoration\">Navigator</a>\n"}},{scroller:{enabled:!0,type:"infiniteScroll",id:"preview_content",container:"timeline",pagePath:"/pages/public/blog/navigator/page",elementScroll:!0,scrollOffset:200,lastPage:2,infoLastPage:!1,lastPageInfo_en:"",lastPageInfo_de:""}}]}),i=$.extend(!0,{},s,a);var f=setInterval(()=>{var o='block'==$('#content').css("display"),a='finished'==j1.getState();!!j1.stringToBoolean(d.toc)&&a&&o&&(l=Date.now(),e.setState('started'),t.debug("\nstate: "+e.getState()),t.info("\nmodule is being initialized"),e.initToccerCore(d),e.moduleOptions=d,e.setState('finished'),t.debug("\nstate: "+e.getState()),t.info("\ninitializing module finished"),n=Date.now(),t.info("\nmodule initializing time: "+(n-l)+'ms'),clearInterval(f))},10)},initToccerCore:o=>{var l=i.smoothscroll.offsetCorrection;j1.getScrollOffset(l);e.setState('running'),t.debug("\nstate: "+e.getState());var n=setInterval(()=>{!!$('#toc_mmenu').length&&(tocbot.init({log:o.log,activeLinkColor:o.activeLinkColor,tocSelector:o.tocSelector,headingSelector:o.headingSelector,ignoreSelector:o.ignoreSelector,contentSelector:o.contentSelector,collapseDepth:o.collapseDepth,throttleTimeout:o.throttleTimeout,hasInnerContainers:!1,includeHtml:!1,linkClass:'toc-link',extraLinkClasses:'',activeLinkClass:'is-active-link',listClass:'toc-list',extraListClasses:'',isCollapsedClass:'is-collapsed',collapsibleClass:'is-collapsible',listItemClass:'toc-list-item',positionFixedSelector:'',positionFixedClass:'is-position-fixed',fixedSidebarOffset:'auto',scrollContainer:null,scrollSmooth:!1,scrollSmoothDuration:0,scrollSmoothOffset:0,onClick:e=>{var t=e.currentTarget.href;history.pushState(null,null,t),setTimeout(()=>{j1.scrollToAnchor(t)},1500)},headingsOffset:1,throttleTimeout:o.throttleTimeout}),t.debug("\nmet dependencies for: loadHTML"),clearInterval(n))},10)},messageHandler:(e,l)=>{var n=JSON.stringify(l,undefined,2);return o="\nreceived message from "+e+': '+n,t.debug(o),'command'===l.type&&'module_initialized'===l.action&&t.info('\n'+l.text),!0},setState:t=>{e.state=t},getState:()=>e.state}})(j1,window);



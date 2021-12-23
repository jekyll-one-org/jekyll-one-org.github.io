

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/toccer.js
 # JS Adapter for J1 Toccer
 #
 # Product/Info:
 # https://jekyll.one
 # https://tscanlin.github.io/tocbot
 #
 # Copyright (C) 2021 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see https://jekyll.one
 # Tocbot is licensed under under the MIT License.
 # For details, see https://tscanlin.github.io/tocbot
 # -----------------------------------------------------------------------------
 # Adapter generated: 2021-12-23 14:09:54 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.toccer=function(){var e,t,o,n={},i={};return{init:function(o){e=j1.adapter.toccer,t=log4javascript.getLogger('j1.adapter.toccer'),e.setState('started'),t.info("\nstate: "+e.getState()),t.info("\nmodule is being initialized");var l=null!=o?$.extend({},o):{};$.extend({module_name:'j1.adapter.toccer',generated:'2021-12-23 14:09:54 +0000'},o);i=$.extend({},{enabled:!0,log:!1,tocSelector:".js-toc",contentSelector:".js-toc-content",headingSelector:"h2, h3, h4, h5, h6",ignoreSelector:".notoc",collapseDepth:4,activeLinkColor:"#f44336",throttleTimeout:150,scrollSmooth:!0,scrollSmoothDuration:300,scrollSmoothOffset:0,scrollContainer:null}),null!=o&&(l=$.extend({},o)),void 0!==l&&(n=j1.mergeData(l,i)),e.moduleOptions=n;var s='true'===n.toc;n.comments;if('undefined'==typeof n.collapseDepth&&(n.collapseDepth=3),s)var a=setInterval(function(){if('finished'==j1.getState()){var o=j1.adapter.toccer.moduleOptions;e.initToccerCore(o),e.setState('finished'),t.info("\nstate: "+e.getState()),t.info("\nmodule initialized successfully"),t.info("\nmet dependencies for: j1"),clearInterval(a)}},25)},initToccerCore:function(o){var i=j1.getScrollOffset();if(o!==undefined)$.extend({},o);else;e.setState('running'),t.info("\nstate: "+e.getState());var l=setInterval(function(){$('#toc_mmenu').length&&(tocbot.init({log:n.log,activeLinkColor:n.activeLinkColor,tocSelector:n.tocSelector,headingSelector:n.headingSelector,ignoreSelector:n.ignoreSelector,contentSelector:n.contentSelector,collapseDepth:n.collapseDepth,throttleTimeout:n.throttleTimeout,hasInnerContainers:!1,includeHtml:!1,linkClass:'toc-link',extraLinkClasses:'',activeLinkClass:'is-active-link',listClass:'toc-list',extraListClasses:'',isCollapsedClass:'is-collapsed',collapsibleClass:'is-collapsible',listItemClass:'toc-list-item',positionFixedSelector:'',positionFixedClass:'is-position-fixed',fixedSidebarOffset:'auto',scrollContainer:null,scrollSmooth:n.scrollSmooth,scrollSmoothDuration:n.scrollSmoothDuration,scrollSmoothOffset:i,headingsOffset:1,throttleTimeout:n.throttleTimeout}),t.info("\nmet dependencies for: loadHTML"),clearInterval(l))},25)},messageHandler:function(e,n){var i=JSON.stringify(n,undefined,2);return o="\nreceived message from "+e+': '+i,t.debug(o),'command'===n.type&&'module_initialized'===n.action&&t.info('\n'+n.text),!0},setState:function(t){e.state=t},getState:function(){return e.state}}}(j1,window);



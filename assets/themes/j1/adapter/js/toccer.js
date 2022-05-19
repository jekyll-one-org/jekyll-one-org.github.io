

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/toccer.js
 # JS Adapter for J1 Toccer
 #
 # Product/Info:
 # https://jekyll.one
 # https://tscanlin.github.io/tocbot
 #
 # Copyright (C) 2022 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # Tocbot is licensed under under the MIT License.
 # For details, see https://tscanlin.github.io/tocbot
 # -----------------------------------------------------------------------------
 # Adapter generated: 2022-05-19 10:10:45 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.toccer=function(){var e,t,o,n={},l={};return{init:function(o){$.extend({module_name:'j1.adapter.toccer',generated:'2022-05-19 10:10:45 +0000'},o);e=j1.adapter.toccer,t=log4javascript.getLogger('j1.adapter.toccer'),e.setState('started'),t.debug("\nstate: "+e.getState()),t.info("\nmodule is being initialized");var i=null!=o?$.extend({},o):{};l=$.extend({},{enabled:!0,log:!1,tocSelector:".js-toc",contentSelector:".js-toc-content",headingSelector:"h2, h3, h4, h5, h6",ignoreSelector:".notoc",collapseDepth:4,activeLinkColor:"#f44336",throttleTimeout:150,scrollSmooth:!0,scrollSmoothDuration:300,scrollSmoothOffset:0,scrollContainer:null}),null!=o&&(i=$.extend({},o)),void 0!==i&&(n=j1.mergeData(i,l)),e.moduleOptions=n;var s='true'===n.toc;n.comments;if('undefined'==typeof n.collapseDepth&&(n.collapseDepth=3),s)var a=setInterval(function(){if('finished'==j1.getState()){var o=j1.adapter.toccer.moduleOptions;e.initToccerCore(o),e.setState('finished'),t.debug("\nstate: "+e.getState()),t.info("\nmodule initialized successfully"),t.debug("\nmet dependencies for: j1"),clearInterval(a)}},25)},initToccerCore:function(o){var l=j1.getScrollOffset();if(o!==undefined)$.extend({},o);else;e.setState('running'),t.debug("\nstate: "+e.getState());var i=setInterval(function(){$('#toc_mmenu').length&&(tocbot.init({log:n.log,activeLinkColor:n.activeLinkColor,tocSelector:n.tocSelector,headingSelector:n.headingSelector,ignoreSelector:n.ignoreSelector,contentSelector:n.contentSelector,collapseDepth:n.collapseDepth,throttleTimeout:n.throttleTimeout,hasInnerContainers:!1,includeHtml:!1,linkClass:'toc-link',extraLinkClasses:'',activeLinkClass:'is-active-link',listClass:'toc-list',extraListClasses:'',isCollapsedClass:'is-collapsed',collapsibleClass:'is-collapsible',listItemClass:'toc-list-item',positionFixedSelector:'',positionFixedClass:'is-position-fixed',fixedSidebarOffset:'auto',scrollContainer:null,scrollSmooth:n.scrollSmooth,scrollSmoothDuration:n.scrollSmoothDuration,scrollSmoothOffset:l,headingsOffset:1,throttleTimeout:n.throttleTimeout}),t.debug("\nmet dependencies for: loadHTML"),clearInterval(i))},25)},messageHandler:function(e,n){var l=JSON.stringify(n,undefined,2);return o="\nreceived message from "+e+': '+l,t.debug(o),'command'===n.type&&'module_initialized'===n.action&&t.info('\n'+n.text),!0},setState:function(t){e.state=t},getState:function(){return e.state}}}(j1,window);



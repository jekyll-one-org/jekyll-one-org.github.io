

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/toccer.js
 # JS Adapter for J1 Toccer
 #
 # Product/Info:
 # https://jekyll.one
 # https://tscanlin.github.io/tocbot
 #
 # Copyright (C) 2020 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see https://jekyll.one
 # Tocbot is licensed under under the MIT License.
 # For details, see https://tscanlin.github.io/tocbot
 # -----------------------------------------------------------------------------
 # Adapter generated: 2020-07-29 20:35:51 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.toccer=function(){var e,t,i;return{init:function(i){if(e=j1.adapter.toccer,t=log4javascript.getLogger('j1.adapter.toccer'),e.setState('started'),t.info('state: '+e.getState()),t.info('Module is being initialized'),i!==undefined)var o=$.extend({},i);else var o=!1;var n='true'===i.toc;i.comments;if(o.collapseDepth===undefined&&(o.collapseDepth=2),o.scrollSmoothOffset===undefined&&(o.scrollSmoothOffset=-80),o.enabled===undefined&&(o.enabled=!0),n){e.initToccerCore(o);var s=setInterval(function(){$('ol.toc-list ').length&&(e.setState('finished'),t.info('state: '+e.getState()),t.info('module initialized successfully'),clearInterval(s))},25)}},initToccerCore:function(i){if(i!==undefined)var o=$.extend({},i);else var o=!1;e.setState('running'),t.info('state: '+e.getState());var n=setInterval(function(){$('#toc_mmenu').length&&(tocbot.init({log:!1,activeLinkColor:null,tocSelector:".js-toc",headingSelector:"h2, h3, h4, h5",ignoreSelector:".notoc",contentSelector:".js-toc-content",collapseDepth:o.collapseDepth,throttleTimeout:50,hasInnerContainers:!1,includeHtml:!1,linkClass:'toc-link',extraLinkClasses:'',activeLinkClass:'is-active-link',listClass:'toc-list',extraListClasses:'',isCollapsedClass:'is-collapsed',collapsibleClass:'is-collapsible',listItemClass:'toc-list-item',positionFixedSelector:'',positionFixedClass:'is-position-fixed',fixedSidebarOffset:'auto',scrollSmooth:!0,scrollSmoothDuration:300,scrollSmoothOffset:-80,headingsOffset:1,throttleTimeout:50}),clearInterval(n))},25)},messageHandler:function(e,o){var n=JSON.stringify(o,undefined,2);return i='received message from '+e+': '+n,t.debug(i),'command'===o.type&&'module_initialized'===o.action&&t.info(o.text),!0},setState:function(t){e.state=t},getState:function(){return e.state}}}(j1,window);



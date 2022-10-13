

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
 # Adapter generated: 2022-10-13 15:37:45 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.toccer=function(){var e,t,o,n={},i={},l={};return{init:function(o){$.extend({module_name:'j1.adapter.toccer',generated:'2022-10-13 15:37:45 +0000'},o);if(e=j1.adapter.toccer,t=log4javascript.getLogger('j1.adapter.toccer'),e.setState('started'),t.debug("\nstate: "+e.getState()),t.info("\nmodule is being initialized"),l=null!=o?$.extend({},o):{},i=$.extend({},{enabled:!0,log:!1,tocSelector:".js-toc",contentSelector:".js-toc-content",headingSelector:"h2, h3, h4, h5, h6",ignoreSelector:".notoc",collapseDepth:3,activeLinkColor:"#f44336",throttleTimeout:150,scrollSmooth:!0,scrollSmoothDuration:300,scrollSmoothOffset:0,scrollContainer:null}),void 0!==l&&(n=$.extend({},i,l)),e.moduleOptions=n,j1.stringToBoolean(n.toc))var s=setInterval(function(){'finished'==j1.getState()&&(e.initToccerCore(n),e.setState('finished'),t.debug("\nstate: "+e.getState()),t.info("\nmodule initialized successfully"),t.debug("\nmet dependencies for: j1"),clearInterval(s))},25)},initToccerCore:function(o){var n=j1.getScrollOffset();e.setState('running'),t.debug("\nstate: "+e.getState());var i=setInterval(function(){$('#toc_mmenu').length&&(tocbot.init({log:o.log,activeLinkColor:o.activeLinkColor,tocSelector:o.tocSelector,headingSelector:o.headingSelector,ignoreSelector:o.ignoreSelector,contentSelector:o.contentSelector,collapseDepth:o.collapseDepth,throttleTimeout:o.throttleTimeout,hasInnerContainers:!1,includeHtml:!1,linkClass:'toc-link',extraLinkClasses:'',activeLinkClass:'is-active-link',listClass:'toc-list',extraListClasses:'',isCollapsedClass:'is-collapsed',collapsibleClass:'is-collapsible',listItemClass:'toc-list-item',positionFixedSelector:'',positionFixedClass:'is-position-fixed',fixedSidebarOffset:'auto',scrollContainer:null,scrollSmooth:o.scrollSmooth,scrollSmoothDuration:o.scrollSmoothDuration,scrollSmoothOffset:n,headingsOffset:1,throttleTimeout:o.throttleTimeout}),t.debug("\nmet dependencies for: loadHTML"),clearInterval(i))},25)},messageHandler:function(e,n){var i=JSON.stringify(n,undefined,2);return o="\nreceived message from "+e+': '+i,t.debug(o),'command'===n.type&&'module_initialized'===n.action&&t.info('\n'+n.text),!0},setState:function(t){e.state=t},getState:function(){return e.state}}}(j1,window);



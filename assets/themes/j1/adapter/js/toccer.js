

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
 # Adapter generated: 2021-07-20 12:49:08 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.toccer=function(){var e,t,o,l={},i={};return{init:function(o){e=j1.adapter.toccer,t=log4javascript.getLogger('j1.adapter.toccer'),e.setState('started'),t.info("\nstate: "+e.getState()),t.info("\nmodule is being initialized");var n=null!=o?$.extend({},o):{};$.extend({module_name:'j1.adapter.toccer',generated:'2021-07-20 12:49:08 +0000'},o);i=$.extend({},{enabled:!0,log:!1,tocSelector:".js-toc",contentSelector:".js-toc-content",headingSelector:"h2, h3, h4, h5, h6",ignoreSelector:".notoc",collapseDepth:4,activeLinkColor:"#f44336",throttleTimeout:150,scrollSmooth:!0,scrollSmoothDuration:300,scrollSmoothOffset:10,scrollContainer:null,delay:400}),null!=o&&(n=$.extend({},o)),void 0!==n&&(l=j1.mergeData(n,i)),e.moduleOptions=l;var s='true'===l.toc;l.comments;if('undefined'==typeof l.collapseDepth&&(l.collapseDepth=3),s)var a=setInterval(function(){if('finished'==j1.getState()){var o=j1.adapter.toccer.moduleOptions;e.initToccerCore(o),e.setState('finished'),t.info("\nstate: "+e.getState()),t.info("\nmodule initialized successfully"),t.info("\nmet dependencies for: j1"),clearInterval(a)}},25)},initToccerCore:function(o){var i;if(o!==undefined)$.extend({},o);else;var n=$('.attic'),s=$('nav.navbar'),a=$('#adblock'),r=s.hasClass('navbar-fixed')?'fixed':'scrolled',c=$('body').css('font-size').replace('px',''),d=(window.pageYOffset,parseInt(c)),h=n.length?n.height():0,f=s.length?s.height():0,u=a.length?a.height():0;i='fixed'==r?-1*(f+u+d):-1*(h+f+u+d),i+=l.scrollSmoothOffset,e.setState('running'),t.info("\nstate: "+e.getState());var g=setInterval(function(){$('#toc_mmenu').length&&(tocbot.init({log:l.log,activeLinkColor:l.activeLinkColor,tocSelector:l.tocSelector,headingSelector:l.headingSelector,ignoreSelector:l.ignoreSelector,contentSelector:l.contentSelector,collapseDepth:l.collapseDepth,throttleTimeout:l.throttleTimeout,hasInnerContainers:!1,includeHtml:!1,linkClass:'toc-link',extraLinkClasses:'',activeLinkClass:'is-active-link',listClass:'toc-list',extraListClasses:'',isCollapsedClass:'is-collapsed',collapsibleClass:'is-collapsible',listItemClass:'toc-list-item',positionFixedSelector:'',positionFixedClass:'is-position-fixed',fixedSidebarOffset:'auto',scrollContainer:null,scrollSmooth:l.scrollSmooth,scrollSmoothDuration:l.scrollSmoothDuration,scrollSmoothOffset:i,headingsOffset:1,throttleTimeout:l.throttleTimeout}),t.info("\nmet dependencies for: loadHTML"),clearInterval(g))},25);$(window).on('resize',function(){var e,t=$('.attic'),o=$('nav.navbar'),i=$('#adblock'),n=o.hasClass('navbar-fixed')?'fixed':'scrolled',s=$('body').css('font-size').replace('px',''),a=(window.pageYOffset,parseInt(s)),r=t.length?t.height():0,c=o.length?o.height():0,d=i.length?i.height():0;e='fixed'==n?-1*(c+d+a):-1*(r+c+d+a),e+=l.scrollSmoothOffset,tocbot.refresh({log:l.log,activeLinkColor:l.activeLinkColor,tocSelector:l.tocSelector,headingSelector:l.headingSelector,ignoreSelector:l.ignoreSelector,contentSelector:l.contentSelector,collapseDepth:l.collapseDepth,throttleTimeout:l.throttleTimeout,hasInnerContainers:!1,includeHtml:!1,linkClass:'toc-link',extraLinkClasses:'',activeLinkClass:'is-active-link',listClass:'toc-list',extraListClasses:'',isCollapsedClass:'is-collapsed',collapsibleClass:'is-collapsible',listItemClass:'toc-list-item',positionFixedSelector:'',positionFixedClass:'is-position-fixed',fixedSidebarOffset:'auto',scrollContainer:null,scrollSmooth:l.scrollSmooth,scrollSmoothDuration:l.scrollSmoothDuration,scrollSmoothOffset:e,headingsOffset:1,throttleTimeout:l.throttleTimeout})})},messageHandler:function(e,l){var i=JSON.stringify(l,undefined,2);return o="\nreceived message from "+e+': '+i,t.debug(o),'command'===l.type&&'module_initialized'===l.action&&t.info('\n'+l.text),!0},setState:function(t){e.state=t},getState:function(){return e.state}}}(j1,window);



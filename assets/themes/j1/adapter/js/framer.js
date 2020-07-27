

  /*
 # -----------------------------------------------------------------------------
 #  ~/assets/themes/j1/adapter/js/framer.js
 #  J1 Adapter for J1 iFrameResizer
 #
 #  Product/Info:
 #  https://jekyll.one
 #  http://davidjbradshaw.github.io/iframe-resizer/
 #
 #  Copyright (C) 2020 Juergen Adams
 #  Copyright (C) 2013-15 David J. Bradshaw
 #
 #  J1 Template is licensed under the MIT License.
 #  For details, see https://jekyll.one
 #  iFrameResizer is licensed under under the MIT License.
 #  For details, see http://davidjbradshaw.github.io/iframe-resizer/
 #
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2020-07-27 02:38:42 +0200
 # -----------------------------------------------------------------------------
 */
'use strict';j1.adapter.framer=function(e){var i,t,a,n={};return{init:function(a){i=e.adapter.framer,t=log4javascript.getLogger('j1.adapter.framer'),i.setState('started'),t.info('state: '+i.getState()),t.info('module is being initialized');var r=$.extend({module_name:'j1.adapter.example',generated:'2020-07-27 02:38:42 +0200'},a);return n=$.extend({},{enabled:!0,load:"sync",log:!1,autoResize:!0,bodyBackground:"",bodyMargin:0,checkOrigin:!0,inPageLinks:!1,interval:32,heightCalculationMethod:"bodyOffset",widthCalculationMethod:"scroll",maxHeight:1e8,minHeight:512,maxWidth:1e8,minWidth:0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,tolerance:0}),void 0!==r&&(n=e.mergeData(n,r)),iFrameResize({log:n.log,autoResize:n.autoResize,bodyBackground:n.bodyBackground,bodyMargin:n.bodyMargin,checkOrigin:n.checkOrigin,inPageLinks:n.inPageLinks,interval:n.interval,heightCalculationMethod:n.heightCalculationMethod,maxHeight:n.maxHeight,minWidth:n.minWidth,maxWidth:n.maxWidth,minHeight:n.minHeight,resizeFrom:n.resizeFrom,scrolling:n.scrolling,sizeHeight:n.sizeHeight,sizeWidth:n.sizeWidth,tolerance:n.tolerance,widthCalculationMethod:n.widthCalculationMethod,targetOrigin:n.checkOrigin}),i.setState('finished'),t.info('state: '+i.getState()),t.info('initializing module finished'),!0},messageHandler:function(e,i){var n=JSON.stringify(i,undefined,2);return a='received message from '+e+': '+n,t.debug(a),'command'===i.type&&'module_initialized'===i.action&&t.info(i.text),!0},getState:function(){return e.adapter.navigator.state},setXhrState:function(i,t){e.adapter.navigator.xhrData[i]=t},getXhrState:function(i){return e.adapter.navigator.xhrData[i]}}}(j1,window);



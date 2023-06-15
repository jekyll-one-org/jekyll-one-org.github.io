

  /*
 # -----------------------------------------------------------------------------
 #  ~/assets/themes/j1/adapter/js/framer.js
 #  J1 Adapter for J1 iFrameResizer
 #
 #  Product/Info:
 #  https://jekyll.one
 #  http://davidjbradshaw.github.io/iframe-resizer/
 #
 #  Copyright (C) 2023 Juergen Adams
 #  Copyright (C) 2013-15 David J. Bradshaw
 #
 #  J1 Theme is licensed under the MIT License.
 #  For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 #  iFrameResizer is licensed under under the MIT License.
 #  For details, see http://davidjbradshaw.github.io/iframe-resizer/
 #
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-06-15 22:21:02 +0200
 # -----------------------------------------------------------------------------
 */
'use strict';j1.adapter.framer=function(e){var t,i,a,n,r,o;return{init:function(o){var d=setInterval(function(){if('finished'===e.getState()){$.extend({module_name:'j1.adapter.example',generated:'2023-06-15 22:21:02 +0200'},o);return n=e.adapter.framer,r=log4javascript.getLogger('j1.adapter.framer'),t=$.extend({},{enabled:!1,load:"sync",log:!1,autoResize:!0,bodyBackground:null,bodyMargin:0,checkOrigin:!0,inPageLinks:!1,interval:32,heightCalculationMethod:"bodyOffset",widthCalculationMethod:"scroll",maxHeight:1e8,minHeight:512,maxWidth:1e8,minWidth:0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,tolerance:0}),i=$.extend({},{enabled:!1,autoResize:!0}),a=$.extend(!0,{},t,i),n.setState('started'),r.debug("\nstate: "+n.getState()),r.info("\nmodule is being initialized"),iFrameResize({log:a.log,autoResize:a.autoResize,bodyBackground:a.bodyBackground,bodyMargin:a.bodyMargin,checkOrigin:a.checkOrigin,inPageLinks:a.inPageLinks,interval:a.interval,heightCalculationMethod:a.heightCalculationMethod,maxHeight:a.maxHeight,minWidth:a.minWidth,maxWidth:a.maxWidth,minHeight:a.minHeight,resizeFrom:a.resizeFrom,scrolling:a.scrolling,sizeHeight:a.sizeHeight,sizeWidth:a.sizeWidth,tolerance:a.tolerance,widthCalculationMethod:a.widthCalculationMethod,targetOrigin:a.checkOrigin}),n.setState('finished'),r.debug("\nstate: "+n.getState()),r.info("\ninitializing module finished"),clearInterval(d),!0}},10)},messageHandler:function(e,t){var i=JSON.stringify(t,undefined,2);return o="\nreceived message from "+e+': '+i,r.debug(o),'command'===t.type&&'module_initialized'===t.action&&r.info('\n'+t.text),!0},setState:function(e){n.state=e},getState:function(){return e.adapter.navigator.state},setXhrState:function(t,i){e.adapter.navigator.xhrData[t]=i},getXhrState:function(t){return e.adapter.navigator.xhrData[t]}}}(j1,window);



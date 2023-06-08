

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/lightbox.js
 # JS Adapter for J1 Lightbox
 #
 # Product/Info:
 # https://jekyll.one
 # https://github.com/lokesh/lightbox2/
 #
 # Copyright (C) 2023 Juergen Adams
 # Copyright (C) 2007, 2018 Lokesh Dhakar
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # Lightbox V2 is licensed under the MIT License.
 # For details, see https://github.com/lokesh/lightbox2/
 #
 # -----------------------------------------------------------------------------
 # Adapter generated: 2023-06-08 21:16:43 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.lightbox=function(e){var a,t,i,n,o,r,d;return{init:function(d){$.extend({module_name:'j1.adapter.lightbox',generated:'2023-06-08 21:16:43 +0200'},d);o=e.adapter.lightbox,r=log4javascript.getLogger('j1.adapter.lightbox'),n=null!=d?$.extend({},d):{},a=$.extend({},{version:"0.0.1",enabled:!0,alwaysShowNavOnTouchDevices:!1,albumLabel:"Image %1 of %2",disableScrolling:!0,fadeDuration:400,fitImagesInViewport:!0,imageFadeDuration:600,maxWidth:null,maxHeight:null,positionFromTop:50,resizeDuration:250,showImageNumberLabel:!0,wrapAround:!0}),t=$.extend({},{enabled:!0,imageFadeDuration:600}),i=$.extend(!0,{},a,t,n);var l=setInterval(function(){'finished'==e.getState()&&(o.setState('started'),r.debug("\nstate: "+o.getState()),r.info("\nmodule is being initialized"),lightbox.option({alwaysShowNavOnTouchDevices:i.alwaysShowNavOnTouchDevices,albumLabel:i.albumLabel,disableScrolling:i.disableScrolling,fadeDuration:i.fadeDuration,fitImagesInViewport:i.fitImagesInViewport,imageFadeDuration:i.imageFadeDuration,maxWidth:i.maxWidth,maxHeight:i.maxHeight,positionFromTop:i.positionFromTop,resizeDuration:i.resizeDuration,showImageNumberLabel:i.showImageNumberLabel,wrapAround:i.wrapAround}),o.setState('finished'),r.debug("\nstate: "+o.getState()),r.info("\ninitializing module finished"),clearInterval(l))},25)},messageHandler:function(e,a){var t=JSON.stringify(a,undefined,2);return d="\nreceived message from "+e+': '+t,r.debug(d),'command'===a.type&&'module_initialized'===a.action&&r.info('\n'+a.text),!0},setState:function(e){o.state=e},getState:function(){return o.state}}}(j1,window);





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
 # Adapter generated: 2023-07-10 16:47:03 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.lightbox=function(e){var t,a,i,n,o,r,l;return{init:function(l){$.extend({module_name:'j1.adapter.lightbox',generated:'2023-07-10 16:47:03 +0200'},l);o=e.adapter.lightbox,r=log4javascript.getLogger('j1.adapter.lightbox'),n=null!=l?$.extend({},l):{},t=$.extend({},{version:"0.0.1",enabled:!0,alwaysShowNavOnTouchDevices:!1,albumLabel:"Image %1 of %2",disableScrolling:!0,fadeDuration:400,fitImagesInViewport:!0,imageFadeDuration:600,maxWidth:null,maxHeight:null,positionFromTop:50,resizeDuration:250,showImageNumberLabel:!0,wrapAround:!0}),a=$.extend({},{enabled:!0,imageFadeDuration:600}),i=$.extend(!0,{},t,a,n);var d=setInterval(function(){var t='block'==$('#no_flicker').css("display");e.adapter.attic.getState();'finished'==e.getState()&&t&&(o.setState('started'),r.debug("\nstate: "+o.getState()),r.info("\nmodule is being initialized"),lightbox.option({alwaysShowNavOnTouchDevices:i.alwaysShowNavOnTouchDevices,albumLabel:i.albumLabel,disableScrolling:i.disableScrolling,fadeDuration:i.fadeDuration,fitImagesInViewport:i.fitImagesInViewport,imageFadeDuration:i.imageFadeDuration,maxWidth:i.maxWidth,maxHeight:i.maxHeight,positionFromTop:i.positionFromTop,resizeDuration:i.resizeDuration,showImageNumberLabel:i.showImageNumberLabel,wrapAround:i.wrapAround}),clearInterval(d))},10),s=setInterval(function(){$('#lightbox').length&&(o.setState('finished'),r.debug("\nstate: "+o.getState()),r.info("\ninitializing module finished"),clearInterval(s))},10)},messageHandler:function(e,t){var a=JSON.stringify(t,undefined,2);return l="\nreceived message from "+e+': '+a,r.debug(l),'command'===t.type&&'module_initialized'===t.action&&r.info('\n'+t.text),!0},setState:function(e){o.state=e},getState:function(){return o.state}}}(j1,window);





  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/lightbox.js
 # JS Adapter for J1 Lightbox
 #
 # Product/Info:
 # https://jekyll.one
 # https://github.com/lokesh/lightbox2/
 #
 # Copyright (C) 2023, 2024 Juergen Adams
 # Copyright (C) 2007, 2018 Lokesh Dhakar
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # Lightbox V2 is licensed under the MIT License.
 # For details, see https://github.com/lokesh/lightbox2/
 #
 # -----------------------------------------------------------------------------
 # Adapter generated: 2024-04-01 01:16:05 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.lightbox=(e=>{var a,t,i,n,o,r,l,d,s;return{init:l=>{$.extend({module_name:'j1.adapter.lightbox',generated:'2024-04-01 01:16:05 +0200'},l);o=e.adapter.lightbox,r=log4javascript.getLogger('j1.adapter.lightbox'),n=null!==l?$.extend({},l):{},a=$.extend({},{version:"0.0.1",enabled:!0,alwaysShowNavOnTouchDevices:!1,albumLabel:"Image %1 of %2",disableScrolling:!0,fadeDuration:400,fitImagesInViewport:!0,imageFadeDuration:600,maxWidth:null,maxHeight:null,positionFromTop:50,resizeDuration:250,showImageNumberLabel:!0,wrapAround:!0}),t=$.extend({},{enabled:!0,imageFadeDuration:600}),i=$.extend(!0,{},a,t,n);var g=setInterval(()=>{var a='block'===$('#content').css("display"),t='finished'===e.getState(),n=!!$('#lightbox').length;t&&a&&n&&(d=Date.now(),o.setState('started'),r.debug("\nstate: "+o.getState()),r.info("\nmodule is being initialized"),lightbox.option({alwaysShowNavOnTouchDevices:i.alwaysShowNavOnTouchDevices,albumLabel:i.albumLabel,disableScrolling:i.disableScrolling,fadeDuration:i.fadeDuration,fitImagesInViewport:i.fitImagesInViewport,imageFadeDuration:i.imageFadeDuration,maxWidth:i.maxWidth,maxHeight:i.maxHeight,positionFromTop:i.positionFromTop,resizeDuration:i.resizeDuration,showImageNumberLabel:i.showImageNumberLabel,wrapAround:i.wrapAround}),o.setState('finished'),r.debug("\nstate: "+o.getState()),r.info("\ninitializing module finished"),s=Date.now(),r.info("\nmodule initializing time: "+(s-d)+'ms'),clearInterval(g))},10)},messageHandler:(e,a)=>{var t=JSON.stringify(a,undefined,2);return l="\nreceived message from "+e+': '+t,r.debug(l),'command'===a.type&&'module_initialized'===a.action&&r.info('\n'+a.text),!0},setState:e=>{o.state=e},getState:()=>o.state}})(j1,window);



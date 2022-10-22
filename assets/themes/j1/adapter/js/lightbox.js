

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/lightbox.js
 # JS Adapter for J1 Lightbox
 #
 # Product/Info:
 # https://jekyll.one
 # https://github.com/lokesh/lightbox2/
 #
 # Copyright (C) 2022 Juergen Adams
 # Copyright (C) 2007, 2018 Lokesh Dhakar
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # Lightbox V2 is licensed under the MIT License.
 # For details, see https://github.com/lokesh/lightbox2/
 #
 # -----------------------------------------------------------------------------
 # Adapter generated: 2022-10-22 14:46:14 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.lightbox=function(e){var t,i,a;return{init:function(a){$.extend({module_name:'j1.adapter.lightbox',generated:'2022-10-22 14:46:14 +0200'},a);t=e.adapter.lightbox,i=log4javascript.getLogger('j1.adapter.lightbox');var n=setInterval(function(){'finished'==e.getState()&&(t.setState('started'),i.debug("\nstate: "+t.getState()),i.info("\nmodule is being initialized"),lightbox.option({alwaysShowNavOnTouchDevices:!1,albumLabel:"Image %1 of %2",disableScrolling:!0,fadeDuration:600,fitImagesInViewport:!0,imageFadeDuration:600,maxWidth:null,maxHeight:null,positionFromTop:120,resizeDuration:250,showImageNumberLabel:!0,wrapAround:!0}),t.setState('finished'),i.debug("\nstate: "+t.getState()),i.info("\ninitializing module finished"),clearInterval(n))},25)},messageHandler:function(e,t){var n=JSON.stringify(t,undefined,2);return a="\nreceived message from "+e+': '+n,i.debug(a),'command'===t.type&&'module_initialized'===t.action&&i.info('\n'+t.text),!0},setState:function(e){t.state=e},getState:function(){return t.state}}}(j1,window);



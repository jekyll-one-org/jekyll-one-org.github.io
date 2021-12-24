

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/lightbox.js
 # JS Adapter for J1 Lightbox
 #
 # Product/Info:
 # https://jekyll.one
 # https://github.com/lokesh/lightbox2/
 #
 # Copyright (C) 2021 Juergen Adams
 # Copyright (C) 2007, 2018 Lokesh Dhakar
 #
 # J1 Template is licensed under the MIT License.
 # For details, see https://jekyll.one
 # Lightbox V2 is licensed under the MIT License.
 # For details, see https://github.com/lokesh/lightbox2/
 #
 # -----------------------------------------------------------------------------
 # Adapter generated: 2021-12-24 19:34:27 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.lightbox=function(e){var t,i,n;return{init:function(n){$.extend({module_name:'j1.adapter.lightbox',generated:'2021-12-24 19:34:27 +0000'},n);return t=e.adapter.lightbox,i=log4javascript.getLogger('j1.adapter.lightbox'),e.adapter.lightbox.state='pending',t.setState('started'),i.info("\nstate: "+t.getState()),i.info("\nmodule is being initialized"),lightbox.option({alwaysShowNavOnTouchDevices:!1,albumLabel:"Image %1 of %2",disableScrolling:!1,fadeDuration:600,fitImagesInViewport:!0,imageFadeDuration:600,maxWidth:null,maxHeight:null,positionFromTop:50,resizeDuration:250,showImageNumberLabel:!0,wrapAround:!0}),t.setState('finished'),i.info("\nstate: "+t.getState()),i.info("\ninitializing module finished"),!0},messageHandler:function(e,t){var a=JSON.stringify(t,undefined,2);return n="\nreceived message from "+e+': '+a,i.debug(n),'command'===t.type&&'module_initialized'===t.action&&i.info('\n'+t.text),!0},setState:function(e){t.state=e},getState:function(){return t.state}}}(j1,window);



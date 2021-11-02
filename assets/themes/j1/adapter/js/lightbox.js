

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
 # Adapter generated: 2021-11-02 13:23:16 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.lightbox=function(t){var e,i,n;return{init:function(){return t.adapter.lightbox.state='pending',e=t.adapter.lightbox,i=log4javascript.getLogger('j1.adapter.lightbox'),e.setState('started'),i.info("\nstate: "+e.getState()),i.info("\nmodule is being initialized"),lightbox.option({alwaysShowNavOnTouchDevices:!1,albumLabel:"Image %1 of %2",disableScrolling:!1,fadeDuration:600,fitImagesInViewport:!0,imageFadeDuration:600,maxWidth:null,maxHeight:null,positionFromTop:50,resizeDuration:250,showImageNumberLabel:!0,wrapAround:!0}),e.setState('finished'),i.info("\nstate: "+e.getState()),i.info("\ninitializing module finished"),!0},messageHandler:function(t,e){var a=JSON.stringify(e,undefined,2);return n="\nreceived message from "+t+': '+a,i.debug(n),'command'===e.type&&'module_initialized'===e.action&&i.info('\n'+e.text),!0},setState:function(t){e.state=t},getState:function(){return e.state}}}(j1,window);





  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/bmd.js
 # J1 Adapter for BMD
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2022 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2022-07-21 16:11:13 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.bmd=function(e){var t,n,i;return{init:function(i){$.extend({module_name:'j1.adapter.bmd',generated:'2022-07-21 16:11:13 +0000'},i);t=e.adapter.bmd,n=log4javascript.getLogger('j1.adapter.bmd');var a=setInterval(function(){if('finished'==e.getState()){t.setState('started'),n.debug("\nstate: "+t.getState()),n.info("\nmodule is being initialized");var i="\nBMD is being initialized";n.info(i),$('body').bmd(),t.setState('finished'),n.debug("\nstate: "+t.getState()),n.info("\ninitializing module finished"),clearInterval(a)}},25)},messageHandler:function(e,t){var a=JSON.stringify(t,undefined,2);return i="\nreceived message from "+e+': '+a,n.debug(i),'command'===t.type&&'module_initialized'===t.action&&n.info('\n'+t.text),!0},setState:function(e){t.state=e},getState:function(){return t.state}}}(j1,window);



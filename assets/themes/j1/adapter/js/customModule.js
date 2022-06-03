

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/customModule.js
 # J1 Adapter for custom module
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2022 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2022-06-03 08:47:20 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.customModule=function(e){var t,n,a,o,i={};return{init:function(o){$.extend({module_name:'j1.adapter.customModule',generated:'2022-06-03 08:47:20 +0000'},o);n=e.adapter.dropdowns,a=log4javascript.getLogger('j1.adapter.customModule'),n.setState('started'),a.debug("\nstate: "+n.getState()),a.info("\nmodule is being initialized"),t=null!=o?$.extend({},o):{},i=$.extend({}),void 0!==t&&(i=e.mergeData(i,t));var d=setInterval(function(){if('finished'==e.getState()){document.querySelectorAll('.dropdowns');var t="\ncustom functions are being initialized";a.info(t),n.setState('finished'),a.debug("\nstate: "+n.getState()),clearInterval(d)}},25)},custom_module_1:function(){var e=log4javascript.getLogger('j1.adapter.customModule.custom_module_1');return o="\nentered custom function: custom_module_1",e.info(o),!0},messageHandler:function(e,t){var n=JSON.stringify(t,undefined,2);return o="\nreceived message from "+e+': '+n,a.debug(o),'command'===t.type&&'module_initialized'===t.action&&a.info('\n'+t.text),!0},setState:function(e){n.state=e},getState:function(){return n.state}}}(j1,window);



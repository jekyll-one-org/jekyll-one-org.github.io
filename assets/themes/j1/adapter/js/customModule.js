

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/customModule.js
 # J1 Adapter for custom module
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-07-05 16:42:57 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.customModule=function(e){var t,n,o,a,i={};return{init:function(a){$.extend({module_name:'j1.adapter.customModule',generated:'2023-07-05 16:42:57 +0200'},a);n=e.adapter.dropdowns,o=log4javascript.getLogger('j1.adapter.customModule'),n.setState('started'),o.debug("\nstate: "+n.getState()),o.info("\nmodule is being initialized"),t=null!=a?$.extend({},a):{},i=$.extend({}),void 0!==t&&(i=$.extend({},i,t));var d=setInterval(function(){if('finished'==e.getState()){document.querySelectorAll('.dropdowns');var t="\ncustom functions are being initialized";o.info(t),n.setState('finished'),o.debug("\nstate: "+n.getState()),clearInterval(d)}},10)},custom_module_1:function(){var e=log4javascript.getLogger('j1.adapter.customModule.custom_module_1');return a="\nentered custom function: custom_module_1",e.info(a),!0},messageHandler:function(e,t){var n=JSON.stringify(t,undefined,2);return a="\nreceived message from "+e+': '+n,o.debug(a),'command'===t.type&&'module_initialized'===t.action&&o.info('\n'+t.text),!0},setState:function(e){n.state=e},getState:function(){return n.state}}}(j1,window);



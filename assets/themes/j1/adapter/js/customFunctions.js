

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/customFunctions.js
 # J1 Adapter for custom functions
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-07-05 17:16:14 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.customFunctions=function(t){var e,n,i,a,o={};return{init:function(a){$.extend({module_name:'j1.adapter.custom_functions',generated:'2023-07-05 17:16:14 +0200'},a);n=t.adapter.dropdowns,i=log4javascript.getLogger('j1.adapter.custom_functions'),n.setState('started'),i.debug("\nstate: "+n.getState()),i.info("\nmodule is being initialized"),e=null!=a?$.extend({},a):{},o=$.extend({}),void 0!==e&&(o=$.extend({},o,e));var r=setInterval(function(){if('finished'==t.getState()){document.querySelectorAll('.dropdowns');var e="\ncustom functions are being initialized";i.info(e),n.setState('finished'),i.debug("\nstate: "+n.getState()),clearInterval(r)}},10)},custom_1:function(){var t=log4javascript.getLogger('j1.adapter.custom_functions.custom_1');return a="\nentered custom function: custom_1",t.info(a),!0},messageHandler:function(t,e){var n=JSON.stringify(e,undefined,2);return a="\nreceived message from "+t+': '+n,i.debug(a),'command'===e.type&&'module_initialized'===e.action&&i.info('\n'+e.text),!0},setState:function(t){n.state=t},getState:function(){return n.state}}}(j1,window);



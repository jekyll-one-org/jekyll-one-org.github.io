

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/customModule.js
 # J1 Adapter for custom module
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023, 2024 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2024-04-01 01:16:05 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.customModule=(e=>{var t,n,i,a,o,d,s={};return{init:a=>{$.extend({module_name:'j1.adapter.customModule',generated:'2024-04-01 01:16:05 +0200'},a);n=e.adapter.dropdowns,i=log4javascript.getLogger('j1.adapter.customModule'),t=null!=a?$.extend({},a):{},s=$.extend({}),void 0!==t&&(s=$.extend({},s,t));setInterval(()=>{'finished'===e.getState()&&(o=Date.now(),n.setState('started'),i.debug("\nset module state to: "+n.getState()),i.info("\ncustom functions are being initialized"),n.setState('finished'),i.debug("\nstate: "+n.getState()),i.info("\ninitializing custom functions: finished"),d=Date.now(),i.info("\ninitializing time: "+(d-o)+'ms'))},10)},custom_module_1:()=>{var e=log4javascript.getLogger('j1.adapter.customModule.custom_module_1');return a="\nentered custom function: custom_module_1",e.info(a),!0},messageHandler:(e,t)=>{var n=JSON.stringify(t,undefined,2);return a="\nreceived message from "+e+': '+n,i.debug(a),'command'===t.type&&'module_initialized'===t.action&&i.info('\n'+t.text),!0},setState:e=>{n.state=e},getState:()=>n.state}})(j1,window);



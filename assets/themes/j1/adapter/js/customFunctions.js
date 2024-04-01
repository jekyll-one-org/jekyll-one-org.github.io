

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/customFunctions.js
 # J1 Adapter for custom functions
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
'use strict';j1.adapter.customFunctions=(t=>{var e,n,i,a,s,o,d={};return{init:a=>{$.extend({module_name:'j1.adapter.custom_functions',generated:'2024-04-01 01:16:05 +0200'},a);n=t.adapter.custom_functions,i=log4javascript.getLogger('j1.adapter.custom_functions'),n.setState('started'),i.debug("\nstate: "+n.getState()),i.info("\nmodule is being initialized"),e=null!=a?$.extend({},a):{},d=$.extend({}),void 0!==e&&(d=$.extend({},d,e));var u=setInterval(()=>{'finished'===t.getState()&&(s=Date.now(),n.setState('started'),i.debug("\nset module state to: "+n.getState()),i.info("\ncustom functions are being initialized"),n.setState('finished'),i.debug("\nstate: "+n.getState()),i.info("\ninitializing custom functions: finished"),o=Date.now(),i.info("\ninitializing time: "+(o-s)+'ms'),clearInterval(u))},10)},custom_1:()=>{var t=log4javascript.getLogger('j1.adapter.custom_functions.custom_1');return a="\nentered custom function: custom_1",t.info(a),!0},messageHandler:(t,e)=>{var n=JSON.stringify(e,undefined,2);return a="\nreceived message from "+t+': '+n,i.debug(a),'command'===e.type&&'module_initialized'===e.action&&i.info('\n'+e.text),!0},setState:t=>{n.state=t},getState:()=>n.state}})(j1,window);



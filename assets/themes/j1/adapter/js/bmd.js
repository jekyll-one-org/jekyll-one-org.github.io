

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/bmd.js
 # J1 Adapter for BMD
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
'use strict';j1.adapter.bmd=(e=>{var t,a,i,n,d;return{init:i=>{$.extend({module_name:'j1.adapter.bmd',generated:'2024-04-01 01:16:05 +0200'},i);t=e.adapter.bmd,a=log4javascript.getLogger('j1.adapter.bmd');var s=setInterval(()=>{var i='block'===$('#content').css("display");'finished'===e.getState()&&i&&(n=Date.now(),t.setState('started'),a.debug("\nstate: "+t.getState()),a.info("\nmodule is being initialized"),a.info("\nsetup bmd resources"),$('body').bmd(),t.setState('finished'),a.debug("\nstate: "+t.getState()),a.info("\ninitializing module finished"),d=Date.now(),a.info("\nmodule initializing time: "+(d-n)+'ms'),clearInterval(s))},10)},messageHandler:(e,t)=>{var n=JSON.stringify(t,undefined,2);return i="\nreceived message from "+e+': '+n,a.debug(i),'command'===t.type&&'module_initialized'===t.action&&a.info('\n'+t.text),!0},setState:e=>{t.state=e},getState:()=>t.state}})(j1,window);



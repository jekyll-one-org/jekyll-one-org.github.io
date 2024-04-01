

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/dropdowns.js
 # J1 Adapter for J1 Module Dropdowns
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
'use strict';j1.adapter.dropdowns=(e=>{var t,n,o,a,r,i,d,s=[];return{init:r=>{$.extend({module_name:'j1.adapter.dropdowns',generated:'2024-04-01 01:16:05 +0200'},r);o=e.adapter.dropdowns,a=log4javascript.getLogger('j1.adapter.dropdowns'),t=$.extend({}),n=$.extend({}),$.extend(!0,{},t,n),o.setState('started'),a.debug("\nstate: "+o.getState()),a.info("\nmodule is being initialized");var l=setInterval(()=>{var t='block'===$('#content').css("display");if('finished'===e.getState()&&t){var n=document.querySelectorAll('.dropdowns');i=Date.now(),o.setState('started'),a.debug("\nstate: "+o.getState()),a.info("\nmodule is being initialized"),n.forEach(t=>{if('icon-dropdown'===t.dataset.target){var n=e.dropdowns.init(t,{alignment:"bottom",autoTrigger:!0,constrainWidth:!0,coverTrigger:!0,closeOnClick:!0,hover:!0,inDuration:"300",outDuration:"300",onOpen:"j1.adapter.dropdowns.cbOnOpen",onClose:"j1.adapter.dropdowns.cbOnClose",onItemClick:"false"});s.push(n)}}),n.forEach(t=>{if('button-dropdown'===t.dataset.target){var n=e.dropdowns.init(t,{alignment:"left",autoTrigger:!0,constrainWidth:!0,coverTrigger:!0,closeOnClick:!0,hover:!1,inDuration:"150",outDuration:"250",onOpen:"j1.adapter.dropdowns.cbOnOpen",onClose:"j1.adapter.dropdowns.cbOnClose",onItemClick:"false"});s.push(n)}}),o.setState('finished'),a.debug("\nstate: "+o.getState()),a.info("\nmodule initialized successfully"),d=Date.now(),a.info("\nmodule initializing time: "+(d-i)+'ms'),clearInterval(l)}},10)},cbOnclick:e=>{log4javascript.getLogger('j1.adapter.dropdowns.cbOnClick'),$(e.target).closest('li')[0];return!0},cbOnOpen:e=>{var t=log4javascript.getLogger('j1.adapter.dropdowns.cbOnOpen'),n=e.id;return r="\nentered cbOnOpen on id: "+n,t.info(r),!0},cbOnClose:e=>{for(var t,n,o=log4javascript.getLogger('j1.adapter.dropdowns.cbOnClose'),a=e.id,i='#'+e.id+" li",d=document.querySelectorAll(i),s=0;s<d.length;s++)d[s].classList.contains('active')&&(t=s,n=d[s].dataset.target);return r="\nentered cbOnClose on id: "+a,o.info(r),r="\nitem selected: "+t,o.info(r),r="\nvalue selected: "+n,o.info(r),!0},messageHandler:(e,t)=>{var n=JSON.stringify(t,undefined,2);return r="\nreceived message from "+e+': '+n,a.debug(r),'command'===t.type&&'module_initialized'===t.action&&a.info('\n'+t.text),!0},setState:e=>{o.state=e},getState:()=>o.state}})(j1,window);



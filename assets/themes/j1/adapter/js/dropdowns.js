

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/dropdowns.js
 # J1 Adapter for J1 Module Dropdowns
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-06-08 21:16:43 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.dropdowns=function(e){var n,t,o,r,i,a=[];return{init:function(i){$.extend({module_name:'j1.adapter.dropdowns',generated:'2023-06-08 21:16:43 +0200'},i);o=e.adapter.dropdowns,r=log4javascript.getLogger('j1.adapter.dropdowns'),n=$.extend({}),t=$.extend({}),$.extend(!0,{},n,t),o.setState('started'),r.debug("\nstate: "+o.getState()),r.info("\nmodule is being initialized");var d=setInterval(function(){if('finished'==e.getState()){var n=document.querySelectorAll('.dropdowns'),t="\ndropdowns is being initialized";r.info(t),n.forEach(function(n){if('icon-dropdown'===n.dataset.target){var t=e.dropdowns.init(n,{alignment:"bottom",autoTrigger:!0,constrainWidth:!0,coverTrigger:!0,closeOnClick:!0,hover:!0,inDuration:"300",outDuration:"300",onOpen:"j1.adapter.dropdowns.cbOnOpen",onClose:"j1.adapter.dropdowns.cbOnClose",onItemClick:"false"});a.push(t)}}),n.forEach(function(n){if('button-dropdown'===n.dataset.target){var t=e.dropdowns.init(n,{alignment:"left",autoTrigger:!0,constrainWidth:!0,coverTrigger:!0,closeOnClick:!0,hover:!1,inDuration:"150",outDuration:"250",onOpen:"j1.adapter.dropdowns.cbOnOpen",onClose:"j1.adapter.dropdowns.cbOnClose",onItemClick:"false"});a.push(t)}}),o.setState('finished'),r.debug("\nstate: "+o.getState()),clearInterval(d)}},25)},cbOnclick:function(e){log4javascript.getLogger('j1.adapter.dropdowns.cbOnClick'),$(e.target).closest('li')[0];return!0},cbOnOpen:function(e){var n=log4javascript.getLogger('j1.adapter.dropdowns.cbOnOpen'),t=e.id;return i="\nentered cbOnOpen on id: "+t,n.info(i),!0},cbOnClose:function(e){for(var n,t,o=log4javascript.getLogger('j1.adapter.dropdowns.cbOnClose'),r=e.id,a='#'+e.id+" li",d=document.querySelectorAll(a),s=0;s<d.length;s++)d[s].classList.contains('active')&&(n=s,t=d[s].dataset.target);return i="\nentered cbOnClose on id: "+r,o.info(i),i="\nitem selected: "+n,o.info(i),i="\nvalue selected: "+t,o.info(i),!0},messageHandler:function(e,n){var t=JSON.stringify(n,undefined,2);return i="\nreceived message from "+e+': '+t,r.debug(i),'command'===n.type&&'module_initialized'===n.action&&r.info('\n'+n.text),!0},setState:function(e){o.state=e},getState:function(){return o.state}}}(j1,window);





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
 #  Adapter generated: 2023-06-17 21:16:55 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.dropdowns=function(e){var t,n,o,r,a,i=[];return{init:function(a){$.extend({module_name:'j1.adapter.dropdowns',generated:'2023-06-17 21:16:55 +0200'},a);o=e.adapter.dropdowns,r=log4javascript.getLogger('j1.adapter.dropdowns'),t=$.extend({}),n=$.extend({}),$.extend(!0,{},t,n),o.setState('started'),r.debug("\nstate: "+o.getState()),r.info("\nmodule is being initialized");var d=setInterval(function(){var t='block'==$('#no_flicker').css("display");e.adapter.attic.getState();if('finished'==e.getState()&&t){var n=document.querySelectorAll('.dropdowns'),a="\ndropdowns is being initialized";r.info(a),n.forEach(function(t){if('icon-dropdown'===t.dataset.target){var n=e.dropdowns.init(t,{alignment:"bottom",autoTrigger:!0,constrainWidth:!0,coverTrigger:!0,closeOnClick:!0,hover:!0,inDuration:"300",outDuration:"300",onOpen:"j1.adapter.dropdowns.cbOnOpen",onClose:"j1.adapter.dropdowns.cbOnClose",onItemClick:"false"});i.push(n)}}),n.forEach(function(t){if('button-dropdown'===t.dataset.target){var n=e.dropdowns.init(t,{alignment:"left",autoTrigger:!0,constrainWidth:!0,coverTrigger:!0,closeOnClick:!0,hover:!1,inDuration:"150",outDuration:"250",onOpen:"j1.adapter.dropdowns.cbOnOpen",onClose:"j1.adapter.dropdowns.cbOnClose",onItemClick:"false"});i.push(n)}}),o.setState('finished'),r.debug("\nstate: "+o.getState()),clearInterval(d)}},10)},cbOnclick:function(e){log4javascript.getLogger('j1.adapter.dropdowns.cbOnClick'),$(e.target).closest('li')[0];return!0},cbOnOpen:function(e){var t=log4javascript.getLogger('j1.adapter.dropdowns.cbOnOpen'),n=e.id;return a="\nentered cbOnOpen on id: "+n,t.info(a),!0},cbOnClose:function(e){for(var t,n,o=log4javascript.getLogger('j1.adapter.dropdowns.cbOnClose'),r=e.id,i='#'+e.id+" li",d=document.querySelectorAll(i),s=0;s<d.length;s++)d[s].classList.contains('active')&&(t=s,n=d[s].dataset.target);return a="\nentered cbOnClose on id: "+r,o.info(a),a="\nitem selected: "+t,o.info(a),a="\nvalue selected: "+n,o.info(a),!0},messageHandler:function(e,t){var n=JSON.stringify(t,undefined,2);return a="\nreceived message from "+e+': '+n,r.debug(a),'command'===t.type&&'module_initialized'===t.action&&r.info('\n'+t.text),!0},setState:function(e){o.state=e},getState:function(){return o.state}}}(j1,window);



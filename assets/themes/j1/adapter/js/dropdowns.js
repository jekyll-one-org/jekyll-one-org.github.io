

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/dropdowns.js
 # J1 Adapter for J1 Module Dropdowns
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2022 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2022-07-21 18:41:29 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.dropdowns=function(e){var n,i,o,t,a={},r=[];return{init:function(t){$.extend({module_name:'j1.adapter.dropdowns',generated:'2022-07-21 18:41:29 +0000'},t);i=e.adapter.dropdowns,o=log4javascript.getLogger('j1.adapter.dropdowns'),i.setState('started'),o.debug("\nstate: "+i.getState()),o.info("\nmodule is being initialized"),n=null!=t?$.extend({},t):{},a=$.extend({},{enabled:!0,options:{alignment:"left",autoTrigger:!0,constrainWidth:!0,container:!1,coverTrigger:!0,closeOnClick:!0,hover:!1,inDuration:150,outDuration:250,maxLenght:350,cbOnOpen:"j1.adapter.dropdowns.cbOnOpen",cbOnClose:"j1.adapter.dropdowns.cbOnClose",cbOnItemClick:!1},dropdowns:[{dropdown:{enabled:!0,id:"icon-dropdown",items:"<li><a href=\"#\"><i class=\"flag-icon flag-icon-de squared size-1x\"></i></a></li> <li class=\"divider\" tabindex=\"-1\"></li> <li><a href=\"#\"><i class=\"flag-icon flag-icon-be squared size-1x\"></i></a></li> <li><a href=\"#\"><i class=\"flag-icon flag-icon-dk squared size-1x\"></i></a></li> <li><a href=\"#\"><i class=\"flag-icon flag-icon-es squared size-1x\"></i></a></li>\n",options:{alignment:"bottom",hover:!0,inDuration:300,outDuration:300}}},{dropdown:{enabled:!0,id:"button-dropdown",items:"<li><a href=\"#\"><i class=\"flag-icon flag-icon-de squared size-1x\"></i></a></li> <li class=\"divider\" tabindex=\"-1\"></li> <li><a href=\"#\"><i class=\"flag-icon flag-icon-be squared size-1x\"></i></a></li> <li><a href=\"#\"><i class=\"flag-icon flag-icon-dk squared size-1x\"></i></a></li> <li><a href=\"#\"><i class=\"flag-icon flag-icon-es squared size-1x\"></i></a></li>\n",options:{alignment:"left",hover:!1}}}]}),void 0!==n&&(a=$.extend({},a,n));var d=setInterval(function(){if('finished'==e.getState()){var n=document.querySelectorAll('.dropdowns'),t="\ndropdowns is being initialized";o.info(t),n.forEach(function(n){if('icon-dropdown'===n.dataset.target){var i=e.dropdowns.init(n,{alignment:"bottom",autoTrigger:!0,constrainWidth:!0,coverTrigger:!0,closeOnClick:!0,hover:!0,inDuration:"300",outDuration:"300",onOpen:"j1.adapter.dropdowns.cbOnOpen",onClose:"j1.adapter.dropdowns.cbOnClose",onItemClick:"false"});r.push(i)}}),n.forEach(function(n){if('button-dropdown'===n.dataset.target){var i=e.dropdowns.init(n,{alignment:"left",autoTrigger:!0,constrainWidth:!0,coverTrigger:!0,closeOnClick:!0,hover:!1,inDuration:"150",outDuration:"250",onOpen:"j1.adapter.dropdowns.cbOnOpen",onClose:"j1.adapter.dropdowns.cbOnClose",onItemClick:"false"});r.push(i)}}),i.setState('finished'),o.debug("\nstate: "+i.getState()),clearInterval(d)}},25)},cbOnclick:function(e){log4javascript.getLogger('j1.adapter.dropdowns.cbOnClick'),$(e.target).closest('li')[0];return!0},cbOnOpen:function(e){var n=log4javascript.getLogger('j1.adapter.dropdowns.cbOnOpen'),i=e.id;return t="\nentered cbOnOpen on id: "+i,n.info(t),!0},cbOnClose:function(e){for(var n,i,o=log4javascript.getLogger('j1.adapter.dropdowns.cbOnClose'),a=e.id,r='#'+e.id+" li",d=document.querySelectorAll(r),s=0;s<d.length;s++)d[s].classList.contains('active')&&(n=s,i=d[s].dataset.target);return t="\nentered cbOnClose on id: "+a,o.info(t),t="\nitem selected: "+n,o.info(t),t="\nvalue selected: "+i,o.info(t),!0},messageHandler:function(e,n){var i=JSON.stringify(n,undefined,2);return t="\nreceived message from "+e+': '+i,o.debug(t),'command'===n.type&&'module_initialized'===n.action&&o.info('\n'+n.text),!0},setState:function(e){i.state=e},getState:function(){return i.state}}}(j1,window);





  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/masonry.js
 # J1 Adapter for the comments module
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-01-01 16:45:48 +0100
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.masonry=function(e,n){var i,t,a,o=e.getCookieNames(),r=e.readCookie(o.user_state);$(n).width();return{init:function(n){$.extend({module_name:'j1.adapter.masonry',generated:'2023-01-01 16:45:48 +0100'},n);var a=null!=n?$.extend({},n):{},o=$.extend({},{enabled:!1,hideDisabled:!0,initLayout:!1,originTop:!1,originLeft:!1,percentPosition:!1,horizontalOrder:!1,stagger:30,transitionDuration:.4}),s=$.extend({},{enabled:!0,grids:[{name:"Example Grid 1",grid:{enabled:!0,hideDisabled:!0,id:"example_masonry",originTop:!0,originLeft:!0,initLayout:!0,percentPosition:!0}},{name:"Example Grid 2",grid:{enabled:!0,hideDisabled:!0,id:"example_masonry_2",originTop:!0,originLeft:!0,initLayout:!0,percentPosition:!0}}]});$.extend({},o,s,a);i=e.adapter.masonry,r.theme_name,t=log4javascript.getLogger('j1.adapter.masonry');var d=setInterval(function(){if('finished'===e.getState()){i.setState('started'),t.debug("\nstate: "+i.getState()),t.info("\nmodule is being initialized"),t.info("\nfound masonry on id: example_masonry");var n=$('#example_masonry');t.info("\ninitialize grid on id: example_masonry"),n.masonry({percentPosition:!0,horizontalOrder:!1,originLeft:!0,originTop:!0,initLayout:!0,transitionDuration:"0.4s",stagger:"30"}),t.info("\ninstall event handlers on id: example_masonry"),n.on('click','.card',function(){n.masonry('remove',this).masonry('layout'),n.masonry('reloadItems')}),t.info("\nfound masonry on id: example_masonry_2");var a=$('#example_masonry_2');t.info("\ninitialize grid on id: example_masonry_2"),a.masonry({percentPosition:!0,horizontalOrder:!1,originLeft:!0,originTop:!0,initLayout:!0,transitionDuration:"0.4s",stagger:"30"}),t.info("\ninstall event handlers on id: example_masonry_2"),a.on('click','.card',function(){a.masonry('remove',this).masonry('layout'),a.masonry('reloadItems')}),t.info("\ninitializing module finished"),clearInterval(d)}},25)},messageHandler:function(e,n){var i=JSON.stringify(n,undefined,2);return a="\nreceived message from "+e+': '+i,t.debug(a),'command'===n.type&&'module_initialized'===n.action&&t.info('\n'+n.text),!0},setState:function(e){i.state=e},getState:function(){return i.state}}}(j1,window);



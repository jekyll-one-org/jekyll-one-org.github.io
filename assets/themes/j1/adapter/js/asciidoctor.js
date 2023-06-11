

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/asciidoctor.js
 # J1 Adapter for Asciidoctor
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-06-11 07:38:21 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.asciidoctor=function(t){var e,i,a;return{init:function(a){$.extend({module_name:'j1.adapter.rtable',generated:'2023-06-11 07:38:21 +0200'},a);e=t.adapter.asciidoctor,i=log4javascript.getLogger('j1.adapter.asciidoctor'),e.setState('started'),i.debug("\nstate: "+e.getState()),i.info("\nmodule is being initialized");var n="\nasciidoctor is being initialized";i.info(n);var r=setInterval(function(){'finished'==t.getState()&&(t.core.asciidoctor.init(),e.setState('finished'),i.debug("\nstate: "+e.getState()),clearInterval(r))},10)},messageHandler:function(t,e){var n=JSON.stringify(e,undefined,2);return a="\nreceived message from "+t+': '+n,i.debug(a),'command'===e.type&&'module_initialized'===e.action&&i.info('\n'+e.text),!0},setState:function(t){e.state=t},getState:function(){return e.state}}}(j1,window);



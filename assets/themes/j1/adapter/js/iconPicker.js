

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/iconPicker.js
 # J1 Adapter for the iconPicker module
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 # NOTE:
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-07-02 20:26:42 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.iconPicker=function(i){var e,n,t,s,a,c,o;return{init:function(o){$.extend({module_name:'j1.adapter.iconPicker',generated:'2023-07-02 20:26:42 +0200'},o);t=null!=o?$.extend({},o):{},e=$.extend({},{enabled:!1,picker_button_id:"icon_picker",iconLibraries:["mdi-icons-base.min.json","mdi-icons-light.min.json","font-awesome.min.json"],iconLibrariesCss:["https://cdn.jsdelivr.net/npm/@mdi/light-font@0.2.63/css/materialdesignicons-light.min.css","https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.2.96/css/materialdesignicons.min.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"]}),n=$.extend({},{enabled:!0,pickers:[{picker:null,enabled:!0,id:"mdil",picker_button_id:"icon_picker_mdil",iconLibraries:["mdi-icons-light.min.json"],iconLibrariesCss:["https://cdn.jsdelivr.net/npm/@mdi/light-font@0.2.63/css/materialdesignicons-light.min.css"]},{picker:null,enabled:!0,id:"mdi",picker_button_id:"icon_picker_md",iconLibraries:["mdi-icons-base.min.json"],iconLibrariesCss:["https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.2.96/css/materialdesignicons.min.css"]},{picker:null,enabled:!0,id:"fontawsome",picker_button_id:"icon_picker_fa",iconLibraries:["font-awesome.min.json"],iconLibrariesCss:["https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"]}]}),$.extend(!0,{},e,n,t),a=i.adapter.iconPicker,c=log4javascript.getLogger('j1.adapter.iconPicker');var r=setInterval(function(){var n='block'==$('#no_flicker').css("display");i.adapter.attic.getState();'finished'===i.getState()&&n&&(s='#'+e.picker_button_id,a.setState('started'),c.debug("\nstate: "+a.getState()),c.info("\nmodule is being initialized on id: "+s),new UniversalIconPicker(s,{iconLibraries:e.iconLibraries,iconLibrariesCss:e.iconLibrariesCss,onSelect:function(i){var e=document.createElement('textarea');e.value=i.iconClass,document.body.appendChild(e),e.select(),document.execCommand('copy'),setTimeout(function(){document.body.removeChild(e)},500)}}),c.info("\ninitializing module finished"),clearInterval(r))},10)},messageHandler:function(i,e){var n=JSON.stringify(e,undefined,2);return o="\nreceived message from "+i+': '+n,c.debug(o),'command'===e.type&&'module_initialized'===e.action&&c.info('\n'+e.text),!0},setState:function(i){a.state=i},getState:function(){return a.state}}}(j1,window);



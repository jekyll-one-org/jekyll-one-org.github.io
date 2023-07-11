

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
 #  Adapter generated: 2023-07-09 18:23:55 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.iconPicker=function(i){var e,n,t,s,o,a,c,r,d;return{init:function(d){$.extend({module_name:'j1.adapter.iconPicker',generated:'2023-07-09 18:23:55 +0200'},d);s=null!=d?$.extend({},d):{},e=$.extend({},{enabled:!1,picker_button_id:"icon_picker",iconLibraries:["mdi-icons-base.min.json","mdi-icons-light.min.json","font-awesome.min.json"],iconLibrariesCss:["https://cdn.jsdelivr.net/npm/@mdi/light-font@0.2.63/css/materialdesignicons-light.min.css","https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.2.96/css/materialdesignicons.min.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"]}),n=$.extend({},{enabled:!0,pickers:[{picker:null,enabled:!0,id:"mdil",picker_button_id:"icon_picker_mdil",iconLibraries:["mdi-icons-light.min.json"],iconLibrariesCss:["https://cdn.jsdelivr.net/npm/@mdi/light-font@0.2.63/css/materialdesignicons-light.min.css"]},{picker:null,enabled:!0,id:"mdi",picker_button_id:"icon_picker_md",iconLibraries:["mdi-icons-base.min.json"],iconLibrariesCss:["https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.2.96/css/materialdesignicons.min.css"]},{picker:null,enabled:!0,id:"fontawsome",picker_button_id:"icon_picker_fa",iconLibraries:["font-awesome.min.json"],iconLibrariesCss:["https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"]}]}),t=$.extend(!0,{},e,n,s),c=i.adapter.iconPicker,r=log4javascript.getLogger('j1.adapter.iconPicker');var l=setInterval(function(){var n='block'==$('#no_flicker').css("display");'finished'===i.getState()&&n&&(a='#'+e.picker_button_id,c.setState('started'),r.debug("\nstate: "+c.getState()),r.info("\nmodule is being initialized on id: "+a),o=new UniversalIconPicker(a,{allowEmpty:t.allowEmpty,iconLibraries:t.iconLibraries,iconLibrariesCss:t.iconLibrariesCss,onSelect:function(i){var e=document.createElement('textarea');e.value=i.iconClass,document.body.appendChild(e),e.select(),document.execCommand('copy'),setTimeout(function(){document.body.removeChild(e)},500)}}),c.icon_picker=o,c.moduleOptions=t,c.setState('finished'),r.debug("\nstate: "+c.getState()),r.info("\ninitializing module finished"),clearInterval(l))},10)},messageHandler:function(i,e){var n=JSON.stringify(e,undefined,2);return d="\nreceived message from "+i+': '+n,r.debug(d),'command'===e.type&&'module_initialized'===e.action&&r.info('\n'+e.text),!0},setState:function(i){c.state=i},getState:function(){return c.state}}}(j1,window);



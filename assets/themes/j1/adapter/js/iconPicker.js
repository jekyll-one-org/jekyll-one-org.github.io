

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/iconPicker.js
 # J1 Adapter for the iconPicker module
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023, 2024 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 # NOTE:
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2024-01-15 22:18:27 +0100
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.iconPicker=function(e){var i,n,t,s,o,c,a,r,d;return{init:function(d){$.extend({module_name:'j1.adapter.iconPicker',generated:'2024-01-15 22:18:27 +0100'},d);s=null!=d?$.extend({},d):{},i=$.extend({},{enabled:!1,picker_button_id:"icon_picker",iconLibraries:["mdi-icons-base.min.json","mdi-icons-light.min.json","font-awesome.min.json"],iconLibrariesCss:["https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.2.96/css/materialdesignicons.min.css","https://cdn.jsdelivr.net/npm/@mdi/light-font@0.2.63/css/materialdesignicons-light.min.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"]}),n=$.extend({},{enabled:!0,allowEmpty:!1,pickers:[{picker:null,enabled:!1,id:"base",picker_button_id:"icon_picker_base",iconLibraries:["mdi-icons-light.min.json"],iconLibrariesCss:["/assets/themes/j1/core/css/icon-fonts/mdil.min.css"]},{picker:null,enabled:!1,id:"mdi",picker_button_id:"icon_picker_base",iconLibraries:["mdi-icons-base.min.json"],iconLibrariesCss:["/assets/themes/j1/core/css/icon-fonts/mdib.min.css"]}]}),t=$.extend(!0,{},i,n,s),a=e.adapter.iconPicker,r=log4javascript.getLogger('j1.adapter.iconPicker');var l=setInterval(function(){var n='block'==$('#no_flicker').css("display");'finished'===e.getState()&&n&&(c='#'+i.picker_button_id,a.setState('started'),r.debug("\nstate: "+a.getState()),r.info("\nmodule is being initialized on id: "+c),o=new UniversalIconPicker(c,{allowEmpty:t.allowEmpty,iconLibraries:t.iconLibraries,iconLibrariesCss:t.iconLibrariesCss,onSelect:function(e){var i=document.createElement('textarea');i.value=e.iconClass,document.body.appendChild(i),i.select(),document.execCommand('copy'),setTimeout(function(){document.body.removeChild(i)},500)}}),a.icon_picker=o,a.moduleOptions=t,a.setState('finished'),r.debug("\nstate: "+a.getState()),r.info("\ninitializing module finished"),clearInterval(l))},10)},messageHandler:function(e,i){var n=JSON.stringify(i,undefined,2);return d="\nreceived message from "+e+': '+n,r.debug(d),'command'===i.type&&'module_initialized'===i.action&&r.info('\n'+i.text),!0},setState:function(e){a.state=e},getState:function(){return a.state}}}(j1,window);



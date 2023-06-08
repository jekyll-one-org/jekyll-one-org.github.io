

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
 #  Adapter generated: 2023-06-08 22:06:55 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.iconPicker=function(i){var e,n,s,t,c,a;return{init:function(a){$.extend({module_name:'j1.adapter.iconPicker',generated:'2023-06-08 22:06:55 +0200'},a);s=null!=a?$.extend({},a):{},e=$.extend({},{enabled:!1,picker_button_id:"icon_picker",iconLibraries:["mdi-icons-light.min.json","mdi-icons-regular.min.json","font-awesome.min.json"],iconLibrariesCss:["https://cdn.jsdelivr.net/npm/@mdi/light-font@0.2.63/css/materialdesignicons-light.min.css","https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.2.96/css/materialdesignicons.min.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"]}),n=$.extend({},{enabled:!0,pickers:[{picker:null,enabled:!0,id:"mdil",picker_button_id:"icon_picker_mdil",iconLibraries:["mdi-icons-light.min.json"],iconLibrariesCss:["https://cdn.jsdelivr.net/npm/@mdi/light-font@0.2.63/css/materialdesignicons-light.min.css"]},{picker:null,enabled:!0,id:"mdi",picker_button_id:"icon_picker_md",iconLibraries:["mdi-icons-regular.min.json"],iconLibrariesCss:["https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.2.96/css/materialdesignicons.min.css"]},{picker:null,enabled:!0,id:"fontawsome",picker_button_id:"icon_picker_fa",iconLibraries:["font-awesome.min.json"],iconLibrariesCss:["https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"]}]}),$.extend(!0,{},e,n,s),t=i.adapter.iconPicker,c=log4javascript.getLogger('j1.adapter.iconPicker');var o=setInterval(function(){var n='block'==$('#no_flicker').css("display"),s='finished'==i.adapter.attic.getState();if('finished'===i.getState()&&n&&s){t.setState('started'),c.debug("\nstate: "+t.getState()),c.info("\nmodule is being initialized");let i="";function a(e){i+='\''+e+'\','}e.iconLibraries.forEach(a);JSON.stringify(e.iconLibraries).replace(/^\[|\]$/g,'');JSON.stringify(e.iconLibrariesCss),new UniversalIconPicker('#selector',{iconLibraries:[i],iconLibrariesCss:['https://cdn.jsdelivr.net/npm/@mdi/light-font@0.2.63/css/materialdesignicons-light.min.css','https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.2.96/css/materialdesignicons.min.css','https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'],onSelect:function(i){document.getElementById('output').innerHTML=i.iconMarkup,console.log(i)}}),c.info("\ninitializing module finished"),clearInterval(o)}},25)},messageHandler:function(i,e){var n=JSON.stringify(e,undefined,2);return a="\nreceived message from "+i+': '+n,c.debug(a),'command'===e.type&&'module_initialized'===e.action&&c.info('\n'+e.text),!0},setState:function(i){t.state=i},getState:function(){return t.state}}}(j1,window);





  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/rtextResizer.js
 # Liquid template to adapt rtextResizer functions
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 # Adapter generated: 2022-12-30 16:55:47 +0100
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.rtextResizer=function(e){var t,i,n;return{init:function(r){$.extend({module_name:'j1.adapter.rtextResizer',generated:'2022-12-30 16:55:47 +0100'},r);t=e.adapter.rtextResizer,i=log4javascript.getLogger('j1.adapter.rtextResizer'),t.setState('started'),i.debug("\nstate: "+t.getState()),i.info("\nmodule is being initialized"),e.loadHTML({xhr_container_id:'rtext_resizer_container',xhr_data_path:'/assets/data/rtext_resizer/index.html',xhr_data_element:'rtext_resizer_modal'},'j1.adapter.rtextResizer','null');var a=setInterval(function(){var i=log4javascript.getLogger('j1.adapter.rtextResizer');if('success'==e.xhrDOMState['#rtext_resizer_container']){var r=$('#rtext_resizer_modal');if(i.info("\nloading rtext resizer modal finished on id: #rtext_resizer"),i.info("\ninitialize resizer ui"),r.length){var s,o,c='production',d=(i=log4javascript.getLogger('j1.template.rtext-resizer'),$("main[class*='r-text']")),x=$("main[class*='r-text']").attr('class').replace(/r-text-[0-9]*/g,''),p=' r-text-300',l=' r-text-400',u=' r-text-500';$('input:checkbox[name="textsize-300"]').on('click',function(e){o=$(this).is(':checked'),$('input:checkbox[name="textsize-400"]').prop('checked',!1),$('input:checkbox[name="textsize-500"]').prop('checked',!1),1==o&&(s=p),d.attr('class',x+s),'development'===c&&(n='Changed textsize to: '+s,i.info(n)),e.stopPropagation()}),$('input:checkbox[name="textsize-400"]').on('click',function(e){o=$(this).is(':checked'),$('input:checkbox[name="textsize-300"]').prop('checked',!1),$('input:checkbox[name="textsize-500"]').prop('checked',!1),1==o&&(s=l),d.attr('class',x+s),'development'===c&&(n='Changed textsize to: '+s,i.info(n)),e.stopPropagation()}),$('input:checkbox[name="textsize-500"]').on('click',function(e){o=$(this).is(':checked'),$('input:checkbox[name="textsize-300"]').prop('checked',!1),$('input:checkbox[name="textsize-400"]').prop('checked',!1),1==o&&(s=u),d.attr('class',x+s),'development'===c&&(n='Changed textsize to: '+s,i.info(n)),e.stopPropagation()})}clearInterval(a),t.setState('finished'),i.debug("\nstate: "+t.getState()),i.info("\ninitializing module finished"),i.debug("\nmet dependencies for: loadHTML")}},25)},messageHandler:function(e,t){var r=JSON.stringify(t,undefined,2);return n="\nreceived message from "+e+': '+r,i.debug(n),'command'===t.type&&'module_initialized'===t.action&&i.info('\n'+t.text),!0},setState:function(e){t.state=e},getState:function(){return t.state}}}(j1,window);



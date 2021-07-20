

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/clipboard.js
 # JS Adapter for Clipboard
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2021 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see https://jekyll.one
 # -----------------------------------------------------------------------------
 # NOTE:
 # -----------------------------------------------------------------------------
 # Adapter generated: 2021-07-20 12:10:55 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.clipboard=function(t){var i,e,n,o;return{init:function(a){n=t.adapter.clipboard,i=log4javascript.getLogger('j1.adapter.clipboard');$.extend({module_name:'j1.adapter.clipboard',generated:'2021-07-20 12:10:55 +0000'},a);n.state='started',e="\ninitialization: started",i.info(e);var r=setInterval(function(){'finished'==t.getState()&&(e="\ncreate clipboard",i.info(e),o=new ClipboardJS('.btn-clipboard',{target:function(t){return t.parentNode.nextElementSibling}}),n.initClipButtons(),n.initEventHandler(o),clearInterval(r),i.info("\nmet dependencies for: j1"),n.setState('finished'),i.info("\nstate: "+n.getState()),i.info("\nmodule initialized successfully"))},25)},initClipButtons:function(){$('.highlight').each(function(){if(0==$(this).closest('.noclip').length){var t='<div class="j1-clipboard"><span class="btn-clipboard j1-tooltip" data-toggle="tooltip" data-placement="left" title="Copy to clipboard">Copy</span></div>';$(this).before(t),$('.btn-clipboard').tooltip()}})},initEventHandler:function(t){t.on('success',function(t){$(t.trigger).attr('title','copied!').tooltip('_fixTitle').tooltip('show').attr('title','Copy to clipboard').tooltip('_fixTitle');var i="\ninitialization copy-to-clipboard sucessfull";log4javascript.getLogger('j1.initClipboard').debug(i);var e,n=t.text.split('\n');for(e=0;e<n.length;e++)n[e].replace(/^\s+\d+/,'');t.clearSelection()}),t.on('error',function(t){var n=/Mac/i.test(navigator.userAgent)?'press \u2318 to copy':'press ctrl-c to copy';i=log4javascript.getLogger('j1.initClipboard'),e="\ninitialization copy-to-clipboard failed, fallback used.",i.warn(e),$(t.trigger).attr('title',n).tooltip('_fixTitle').tooltip('show').attr('title','copy to clipboard').tooltip('_fixTitle')})},messageHandler:function(t,n){var o=JSON.stringify(n);return e="\nreceived message from "+t+': '+o,i.debug(e),'command'===n.type&&'module_initialized'===n.action&&i.info('\n'+n.text),'command'===n.type&&'status'===n.action&&i.info("\nmessageHandler: received - "+n.action),!0},setState:function(t){n.state=t},getState:function(){return n.state}}}(j1,window);



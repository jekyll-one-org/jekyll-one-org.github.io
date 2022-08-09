

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/clipboard.js
 # JS Adapter for Clipboard
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2022 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see https://jekyll.one
 # -----------------------------------------------------------------------------
 # NOTE:
 # -----------------------------------------------------------------------------
 # Adapter generated: 2022-08-09 16:39:09 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.clipboard=function(t){var e,i,n,o,a,r,l,c;return{init:function(s){$.extend({module_name:'j1.adapter.clipboard',generated:'2022-08-09 16:39:09 +0000'},s);n=t.adapter.clipboard,a='en',e=log4javascript.getLogger('j1.adapter.clipboard'),n.state='started',i="\ninitialization: started",e.info(i),'en'==a?(r='to clipboard',l='Copy',c='copied!'):'de'==a?(r='zur Zwischenablage',l='Kopieren',c='kopiert!'):(r='to clipboard',l='Copy',c='copied!');var d=setInterval(function(){'finished'==t.getState()&&(i="\ncreate clipboard",e.info(i),o=new ClipboardJS('.btn-clipboard',{target:function(t){return t.parentNode.nextElementSibling}}),n.initClipButtons(),n.initEventHandler(o),clearInterval(d),e.debug("\nmet dependencies for: j1"),n.setState('finished'),e.debug("\nstate: "+n.getState()),e.info("\nmodule initialized successfully"))},25)},initClipButtons:function(){var t,e,i='<div class="j1-clipboard"><span class="btn-clipboard" data-bs-toggle="tooltip" data-bs-placement="left" title="'+r+'">'+l+'</span></div>';$('.highlight').each(function(){t=$(this).closest('.noclip').length,e=$(this).closest('.hl-ipython3').length,t||e||($(this).before(i),$('.btn-clipboard').tooltip())})},initEventHandler:function(t){t.on('success',function(t){$(t.trigger).attr('title',c).tooltip('_fixTitle').tooltip('show').attr('title',r).tooltip('_fixTitle');var e="\ninitialization copy-to-clipboard sucessfull";log4javascript.getLogger('j1.initClipboard').debug(e);var i,n=t.text.split('\n');for(i=0;i<n.length;i++)n[i].replace(/^\s+\d+/,'');t.clearSelection()}),t.on('error',function(t){var n=/Mac/i.test(navigator.userAgent)?'press \u2318 to copy':'press ctrl-c to copy';e=log4javascript.getLogger('j1.initClipboard'),i="\ninitialization copy-to-clipboard failed, fallback used.",e.warn(i),$(t.trigger).attr('title',n).tooltip('_fixTitle').tooltip('show').attr('title','copy to clipboard').tooltip('_fixTitle')})},messageHandler:function(t,n){var o=JSON.stringify(n);return i="\nreceived message from "+t+': '+o,e.debug(i),'command'===n.type&&'module_initialized'===n.action&&e.info('\n'+n.text),'command'===n.type&&'status'===n.action&&e.info("\nmessageHandler: received - "+n.action),!0},setState:function(t){n.state=t},getState:function(){return n.state}}}(j1,window);



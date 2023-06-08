

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/clipboard.js
 # JS Adapter for Clipboard
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see https://jekyll.one
 # -----------------------------------------------------------------------------
 # NOTE:
 # -----------------------------------------------------------------------------
 # Adapter generated: 2023-06-08 20:47:56 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.clipboard=function(t){var e,i,n,o,a,r,l,c,s,d;return{init:function(p){$.extend({module_name:'j1.adapter.clipboard',generated:'2023-06-08 20:47:56 +0200'},p);a=t.adapter.clipboard,l='en',n=log4javascript.getLogger('j1.adapter.clipboard'),e=$.extend({}),i=$.extend({}),$.extend(!0,{},e,i),a.state='started',o="\ninitialization: started",n.info(o),'en'==l?(c='to clipboard',s='Copy',d='copied!'):'de'==l?(c='zur Zwischenablage',s='Kopieren',d='kopiert!'):(c='to clipboard',s='Copy',d='copied!');var g=setInterval(function(){'finished'==t.getState()&&(o="\ncreate clipboard",n.info(o),r=new ClipboardJS('.btn-clipboard',{target:function(t){return t.parentNode.nextElementSibling}}),a.initClipButtons(),a.initEventHandler(r),clearInterval(g),n.debug("\nmet dependencies for: j1"),a.setState('finished'),n.debug("\nstate: "+a.getState()),n.info("\nmodule initialized successfully"))},5)},initClipButtons:function(){var t,e,i='<div class="j1-clipboard"><span class="btn-clipboard" data-bs-toggle="tooltip" data-bs-placement="left" title="'+c+'">'+s+'</span></div>';$('.highlight').each(function(){t=$(this).closest('.noclip').length,e=$(this).closest('.hl-ipython3').length,t||e||($(this).before(i),$('.btn-clipboard').tooltip())})},initEventHandler:function(t){t.on('success',function(t){$(t.trigger).attr('title',d).tooltip('_fixTitle').tooltip('show').attr('title',c).tooltip('_fixTitle');var e="\ninitialization copy-to-clipboard sucessfull";log4javascript.getLogger('j1.initClipboard').debug(e);var i,n=t.text.split('\n');for(i=0;i<n.length;i++)n[i].replace(/^\s+\d+/,'');t.clearSelection()}),t.on('error',function(t){var e=/Mac/i.test(navigator.userAgent)?'press \u2318 to copy':'press ctrl-c to copy';n=log4javascript.getLogger('j1.initClipboard'),o="\ninitialization copy-to-clipboard failed, fallback used.",n.warn(o),$(t.trigger).attr('title',e).tooltip('_fixTitle').tooltip('show').attr('title','copy to clipboard').tooltip('_fixTitle')})},messageHandler:function(t,e){var i=JSON.stringify(e);return o="\nreceived message from "+t+': '+i,n.debug(o),'command'===e.type&&'module_initialized'===e.action&&n.info('\n'+e.text),'command'===e.type&&'status'===e.action&&n.info("\nmessageHandler: received - "+e.action),!0},setState:function(t){a.state=t},getState:function(){return a.state}}}(j1,window);



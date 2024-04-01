

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/clipboard.js
 # JS Adapter for Clipboard
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023, 2024 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see https://jekyll.one
 # -----------------------------------------------------------------------------
 # NOTE:
 # -----------------------------------------------------------------------------
 # Adapter generated: 2024-04-01 01:16:05 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.clipboard=(t=>{var e,i,a,o,n,l,r,s,d,p,c,g;return{init:b=>{$.extend({module_name:'j1.adapter.clipboard',generated:'2024-04-01 01:16:05 +0200'},b);s=t.adapter.clipboard,d=log4javascript.getLogger('j1.adapter.clipboard'),o='en',e=$.extend({}),i=$.extend({}),$.extend(!0,{},e,i),s.state='started',p="\ninitialization: started",d.info(p),'en'==o?(n='to clipboard',l='Copy',r='copied!'):'de'==o?(n='zur Zwischenablage',l='Kopieren',r='kopiert!'):(n='to clipboard',l='Copy',r='copied!');var u=setInterval(()=>{'finished'===t.getState()&&(c=Date.now(),s.setState('started'),d.debug("\nset module state to: "+s.getState()),d.info("\ninitializing module: started"),a=new ClipboardJS('.btn-clipboard',{target:function(t){return t.parentNode.nextElementSibling}}),s.initClipButtons(),s.initEventHandler(a),d.debug("\nmet dependencies for: j1"),s.setState('finished'),d.debug("\nstate: "+s.getState()),d.info("\nmodule initialized successfully"),g=Date.now(),d.info("\nmodule initializing time: "+(g-c)+'ms'),clearInterval(u))},10)},initClipButtons:()=>{var t,e,i='<div class="j1-clipboard"><span class="btn-clipboard" data-bs-toggle="tooltip" data-bs-placement="left" title="'+n+'">'+l+'</span></div>';$('.highlight').each(function(){t=$(this).closest('.noclip').length,e=$(this).closest('.hl-ipython3').length,t||e||($(this).before(i),$('.btn-clipboard').tooltip())})},initEventHandler:t=>{t.on('success',t=>{$(t.trigger).attr('title',r).tooltip('_fixTitle').tooltip('show').attr('title',n).tooltip('_fixTitle');var e="\ninitialization copy-to-clipboard sucessfull";log4javascript.getLogger('j1.initClipboard').debug(e);var i,a=t.text.split('\n');for(i=0;i<a.length;i++)a[i].replace(/^\s+\d+/,'');t.clearSelection()}),t.on('error',t=>{var e=/Mac/i.test(navigator.userAgent)?'press \u2318 to copy':'press ctrl-c to copy';d=log4javascript.getLogger('j1.initClipboard'),p="\ninitialization copy-to-clipboard failed, fallback used.",d.warn(p),$(t.trigger).attr('title',e).tooltip('_fixTitle').tooltip('show').attr('title','copy to clipboard').tooltip('_fixTitle')})},messageHandler:(t,e)=>{var i=JSON.stringify(e,undefined,2);return p="\nreceived message from "+t+': '+i,d.debug(p),'command'===e.type&&'module_initialized'===e.action&&d.info('\n'+e.text),!0},setState:t=>{s.state=t},getState:()=>s.state}})(j1,window);



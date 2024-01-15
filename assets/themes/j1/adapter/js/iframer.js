

  /*
 # -----------------------------------------------------------------------------
 #  ~/assets/themes/j1/adapter/js/iframer.js
 #  J1 Adapter for J1 Module iFramer
 #
 #  Product/Info:
 #  https://jekyll.one
 #  http://davidjbradshaw.github.io/iframe-resizer/
 #
 #  Copyright (C) 2023, 2024 Juergen Adams
 #  Copyright (C) 2013-2023  David J. Bradshaw
 #
 #  J1 Template is licensed under the MIT License.
 #  For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 #  iFrameResizer is licensed under under the MIT License.
 #  For details, see http://davidjbradshaw.github.io/iframe-resizer/
 #
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2024-01-15 22:18:27 +0100
 # -----------------------------------------------------------------------------
 */
'use strict';j1.adapter.iframer=function(e,n){var t,i,a,o,d,r,s,c;return{init:function(r){s=new URL(n.location.href),c=s.origin;$.extend({module_name:'j1.adapter.iframer',generated:'2024-01-15 22:18:27 +0100'},r);o=e.adapter.iframer,d=log4javascript.getLogger('j1.adapter.iframer'),t=$.extend({},{enabled:!1,xhr_data_path:"/assets/data/iframes",delay_iframer:1e3,inject_contentWindowScript:!1,delay_inject_contentWindowScript:500,attributes:{allow:!1,allowfullscreen:!0,height:!1,loading:"eager",name:!1,referrerpolicy:"no-referrer",src:"",scrolling:!1,title:!1,width:!1},options:{autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:"Infinity",maxWidth:"Infinity",minHeight:0,minWidth:0,mouseEvents:!0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",onClose:"function () { return true }",onClosed:"function () {}",onInit:"function () {}",onMessage:"function () { warn('onMessage function not defined') }",onMouseEnter:"function () {}",onMouseLeave:"function () {}",onResized:"function () {}",onScroll:"function () { return true }"}}),i=$.extend({},{enabled:!0,iframes:[{iframe:null,enabled:!0,id:"magic_iframe",inject_contentWindowScript:!0,attributes:{loading:"lazy",name:"iframe document",src:"/pages/public/tools/previewer/iframer_documents/iframe.content.html",width:"100%",scrolling:!1},options:{log:!0,inPageLinks:!0,onResized:"function(messageData) {\n  // Callback when page is resized\n  $('p#resize_stats').html (\n    '<b>iFrame ID:</b> ' +\n      messageData.iframe.id +\n      '&nbsp;&nbsp; <b>Height:</b> ' +\n      messageData.height +\n      '&nbsp;&nbsp; <b>Width:</b> ' +\n      messageData.width +\n      '&nbsp;&nbsp; <b>Event type:</b> ' +\n      messageData.type\n  )\n}\n"}},{iframe:null,enabled:!0,id:"documind",inject_contentWindowScript:!0,attributes:{loading:"lazy",src:"/pages/public/tools/previewer/iframer_documents/iframe.docsearch.info.html",title:"",allowtransparency:!0,style:"background: #FAFAFA;",height:600,width:"100%"},options:{checkOrigin:!1}}]}),a=$.extend(!0,{},t,i),console.debug('loading HTML portion for all iFrames configured'),o.loadIframeHTML(a,a.iframes),o.setState('started'),d.debug("\nstate: "+o.getState()),d.info("\nmodule is being initialized");var l=setInterval(function(){var n='block'==$('#no_flicker').css("display");e.adapter.attic.getState();'finished'==e.getState()&&n&&(o.setState('started'),d.debug("\nstate: "+o.getState()),d.info("\nmodule is being initialized"),o.initialize(a),clearInterval(l))},10)},initialize:function(n){var t=n,i={};o.setState('running'),d.debug("\nstate: "+o.getState()),d.info("\nfound iframe on id: magic_iframe"),i['dependencies_met_html_loaded_magic_iframe']='',i.dependencies_met_html_loaded_magic_iframe=setInterval(function(){if('success'===e.xhrDOMState['#magic_iframe_parent']){$('#magic_iframe');d.info("\ndyn_loader, initialize iframe on id: magic_iframe"),setTimeout(function(){var e,n,t,i;n='magic_iframe',(i=(t=(e=document.getElementById(n)).contentDocument||e.contentWindow.document).createElement('script')).id='contentWindowScript',i.async=!0,i.src=c+'/assets/themes/j1/modules/iframeResizer/js/client/iframeResizer.contentWindow.min.js',t.head.appendChild(i)},t.delay_inject_contentWindowScript),setTimeout(function(){iFrameResize({log:!0,inPageLinks:!0,onResized:function(e){$('p#resize_stats').html('<b>iFrame ID:</b> '+e.iframe.id+'&nbsp;&nbsp; <b>Height:</b> '+e.height+'&nbsp;&nbsp; <b>Width:</b> '+e.width+'&nbsp;&nbsp; <b>Event type:</b> '+e.type)}},'#magic_iframe')},1e3),clearInterval(i.dependencies_met_html_loaded_magic_iframe)}},10),d.info("\nfound iframe on id: documind"),i['dependencies_met_html_loaded_documind']='',i.dependencies_met_html_loaded_documind=setInterval(function(){if('success'===e.xhrDOMState['#documind_parent']){$('#documind');d.info("\ndyn_loader, initialize iframe on id: documind"),setTimeout(function(){var e,n,t,i;n='documind',(i=(t=(e=document.getElementById(n)).contentDocument||e.contentWindow.document).createElement('script')).id='contentWindowScript',i.async=!0,i.src=c+'/assets/themes/j1/modules/iframeResizer/js/client/iframeResizer.contentWindow.min.js',t.head.appendChild(i)},t.delay_inject_contentWindowScript),setTimeout(function(){iFrameResize({checkOrigin:!1},'#documind')},1e3),clearInterval(i.dependencies_met_html_loaded_documind)}},10),o.setState('finished'),d.debug("\nstate: "+o.getState()),d.info("\nmodule initialized successfully")},loadIframeHTML:function(n,t){var i,a=Object.keys(t).length,d=a,r=n.xhr_data_path+'/index.html';console.debug('number of iframes found: '+d),o.setState('load_data'),Object.keys(t).forEach(function(n){t[n].enabled?(i=t[n].id+'_parent',console.debug('load HTML portion on iframe id: '+t[n].id),e.loadHTML({xhr_container_id:i,xhr_data_path:r,xhr_data_element:t[n].id})):(console.debug('iframe found disabled on id: '+t[n].id),d--)}),console.debug('iframes loaded in page enabled|all: '+d+'|'+a),o.setState('data_loaded')},messageHandler:function(e,n){var t=JSON.stringify(n,undefined,2);return r="\nreceived message from "+e+': '+t,d.debug(r),'command'===n.type&&'module_initialized'===n.action&&d.info('\n'+n.text),!0},setState:function(e){o.state=e},getState:function(){return e.adapter.navigator.state},setXhrState:function(n,t){e.adapter.navigator.xhrData[n]=t},getXhrState:function(n){return e.adapter.navigator.xhrData[n]}}}(j1,window);



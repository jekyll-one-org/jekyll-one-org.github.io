

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/docsearch.js
 # J1 Adapter for the DocSearch module
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023, 2024 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2024-01-14 19:30:12 +0100
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.docsearch=function(e){var t,n,a,i,o,r,s=e.getCookieNames();return{init:function(){t=$.extend({},{enabled:!1,provider_settings:{provider_id:"<your-provider_id>",bot_id:"<your-bot_id-id>"},bot_settings:{iframe:{title:"",height:500,width:"100%",scrolling:!1,style:"border: none; background: #FAFAFA;"}},dialog_settings:{modal_container_id:"docsearch_container",modal_settings:{title:"DocSearch AI",body_text:"Using <b>DocSearch AI</b>, you can ask <b>your</b> questions based on all documents available at <a href=\"https://jekyll.one/\" target=\"_blank\" rel=\"noopener\">JekyllOne</a> to receive human readable answers. Below, the superpower of DocSearch AI is available at your fingertips. <div class=\"listingblock mt-4 mb-4\">\n  <div class=\"title\">Example Question</div>\n  <div class=\"content\">\n    <div class=\"j1-clipboard\"><span class=\"btn-clipboard\" data-bs-toggle=\"tooltip\" data-bs-placement=\"left\" data-bs-original-title=\"to clipboard\">Copy</span></div>\n    <pre class=\"rouge highlight notranslate\"><code data-lang=\"apib\">What is J1 Template?</code></pre>\n  </div>\n</div> Ask <b>your</b> question and get an answer in seconds.\n",privacy_notice:"<b>DocSearch AI</b> requires Cookies for traffic analysis and personalization to run the service. <br><br> Required Cookie Settings: <ul>\n  <li style=\"list-style-type: none;\">\n    <b>Analysis</b>\n    <p>\n      For the use of DocSearch AI, your consent on analysis\n      in the <b>Privacy Settings</b> is required.\n    </p>\n  </li>\n  <li style=\"list-style-type: none;\">\n    <b>Personalization</b>\n    <p>\n      For the use of DocSearch AI, your consent on personalization\n      in the <b>Privacy Settings</b> is required.\n    </p>\n  </li>\n</ul>\n"}}}),n=$.extend({},{enabled:!1,provider_settings:{provider_id:"<your-provider_id>",bot_id:"<your-bot_id-id>"},bot_settings:{iframe:{title:"J1 DocSearch",height:400,width:"100%",scrolling:!1,style:"border: none; background: white;"}}}),$.extend(!0,{},t,n),i=e.adapter.docsearch,o=log4javascript.getLogger('j1.adapter.docsearch'),i.setState('started'),o.debug("\nstate: "+i.getState()),o.info("\nmodule is being initialized"),(a=document.createElement('div')).id='docsearch_container',a.style.display='none',a.setAttribute('class','modal fade'),a.setAttribute('tabindex','-1'),a.setAttribute('role','dialog'),a.setAttribute('aria-labelledby','docsearch_container'),document.body.append(a);var r=setInterval(function(){var t='block'==$('#no_flicker').css("display"),n='finished'==e.adapter.attic.getState();if('finished'===e.getState()&&t&&n){if(!e.readCookie(s.user_consent).personalization){return void $('#quickLinksDocSearchButton').hide()}e.loadHTML({xhr_container_id:'docsearch_container',xhr_data_path:'/assets/data/docsearch/index.html',xhr_data_element:'docsearch-modal-data'},'j1.adapter.docsearch','null'),$('#docsearch_container').on('show.bs.modal',function(){}),$('#docsearch_container').on('shown.bs.modal',function(){}),$('#docsearch_container').on('hidden.bs.modal',function(){}),i.setState('finished'),o.debug("\nstate: "+i.getState()),o.info("\nmodule initialization finished"),clearInterval(r)}},10)},showDialog:function(){o.debug("\nshowDialog"),$('#docsearch_container').modal({backdrop:'static',keyboard:!1}),$('#docsearch_container').modal('show')},messageHandler:function(e,t){var n=JSON.stringify(t,undefined,2);return r="\nreceived message from "+e+': '+n,o.debug(r),'command'===t.type&&'module_initialized'===t.action&&o.info('\n'+t.text),!0},setState:function(e){i.state=e},getState:function(){return i.state}}}(j1,window);



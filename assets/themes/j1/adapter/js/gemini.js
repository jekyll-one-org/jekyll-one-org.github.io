

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/gemini.js
 # J1 Adapter for the Google Gemini API module
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
 #  Adapter generated: 2024-04-01 01:16:05 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.gemini=((e,t)=>{function o(e){var t=1;e.forEach(()=>{var e='opt_prompt_history_'+t,o=document.getElementById(e),s=setInterval(()=>{0!==$(o).length&&(L.debug("\nadd eventListener to: "+e),o.addEventListener('click',n),clearInterval(s))},10);t++})}function n(t){var o,n,s,a=t.currentTarget.nextSibling.data,r=R.getData(),i=[],l=e.existsCookie(d.chat_prompt)?e.readCookie(d.chat_prompt):{};t.preventDefault(),t.stopPropagation(),o=-1;for(var m=0;m<r.length;m++)if(r[m].text===a){o=m;break}-1!==o&&(delete r[o],s=Object.values(r),R.setData(s)),o=-1,i=Object.values(l);for(m=0;m<i.length;m++)if(i[m]===a){o=m;break}if(-1!==o){if(delete i[o],(n=Object.values(i)).length>1){var u=[...new Set(n)];n=Object.values(u)}S&&(L.debug("\nsave prompt history to cookie"),e.removeCookie({name:d.chat_prompt,domain:p,secure:c}),n.length>0?e.writeCookie({name:d.chat_prompt,data:n,secure:c}):(e.writeCookie({name:d.chat_prompt,data:{},secure:c}),L.info("\nspanElementEventListener, hide prompt history on last element"),$("#prompt_history_container").hide()))}L.info("\nspanElementEventListener, option deleted:\n"+a),R.close()}function s(e){E=e.coords.latitude,y=e.coords.longitude,fetch(`//nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${E}&lon=${y}`).then(e=>e.json()).then(e=>{b=e.address.country,v=e.address.city,$("#modal_error").html(F+"<br><b>"+b+'</b>'),L.warn("\nlocation is not supported: "+b+':'+v)})["catch"](e=>{L.error("\nerror detect location: "+e)})}function a(){function e(e){E=e.coords.latitude,y=e.coords.longitude,s(e)}function t(){L.warn("\nUnable to retrieve the location")}navigator.geolocation?navigator.geolocation.getCurrentPosition(e,t):L.warn("\nGeolocation API is not supported by the browser")}async function r(){document.getElementById("name");const e=g.getGenerativeModel({model:m,safetySettings:j,generationConfig:U});var t=$('textarea#prompt').val();for(0===t.length&&(t=ne.replace(/\s+$/g,''),L.debug("\nuse default prompt: "+t),document.getElementById('prompt').value=t),N=Date.now(),f=1,L.info("\nprocessing request: started");f<=J;)try{L.debug("\nprocessing request: #"+f+'|'+J),h=await e.generateContent(t);break}catch(_){var o=_.toString();o.includes('400')?(400,F=se,oe.detect_geo_location?(a(),$("#modal_error").html(F)):($("#modal_error").html(F),L.warn("\nlocation not supported"))):o.includes('50')&&(500,F=ae,$("#modal_error").html(F),L.warn("\nservice not available")),K=!0}finally{if(K)3===f&&(L.debug("\nrequests failed after max retries: "+J),$("#spinner").hide(),oe.detectGeoLocation&&a(),setTimeout(()=>{$('#confirmError').modal('show')},1e3)),f++;else try{L.debug("\ncollecting results ..."),X=await h.response}catch(_){L.warn('\n'+_)}finally{$("#spinner").hide();var n,s,r,i,d,l=oe.api_options.candidateRatings,p='';if(X.promptFeedback!==undefined){if(n=X.promptFeedback.safetyRatings,'SAFETY'===X.promptFeedback.blockReason){n.forEach(e=>{e.probability!==undefined&&'NEGLIGIBLE'!==e.probability&&'LOW'!==e.probability&&e.category!==undefined&&(i=e.category,d=e.probability)}),i!==undefined&&''!==i&&d!==undefined&&''!==d&&L.warn("\nSecurity issue detected, reason: "+i+' = '+d);var c=i.replace("HARM_CATEGORY_",'').toLowerCase(),u=d.toLowerCase();p='Response disabled due to security reasons (<b>'+c+': '+u+'</b>). Please modify your prompt.'}X.text!==undefined&&X.text.length>0&&(p=X.text)}if(X.candidates!==undefined){if(n=X.candidates[0].safetyRatings,'STOP'===X.candidates[0].finishReason){for(const[e,t]of Object.entries(l))n.forEach(e=>{'HARM_CATEGORY_DANGEROUS_CONTENT'!==e&&'HARM_CATEGORY_HARASSMENT'!==e.category&&'HARM_CATEGORY_HATE_SPEECH'!==e.category&&'HARM_CATEGORY_SEXUALLY_EXPLICIT'!==e.category||("NEGLIGIBLE"!==e.probability?("BLOCK_NONE"===l.HARM_CATEGORY_DANGEROUS_CONTENT&&(r=e.category,s=l.HARM_CATEGORY_DANGEROUS_CONTENT,p=X.candidates[0].content.parts[0].text),"BLOCK_NONE"===l.HARM_CATEGORY_HARASSMENT&&(r=e.category,s=l.HARM_CATEGORY_HARASSMENT,p=X.candidates[0].content.parts[0].text),"BLOCK_NONE"===l.HARM_CATEGORY_HATE_SPEECH&&(r=e.category,s=l.HARM_CATEGORY_HATE_SPEECH,p=X.candidates[0].content.parts[0].text),"BLOCK_NONE"===l.HARM_CATEGORY_SEXUALLY_EXPLICIT&&(r=e.category,s=l.HARM_CATEGORY_SEXUALLY_EXPLICIT,p=X.candidates[0].content.parts[0].text)):p=X.candidates[0].content.parts[0].text)});r!==undefined&&L.debug('\n'+r+': '+s)}'MAX_TOKENS'===X.candidates[0].finishReason&&(p='Response disabled due to model settings (<b>maxOutputTokens: '+oe.api_options.generationConfig.maxOutputTokens+'</b>). You need to increase your settings to get full response.'),'SAFETY'===X.candidates[0].finishReason&&(p='Response disabled due to security reasons. You need to <b>change your prompt</b> to get proper results.',console.warn('Response disabled due to security reasons')),'RECITATION'===X.candidates[0].finishReason&&(p='Response flagged "RECITATION". Resposne currently not supported',console.warn('finishReason "RECITATION" currently not supported')),'OTHER'===X.candidates[0].finishReason&&(p='Response disabled due to unknown reasons.',console.warn('Response disabled due to unknown reasons'))}p.length>0&&(p.length<oe.api_options.responseLengthMin?(L.warn("\nResponse generated too short: <"+oe.api_options.responseLengthMin+' characters'),document.getElementById('md_result').innerHTML='Response generated too short (less than '+oe.api_options.responseLengthMin+' characters). Please re-run the generation for better results'):document.getElementById('md_result').innerHTML=marked.parse(p),$("#result").show(),$("#response").show())}}G=Date.now(),L.debug("\nrequest execution time: "+(G-N)+'ms'),L.info("\nprocessing request: finished")}var i,d,l,p,c,m,u,_,g,h,f,E,y,b,v,A,C,R,O,I,T,S,H,w,L,x,M,N,G,B,k,Y,P=document.createElement('script'),D=document.createElement('script'),j=[],U={},K=!1,X='',F='',q=!1,z=[],V={},J=3,W=!1,Q=$.extend({},{enabled:!1,api_options:{showSearch:!0,searchPlaceholder:"Enter your search expression",searchText:"No results",searchingText:"Searching ...",searchHighlight:!1,closeOnSelect:!0,contentPosition:"absolute",openPosition:"auto",placeholderText:"Select an item",allowDeselect:!1,hideSelected:!1,showOptionTooltips:!1,minSelected:0,maxSelected:1,timeoutDelay:200,maxValuesShown:20,maxValuesMessage:"{number} selected"}}),Z=$.extend({},{enabled:!0,api_options:{showSearch:!0},selects:[{select:"icon_library",enabled:!0,wrapper_id:"icon_library_select_wrapper",id:"icon_library",name:"icon-library",items:"<select id=\"icon_library\" name=\"icon-library\">\n  <optgroup label=\"Material Design Icons (MDI)\">\n    <option value=\"mdi-icons-base\"        data-css=\"/assets/themes/j1/core/css/icon-fonts/mdib.min.css\" selected=\"selected\">MDI Icons Base</option>\n    <option value=\"mdi-icons-light\"       data-css=\"/assets/themes/j1/core/css/icon-fonts/mdil.min.css\">MDI Icons Light</option>\n    <option value=\"mdi-icons-regular\"     data-css=\"/assets/themes/j1/core/css/icon-fonts/mdi.min.css\">MDI Icons Regular</option>\n  </optgroup>\n\n  <optgroup label=\"Font Awesome Icons (FA)\">\n    <option value=\"font-awesome\"          data-css=\"/assets/themes/j1/core/css/icon-fonts/fontawesome.min.css\">FA Icons (all)</option>\n    <option value=\"font-awesome-solid\"    data-css=\"/assets/themes/j1/core/css/icon-fonts/fontawesome.min.css\">FA Icons Solid</option>\n    <option value=\"font-awesome-regular\"  data-css=\"/assets/themes/j1/core/css/icon-fonts/fontawesome.min.css\">FA Icons Regular</option>\n    <option value=\"font-awesome-brands\"   data-css=\"/assets/themes/j1/core/css/icon-fonts/fontawesome.min.css\">FA Icons Brands</option>\n  </optgroup>\n</select>\n"},{select:"prompt_history",enabled:!0,wrapper_id:"prompt_history_select_wrapper",id:"prompt_history",name:"prompt-history",items:"<select multiple=\"\" id=\"prompt_history\" name=\"prompt-history\"></select>"},{select:"search_history",enabled:!0,wrapper_id:"search_history_select_wrapper",id:"search_history",name:"search-history",items:"<select multiple=\"\" id=\"search_history\" name=\"search-history\"></select>"}]}),ee=($.extend(!0,{},Q,Z),$.extend({},{enabled:!1,xhr_data_path:"/assets/data/gemini-ui/index.html",xhr_container_id:"gemini_ui",xhr_data_element:"gemini_ui_container",detect_geo_location:!1,prompt_id:"prompt",prompt_history_id:"prompt_history",prompt_history_wrapper_id:"prompt_history_select_wrapper",prompt_history_max:30,prompt_history_enabled:!1,prompt_history_from_cookie:!0,allow_prompt_history_updates_on_max:!0,prompt:{size:7,title:"Prompt","default":"Please provide tips on how to use a prompt for the chatbot\n",placeholder:"Please enter a text describing the task or question for which the chatbot should process\n"},buttons:{generate:{id:"send",name:"Process prompt"},reset:{id:"reset",name:"Clear prompt"},clear:{id:"clear",name:"Clear last prompts"}},titles:{result:"Response",request_history:"Last Prompts",errorInfo:"API request failure"},errors:{http400:"Location is not supported",http500:"Service currently not available"},api_options:{model:"gemini-pro",maxApiRetries:3,responseLengthMin:10,enableCandidateFeedback:!0,generationConfig:{candidateCount:1,maxOutputTokens:65536,temperature:.5,topK:40,topP:.5},safetyRatings:{HARM_CATEGORY_DANGEROUS_CONTENT:"BLOCK_MEDIUM_AND_ABOVE",HARM_CATEGORY_HARASSMENT:"BLOCK_ONLY_HIGH",HARM_CATEGORY_HATE_SPEECH:"BLOCK_ONLY_HIGH",HARM_CATEGORY_SEXUALLY_EXPLICIT:"BLOCK_NONE"},candidateRatings:{HARM_CATEGORY_DANGEROUS_CONTENT:"BLOCK_MEDIUM_AND_ABOVE",HARM_CATEGORY_HARASSMENT:"BLOCK_ONLY_HIGH",HARM_CATEGORY_HATE_SPEECH:"BLOCK_ONLY_HIGH",HARM_CATEGORY_SEXUALLY_EXPLICIT:"BLOCK_NONE"}}})),te=$.extend({},{enabled:!0,detect_geo_location:!0,prompt_history_enabled:!0,api_options:{apiKey:"AIzaSyAtiLEW4oQiOJtGiPsdsGwMHi8O__7cqjU"}}),oe=$.extend(!0,{},ee,te);const ne=oe.prompt["default"],se=oe.errors.http400,ae=oe.errors.http500;return{init:o=>{$.extend({module_name:'j1.adapter.gemini',generated:'2024-04-01 01:16:05 +0200'},o);w=e.adapter.gemini,L=log4javascript.getLogger('j1.adapter.gemini'),d=e.getCookieNames(),i=new liteURL(t.location.href),i.origin,l=i.hostname,p=l.substring(l.lastIndexOf('.',l.lastIndexOf('.')-1)+1),c=!!i.protocol.includes('https'),T=oe.prompt_history_enabled,S=oe.prompt_history_from_cookie,w.loadModules(),w.loadUI();var n=setInterval(()=>{var t='block'===$('#content').css("display"),o='finished'===e.getState(),s=!!Object.keys(e.adapter.slimSelect.select).length,a='success'===e.xhrDOMState['#gemini_ui'];if(o&&t&&s&&a&&q){B=Date.now(),w.setState('started'),L.debug("\nset module state to: "+w.getState()),L.info("\ninitializing module: started"),_||(L.warn("\nInvalid API key detected: "+u),L.debug("\ndisable|hide all UI buttons"),$("#send").hide(),$("#reset").hide(),$("#clear").hide()),$("#gemini_ui_container").show(),$("#spinner").hide(),$("#response").hide(),(O=document.getElementById(oe.prompt_id)).value='';var r=setInterval(()=>{if($('#container_prompt_history_select_wrapper').length>0){if(L.debug("\ninitializing select data"),T&&S){R=e.adapter.slimSelect.select[oe.prompt_history_id],I=oe.prompt_history_max,H=oe.allow_prompt_history_updates_on_max,L.debug("\nread prompt history from cookie");var t=[],o={};if(V=e.existsCookie(d.chat_prompt)?e.readCookie(d.chat_prompt):{},(z=Object.values(V)).length>1){var n=z.length,s=[...new Set(z)];n>(z=s).length&&L.debug("\nremoved duplicates from history array: "+(n-z.length)+' element|s')}var a,i=1;t=[],o={};z.forEach(e=>{a='<span id="opt_'+oe.prompt_history_id+'_'+i+"\" class=\"ss-option-delete\"><i class=\"mdib mdib-close mdib-16px ml-1 mr-2\"></i></span>"+e,o={text:e,html:a,display:!0,selected:!1,disabled:!1},t.push(o),i++}),R.setData(t),z.length>0&&$("#prompt_history_container").show(),w.setupSlimSelectEventHandlers()}else $("#clear").hide();clearInterval(r)}},10);w.setupUIButtonEventHandlers(),w.setState('finished'),L.debug("\nstate: "+w.getState()),L.info("\ninitializing module: finished"),k=Date.now(),L.info("\nmodule initializing time: "+(k-B)+'ms'),clearInterval(n)}},10)},loadModules:()=>{oe.detect_geo_location&&(P.async=!0,P.type="script",P.id='leaflet-api',P.src='//unpkg.com/leaflet/dist/leaflet.js',document.head.appendChild(P),D.async=!0,D.type="script",D.id='geocoder-api',D.src='//unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.js',document.head.appendChild(D)),import('//esm.run/@google/generative-ai').then(e=>{L=log4javascript.getLogger('j1.adapter.gemini'),u=oe.api_options.apiKey,_=!u.includes('your-'),g=new e.GoogleGenerativeAI(u),M=e.HarmCategory,e.HarmBlockThreshold,m=oe.api_options.model,U={candidateCount:oe.api_options.generationConfig.candidateCount,maxOutputTokens:oe.api_options.generationConfig.maxOutputTokens,temperature:oe.api_options.generationConfig.temperature,topK:oe.api_options.generationConfig.topK,topP:oe.api_options.generationConfig.topP},j=[{category:M.HARM_CATEGORY_DANGEROUS_CONTENT,threshold:oe.api_options.safetyRatings.HARM_CATEGORY_DANGEROUS_CONTENT},{category:M.HARM_CATEGORY_HARASSMENT,threshold:oe.api_options.safetyRatings.HARM_CATEGORY_HARASSMENT},{category:M.HARM_CATEGORY_HATE_SPEECH,threshold:oe.api_options.safetyRatings.HARM_CATEGORY_HATE_SPEECH},{category:M.HARM_CATEGORY_SEXUALLY_EXPLICIT,threshold:oe.api_options.safetyRatings.HARM_CATEGORY_SEXUALLY_EXPLICIT}],L.debug("\nImporting Gemini module: successful"),q=!0})["catch"](e=>{(L=log4javascript.getLogger('j1.adapter.gemini')).warn("\nImporting Gemini module failed: "+e)})},loadUI:()=>{e.loadHTML({xhr_container_id:oe.xhr_container_id,xhr_data_path:oe.xhr_data_path,xhr_data_element:oe.xhr_data_element},'j1.adapter.gemini','null');var t=setInterval(()=>{'success'===e.xhrDOMState['#gemini_ui']&&(L.debug("\nLoading UI: successful"),clearInterval(t))},10)},setupSlimSelectEventHandlers:()=>{var t,n=document.getElementById(oe.prompt_history_id).slim;n.events.beforeOpen=(()=>{const t=n.getData();if(Y=!1,L.debug("\nslimSelect.beforeOpen, processing: started"),S){var s=e.existsCookie(d.chat_prompt)?e.readCookie(d.chat_prompt):{};z=Object.values(s);var a,r=1,i=[],l={};z.forEach(e=>{a='<span id="opt_'+oe.prompt_history_id+'_'+r+"\" class=\"ss-option-delete\"><i class=\"mdib mdib-close mdib-16px ml-1 mr-2\"></i></span>"+e,l={text:e,html:a,display:!0,selected:!1,disabled:!1},i.push(l),r++}),R.setData(i)}t.length&&(L.debug("\nslimSelect.beforeOpen, number of eventListeners to process: #"+t.length),o(t));var p=1;t.forEach(()=>{var e='opt_prompt_history_'+p,o=document.getElementById(e),n=setInterval(()=>{0!==$(o).length&&p===t.length&&(Y=!0,L.debug("\nslimSelect.beforeOpen, all eventListeners ready")),Y?clearInterval(n):p++},10)});var c=setInterval(()=>{Y&&(L.debug("\nslimSelect.beforeOpen, processing: finished"),clearInterval(c))},10)}),n.events.afterClose=(()=>{const e=n.getSelected();e.length?(t=e[0],document.getElementById('prompt').value=t,L.debug("\nslimSelect.afterClose, selection from history: "+t)):(L.debug("\nslimSelect.afterClose, selection from history: empty"),document.getElementById('prompt').value=''),R.setSelected('',!1)})},setupUIButtonEventHandlers:()=>{document.getElementById('send').addEventListener('click',t=>{if(t.preventDefault(),t.stopPropagation(),T){var o=!1;if(S){var n=e.existsCookie(d.chat_prompt)?e.readCookie(d.chat_prompt):{};z=Object.values(n)}if(0===O.value.length?(prompt=ne.replace(/\s+$/g,''),L.debug("\nsendButton, use default prompt: "+prompt)):prompt=O.value.replace(/\s+$/g,''),m=z.indexOf(prompt),(C=-1!==m)&&(x='\n'+`sendButton, prompt: "${prompt}"\n`+`already exists in history at index: ${m}`,L.debug(x)),z.length!==I||!H||C||o||(z.reverse(),O.value.length>0?A=O.value.replace(/\s+$/g,''):0===O.value.length&&(A=ne.replace(/\s+$/g,''),L.debug("\nsendButton, use default prompt:\n"+A)),L.debug("\nsendButton, update item in history:\n"+z[0]),z[0]=A,L.debug("\nsendButton, add new item to history:\n"+z[0]),o=!0),z.length<I&&!C&&!o&&(O.value.length>0?A=O.value.replace(/\s+$/g,''):0===O.value.length&&(A=ne.replace(/\s+$/g,''),L.debug("\nsendButton, use default prompt:\n"+A)),L.debug("\nsendButton, add new item to history:\n"+A),z.push(A),o=!0),z.length>0){var s=0;z.forEach(e=>{prompt=e.replace(/\s+$/g,''),z[s]=prompt,s++}),L.debug("\nsendButton, cleaned history for trailing whitespaces")}if(z.length>1){var a=z.length,i=[...new Set(z)];a>(z=i).length&&L.debug("\nsendButton, removed duplicates from history array: "+(a-z.length)+' element|s')}var l,m=1,u=[],_={};z.forEach(e=>{l='<span id="opt_'+oe.prompt_history_id+'_'+m+"\" class=\"ss-option-delete\"><i class=\"mdib mdib-close mdib-16px ml-1 mr-2\"></i></span>"+e,_={text:e,html:l,display:!0,selected:!1,disabled:!1},u.push(_),m++}),R.setData(u),z.length>0&&$("#prompt_history_container").show(),S&&(L.debug("\nsendButton, save prompt history to cookie"),e.removeCookie({name:d.chat_prompt,domain:p,secure:c}),e.writeCookie({name:d.chat_prompt,data:z,secure:c}))}document.getElementById('md_result').innerHTML='',$("#result").hide(),$("#spinner").show(),r()}),document.getElementById('reset').addEventListener('click',e=>{e.preventDefault(),e.stopPropagation(),L.debug("\nresetButton, clear input prompt|response"),document.getElementById("prompt").value='',document.getElementById("response").value='',$("#spinner").hide(),$("#response").hide()}),document.getElementById('clear').addEventListener('click',t=>{t.preventDefault(),t.stopPropagation(),W=!1,$('#clearHistory').modal('show');document.getElementById('clearHistory');const o=document.getElementById('accecptClearHistory'),n=document.getElementById('dismissClearHistory');o.addEventListener('click',t=>{W=!1,t.preventDefault(),t.stopPropagation(),W||(L.warn("\nresetButton, perform clearHistory"),W=!0),z=[],S&&(e.removeCookie({name:d.chat_prompt,domain:p,secure:c}),e.writeCookie({name:d.chat_prompt,data:{},secure:c})),$("#prompt_history_container").hide()}),n.addEventListener('click',e=>{e.preventDefault(),e.stopPropagation(),L.debug("\nresetButton, skipped clearHistory")})})},messageHandler:(e,t)=>{var o=JSON.stringify(t,undefined,2);return x="\nreceived message from "+e+': '+o,L.debug(x),'command'===t.type&&'module_initialized'===t.action&&L.info('\n'+t.text),!0},setState:e=>{w.state=e},getState:()=>w.state}})(j1,window);



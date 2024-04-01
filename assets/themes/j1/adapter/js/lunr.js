

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/lunr.js
 # J1 Adapter for J1 Lunr
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023, 2024 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2024-04-01 01:16:05 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.lunr=((e,t)=>{function s(e){var t=1;e.forEach(()=>{var e='opt_search_history_'+t,s=document.getElementById(e),r=setInterval(()=>{0!==$(s).length&&(v.debug("\nadd eventListener to: "+e),s.addEventListener('click',a),clearInterval(r))},10);t++})}function a(t){var s,a,r,n=t.currentTarget.nextSibling.data,o=d.getData(),i=[],l=e.existsCookie(g.search_prompt)?e.readCookie(g.search_prompt):{};t.preventDefault(),t.stopPropagation(),s=-1;for(var c=0;c<o.length;c++)if(o[c].text===n){s=c;break}-1!==s&&(delete o[s],r=Object.values(o),d.setData(r)),s=-1,i=Object.values(l);for(c=0;c<i.length;c++)if(i[c]===n){s=c;break}if(-1!==s){if(delete i[s],(a=Object.values(i)).length>1){var h=[...new Set(a)];a=Object.values(h)}C&&(v.debug("\nsave search history to cookie"),e.removeCookie({name:g.search_prompt,domain:u,secure:_}),a.length>0?e.writeCookie({name:g.search_prompt,data:a,secure:_}):(e.writeCookie({name:g.search_prompt,data:{},secure:_}),v.info("\nspanElementEventListener, hide prompt history on last element"),$("#search_history_select_wrapper").hide()))}v.info("\nspanElementEventListener, option deleted:\n"+n),d.close()}var r,n,o,i,l,d,c,h,p,m,u,_,g,y,v,b,f,x,w,k,S,E,I,C,j,O,B,D='search_history_select_wrapper',q=[],z={};return{init:s=>{$.extend({module_name:'j1.adapter.lunr',generated:'2024-04-01 01:16:05 +0200'},s);r=$.extend({},{enabled:!1,placement:"navbar",target:"_blank",rebuild:!1,full_index:!0,stopwords:"/assets/themes/j1/modules/lunr/stopwords/en.txt",stopwords_locale:"en",strip_index_html:!1,min_length:3,date_format:"mmm dd, yyyy",module_dir:"/assets/themes/j1/modules/lunr/js",index_dir:"/assets/data",index_name:"lunr-index.json",index_file:"/assets/data/lunr-index.json",search_input:"#search-query",results:"#search-results",template:"#search-results-template",titleMsg:null,emptyMsg:null,topsearch:{enabled:!1,search_history_max:30,search_history_enabled:!1,search_history_from_cookie:!0,allow_history_updates_on_max:!0,search_history_id:"search_history",search_history_wrapper_id:"search_history_select_wrapper",container_id:"search_modal",type:"quicksearch",icon_family:"mdib",icon_color:"var(--bs-white)",icon_size:"mdib-2x",search_icon:"magnify",clear_icon:"format-clear",input_color:"rgba(0, 0, 0, 0.7)",background_color:"transparent",placeholder:"Your search expression",search_heading_lead:"",result_heading_lead:""}}),n=$.extend({},{enabled:!0,topsearch:{enabled:!0,search_history_max:10,search_history_enabled:!0}}),o=$.extend(!0,{},r,n),i=o.topsearch,y=e.adapter.lunr,v=log4javascript.getLogger('j1.adapter.lunr'),g=e.getCookieNames(),p=new liteURL(t.location.href),p.origin,m=p.hostname,u=m.substring(m.lastIndexOf('.',m.lastIndexOf('.')-1)+1),_=!!p.protocol.includes('https'),S=!0===i.search_history_enabled,C=!0===i.search_history_from_cookie;var a=setInterval(()=>{if(!!Object.keys(e.adapter.slimSelect.select).length){if(v.debug("\ninitializing select data"),S&&C){l=document.getElementById('search_history'),d=l.slim,k=i.search_history_max,I=i.allow_history_updates_on_max,v.debug("\nread search history from cookie");var t=[],s={};if(z=e.existsCookie(g.search_prompt)?e.readCookie(g.search_prompt):{},(q=Object.values(z)).length>1){var r=q.length,n=[...new Set(q)];r>(q=n).length&&v.debug("\nremoved duplicates from history array: "+(r-q.length)+' element|s')}var o,c=1;t=[],s={};q.forEach(e=>{o='<span id="opt_'+i.search_history_id+'_'+c+"\" class=\"ss-option-delete\"><i class=\"mdib mdib-close mdib-16px ml-1 mr-2\"></i></span>"+e,s={text:e,html:o,display:!0,selected:!1,disabled:!1},t.push(s),c++}),d.setData(t),y.setupSlimSelectEventHandlers()}clearInterval(a)}},10),c=setInterval(()=>{if('finished'===e.getState()){if(O=Date.now(),(f=document.getElementById('search-query')).value='',y.setState('started'),v.debug("\nset module state to: "+y.getState()),v.info("\ninitializing module: started"),v.info("\ninitializing search engine"),$(o.search_input).lunrSearch({index_file:o.index_file,results:o.results,template:o.template,titleMsg:o.titleMsg,emptyMsg:o.emptyMsg,onResultShown:function(){$('#send-to-history').show()}}),v.info("\ninitializing UI event handlers (modal)"),y.uiEventHandler(),S&&C){v.info("\ninitializing search history from cookie"),k=i.search_history_max,E=i.allow_history_duplicates,I=i.allow_history_updates_on_max,v.debug("\nread search history from cookie");if(z=e.existsCookie(g.search_prompt)?e.readCookie(g.search_prompt):{},(q=Object.values(z)).length?$("#search_history_select_wrapper").show():$("#search_history_select_wrapper").hide(),!E&&q.length>1){var t=q.length,s=[...new Set(q)];t>(q=s).length&&v.debug("\nremoved duplicates from history array: "+(t-q.length)+' element|s')}}y.setState('finished'),v.debug("\nstate: "+y.getState()),v.info("\ninitializing module: finished"),B=Date.now(),v.info("\nmodule initializing time: "+(B-O)+'ms'),clearInterval(c)}},10)},uiEventHandler:()=>{const t="#searchModal",s=document.querySelector('input');var a=[],r={};s.addEventListener("input",e=>{var t=e.target.value,s='block'!==$('#clear-topsearch').css("display");t.length>=3&&s&&$('#clear-topsearch').show()}),$(t).on('shown.bs.modal',()=>{if(v.debug("\nsearch modal shown"),S){x=document.getElementById(D),w='#'+x.id,l=document.getElementById('search_history'),d=l.slim;var t=e.existsCookie(g.search_prompt)?e.readCookie(g.search_prompt):{};q=Object.values(t);var s,a=1,r=[],n={};q.forEach(e=>{s='<span id="opt_'+i.search_history_id+'_'+a+"\" class=\"ss-option-delete\"><i class=\"mdib mdib-close mdib-16px ml-1 mr-2\"></i></span>"+e,n={text:e,html:s,display:!0,selected:!1,disabled:!1},r.push(n),a++}),d.setData(r),q.length>0&&(v.debug("\nshow search history on id: "+w),$(w).show())}}),$(t).on('hidden.bs.modal',()=>{if(v.debug("\nsearch modal hidden"),S){var e=$('#search-query').val();r={text:e,display:!0,selected:!1,disabled:!1},a.push(r),d.setData(a)}}),$('#send-to-history').on('click',()=>{event.preventDefault(),event.stopPropagation();$('#search-query').val();var t=!1;if(C){var s=e.existsCookie(g.search_prompt)?e.readCookie(g.search_prompt):{};q=Object.values(s)}if(prompt=f.value.replace(/\s+$/g,''),l=q.indexOf(prompt),(h=-1!==l)&&(b='\n'+`sendButton, prompt: "${prompt}"\n`+`already exists in history at index: ${l}`,v.debug(b)),q.length!==k||!I||h||t||(q.reverse(),f.value.length>0&&(c=f.value.replace(/\s+$/g,'')),v.debug("\nsendButton, update item in history:\n"+q[0]),q[0]=c,v.debug("\nsendButton, add new item to history:\n"+q[0]),t=!0),q.length<k&&!h&&!t&&(f.value.length>0&&(c=f.value.replace(/\s+$/g,'')),v.debug("\nsendButton, add new item to history:\n"+c),q.push(c),t=!0),q.length>0){var a=0;q.forEach(e=>{e.length&&(prompt=e.replace(/\s+$/g,''),q[a]=prompt),a++}),v.debug("\nsendButton, cleaned history for trailing whitespaces")}if(q.length>1){var r=q.length,n=[...new Set(q)];r>(q=n).length&&v.debug("\nsendButton, removed duplicates from history array: "+(r-q.length)+' element|s')}var o,l=1,p=[],m={};q.forEach(e=>{o='<span id="opt_'+i.search_history_id+'_'+l+"\" class=\"ss-option-delete\"><i class=\"mdib mdib-close mdib-16px ml-1 mr-2\"></i></span>"+e,m={text:e,html:o,display:!0,selected:!1,disabled:!1},p.push(m),l++}),d.setData(p),q.length>0&&$("#search_history_select_wrapper").show(),C&&(v.debug("\nsendButton, save prompt history to cookie"),e.removeCookie({name:g.search_prompt,domain:u,secure:_}),e.writeCookie({name:g.search_prompt,data:q,secure:_}))}),$('#clear-topsearch').on('click',()=>{event.preventDefault(),event.stopPropagation(),$('#search-query').val(''),$('#search-results').html(''),$('#search-results').hide(),$('#send-to-history').hide(),$('#clear-topsearch').hide()})},setupSlimSelectEventHandlers:()=>{var t,a=document.getElementById('search_history').slim;a.events.beforeOpen=(()=>{const t=a.getData();if(j=!1,v.debug("\nslimSelect.beforeOpen, processing: started"),C){var r=e.existsCookie(g.search_prompt)?e.readCookie(g.search_prompt):{};q=Object.values(r);var n,o=1,l=[],d={};q.forEach(e=>{n='<span id="opt_'+i.search_history_id+'_'+o+"\" class=\"ss-option-delete\"><i class=\"mdib mdib-close mdib-16px ml-1 mr-2\"></i></span>"+e,d={text:e,html:n,display:!0,selected:!1,disabled:!1},l.push(d),o++}),a.setData(l)}t.length&&(v.debug("\nslimSelect.beforeOpen, number of eventListeners to process: #"+t.length),s(t));var c=1;t.forEach(()=>{var e='opt_prompt_history_'+c,s=document.getElementById(e),a=setInterval(()=>{0!==$(s).length&&c===t.length&&(j=!0,v.debug("\nslimSelect.beforeOpen, all eventListeners ready")),j?clearInterval(a):c++},10)});var h=setInterval(()=>{j&&(v.debug("\nslimSelect.beforeOpen, processing: finished"),clearInterval(h))},10)}),a.events.afterClose=(()=>{const e=a.getSelected();e.length?(t=e[0],document.getElementById('search-query').value=t,$('#clear-topsearch').show(),v.debug("\nslimSelect.afterClose, selection from history: "+t)):(document.getElementById('search-query').value='',$('#search-results').html(''),$('#search-results').hide(),$('#send-to-history').hide(),$('#clear-topsearch').hide(),v.debug("\nslimSelect.afterClose, selection from history: empty")),a.setSelected('',!1)})},messageHandler:(e,t)=>{var s=JSON.stringify(t,undefined,2);return b="\nreceived message from "+e+': '+s,v.debug(b),'command'===t.type&&'module_initialized'===t.action&&v.info('\n'+t.text),!0},setState:e=>{y.state=e},getState:()=>y.state}})(j1,window);





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
 #  Adapter generated: 2024-01-15 03:15:22 +0100
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.lunr=function(e){var t,a,n,i,l,s;return{init:function(s){$.extend({module_name:'j1.adapter.lunr',generated:'2024-01-15 03:15:22 +0100'},s);i=e.adapter.lunr,l=log4javascript.getLogger('j1.adapter.lunr'),t=$.extend({},{enabled:!1,placement:"navbar",target:"_blank",rebuild:!1,full_index:!0,stopwords:"/assets/themes/j1/modules/lunr/stopwords/en.txt",stopwords_locale:"en",strip_index_html:!1,min_length:3,date_format:"mmm dd, yyyy",module_dir:"/assets/themes/j1/modules/lunr/js",index_dir:"/assets/data",index_name:"lunr-index.json",index_file:"/assets/data/lunr-index.json",search_input:"#search-query",results:"#search-results",template:"#search-results-template",titleMsg:null,emptyMsg:null,topsearch:{enabled:!1,container_id:"search_modal",type:"quicksearch",icon_family:"mdib",icon_color:"#FFFFFF",icon_size:"mdib-2x",search_icon:"magnify",close_icon:"close",clear_icon:"format-clear",input_color:"rgba(0, 0, 0, 0.7)",background_color:"transparent",placeholder:"Your search expression",search_heading_lead:"",result_heading_lead:""}}),a=$.extend({},{enabled:!0,topsearch:{enabled:!0}}),n=$.extend(!0,{},t,a);var r=setInterval(function(){'finished'==e.getState()&&(i.setState('started'),l.debug("\nstate: "+i.getState()),l.info("\nmodule is being initialized"),$(n.search_input).lunrSearch({index_file:n.index_file,results:n.results,template:n.template,titleMsg:n.titleMsg,emptyMsg:n.emptyMsg}),i.setState('finished'),l.debug("\nstate: "+i.getState()),l.info("\ninitializing module finished"),clearInterval(r))},10);i.eventHandler()},loadDialog:function(){l.info("\ncreate|append search modal, id: bratze"),i.modal=document.createElement('div'),i.modal.id="topInfoModalContainer",document.body.append(i.modal),i.modalScript=document.createElement('script'),i.modalScript.type='text/mustache',i.modalScript.id='search-results-template',i.modalScript.text="<ul style=\"list-style: none; margin-left: .5rem; margin-right: 4.25rem\">\n",i.modalScript.text+="{{#docs}}\n",i.modalScript.text+="  <li>\n",i.modalScript.text+="    <h4 class=\"result-item\"> <a class=\"link-no-decoration\" href=\"{{url}}\" target=\"_blank\">{{title}} \xb7 {{tagline}}</a> </h4>\n",i.modalScript.text+="    <p class=\"result-item-text small text-muted mt-2 mb-0\"> <i class=\"mdib mdib-calendar-blank mdib-18px mr-1\"></i>{{displaydate}} </p>\n",i.modalScript.text+="    <p class=\"result-item-text\">{{description}}</p>\n",i.modalScript.text+="      <i class=\"mdib mdib-tag-text-outline mdib-18px mr-1\"></i><span class=\"sr-categories\">{{#categories}} {{.}} \xb7 {{/categories}}</span>\n",i.modalScript.text+="      <i class=\"mdib mdib-tag mdib-18px mr-1 ml-2\"></i><span class=\"sr-tags\">{{#tags}} {{.}} \xb7 {{/tags}}</span>\n",i.modalScript.text+="    </p>\n",i.modalScript.text+="  </li>\n",i.modalScript.text+="{{/docs}}\n",i.modalScript.text+="<ul>\n",document.body.append(i.modalScript)},eventHandler:function(){$('#clear-topsearch').on('click',function(){$(this).addClass('d-none').prevAll(':input').val(''),$('#search-results').hide(),$('#search-results').html('')})},messageHandler:function(e,t){var a=JSON.stringify(t,undefined,2);return s="\nreceived message from "+e+': '+a,l.debug(s),'command'===t.type&&'module_initialized'===t.action&&l.info('\n'+t.text),!0},setState:function(e){i.state=e},getState:function(){return i.state}}}(j1,window);





  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/lunr.js
 # J1 Adapter for J1 Lunr
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-01-01 16:45:48 +0100
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.lunr=function(t){var e,a,n,i={};return{init:function(n){$.extend({module_name:'j1.adapter.lunr',generated:'2023-01-01 16:45:48 +0100'},n);e=t.adapter.lunr,a=log4javascript.getLogger('j1.adapter.lunr'),i=$.extend({},{enabled:!0,placement:"navbar",target:"_blank",rebuild:!0,full_index:!1,stopwords:"/assets/themes/j1/modules/lunr/stopwords/en.txt",stopwords_locale:"en",strip_index_html:!1,min_length:3,date_format:"mmm dd, yyyy",module_dir:"/assets/themes/j1/modules/lunr/js",index_dir:"/assets/data",index_name:"lunr-index.json",index_file:"/assets/data/lunr-index.json",search_input:"#search-query",results:"#search-results",template:"#search-results-template",titleMsg:"",emptyMsg:"",topsearch:{enabled:!0}});var s=setInterval(function(){'finished'==t.getState()&&(e.setState('started'),a.debug("\nstate: "+e.getState()),a.info("\nmodule is being initialized"),$(i.search_input).lunrSearch({index_file:i.index_file,results:i.results,template:i.template,titleMsg:i.titleMsg,emptyMsg:i.emptyMsg}),e.setState('finished'),a.debug("\nstate: "+e.getState()),a.info("\ninitializing module finished"),clearInterval(s))},25);e.eventHandler()},loadDialog:function(){a.info("\ncreate|append search modal, id: bratze"),e.modal=document.createElement('div'),e.modal.id="topInfoModalContainer",document.body.append(e.modal),e.modalScript=document.createElement('script'),e.modalScript.type='text/mustache',e.modalScript.id='search-results-template',e.modalScript.text="<ul style=\"list-style: none; margin-left: .5rem; margin-right: 4.25rem\">\n",e.modalScript.text+="{{#docs}}\n",e.modalScript.text+="  <li>\n",e.modalScript.text+="    <h4 class=\"result-item\"> <a class=\"link-no-decoration\" href=\"{{url}}\" target=\"_blank\">{{title}} \xb7 {{tagline}}</a> </h4>\n",e.modalScript.text+="    <p class=\"result-item-text small text-muted mt-2 mb-0\"> <i class=\"mdi mdi-calendar-blank mdi-18px mr-1\"></i>{{displaydate}} </p>\n",e.modalScript.text+="    <p class=\"result-item-text\">{{description}}</p>\n",e.modalScript.text+="      <i class=\"mdi mdi-tag-text-outline mdi-18px mr-1\"></i><span class=\"sr-categories\">{{#categories}} {{.}} \xb7 {{/categories}}</span>\n",e.modalScript.text+="      <i class=\"mdi mdi-tag mdi-18px mr-1 ml-2\"></i><span class=\"sr-tags\">{{#tags}} {{.}} \xb7 {{/tags}}</span>\n",e.modalScript.text+="    </p>\n",e.modalScript.text+="  </li>\n",e.modalScript.text+="{{/docs}}\n",e.modalScript.text+="<ul>\n",document.body.append(e.modalScript)},eventHandler:function(){$('#clear-topsearch').on('click',function(){$(this).addClass('d-none').prevAll(':input').val(''),$('#search-results').hide(),$('#search-results').html('')})},messageHandler:function(t,e){var i=JSON.stringify(e,undefined,2);return n="\nreceived message from "+t+': '+i,a.debug(n),'command'===e.type&&'module_initialized'===e.action&&a.info('\n'+e.text),!0},setState:function(t){e.state=t},getState:function(){return e.state}}}(j1,window);



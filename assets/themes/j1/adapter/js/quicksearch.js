

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/quicksearch.js
 # J1 Adapter for J1 QuickSearch (Lunr)
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2021 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see https://jekyll.one
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2021-04-19 22:46:09 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.quicksearch=function(e){var t,s,a,n={};return{init:function(a){t=e.adapter.quicksearch,s=log4javascript.getLogger('j1.adapter.quicksearch'),t.setState('started'),s.info('state: '+t.getState()),s.info('module is being initialized');$.extend({module_name:'j1.adapter.quicksearch',generated:'2021-04-19 22:46:09 +0000'},a);n=$.extend({},{enabled:!0,placement:"navbar",target:"_blank",rebuild:!1,full_index:!1,excludes:["/assets/*","/apps/*","/log/*","/node_modules/*","/*\\.htm*/"],stopwords:"/assets/themes/j1/modules/lunrSearch/stopwords/en.txt",stopwords_locale:"en",strip_index_html:!1,strip_categories:["pages","posts","series","public","featured","wikipedia"],min_length:3,date_format:"mmm dd, yyyy",module_dir:"/assets/themes/j1/modules/lunrSearch/js",index_dir:"/assets/data",index_name:"lunr-index.json",index_file:"/assets/data/lunr-index.json",search_input:"#search-query",results:"#search-results",template:"#search-results-template",titleMsg:"",emptyMsg:""});var i='module is being initialized';s.info(i);var r=setInterval(function(){'finished'==e.getState()&&($(n.search_input).lunrSearch({index_file:n.index_file,results:n.results,template:n.template,titleMsg:n.titleMsg,emptyMsg:n.emptyMsg}),t.setState('finished'),s.info('state: '+t.getState()),clearInterval(r))},25);t.eventHandler()},eventHandler:function(){$('#clear-topsearch').on('click',function(){$(this).addClass('d-none').prevAll(':input').val(''),$('#search-results').hide(),$('#search-results').html('')})},messageHandler:function(e,t){var n=JSON.stringify(t,undefined,2);return a='received message from '+e+': '+n,s.debug(a),'command'===t.type&&'module_initialized'===t.action&&s.info(t.text),!0},setState:function(e){t.state=e},getState:function(){return t.state}}}(j1,window);



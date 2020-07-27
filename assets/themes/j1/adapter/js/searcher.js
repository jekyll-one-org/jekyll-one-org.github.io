

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/searcher.js
 # JS Adapter for J1 Searcher (SimpleJekyllSearch)
 #
 # Product/Info:
 # https://jekyll.one
 # https://github.com/christian-fei/Simple-Jekyll-Search
 #
 # Copyright (C) 2020 Juergen Adams
 # Copyright (C) 2015 Christian Fei
 #
 # J1 Template is licensed under the MIT License.
 # For details, see https://jekyll.one
 # SimpleJekyllSearch is licensed under the MIT License.
 # For details, see https://github.com/christian-fei/Simple-Jekyll-Search
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2020-07-27 20:04:15 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.searcher=function(e){var t,s,a,n={};return{init:function(a){t=e.adapter.searcher,s=log4javascript.getLogger('j1.adapter.searcher'),t.setState('pending'),s.info('state: '+t.getState()),s.info('Module is being started');var i=$.extend({module_name:'j1.adapter.searcher',generated:'2020-07-27 20:04:15 +0200'},a);if(n=$.extend({},{enabled:!0,placement:"navbar",target:"_blank",search_input:"jss-input",results_output:"jss-panel",results_container:"jss-results",index_data:"/assets/data/search.json",result_limit:1e3,result_truncate:100,no_results_text:"The search has no results",min_search_item_len:3,search_fuzzy:!1,search_exlude:["Impress","License"],result_template:"<li>\n  <div>\n    <h4 class=\"result-item\"> <a href=\"{url}\" target=\"{target}\">{title} - {tagline}</a> </h4>\n    <p class=\"result-group-item-text\">{excerpt}</p>\n    <p class=\"result-group-item-text small text-muted mb-3\">\n      <i class=\"mdi mdi-calendar-blank mdi-18px mr-1\"></i>{date}\n      <i class=\"mdi mdi-tag mdi-18px ml-2 mr-1\"></i>{tags}\n    </p>\n  </div>\n</li>\n"}),void 0!==i&&(n=e.mergeData(n,i)),n.enabled){t.setState('started'),s.info('state: '+t.getState()),s.info('Module is being initialized');SimpleJekyllSearch({searchInput:document.getElementById(n.search_input),resultsOutput:document.getElementById(n.results_output),resultsContainer:document.getElementById(n.results_container),json:n.index_data,searchResultTemplate:n.result_template,results_output:n.results_output,limit:n.result_limit,minSearchItemLen:n.min_search_item_len,fuzzy:n.search_fuzzy,exclude:n.search_exlude,noResultsText:n.no_results_text});t.setState('finished'),s.info('state: '+t.getState()),s.info('module initialized successfully')}else t.setState('finished'),s.info('state: '+t.getState()),s.info('module disabled');return!0},messageHandler:function(e,t){var n=JSON.stringify(t,undefined,2);return a='received message from '+e+': '+n,s.info(a),'command'===t.type&&'module_initialized'===t.action&&s.info(t.text),!0},setState:function(e){t.state=e},getState:function(){return t.state}}}(j1,window);


